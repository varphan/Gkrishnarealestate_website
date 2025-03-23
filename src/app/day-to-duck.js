// pages/day-to-dusk.js
import Navbar from "@/components/Navbar";  // Make sure to import Navbar if you have it as a component
import Footer from "@/components/Footer";  // Similarly, import Footer if it's a reusable component

export default function DayToDusk() {
    return (
        <div>
            <Navbar />
            <main className="max-w-7xl mx-auto py-8 px-6">
                <h1 className="text-4xl font-extrabold mb-4">Day to Dusk Photo Editing</h1>
                <p>
                    Transform your day-lit images into stunning twilight scenes with our Day to Dusk Photo Editing service.
                </p>
                {/* Add more details about the service if needed */}
            </main>
            <Footer />
        </div>
    );
}
