"use client";

import { ChangeEvent } from "react";
import { FaUpload } from "react-icons/fa";

import FileTypeIcon, {
    getFileTypeConfig,
} from "./FileTypeIcon";

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    fileType: string;
}

export default function FileUpload({
    onFileSelect,
    fileType,
}: FileUploadProps) {
    const config = getFileTypeConfig(fileType);

    const handleFileChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = event.target.files?.[0];

        if (selectedFile) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">

            {/* File Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50">
                <FileTypeIcon fileType={fileType} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Select your {fileType} file
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-slate-500">
                Choose a {fileType} file from your computer
            </p>

            {/* Select Button */}
            <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">

                <FaUpload />

                Select {fileType} file

                <input
                    type="file"
                    accept={config.accept}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>

            {/* Accepted File Types */}
            <p className="mt-4 text-xs text-slate-400">
                {config.extensions} files only • Maximum 100 MB
            </p>

        </div>
    );
}