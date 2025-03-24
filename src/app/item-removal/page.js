"use client";


import Navbar from "@/components/Navbar";
import Image from "next/image";
import ItemRemovalContent from "@/components/ItemRemovalContent"; // Existing content component
import ItemRemovalDetails from "@/components/ItemRemovalDetails"; // Updated component
import Footer from "@/components/Footer";
export default function ItemRemoval() {
    return (
        <div className="relative min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with Before & After Labels */}
            <header className="relative flex items-center justify-center text-white py-28 px-6 min-h-[400px] bg-blue-800">
                <div className="absolute inset-0">
                    <Image
                        src="/images/item-removal/hero-image.jpg"
                        alt="Hero Image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-between px-12">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-md">
                        Before
                    </span>
                    <span className="bg-black/70 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-md">
                        After
                    </span>
                </div>
            </header>

            {/* Combined Content Section */}
            <main className="flex-grow px-6 py-12 max-w-5xl mx-auto text-gray-800 space-y-12">
                <ItemRemovalContent /> {/* Existing component */}
                <ItemRemovalDetails /> {/* New component */}

            </main>
            <Footer />
        </div>
    );
}
