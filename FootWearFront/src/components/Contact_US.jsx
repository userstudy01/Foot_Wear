import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";



const Contact_US = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message Sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };
    return (
        <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
            {/* Heading */}
            <div className="text-center mb-10">
                <p className="text-teal-600 font-semibold">✱ Contact Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm">
                        <div className="bg-gray-700 text-white p-4 rounded-xl mr-4">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Contact Mail</h4>
                            <p className="text-gray-600">mail.example@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm">
                        <div className="bg-gray-700 text-white p-4 rounded-xl mr-4">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Contact Phone</h4>
                            <p className="text-gray-600">(+91)-9876xxxxx</p>
                        </div>
                    </div>

                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm">
                        <div className="bg-gray-700 text-white p-4 rounded-xl mr-4">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Address</h4>
                            <p className="text-gray-600">
                                Ruami Moraes Filho, Salvador – MA, 40352, Brazil.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 rounded-2xl shadow-sm p-8 space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact_US