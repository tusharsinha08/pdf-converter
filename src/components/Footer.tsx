import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <h2 className="text-xl font-bold text-amber-600">
                            PDF Converter
                        </h2>

                        <p className="mt-3 text-sm text-gray-600">
                            Convert PDF, Word, Excel, PowerPoint, JPG, PNG and HTML files
                            quickly and securely.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-gray-400">Tools</h3>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/compressed">
                                    Compressed
                                </Link>
                            </li>

                            <li>
                                <Link href="/pdf-to-word">
                                    PDF to Word
                                </Link>
                            </li>

                            <li>
                                <Link href="/word-to-pdf">
                                    Word to PDF
                                </Link>
                            </li>

                            <li>
                                <Link href="/jpg-to-pdf">
                                    JPG to PDF
                                </Link>
                            </li>

                            <li>
                                <Link href="/png-to-pdf">
                                    PNG to PDF
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 font-semibold text-gray-400">Company</h3>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>

                            <li>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} PDF Converter. All rights reserved.
                </div>
            </div>
        </footer>
    );
}