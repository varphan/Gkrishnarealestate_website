"use client"; // Ensure it's a client component in Next.js App Router (if using app directory)

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo Section - Left Middle */}
                <div className="flex items-center space-x-4 ml-[-90px]"> {/* Adjusted margin-left here */}
                    <Link href="#home">
                        <Image
                            src="/images/GVLOGO.png"
                            alt="G Krishna Real Estate Edits Logo"
                            width={120}
                            height={120}
                            className="object-contain rounded-full"
                        />
                    </Link>
                    <h1 className="text-2xl font-bold">G Krishna Real Estate Edits</h1>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>

                    {/* Hide Image Enhancement when on /item-removal */}
                    {currentPath !== "/item-removal" && (
                        <li>
                            <a href="#image-enhancement" className="hover:underline">Image Enhancement</a>
                        </li>
                    )}

                    <li>
                        <a href="#" className="hover:underline">Day to Dusk</a>
                    </li>
                    <li>
                        <Link href="/item-removal" className="hover:underline">Item Removal</Link>
                    </li>

                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
