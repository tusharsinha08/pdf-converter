"use client";

import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileImage } from "react-icons/fa";

interface ConvertButtonProps {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    convertedFileType: string;
}

const fileTypeIcons: Record<string, React.ElementType> = {
    pdf: FaFilePdf,
    word: FaFileWord,
    excel: FaFileExcel,
    powerpoint: FaFilePowerpoint,
    jpg: FaFileImage,
    jpeg: FaFileImage,
    png: FaFileImage,
    image: FaFileImage,
};

const fileTypeColors: Record<string, string> = {
    pdf: "text-red-200",
    word: "text-blue-200",
    excel: "text-green-200",
    powerpoint: "text-orange-200",
    jpg: "text-purple-200",
    jpeg: "text-purple-200",
    png: "text-purple-200",
    image: "text-purple-200",
};

export default function ConvertButton({
    onClick,
    disabled = false,
    loading = false,
    convertedFileType,
}: ConvertButtonProps) {
    const fileType = convertedFileType.toLowerCase();

    const Icon = fileTypeIcons[fileType] || FaFilePdf;

    const iconColor =
        fileTypeColors[fileType] || "text-white";

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled || loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white shadow-sm transition duration-200 hover:bg-amber-700 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-600 disabled:hover:shadow-sm"
        >
            {loading ? (
                <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    <span>
                        Converting...
                    </span>
                </>
            ) : (
                <>
                    <Icon className={`text-xl ${iconColor}`} />

                    <span>
                        Convert to {convertedFileType}
                    </span>
                </>
            )}
        </button>
    );
}