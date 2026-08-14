import {
    FaBolt,
    FaShieldHalved,
    FaCloudArrowUp,
    FaMobileScreenButton,
} from "react-icons/fa6";

const features = [
    {
        icon: FaBolt,
        title: "Lightning Fast",
        description:
            "Convert your documents quickly without complicated steps.",
    },
    {
        icon: FaShieldHalved,
        title: "Secure & Private",
        description:
            "Your files are processed securely and are not stored permanently.",
    },
    {
        icon: FaCloudArrowUp,
        title: "Cloud Powered",
        description:
            "Reliable cloud processing gives you fast and consistent conversions.",
    },
    {
        icon: FaMobileScreenButton,
        title: "Works Everywhere",
        description:
            "Use the converter from your desktop, tablet, or mobile device.",
    },
];

export default function Features() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-2xl text-center">
                    <p className="font-semibold text-amber-600">
                        WHY USE US
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Everything You Need
                    </h2>

                    <p className="mt-4 text-gray-600">
                        A simple and reliable way to handle your document
                        conversion needs.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                                    <Icon className="text-xl text-amber-600" />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}