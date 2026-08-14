import Link from "next/link";
import {
    FaArrowRight,
    FaCloudArrowUp,
    FaFilePdf,
    FaShieldHalved,
    FaBolt,
} from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-32 pb-20">
            {/* Background decoration */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
            <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Left Content */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
                            <FaBolt className="text-amber-500" />
                            Fast & Easy PDF Conversion
                        </div>

                        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                            Convert Your Files
                            <span className="block text-amber-600">
                                Simply & Quickly
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Convert PDF, Word, Excel, PowerPoint, JPG, PNG,
                            and HTML files in seconds. Fast, secure, and
                            completely hassle-free.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/pdf-to-word"
                                className="group inline-flex items-center gap-3 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-600"
                            >
                                Start Converting
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="#tools"
                                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-amber-400 hover:text-amber-600"
                            >
                                Explore Tools
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <FaShieldHalved className="text-green-500" />
                                Secure
                            </div>

                            <div className="flex items-center gap-2">
                                <FaBolt className="text-amber-500" />
                                Fast Processing
                            </div>

                            <div className="flex items-center gap-2">
                                <FaCloudArrowUp className="text-blue-500" />
                                Cloud Powered
                            </div>
                        </div>
                    </div>

                    {/* Right Upload Card */}
                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute -inset-4 rounded-3xl bg-amber-400/10 blur-2xl" />

                        <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
                            <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 px-6 py-12 text-center">

                                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100">
                                    <FaCloudArrowUp className="text-4xl text-amber-500" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    Upload Your File
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Drag & drop your file here or choose a file
                                    to get started.
                                </p>

                                <Link
                                    href="/pdf-to-word"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                                >
                                    <FaCloudArrowUp />
                                    Choose File
                                </Link>

                                <p className="mt-4 text-xs text-gray-400">
                                    PDF, DOCX, DOC, XLSX, PPTX, JPG, PNG & HTML
                                </p>
                            </div>

                            {/* Floating PDF card */}
                            <div className="absolute -left-8 bottom-10 hidden items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                                    <FaFilePdf className="text-red-500" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        document.pdf
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Ready to convert
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}