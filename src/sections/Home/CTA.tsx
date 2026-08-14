import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center sm:px-12">
                <p className="font-semibold text-amber-400">
                    READY TO CONVERT?
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Convert Your Documents in Seconds
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                    Choose a conversion tool, upload your file, and let our
                    cloud-powered system do the rest.
                </p>

                <Link
                    href="/pdf-to-word"
                    className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-7 py-3.5 font-semibold text-white transition hover:bg-amber-600"
                >
                    Start Converting
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}