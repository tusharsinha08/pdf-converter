"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-amber-600"
                    onClick={closeMenu}
                >
                    PDF Converter
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 text-black md:flex">
                    <Link href="/" className="transition hover:text-amber-600">
                        Home
                    </Link>

                    <Link
                        href="/compress"
                        className="transition hover:text-amber-600"
                    >
                        Compress
                    </Link>

                    <Link
                        href="/pdf-to-word"
                        className="transition hover:text-amber-600"
                    >
                        PDF to Word
                    </Link>

                    <Link
                        href="/word-to-pdf"
                        className="transition hover:text-amber-600"
                    >
                        Word to PDF
                    </Link>

                    <Link
                        href="/about"
                        className="transition hover:text-amber-600"
                    >
                        About
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md p-2 text-2xl text-black transition hover:bg-gray-100 md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="border-t bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-1">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="rounded-md px-3 py-3 text-black transition hover:bg-amber-50 hover:text-amber-600"
                        >
                            Home
                        </Link>

                        <Link
                            href="/compress"
                            onClick={closeMenu}
                            className="rounded-md px-3 py-3 text-black transition hover:bg-amber-50 hover:text-amber-600"
                        >
                            Compress
                        </Link>

                        <Link
                            href="/pdf-to-word"
                            onClick={closeMenu}
                            className="rounded-md px-3 py-3 text-black transition hover:bg-amber-50 hover:text-amber-600"
                        >
                            PDF to Word
                        </Link>

                        <Link
                            href="/word-to-pdf"
                            onClick={closeMenu}
                            className="rounded-md px-3 py-3 text-black transition hover:bg-amber-50 hover:text-amber-600"
                        >
                            Word to PDF
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="rounded-md px-3 py-3 text-black transition hover:bg-amber-50 hover:text-amber-600"
                        >
                            About
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}