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
                { error: "No Excel file provided." },
                { status: 400 }
            );
        }

        // Basic validation
        if (
            file.type !==
            "application/vnd.ms-excel" &&
            file.type !==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
            return NextResponse.json(
                { error: "Only Excel files are allowed." },
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

        const buffer = Buffer.from(await file.arrayBuffer());

        const job = await cloudConvert.jobs.create({
            tasks: {
                "upload-file": {
                    operation: "import/upload",
                },

                "convert-file": {
                    operation: "convert",
                    input: "upload-file",
                    input_format: file.name.toLowerCase().endsWith(".xls")
                        ? "xls"
                        : "xlsx",
                    output_format: "pdf",
                },

                "export-file": {
                    operation: "export/url",
                    input: "convert-file",
                },
            },
        });

        const uploadTask = job.tasks.find(
            (task) => task.name === "upload-file"
        );

        if (!uploadTask) {
            throw new Error("Upload task was not created");
        }

        await cloudConvert.tasks.upload(
            uploadTask,
            buffer,
            file.name
        );

        const completedJob = await cloudConvert.jobs.wait(job.id);

        const exportTask = completedJob.tasks.find(
            (task) =>
                task.name === "export-file" &&
                task.status === "finished"
        );

        if (!exportTask) {
            const failedTask = completedJob.tasks.find(
                (task) => task.status === "error"
            );

            throw new Error(
                failedTask?.message ||
                failedTask?.code ||
                "Conversion failed"
            );
        }

        const resultFile = exportTask.result?.files?.[0];

        if (!resultFile) {
            throw new Error("Converted file URL not generated");
        }

        return NextResponse.json({
            success: true,
            downloadUrl: resultFile.url,
            filename: file.name.replace(
                /\.(xls|xlsx)$/i,
                ".pdf"
            ),
        });
    } catch (error) {
        console.error("Excel to PDF conversion error:", error);

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown conversion error",
            },
            { status: 500 }
        );
    }
}