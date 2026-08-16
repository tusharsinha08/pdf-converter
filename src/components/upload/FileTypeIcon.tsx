import {
    FaFilePdf,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaFileImage,
    FaFile,
} from "react-icons/fa";

interface FileTypeConfig {
    icon: React.ElementType;
    color: string;
    accept: string;
    extensions: string;
}

const fileTypeConfig: Record<string, FileTypeConfig> = {
    pdf: {
        icon: FaFilePdf,
        color: "text-red-600",
        accept: ".pdf,application/pdf",
        extensions: ".pdf",
    },

    word: {
        icon: FaFileWord,
        color: "text-blue-600",
        accept:
            ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extensions: ".doc, .docx",
    },

    excel: {
        icon: FaFileExcel,
        color: "text-green-600",
        accept:
            ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extensions: ".xls, .xlsx",
    },

    powerpoint: {
        icon: FaFilePowerpoint,
        color: "text-orange-600",
        accept:
            ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extensions: ".ppt, .pptx",
    },

    jpg: {
        icon: FaFileImage,
        color: "text-purple-600",
        accept: ".jpg,.jpeg,image/jpeg",
        extensions: ".jpg, .jpeg",
    },

    png: {
        icon: FaFileImage,
        color: "text-purple-600",
        accept: ".png,image/png",
        extensions: ".png",
    },

    image: {
        icon: FaFileImage,
        color: "text-purple-600",
        accept: ".jpg,.jpeg,.png,image/jpeg,image/png",
        extensions: ".jpg, .jpeg, .png",
    },
};

export function getFileTypeConfig(
    fileType: string
): FileTypeConfig {
    return (
        fileTypeConfig[fileType.toLowerCase()] || {
            icon: FaFile,
            color: "text-slate-500",
            accept: "*/*",
            extensions: "All",
        }
    );
}

interface FileTypeIconProps {
    fileType: string;
    className?: string;
}

export default function FileTypeIcon({
    fileType,
    className = "text-4xl",
}: FileTypeIconProps) {
    const config = getFileTypeConfig(fileType);

    const Icon = config.icon;

    return (
        <Icon
            className={`${className} ${config.color}`}
        />
    );
}