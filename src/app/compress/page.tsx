"use client";

import { useState } from "react";

import FileUpload from "@/components/upload/FileUpload";
import SelectedFile from "@/components/upload/SelectedFile";
import DownloadResult from "@/components/converter/DownloadResult";

type CompressionQuality = "low" | "medium" | "high";

export default function CompressPage() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const [quality, setQuality] =
        useState<CompressionQuality>("high");

    const [downloadUrl, setDownloadUrl] =
        useState<string | null>(null);

    const [downloadFilename, setDownloadFilename] =
        useState<string>("");

    const [originalSize, setOriginalSize] =
        useState<number | null>(null);

    const [compressedSize, setCompressedSize] =
        useState<number | null>(null);

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes";

        const units = [
            "Bytes",
            "KB",
            "MB",
            "GB",
        ];

        const index = Math.floor(
            Math.log(bytes) / Math.log(1024)
        );

        return `${(
            bytes / Math.pow(1024, index)
        ).toFixed(2)} ${units[index]}`;
    };

    const calculateSavedPercentage = () => {
        if (
            !originalSize ||
            !compressedSize ||
            originalSize <= 0
        ) {
            return 0;
        }

        return Math.max(
            0,
            Math.round(
                ((originalSize - compressedSize) /
                    originalSize) *
                    100
            )
        );
    };

    const handleCompress = async () => {
        if (!file) return;

        setLoading(true);

        // Clear previous result
        setDownloadUrl(null);
        setDownloadFilename("");
        setOriginalSize(null);
        setCompressedSize(null);

        try {
            const formData = new FormData();

            formData.append("file", file);

            // Send selected compression quality
            formData.append("quality", quality);

            const response = await fetch(
                "/api/compress",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                        "Failed to compress PDF"
                );
            }

            console.log(
                "Compression successful:",
                data
            );

            if (!data.downloadUrl) {
                throw new Error(
                    "Download URL is missing."
                );
            }

            const originalName =
                data.filename || file.name;

            const nameWithoutExtension =
                originalName.replace(
                    /\.[^/.]+$/,
                    ""
                );

            const compressedFilename =
                `compressed - ${nameWithoutExtension}.pdf`;

            setDownloadUrl(data.downloadUrl);
            setDownloadFilename(
                compressedFilename
            );

            // File sizes
            setOriginalSize(
                data.originalSize || file.size
            );

            setCompressedSize(
                data.compressedSize || null
            );

        } catch (error) {
            console.error(
                "Error compressing PDF:",
                error
            );

        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setDownloadUrl(null);
        setDownloadFilename("");
        setOriginalSize(null);
        setCompressedSize(null);
    };

    return (
        <main className="min-h-screen bg-gray-50">

            {/* Header */}
            <section className="px-6 pb-10 pt-20">
                <div className="mx-auto max-w-4xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                        PDF Compressor
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Compress PDF
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Reduce the size of your PDF while
                        maintaining high quality. Upload
                        your PDF, choose your compression
                        level, and download the compressed
                        version.
                    </p>

                </div>
            </section>

            {/* Upload & Compress */}
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

                                {/* Selected PDF */}
                                <SelectedFile
                                    file={file}
                                    onRemove={
                                        handleRemoveFile
                                    }
                                />

                                {/* Compression Quality */}
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                    <div className="mb-4">
                                        <h3 className="font-semibold text-slate-900">
                                            Compression Quality
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Choose the balance
                                            between file size
                                            and PDF quality.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">

                                        {/* Low */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setQuality(
                                                    "low"
                                                )
                                            }
                                            disabled={loading}
                                            className={`rounded-xl border px-3 py-3 text-center transition ${
                                                quality ===
                                                "low"
                                                    ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100"
                                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                                            }`}
                                        >
                                            <div className="font-semibold">
                                                Low
                                            </div>

                                            <div className="mt-1 text-xs">
                                                Smaller size
                                            </div>
                                        </button>

                                        {/* Medium */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setQuality(
                                                    "medium"
                                                )
                                            }
                                            disabled={loading}
                                            className={`rounded-xl border px-3 py-3 text-center transition ${
                                                quality ===
                                                "medium"
                                                    ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100"
                                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                                            }`}
                                        >
                                            <div className="font-semibold">
                                                Medium
                                            </div>

                                            <div className="mt-1 text-xs">
                                                Balanced
                                            </div>
                                        </button>

                                        {/* High */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setQuality(
                                                    "high"
                                                )
                                            }
                                            disabled={loading}
                                            className={`relative rounded-xl border px-3 py-3 text-center transition ${
                                                quality ===
                                                "high"
                                                    ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100"
                                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                                            }`}
                                        >
                                            <div className="font-semibold">
                                                High
                                            </div>

                                            <div className="mt-1 text-xs">
                                                Best quality
                                            </div>

                                            {/* Recommended */}
                                            <span className="absolute -right-2 -top-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                                                Recommended
                                            </span>
                                        </button>

                                    </div>
                                </div>

                                {/* Compress Button */}
                                {!downloadUrl && (
                                    <button
                                        onClick={
                                            handleCompress
                                        }
                                        disabled={
                                            !file ||
                                            loading
                                        }
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {loading
                                            ? "Compressing..."
                                            : "Compress PDF"}
                                    </button>
                                )}

                                {/* Compression Result */}
                                {downloadUrl &&
                                    originalSize &&
                                    compressedSize && (
                                        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

                                            <div className="mb-4">
                                                <h3 className="font-semibold text-green-800">
                                                    Compression Complete
                                                </h3>

                                                <p className="mt-1 text-sm text-green-700">
                                                    Your PDF has
                                                    been compressed
                                                    successfully.
                                                </p>
                                            </div>

                                            {/* Size comparison */}
                                            <div className="grid grid-cols-2 gap-3">

                                                <div className="rounded-xl bg-white p-4">
                                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                        Original
                                                    </p>

                                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                                        {formatFileSize(
                                                            originalSize
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="rounded-xl bg-white p-4">
                                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                        Compressed
                                                    </p>

                                                    <p className="mt-1 text-lg font-bold text-green-700">
                                                        {formatFileSize(
                                                            compressedSize
                                                        )}
                                                    </p>
                                                </div>

                                            </div>

                                            {/* Saved percentage */}
                                            <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-4">

                                                <span className="text-sm font-medium text-slate-600">
                                                    Size reduced
                                                </span>

                                                <span className="font-bold text-green-600">
                                                    {calculateSavedPercentage()}%
                                                </span>

                                            </div>

                                        </div>
                                    )}

                                {/* Download Result */}
                                {downloadUrl && (
                                    <DownloadResult
                                        downloadUrl={
                                            downloadUrl
                                        }
                                        filename={
                                            downloadFilename
                                        }
                                        fileType="PDF"
                                        convertedFileType="Compressed PDF"
                                    />
                                )}

                            </div>
                        )}

                    </div>

                    <p className="mt-5 text-center text-sm text-slate-500">
                        🔒 Your PDF is processed securely
                        and is not stored permanently.
                    </p>

                </div>
            </section>

        </main>
    );
}