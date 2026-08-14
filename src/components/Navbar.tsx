"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FiMenu,
    FiX,
    FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
        setToolsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold text-amber-600"
                >
                    PDF Converter
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 text-black md:flex">

                    <Link
                        href="/"
                        className="transition hover:text-amber-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/compress"
                        className="transition hover:text-amber-600"
                    >
                        Compress PDF
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

                    {/* All Tools Dropdown */}
                    <div className="group relative">
                        <button
                            className="flex items-center gap-1 transition group-hover:text-amber-600"
                        >
                            All Tools
                            <FiChevronDown className="transition-transform group-hover:rotate-180" />
                        </button>

                        <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <div className="rounded-xl border bg-white p-2 shadow-lg">

                                <Link
                                    href="/compress"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Compress PDF
                                </Link>

                                <Link
                                    href="/pdf-to-word"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PDF to Word
                                </Link>

                                <Link
                                    href="/word-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Word to PDF
                                </Link>

                                {/* <Link
                                    href="/jpg-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    JPG to PDF
                                </Link>

                                <Link
                                    href="/png-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PNG to PDF
                                </Link>

                                <Link
                                    href="/powerpoint-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PowerPoint to PDF
                                </Link>

                                <Link
                                    href="/excel-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Excel to PDF
                                </Link>

                                <Link
                                    href="/html-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    HTML to PDF
                                </Link> */}

                            </div>
                        </div>
                    </div>

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
                    className="rounded-md p-2 text-2xl text-black hover:bg-gray-100 md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="border-t bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-1">

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 hover:bg-amber-50 hover:text-amber-600"
                        >
                            Home
                        </Link>

                        {/* Mobile All Tools */}
                        <button
                            onClick={() => setToolsOpen(!toolsOpen)}
                            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left hover:bg-amber-50 hover:text-amber-600"
                        >
                            <span>All Tools</span>

                            <FiChevronDown
                                className={`transition-transform ${toolsOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {toolsOpen && (
                            <div className="ml-3 border-l-2 border-amber-100 pl-3">

                                <Link
                                    href="/compress"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Compress PDF
                                </Link>

                                <Link
                                    href="/pdf-to-word"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PDF to Word
                                </Link>

                                <Link
                                    href="/word-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Word to PDF
                                </Link>

                                {/* <Link
                                    href="/jpg-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    JPG to PDF
                                </Link>

                                <Link
                                    href="/png-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PNG to PDF
                                </Link>

                                <Link
                                    href="/powerpoint-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    PowerPoint to PDF
                                </Link>

                                <Link
                                    href="/excel-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    Excel to PDF
                                </Link>

                                <Link
                                    href="/html-to-pdf"
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600"
                                >
                                    HTML to PDF
                                </Link> */}
                            </div>
                        )}

                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 hover:bg-amber-50 hover:text-amber-600"
                        >
                            About
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}