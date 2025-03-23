import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo Section - Left Middle */}
                <div className="flex items-center space-x-4 ml-[-90px]"> {/* Adjusted margin-left here */}
                    <Link href="#home">
                        <Image
                            src="/images/GVLOGO.png" // Replace with your logo path
                            alt="G Krishna Real Estate Edits Logo"
                            width={120} // Adjust size as needed
                            height={120} // Adjust size as needed
                            className="object-contain rounded-full" // Rounded image
                        />
                    </Link>
                    <h1 className="text-2xl font-bold">G Krishna Real Estate Edits</h1>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#home" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#image-enhancement" className="hover:underline">Image Enhancement</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Day to Dusk</a> {/* Update this id if necessary */}
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Item Removal</a> {/* Update this id if necessary */}
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
