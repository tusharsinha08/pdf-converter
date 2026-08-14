"use client";

import { FaCheckCircle, FaDownload, FaFileWord } from "react-icons/fa";

interface DownloadResultProps {
    downloadUrl: string;
    filename: string;
    fileType?: string;
    convertedFileType: string;
}

export default function DownloadResult({
    downloadUrl,
    filename,
    fileType,
    convertedFileType
}: DownloadResultProps) {
    return (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <FaCheckCircle className="mx-auto text-4xl text-green-500" />

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Conversion Complete!
            </h3>

            <p className="mt-2 text-sm text-slate-600">
                Your {fileType} has been successfully converted to {convertedFileType}.
            </p>

            <a
                href={downloadUrl}
                download={filename}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
                <FaDownload />
                Download Your File
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                <FaFileWord className="text-blue-600" />
                <span className="max-w-xs truncate">{filename}</span>
            </div>
        </div>
    );
}