import CloudConvert from "cloudconvert";
import { NextResponse } from "next/server";

const cloudConvert = new CloudConvert(
    process.env.CLOUDCONVERT_API_KEY!
);

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: "No PDF file provided." },
                { status: 400 }
            );
        }

        // Only PDF files are allowed
        if (
            file.type !== "application/pdf" &&
            !file.name.toLowerCase().endsWith(".pdf")
        ) {
            return NextResponse.json(
                { error: "Only PDF files are allowed." },
                { status: 400 }
            );
        }

        // 100 MB limit
        if (file.size > 100 * 1024 * 1024) {
            return NextResponse.json(
                { error: "File size must be less than 100 MB." },
                { status: 400 }
            );
        }

        // Convert uploaded File to Buffer
        const buffer = Buffer.from(
            await file.arrayBuffer()
        );

        /*
         * Create CloudConvert job
         *
         * import/upload
         *       ↓
         * optimize PDF
         *       ↓
         * export URL
         */
        const job = await cloudConvert.jobs.create({
            tasks: {
                "upload-file": {
                    operation: "import/upload",
                },

                "compress-file": {
                    operation: "optimize",
                    input: "upload-file",
                    input_format: "pdf",

                    // High-quality PDF compression
                    profile: "web",
                },

                "export-file": {
                    operation: "export/url",
                    input: "compress-file",
                },
            },
        });

        // Find upload task
        const uploadTask = job.tasks.find(
            (task) => task.name === "upload-file"
        );

        if (!uploadTask) {
            throw new Error(
                "Upload task was not created."
            );
        }

        // Upload PDF to CloudConvert
        await cloudConvert.tasks.upload(
            uploadTask,
            buffer,
            file.name
        );

        // Wait for CloudConvert job
        const completedJob =
            await cloudConvert.jobs.wait(job.id);

        // Find completed export task
        const exportTask = completedJob.tasks.find(
            (task) =>
                task.name === "export-file" &&
                task.status === "finished"
        );

        if (!exportTask) {
            const failedTask =
                completedJob.tasks.find(
                    (task) => task.status === "error"
                );

            throw new Error(
                failedTask?.message ||
                failedTask?.code ||
                "PDF compression failed."
            );
        }

        // Get compressed file
        const resultFile =
            exportTask.result?.files?.[0];

        if (!resultFile) {
            throw new Error(
                "Compressed PDF URL was not generated."
            );
        }

        return NextResponse.json({
            success: true,
            downloadUrl: resultFile.url,

            // Return original filename
            filename: file.name,

            // Optional information
            originalSize: file.size,
        });

    } catch (error) {
        console.error(
            "PDF compression error:",
            error
        );

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown compression error.",
            },
            {
                status: 500,
            }
        );
    }
}