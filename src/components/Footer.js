import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <div className="flex justify-center space-x-4 mb-2">
                <a
                    href="https://www.facebook.com/share/15zZbVc1tp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <FaFacebook size={24} />
                </a>
                <a
                    href="https://www.instagram.com/real_estate_editing_service/?utm_source=qr&r=nametag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()} // ✅ Prevent page refresh
                    className="text-white hover:text-gray-400"
                >
                    <FaTwitter size={24} />
                </a>
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()} // ✅ Prevent page refresh
                    className="text-white hover:text-gray-400"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
            <p className="text-sm">Email: Gkrishnarealestate@gmail.com</p>
            <p>&copy; {new Date().getFullYear()} G Krishna Real Estate Edits. All rights reserved.</p>
        </footer>
    );
}
