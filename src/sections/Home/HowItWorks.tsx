const steps = [
    {
        number: "01",
        title: "Choose a Tool",
        description:
            "Select the type of conversion you want to perform.",
    },
    {
        number: "02",
        title: "Upload Your File",
        description:
            "Select your document and upload it securely.",
    },
    {
        number: "03",
        title: "Convert & Download",
        description:
            "Let our cloud-powered system process your file and download the result.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">

                <div className="text-center">
                    <p className="font-semibold text-amber-600">
                        SIMPLE PROCESS
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative text-center"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white shadow-lg shadow-amber-500/20">
                                {step.number}
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                {step.title}
                            </h3>

                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}