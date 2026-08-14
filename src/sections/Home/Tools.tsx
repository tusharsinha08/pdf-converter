import Link from "next/link";
import {
    FaFilePdf,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaImage,
    FaCode,
} from "react-icons/fa6";

const tools = [
    {
        title: "PDF to Word",
        description: "Convert PDF documents into editable Word files.",
        icon: FaFileWord,
        href: "/pdf-to-word",
    },
    {
        title: "Word to PDF",
        description: "Turn Word documents into professional PDF files.",
        icon: FaFilePdf,
        href: "/word-to-pdf",
    },
    {
        title: "Excel to PDF",
        description: "Convert Excel spreadsheets into PDF documents.",
        icon: FaFileExcel,
        href: "/excel-to-pdf",
    },
    {
        title: "PowerPoint to PDF",
        description: "Convert presentations into easy-to-share PDFs.",
        icon: FaFilePowerpoint,
        href: "/powerpoint-to-pdf",
    },
    {
        title: "JPG to PDF",
        description: "Convert your images into PDF documents.",
        icon: FaImage,
        href: "/jpg-to-pdf",
    },
    {
        title: "HTML to PDF",
        description: "Turn HTML files and webpages into PDF.",
        icon: FaCode,
        href: "/html-to-pdf",
    },
];

export default function Tools() {
    return (
        <section id="tools" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <p className="font-semibold text-amber-600">
                        PDF TOOLS
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Convert Files Your Way
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Choose the conversion tool you need and get your
                        converted file in just a few clicks.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 transition group-hover:bg-amber-100">
                                    <Icon className="text-2xl text-amber-600" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-900">
                                    {tool.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {tool.description}
                                </p>

                                <span className="mt-5 inline-block text-sm font-semibold text-amber-600">
                                    Convert now →
                                </span>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}