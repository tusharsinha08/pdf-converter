"use client";

import { FaFilePdf, FaTimes } from "react-icons/fa";

interface SelectedFileProps {
    file: File;
    onRemove: () => void;
}

export default function SelectedFile({
    file,
    onRemove,
}: SelectedFileProps) {
    const fileSize = (file.size / 1024 / 1024).toFixed(2);

    return (
        <div className="flex items-center justify-between rounded-xl border bg-white p-4">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                    <FaFilePdf className="text-xl text-red-500" />
                </div>

                <div>
                    <p className="max-w-xs truncate font-medium text-slate-900">
                        {file.name}
                    </p>

                    <p className="text-sm text-slate-500">
                        {fileSize} MB
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={onRemove}
                className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
            >
                <FaTimes />
            </button>
        </div>
    );
}