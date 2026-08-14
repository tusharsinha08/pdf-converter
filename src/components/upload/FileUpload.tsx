"use client";

import { ChangeEvent } from "react";
import { FaFilePdf, FaUpload } from "react-icons/fa";

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    fileType: string;
}

export default function FileUpload({
    onFileSelect,
    fileType,
}: FileUploadProps) {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];

        if (selectedFile) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
                <FaFilePdf className="text-4xl text-amber-600" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Select your {fileType} file
            </h3>

            <p className="mt-2 text-sm text-slate-500">
                Choose a {fileType} file from your computer
            </p>

            <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">
                <FaUpload />

                Select {fileType} file

                <input
                    type="file"
                    accept={fileType === "PDF" ? ".pdf,application/pdf" : ".doc,.docx"}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>

            <p className="mt-4 text-xs text-slate-400">
                {fileType} files only • Maximum 100 MB
            </p>
        </div>
    );
}