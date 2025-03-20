"use client";

import { useState } from "react";

const InfoForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        phone: "",
        address: "",
        notes: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass form data to parent component (CheckoutPage)
    };

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Shipping Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="input w-full"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="input w-full"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                        className="input w-full"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        Shipping Address
                    </label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="Enter your full address"
                        className="input w-full"
                    ></textarea>
                </div>

                {/* City */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        City
                    </label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="input w-full"
                    >
                        <option value="" disabled>Choose one</option>
                        <option value="inside dhaka">Inside Dhaka</option>
                        <option value="outside dhaka">Outside Dhaka</option>
                    </select>
                </div>

                {/* Additional Notes */}
                <div>
                    <label className="block text-gray-600 dark:text-gray-300 font-medium">
                        Order Notes (Optional)
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Any special instructions?"
                        className="input w-full"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="!w-full button !text-sm"
                >
                    Confirm Order
                </button>
            </form>
        </div>
    );
};

export default InfoForm;
