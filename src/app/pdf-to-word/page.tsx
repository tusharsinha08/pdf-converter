"use client";

import { useState } from "react";

import FileUpload from "@/components/upload/FileUpload";
import SelectedFile from "@/components/upload/SelectedFile";
import ConvertButton from "@/components/converter/ConvertButton";
import DownloadResult from "@/components/converter/DownloadResult";

export default function PdfToWordPage() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
    const [downloadFilename, setDownloadFilename] = useState<string>('')

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);

        try {
            const formData = new FormData()
            formData.append("file", file)

            const response = await fetch("/api/pdf-to-word", {
                method: "POST",
                body: formData,
            });

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to convert PDF"
                )
            }

            console.log("Conversion successful:", data);

            // Make sure download URL exists 
            if (!data.downloadUrl) {
                throw new Error("Download URL is missing.");
            }

            const originalName = data.filename || file.name;

            const nameWithoutExtension = originalName.replace(
                /\.[^/.]+$/,
                ""
            );

            const convertedFilename = `converted - ${nameWithoutExtension}.docx`;


            setDownloadUrl(data.downloadUrl);
            setDownloadFilename(convertedFilename);
        }
        catch (error) {
            console.error("Error converting PDF:", error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="px-6 pb-10 pt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                        PDF Converter
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Convert PDF to Word
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Convert your PDF documents into editable Word files quickly
                        and easily.
                    </p>
                </div>
            </section>

            {/* Upload & Convert */}
            <section className="px-6 pb-12">
                <div className="mx-auto max-w-2xl">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">

                        {!file ? (
                            <FileUpload
                                onFileSelect={setFile}
                                fileType="PDF"
                            />
                        ) : (
                            <div className="space-y-5">
                                <SelectedFile
                                    file={file}
                                    onRemove={() => setFile(null)}
                                />

                                <ConvertButton
                                    onClick={handleConvert}
                                    disabled={!file}
                                    loading={loading}
                                    convertedFileType="Word"
                                />

                                {downloadUrl && (
                                    <DownloadResult
                                        downloadUrl={downloadUrl}
                                        filename={downloadFilename}
                                        fileType="PDF"
                                        convertedFileType="Word"
                                    />
                                )}
                            </div>
                        )}

                    </div>

                    <p className="mt-5 text-center text-sm text-slate-500">
                        🔒 Your files are processed securely and are not stored permanently.
                    </p>
                </div>
            </section>
        </main>
    );
}