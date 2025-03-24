"use client";

import Image from "next/image";
import { useState } from "react";

const RemovalItem = ({ title, description, beforeImage, afterImage, reverse }) => {
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
                        fill
                        style={{ objectFit: "cover" }}
                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                    />

                    {/* After Image (Appears on Hover) */}
                    <Image
                        src={afterImage}
                        alt="After"
                        fill
                        style={{ objectFit: "cover" }}
                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Overlay Texts */}
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

const ItemRemovalDetails = () => {
    return (
        <div className="space-y-12">
            <RemovalItem
                title="Standard Item Removal"
                description="Garbage bins in the driveway? Bedrooms filled with personal belongings? Worn-out couch in the living room? Quickly clean, declutter, or depersonalize a space with our Standard Item Removal edit, to minimize distraction and maximize buyer attraction."
                beforeImage="/images/item-removal/STANDARD_ITEM_REMOVAL/before.jpg"
                afterImage="/images/item-removal/STANDARD_ITEM_REMOVAL/after.jpg"
            />
            <RemovalItem
                title="Minor Item Removal"
                description="Don't let small distractions steal the spotlight from a property's best features. Removing one or two small items can have a dramatic impact on the presentation of a property and help it stand out for all the right reasons."
                beforeImage="/images/item-removal/MINOR_ITEM_REMOVAL/before.jpg"
                afterImage="/images/item-removal/MINOR_ITEM_REMOVAL/after.jpg"
                reverse
            />
        </div>
    );
};

export default ItemRemovalDetails;
