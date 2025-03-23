"use client";

import { useState } from "react";

export default function ContactBanner() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Please provide your name.";
        if (!formData.email.trim()) newErrors.email = "Please provide an email.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email.";
        if (!formData.phone.trim()) newErrors.phone = "Please provide your contact number.";
        if (!formData.comments.trim()) newErrors.comments = "Please describe your requirement.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setSuccessMessage("");

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSuccessMessage("Your message has been sent successfully!");
                setFormData({ name: "", email: "", phone: "", comments: "" }); // Reset form
            } else {
                setErrors({ general: "Failed to send message. Please try again." });
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setErrors({ general: "Something went wrong. Please try again later." });
        }

        setLoading(false);
    };

    return (
        <div className="bnnr-frm bg-white p-6 rounded-lg shadow-lg">
            {/* Title Section */}
            <p className="text-2xl font-bold text-blue-600 mb-1">
                Request a <span className="text-red-500">FREE</span> Quote
            </p>
            <p className="text-lg mb-4 text-black">
                Hire expert photo editors with <span className="font-bold text-blue-600">FREE SAMPLE</span>
            </p>

            {/* Form Section */}
            <form id="bannrFrm" name="bannrFrm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="hidden" name="pageFrom" id="pageFrom" />

                <div className="forminput mb-3">
                    <label className="block mb-1 text-blue-600">Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="text-black bodytext w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength="40"
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>

                <div className="forminput mb-3">
                    <label className="block mb-1 text-blue-600">Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-black bodytext w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength="40"
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                <div className="forminput mb-3">
                    <label className="block mb-1 text-blue-600">Phone Number *</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="text-black bodytext w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                </div>

                <div className="forminput mb-3">
                    <label className="block mb-1 text-blue-600">Describe your requirement *</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        className="text-black   cont-txt-area bodytext w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        cols="33"
                        rows="3"
                    ></textarea>
                    {errors.comments && <div className="text-red-500 text-sm mt-1">{errors.comments}</div>}
                </div>

                {errors.general && <div className="text-red-500 text-sm mb-3">{errors.general}</div>}
                {successMessage && <div className="text-green-500 text-sm mb-3">{successMessage}</div>}

                <div className="forminput btns">
                    <button
                        id="frm-bnnr"
                        className="btn-input1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}
