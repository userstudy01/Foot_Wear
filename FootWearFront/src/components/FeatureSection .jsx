import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FeatureSection = () => {
    return (
        // <div className="w-full">
        //     {/* Top Features */}
        //     <div className="bg-gray-100 py-10">
        //         <div className="flex justify-around items-center flex-wrap">
        //             <div className="flex items-center gap-2">
        //                 <FaShippingFast size={24} />
        //                 <span className="text-base font-medium">Free Delivery</span>
        //             </div>
        //             <div className="flex items-center gap-2">
        //                 <FaCreditCard size={24} />
        //                 <span className="text-base font-medium">Secured Money</span>
        //             </div>
        //             <div className="flex items-center gap-2">
        //                 <FaHeadset size={24} />
        //                 <span className="text-base font-medium">Customer Support</span>
        //             </div>
        //             <div className="flex items-center gap-2">
        //                 <FaExchangeAlt size={24} />
        //                 <span className="text-base font-medium">Return Policy</span>
        //             </div>
        //         </div>
        //     </div>


        //     {/* Bottom Image Grid */}
        //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        //         <img
        //             src="https://images.pexels.com/photos/5325581/pexels-photo-5325581.jpeg"
        //             alt="shoe1"
        //             className="w-full h-full object-cover"
        //         />
        //         <img
        //             src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg"
        //             alt="shoe2"
        //             className="w-full h-full object-cover"
        //         />
        //         <img
        //             src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
        //             alt="shoe3"
        //             className="w-full h-full object-cover"
        //         />
        //         <div className="relative">
        //             <img
        //                 src="https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg"
        //                 alt="shoe4"
        //                 className="w-full h-full object-cover"
        //             />
        //             <div className="absolute inset-0 flex justify-center items-center bg-black/40">
        //                 <FaInstagram size={40} className="text-white" />
        //             </div>
        //         </div>
        //         <img
        //             src="https://images.pexels.com/photos/2529151/pexels-photo-2529151.jpeg"
        //             alt="shoe5"
        //             className="w-full h-full object-cover"
        //         />
        //         <img
        //             src="https://images.pexels.com/photos/5325594/pexels-photo-5325594.jpeg"
        //             alt="shoe6"
        //             className="w-full h-full object-cover"
        //         />
        //         <img
        //             src="https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg"
        //             alt="shoe7"
        //             className="w-full h-full object-cover"
        //         />
        //     </div>
        // </div>
        <div className="w-full">
            {/* Top Features - no gap, edge to edge */}
            <div className="bg-gray-100">
                <div className="flex justify-between items-center px-10 md:px-12 py-10">
                    <div className="flex items-center gap-2">
                        <FaShippingFast size={24} />
                        <span className="text-base font-medium">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCreditCard size={24} />
                        <span className="text-base font-medium">Secured Money</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHeadset size={24} />
                        <span className="text-base font-medium">Customer Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaExchangeAlt size={24} />
                        <span className="text-base font-medium">Return Policy</span>
                    </div>
                </div>
            </div>

            {/* Bottom Image Grid - no gap, hover effect */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/5325581/pexels-photo-5325581.jpeg"
                        alt="shoe1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg"
                        alt="shoe2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                        alt="shoe3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                {/* Hover Instagram */}
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg"
                        alt="shoe4"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/2529151/pexels-photo-2529151.jpeg"
                        alt="shoe5"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/5325594/pexels-photo-5325594.jpeg"
                        alt="shoe6"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/5325617/pexels-photo-5325617.jpeg"
                        alt="shoe7"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <FaInstagram size={40} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection 