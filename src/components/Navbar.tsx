import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed min-w-screen top-0 z-50 border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-2xl font-bold text-amber-600">
                    PDF Converter
                </Link>

                <nav className="hidden items-center gap-8 md:flex text-black">
                    <Link href="/" className="hover:text-amber-600">
                        Home
                    </Link>

                    <Link href="/compress" className="hover:text-amber-600">
                        Compress
                    </Link>

                    <Link href="/pdf-to-word" className="hover:text-amber-600">
                        PDF to Word
                    </Link>

                    <Link href="/word-to-pdf" className="hover:text-amber-600">
                        Word to PDF
                    </Link>

                    <Link href="/about" className="hover:text-amber-600">
                        About
                    </Link>

                    <Link href="/contact" className="hover:text-amber-600">
                        Contact
                    </Link>
                </nav>

                <button className="rounded-lg bg-amber-600 px-5 py-2 text-white hover:bg-amber-700">
                    Get Started
                </button>
            </div>
        </header>
    );
}