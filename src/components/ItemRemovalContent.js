"use client"
import Image from "next/image";

const ItemRemovalSection = ({ title, description, price, image, reverse }) => {
    return (
        <section className="flex flex-wrap items-center bg-blue-50 py-12">
            {/* Image Column (Alternates Position) */}
            <div className={`w-full lg:w-1/2 flex justify-center ${reverse ? "lg:order-last" : ""}`}>
                <div className="relative w-[90%] lg:w-[80%] aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-md shadow-md">
                        BEFORE
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-md shadow-md">
                        AFTER
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-blue-700 px-4 py-1 text-sm font-semibold rounded-md shadow-md">
                        24 HOURS
                    </div>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold text-blue-700">
                    {title}
                    <span className="block text-xl text-blue-500 mt-2">${price}</span>
                </h2>
                <p className="mt-4 text-gray-700">{description}</p>
            </div>
        </section>
    );
};


export default function ItemRemovalContent() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
                        Item Removal
                    </h1>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column */}
                    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-700">DECLUTTER A SPACE</h2>
                        <p className="mt-2 text-gray-600">
                            Ensure your listing photos showcase a clean and clutter-free home, allowing the property to shine at its best.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-700">ENHANCE VISUAL APPEAL</h2>
                        <p className="mt-2 text-gray-600">
                            Erase distractions in property photos for a positive first impression on buyers or tenants.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
