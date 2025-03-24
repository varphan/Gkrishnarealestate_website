"use client"; // Add this line at the very top

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Start the fade-out effect
            setTimeout(() => setIsLoading(false), 1000); // Hide the loading screen after fade-out completes (1 second)
        }, 3000); // The initial loading screen time

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return (
        <>

            {isLoading && (
                <div className={`fullscreen-container ${fadeOut ? 'fade-out' : ''}`}>
                    <div className="logo-container">
                        <img
                            src="/images/GVLOGO.png"
                            alt="Logo"
                            className="object-contain"
                            style={{ width: "500px", height: "500px" }} // Fixed size and square shape
                        />
                    </div>
                    <div className="loading-line"></div>

                </div>
            )}
        </>
    );
}
