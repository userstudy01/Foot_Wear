// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import your 6 product images (update with your actual assets)
// import Img1 from "../assets/slide-1.jpg";
// import Img2 from "../assets/slide-2.jpg";
// import Img3 from "../assets/slide-3.jpg";
// import Img4 from "../assets/slide-4.jpg";
// import Img5 from "../assets/slide-5.jpg";
// import Img6 from "../assets/slide-1.jpg";

// const slides = [
//     {
//         id: 1,
//         title: "TEAPOT",
//         desc: "minimalist. creative. flexible",
//         price: "$120.05",
//         sku: "su3",
//         img: Img1,
//     },
//     {
//         id: 2,
//         title: "ELEGANT WATCH",
//         desc: "modern. precise. stylish",
//         price: "$199.00",
//         sku: "su6",
//         img: Img2,
//     },
//     {
//         id: 3,
//         title: "UNA CHAIR",
//         desc: "minimalist. creative. flexible",
//         price: "$102.84",
//         sku: "su2",
//         img: Img3,
//     },
//     {
//         id: 4,
//         title: "WOODEN CLOCK",
//         desc: "sleek. elegant. timeless",
//         price: "$140.50",
//         sku: "su4",
//         img: Img4,
//     },
//     {
//         id: 5,
//         title: "LAMP",
//         desc: "warm. simple. cozy",
//         price: "$99.99",
//         sku: "su5",
//         img: Img5,
//     },
//     {
//         id: 6,
//         title: "CLASSIC TIMER",
//         desc: "timeless. reliable. chic",
//         price: "$88.50",
//         sku: "su7",
//         img: Img6,
//     },
// ];

// const Slideshow = () => {
//     const [current, setCurrent] = useState(0);

//     // Auto-slide loop
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="relative w-full min-h-screen bg-[#c7e8e5] flex px-14 overflow-hidden items-center">
//             {/* LEFT: Text Content */}
//             <div className="flex-1 z-10">
//                 <h1 className="text-6xl md:text-7xl font-extrabold uppercase mb-5 tracking-tight text-black">
//                     {slides[current].title}
//                 </h1>
//                 <p className="mb-12 text-gray-700 text-2xl font-medium">
//                     {slides[current].desc}
//                 </p>
//                 <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-md shadow-md text-lg font-semibold transition">
//                     Discover Now
//                 </button>
//             </div>

//             {/* CENTER: Main Round Product */}
//             <div className="flex-1 flex items-center justify-center relative min-h-[640px]">
//                 <div className="w-[600px] h-[600px] rounded-full overflow-hidden relative flex items-center justify-center">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={slides[current].img}
//                             src={slides[current].img}
//                             alt={slides[current].title}
//                             className="w-full h-full object-cover rounded-full"
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 1.05 }}
//                             transition={{ duration: 0.7 }}
//                             draggable={false}
//                         />
//                     </AnimatePresence>

//                     {/* Thumbnails (Right side) */}
//                     <div className="absolute top-1/2 right-[-80px] -translate-y-1/2 flex flex-col space-y-6 z-10">
//                         {slides.map((slide, idx) => (
//                             <button
//                                 key={slide.id}
//                                 onClick={() => setCurrent(idx)}
//                                 className={`w-16 h-16 rounded-full overflow-hidden border-4 flex items-center justify-center transition-all duration-300
//                   ${idx === current
//                                         ? "border-orange-500 opacity-100 scale-110"
//                                         : "border-white opacity-40"
//                                     }`}
//                                 style={{
//                                     boxShadow:
//                                         idx === current
//                                             ? "0 6px 18px rgba(255,149,0,0.3)"
//                                             : "0 2px 8px rgba(0,0,0,0.1)",
//                                 }}
//                             >
//                                 <img
//                                     src={slide.img}
//                                     alt={slide.title}
//                                     className="w-full h-full object-cover rounded-full"
//                                     draggable={false}
//                                 />
//                             </button>
//                         ))}
//                     </div>

//                     {/* Info Card */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={slides[current].id + "-info"}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 50 }}
//                             transition={{ duration: 0.45 }}
//                             className="absolute right-[-220px] top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg px-7 py-5 flex items-center min-w-[260px] z-20"
//                         >
//                             <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border bg-white shadow">
//                                 <img
//                                     src={slides[current].img}
//                                     alt={slides[current].title}
//                                     className="h-full w-full object-cover rounded-full"
//                                     draggable={false}
//                                 />
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-xl">{slides[current].title}</h3>
//                                 <p className="text-gray-500 text-xs">#SKU: {slides[current].sku}</p>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>

//             {/* Price bottom left */}
//             <div className="absolute bottom-12 left-14 flex flex-col items-start z-20">
//                 <span className="text-xs font-semibold text-gray-500 tracking-widest mb-1">
//                     PRICE
//                 </span>
//                 <span className="text-3xl md:text-4xl font-bold text-black">
//                     {slides[current].price}
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Slideshow;




// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Replace these with your images
// import Bg1 from "../assets/bg-1.jpg";
// import Bg2 from "../assets/bg.jpg";
// import Bg3 from "../assets/bg-1.jpg";

// const slides = [
//     {
//         id: 1,
//         title: "Nike Shoes",
//         desc: "minimalist. creative. flexible",
//         price: "$120.05",
//         // sku: "su3",
//         img: Bg1,
//     },
//     {
//         id: 2,
//         title: "Puma shoes",
//         desc: "sleek. elegant. timeless",
//         price: "$140.50",
//         // sku: "su4",
//         img: Bg2,
//     },
//     {
//         id: 3,
//         title: "Air Jorden",
//         desc: "warm. simple. cozy",
//         price: "$99.99",
//         // sku: "su5",
//         img: Bg3,
//     },
// ];

// const Slideshow = () => {
//     const [current, setCurrent] = useState(0);

//     // Auto slide every 5s
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="w-full min-h-[90vh] bg-[#c3e5e2] flex items-center justify-between relative overflow-hidden px-6 md:px-12">
//             {/* Left Content */}
//             <div className="flex-1 z-10 text-center md:text-left">
//                 <AnimatePresence mode="wait">
//                     <motion.h1
//                         key={slides[current].title}
//                         initial={{ opacity: 0, x: -40 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -40 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-4xl md:text-6xl font-bold"
//                     >
//                         {slides[current].title}
//                     </motion.h1>
//                 </AnimatePresence>

//                 <AnimatePresence mode="wait">
//                     <motion.p
//                         key={slides[current].desc}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -20 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="mt-4 text-gray-700 text-lg md:text-xl"
//                     >
//                         {slides[current].desc}
//                     </motion.p>
//                 </AnimatePresence>

//                 <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-500 transition">
//                     Discover Now
//                 </button>
//             </div>

//             {/* Center Product with Animation */}
//             <div className="flex-1 flex justify-center relative my-10 md:my-0">
//                 <AnimatePresence mode="wait">
//                     <motion.img
//                         key={slides[current].id}
//                         src={slides[current].img}
//                         alt={slides[current].title}
//                         className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover shadow-lg"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{ duration: 0.8, ease: "easeInOut" }}
//                     />
//                 </AnimatePresence>
//             </div>

//             {/* Right Side Thumbnails */}
//             <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 h-[280px] items-center overflow-hidden">
//                 <div className="flex flex-col space-y-6">
//                     {slides.map((slide, index) => (
//                         <motion.button
//                             key={slide.id}
//                             onClick={() => setCurrent(index)}
//                             className="w-20 h-20 rounded-full overflow-hidden shadow-md relative"
//                             initial={false}
//                             animate={{
//                                 scale: index === current ? 1.1 : 1,
//                                 opacity: index === current ? 1 : 0.4,
//                                 filter: index === current ? "blur(0px)" : "blur(2px)",
//                             }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <img
//                                 src={slide.img}
//                                 alt={slide.title}
//                                 className="object-cover w-full h-full"
//                             />
//                         </motion.button>
//                     ))}
//                 </div>
//             </div>

//             {/* Floating Info Card */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={slides[current].id}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 50 }}
//                     transition={{ duration: 0.6 }}
//                     className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg flex items-center px-6 py-4 space-x-4 max-w-[90%] sm:max-w-md"
//                 >
//                     <div className="w-14 h-14 rounded-full overflow-hidden">
//                         <img
//                             src={slides[current].img}
//                             alt={slides[current].title}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="font-semibold">{slides[current].title}</h3>
//                         {/* <p className="text-gray-500 text-sm">#SKU: {slides[current].sku}</p> */}
//                     </div>
//                     <div className="ml-auto text-right">
//                         {/* <p className="text-xs uppercase text-gray-400">Price</p> */}
//                         <p className="text-lg font-bold">{slides[current].price}</p>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Slideshow;

import React from 'react'
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";

const Slideshow = () => {
    return (
        <div className="min-h-screen bg-[#d0eceb] flex flex-col">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 md:px-12 py-4">
                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">AUROS.</div>

                {/* Menu */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Menu size={20} />
                    <span className="text-sm uppercase">menu</span>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <Search className="cursor-pointer" size={20} />
                    <User className="cursor-pointer" size={20} />
                    <div className="relative cursor-pointer">
                        <ShoppingCart size={20} />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">
                            0
                        </span>
                    </div>
                </div>
            </nav>

            {/* Main Section */}
            <div className="flex flex-col md:flex-row flex-1 items-center justify-center px-6 md:px-16 lg:px-24 gap-8">
                {/* Left Column */}
                <div className="flex flex-col justify-center items-start text-left md:w-1/2 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        TEAPOT
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl">
                        minimalist. creative. flexible
                    </p>
                    <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                        Discover Now
                    </button>
                </div>

                {/* Right Column */}
                <div className="relative flex justify-center items-center md:w-1/2">
                    {/* Circle Background */}
                    <div className="absolute w-96 h-96 bg-white rounded-full shadow-xl" />

                    {/* Main Product with floating animation */}
                    <motion.img
                        src="https://zuiver.s3.eu-central-1.amazonaws.com/clock-black.png" // replace with product image
                        alt="Teapot"
                        className="relative w-72 h-72 object-contain z-10"
                        initial={{ y: 0 }}
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                    />

                    {/* Floating Thumbnail */}
                    <div className="absolute right-0 md:right-12 bottom-4 bg-white shadow-md rounded-full p-4 flex items-center space-x-3 z-20">
                        <img
                            src="https://zuiver.s3.eu-central-1.amazonaws.com/clock-black.png"
                            alt="Thumbnail"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <p className="font-semibold text-sm">TEAPOT</p>
                            <p className="text-xs text-gray-500">#SKU: tp01</p>
                        </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute left-0 md:left-12 bottom-4 text-left z-20">
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Price
                        </p>
                        <p className="text-xl md:text-2xl font-bold">$102.84</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow

