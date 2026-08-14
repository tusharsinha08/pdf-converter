import {
    FaCheck,
    FaCloud,
    FaLock,
    FaGaugeHigh,
} from "react-icons/fa6";

const benefits = [
    "No complicated software installation",
    "Fast cloud-based processing",
    "Simple and clean interface",
    "Multiple document formats supported",
    "Works on desktop and mobile",
    "Secure file processing",
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

                <div>
                    <p className="font-semibold text-amber-600">
                        BUILT FOR SIMPLICITY
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Everything You Need to Convert Documents
                    </h2>

                    <p className="mt-5 leading-7 text-gray-600">
                        Our PDF converter combines a simple interface with
                        reliable cloud processing so you can focus on your
                        work instead of dealing with complicated software.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="flex items-center gap-3 text-sm text-gray-700"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                                    <FaCheck className="text-xs text-green-600" />
                                </span>

                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <FaCloud className="text-3xl text-amber-500" />

                        <h3 className="mt-4 font-bold text-gray-900">
                            Cloud Processing
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Powerful cloud infrastructure handles your
                            conversions.
                        </p>
                    </div>

                    <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                        <FaLock className="text-3xl text-green-500" />

                        <h3 className="mt-4 font-bold text-gray-900">
                            Secure
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Your documents are processed with security in
                            mind.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <FaGaugeHigh className="text-3xl text-blue-500" />

                        <h3 className="mt-4 font-bold text-gray-900">
                            Reliable
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Get consistent results from our conversion tools.
                        </p>
                    </div>

                    <div className="mt-8 rounded-2xl bg-amber-500 p-6 text-white shadow-lg">
                        <p className="text-4xl font-bold">Fast</p>

                        <p className="mt-2 text-sm text-amber-50">
                            Convert documents without unnecessary steps.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}