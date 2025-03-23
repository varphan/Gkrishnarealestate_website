"use client";
export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
            {text}
        </button>
    );
}
