"use client";

import { FaFileWord } from "react-icons/fa";

interface ConvertButtonProps {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    convertedFileType: string;
}

export default function ConvertButton({
    onClick,
    disabled = false,
    loading = false,
    convertedFileType,
}: ConvertButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled || loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-4 font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <FaFileWord />

            {loading ? "Converting..." : `Convert to ${convertedFileType}`}
        </button>
    );
}