import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                {/* Logo + Address */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="text-3xl font-bold">Shoes</span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1048/1048313.png"
                            alt="logo"
                            className="h-10"
                        />
                        <span className="text-3xl font-bold">Site</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                        1245, North Western Street <br /> Anand. Gujarat
                    </p>
                    <p className="text-gray-300 text-sm mt-3">
                        Monday to Friday from 09:00 to 17:00. <br />
                        Call Us +91 9988776655
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Shop</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-orange-500 cursor-pointer">Sneakers</li>
                        <li className="hover:text-orange-500 cursor-pointer">Moccasin</li>
                        <li className="hover:text-orange-500 cursor-pointer">Hiking boot</li>
                        <li className="hover:text-orange-500 cursor-pointer">Oxford shoe</li>
                        <li className="hover:text-orange-500 cursor-pointer">Wellington boot</li>
                    </ul>
                </div>

                {/* Customer Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Customer</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
                        <li className="hover:text-orange-500 cursor-pointer">Sign In</li>
                        <li className="hover:text-orange-500 cursor-pointer">Create Account</li>
                        <li className="hover:text-orange-500 cursor-pointer">Shopping</li>
                        <li className="hover:text-orange-500 cursor-pointer">Checkout</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-500">
                        Sign up to be the first to <br /> know about new collections.
                    </h3>
                    <div className="flex items-center border border-white rounded-full px-4 py-2 mt-3">
                        <input
                            type="email"
                            placeholder="email"
                            className="bg-black text-white outline-none flex-grow placeholder-gray-400 text-sm"
                        />
                        <button>
                            <FiSend className="text-white" />
                        </button>
                    </div>
                    {/* Social icons */}
                    <div className="flex space-x-4 mt-5">
                        <a
                            href="#"
                            className="bg-white text-black rounded-full p-2 hover:bg-orange-500 hover:text-white transition"
                        >
                            <FaTwitter size={16} />
                        </a>
                        <a
                            href="#"
                            className="bg-white text-black rounded-full p-2 hover:bg-orange-500 hover:text-white transition"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="#"
                            className="bg-white text-black rounded-full p-2 hover:bg-orange-500 hover:text-white transition"
                        >
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                <p>All Right Reserved © 2025 Designthemes</p>
                <div className="flex space-x-3 mt-3 md:mt-0">
                    <img src="https://img.icons8.com/color/48/visa.png" alt="visa" className="h-6" />
                    <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard" className="h-6" />
                    <img src="https://img.icons8.com/color/48/amex.png" alt="amex" className="h-6" />
                    <img src="https://img.icons8.com/color/48/paypal.png" alt="paypal" className="h-6" />
                    <img src="https://img.icons8.com/color/48/discover.png" alt="discover" className="h-6" />
                </div>
            </div>

            {/* Scroll to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 bg-orange-500 p-4 rounded-full text-white shadow-lg hover:bg-orange-600 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                </svg>
            </button>
        </footer>
    );
}

export default Footer
