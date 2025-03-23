"use client";

import Image from "next/image";
import { useState } from "react";

const BeforeAfterSection = ({ title, description, beforeImage, afterImage, reverse }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="flex flex-wrap items-center bg-blue-50 py-12">
            {/* Image Column (Alternates Position) */}
            <div
                className={`w-full lg:w-1/2 flex justify-center ${reverse ? "lg:order-last" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-[90%] lg:w-[80%] aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                    {/* Before Image (Default) */}
                    <Image
                        src={beforeImage}
                        alt="Before"
                        layout="fill"
                        objectFit="cover"
                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                    />

                    {/* After Image (Appears on Hover) */}
                    <Image
                        src={afterImage}
                        alt="After"
                        layout="fill"
                        objectFit="cover"
                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Overlay Texts (Dynamic Based on Hover) */}
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-bold text-gray-700 rounded-md shadow-md">
                        {isHovered ? "AFTER" : "BEFORE"}
                    </div>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold text-blue-700">{title}</h2>
                <p className="mt-4 text-gray-700">{description}</p>

            </div>
        </section>
    );
};

export default BeforeAfterSection;
