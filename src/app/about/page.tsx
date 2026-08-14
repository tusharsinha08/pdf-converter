import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-16">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-10 pt-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        About PDF Converter
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Simple, fast, and convenient file conversion online.
                    </p>
                </div>

                {/* About */}
                <section className="space-y-6">
                    <p className="text-gray-700 leading-7">
                        PDF Converter is an online file conversion tool designed
                        to make converting documents quick and easy. You can
                        convert PDF, Word, Excel, PowerPoint, JPG, PNG, and other
                        supported file formats without installing additional
                        software.
                    </p>

                    <p className="text-gray-700 leading-7">
                        Our goal is to provide a clean and straightforward
                        experience where you can upload a file, convert it, and
                        download the result with just a few clicks.
                    </p>
                </section>

                {/* Conversion */}
                <section className="mt-10 rounded-xl border border-gray-200 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        File Conversion
                    </h2>

                    <p className="mt-3 text-gray-600 leading-7">
                        The application supports multiple file conversion
                        workflows, including PDF to Word, Word to PDF, JPG to
                        PDF, PNG to PDF, PowerPoint to PDF, Excel to PDF, and
                        other supported formats.
                    </p>
                </section>

                {/* CloudConvert */}
                <section className="mt-6 rounded-xl border border-gray-200 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Powered by CloudConvert
                    </h2>

                    <p className="mt-3 text-gray-600 leading-7">
                        PDF Converter uses the{" "}
                        <a
                            href="https://cloudconvert.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            CloudConvert API
                        </a>{" "}
                        to process supported file conversions. CloudConvert
                        provides the underlying conversion technology that
                        allows our application to convert files between
                        different formats.
                    </p>
                </section>

                {/* How it works */}
                <section className="mt-10">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        How It Works
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-gray-50 p-5">
                            <h3 className="font-semibold text-gray-900">
                                1. Upload
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Select the file you want to convert.
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-5">
                            <h3 className="font-semibold text-gray-900">
                                2. Convert
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Our application processes your file using the
                                CloudConvert API.
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-5">
                            <h3 className="font-semibold text-gray-900">
                                3. Download
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Download your converted file when processing is
                                complete.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        Start Converting
                    </Link>
                </div>
            </div>
        </main>
    );
}