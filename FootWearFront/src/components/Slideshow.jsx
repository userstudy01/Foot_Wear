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
// import { React, useState } from 'react'
// import { motion, AnimatePresence } from "framer-motion";
// import Images from '../assets/images'

// const products = [
//     {
//         id: 1,
//         name: "LINAS CREW",
//         desc: "minimalist. creative. flexible",
//         price: "$183.76",
//         sku: "su1",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "UNA CHAIR",
//         desc: "modern. stylish. elegant",
//         price: "$210.50",
//         sku: "su2",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "ZEN CLOCK",
//         desc: "calm. focused. timeless",
//         price: "$159.90",
//         sku: "su3",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];


//     return (
//         <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

//             {/* LEFT CONTENT */}
//             <div className="flex-1 text-center lg:text-left space-y-6">
//                 <h1 className="text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
//                     {activeProduct.name}
//                 </h1>
//                 <p className="text-gray-700 text-lg">{activeProduct.desc}</p>
//                 <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
//                     Discover Now
//                 </button>
//                 <div className="pt-6">
//                     <p className="uppercase text-sm text-gray-500 tracking-widest">
//                         Price
//                     </p>
//                     <p className="text-2xl font-bold">{activeProduct.price}</p>
//                 </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0">

//                 {/* WHITE ROUND BACKGROUND */}
//                 <div className="relative w-72 h-72 lg:w-[460px] lg:h-[460px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={activeProduct.id}
//                             src={activeProduct.image}
//                             alt={activeProduct.name}
//                             initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
//                             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                             exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
//                             transition={{ duration: 0.8, ease: "easeInOut" }}
//                             className="w-56 lg:w-80 object-contain"
//                         />
//                     </AnimatePresence>
//                 </div>

//                 {/* THUMBNAILS */}
//                 <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     {products.map((product, index) => (
//                         <button
//                             key={product.id}
//                             onClick={() => setActiveIndex(index)}
//                             className={`w-20 h-20 rounded-full overflow-hidden border-2 shadow-md transition ${index === activeIndex
//                                 ? "border-orange-500 opacity-100"
//                                 : "border-transparent opacity-50 hover:opacity-80"
//                                 }`}
//                         >
//                             <img
//                                 src={product.thumb}
//                                 alt={product.name}
//                                 className="w-full h-full object-cover"
//                             />
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slideshow


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Images from "../assets/images";

// const products = [
//     {
//         id: 1,
//         name: "LINAS CREW",
//         desc: "minimalist. creative. flexible",
//         price: "$183.76",
//         sku: "su1",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "UNA CHAIR",
//         desc: "modern. stylish. elegant",
//         price: "$210.50",
//         sku: "su2",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "ZEN CLOCK",
//         desc: "calm. focused. timeless",
//         price: "$159.90",
//         sku: "su3",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];

//     return (
//         <div className="min-h-screen bg-[#c7e4e4] flex flex-col lg:flex-row items-center justify-between relative overflow-x-hidden">
//             {/* Left: Content */}
//             <div className="w-full lg:w-1/2 px-6 md:px-16 flex flex-col justify-center pt-12 pb-8 lg:pt-0 lg:pr-6">
//                 <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4">
//                     {activeProduct.name.split(" ")[0]}
//                     <br />
//                     {activeProduct.name.split(" ")[1]}
//                 </h1>
//                 <p className="text-gray-600 text-lg mb-8 font-medium">
//                     {activeProduct.desc}
//                 </p>
//                 <button className="w-fit bg-[#f68c2c] text-white px-8 py-3 rounded font-semibold shadow hover:bg-[#db7903] transition mb-10">
//                     Discover Now
//                 </button>
//                 {/* Only show on lg screens */}
//                 <div className="hidden md:block">
//                     <div className="text-xs text-gray-500 tracking-widest mb-1 uppercase">
//                         Price
//                     </div>
//                     <div className="text-2xl font-bold">{activeProduct.price}</div>
//                 </div>
//             </div>

//             {/* Center: Main Image + animation */}
//             <div className="w-full lg:w-auto flex flex-col items-center justify-center relative">
//                 {/* Round white background */}
//                 <div className="relative bg-white rounded-full shadow-2xl flex items-center justify-center w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] transition-all duration-500">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={activeProduct.id}
//                             src={activeProduct.image}
//                             alt={activeProduct.name}
//                             initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                             exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
//                             transition={{ duration: 0.6 }}
//                             className="w-52 md:w-72 lg:w-80 object-contain select-none"
//                             draggable="false"
//                         />
//                     </AnimatePresence>
//                 </div>
//                 {/* Show price under img only on mobile */}
//                 <div className="md:hidden text-black text-xl mt-5 font-semibold">
//                     {activeProduct.price}
//                 </div>
//             </div>

//             {/* Right: Thumbnails + Info Box */}
//             <div className="absolute z-30 right-2 top-1/2 -translate-y-1/2 flex-col hidden md:flex">
//                 {products.map((product, idx) => (
//                     <div key={product.id} className="mb-4">
//                         <button
//                             onClick={() => setActiveIndex(idx)}
//                             className={`
//                 flex items-center gap-3 text-left
//                 bg-white/80 hover:bg-white transition shadow-md
//                 rounded-full pl-3 pr-6 py-2 w-44
//                 border-2 ${activeIndex === idx ? "border-[#f68c2c] ring-2 ring-[#f68c2c]" : "border-transparent"}
//                 ${activeIndex === idx ? "opacity-100" : "opacity-60 hover:opacity-90"}
//               `}
//                         >
//                             <img
//                                 src={product.thumb}
//                                 alt={product.name}
//                                 className="w-10 h-10 rounded-full object-cover"
//                                 style={{ opacity: activeIndex === idx ? 1 : 0.7 }}
//                             />
//                             <div className="flex flex-col">
//                                 <span className="font-bold text-xs text-black leading-tight">
//                                     {product.name}
//                                 </span>
//                                 <span className="text-gray-400 text-[10px] font-mono mt-1">#SKU: {product.sku}</span>
//                             </div>
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             {/* Bottom thumbnails for mobile/tablet */}
//             <div className="fixed z-30 bottom-3 left-0 right-0 flex md:hidden justify-center gap-3">
//                 {products.map((product, idx) => (
//                     <button
//                         key={product.id}
//                         onClick={() => setActiveIndex(idx)}
//                         className={`w-14 h-14 rounded-full overflow-hidden shadow border-2 ${idx === activeIndex
//                             ? "border-orange-500 opacity-100"
//                             : "border-transparent opacity-60"
//                             }`}
//                     >
//                         <img
//                             src={product.thumb}
//                             alt={product.name}
//                             className="w-full h-full object-cover"
//                         />
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slideshow;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Images from "../assets/images"; // Use your image imports here

// const products = [
//     {
//         id: 1,
//         name: "LINAS CREW",
//         desc: "minimalist. creative. flexible",
//         price: "$183.76",
//         sku: "su1",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "UNA CHAIR",
//         desc: "modern. stylish. elegant",
//         price: "$210.50",
//         sku: "su2",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "ZEN CLOCK",
//         desc: "calm. focused. timeless",
//         price: "$159.90",
//         sku: "su3",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const AurosSlideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Auto slide every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prev) => (prev + 1) % products.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const activeProduct = products[activeIndex];

//     return (
//         <div className="min-h-screen bg-[#c7e4e4] flex items-center relative overflow-x-hidden">
//             {/* Left Content */}
//             <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center z-10">
//                 <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6 tracking-tight">
//                     {activeProduct.name.split(" ")[0]}
//                     <br className="hidden md:block" />
//                     {activeProduct.name.split(" ")[1]}
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-8 font-medium">{activeProduct.desc}</p>
//                 <button className="w-fit bg-[#f68c2c] text-white px-9 py-3 rounded font-semibold shadow hover:bg-[#db7903] transition mb-14">
//                     Discover Now
//                 </button>
//             </div>

//             {/* Main Image Section */}
//             <div className="flex-1 flex justify-center items-center relative">
//                 {/* White Blob Background */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[475px] bg-white rounded-[38%_55%_62%_40%/58%_51%_70%_55%] shadow-md -z-10"></div>

//                 {/* Product Image */}
//                 <div className="relative w-[510px] h-[430px] flex justify-center items-center">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={activeProduct.id}
//                             src={activeProduct.image}
//                             alt={activeProduct.name}
//                             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                             animate={{ opacity: 1, scale: 1, y: 0 }}
//                             exit={{ opacity: 0, scale: 1.1, y: -20 }}
//                             transition={{ duration: 0.55, ease: "easeInOut" }}
//                             className="w-full h-full object-contain select-none cursor-default"
//                             draggable={false}
//                             style={{ borderRadius: "28% 44% 42% 56%/44% 36% 58% 38%" }}
//                         />
//                     </AnimatePresence>

//                     {/* Price Label bottom-right */}
//                     <div className="absolute bottom-6 right-10 text-right">
//                         <div className="text-xs text-gray-500 tracking-widest uppercase font-semibold mb-1">
//                             Price
//                         </div>
//                         <div className="text-2xl font-bold">{activeProduct.price}</div>
//                     </div>

//                     {/* Right Side Floating Card */}
//                     <div className="absolute right-[-55px] top-12 flex flex-col items-end z-30">
//                         {/* Active product card */}
//                         <div className="relative bg-white shadow-xl rounded-[52px] flex items-center px-9 py-3 min-w-[250px]">
//                             {/* Circular thumb with ring */}
//                             <img
//                                 src={activeProduct.thumb}
//                                 alt={activeProduct.name}
//                                 className="w-16 h-16 rounded-full object-cover ring-4 ring-white absolute -left-10 top-1/2 -translate-y-1/2 shadow-md"
//                             />
//                             <div className="ml-16">
//                                 <div className="font-bold text-lg text-gray-900">{activeProduct.name}</div>
//                                 <div className="text-gray-400 text-xs font-mono mt-1">#SKU: {activeProduct.sku}</div>
//                             </div>
//                         </div>

//                         {/* Vertical thumbnails */}
//                         <div className="flex flex-col gap-6 mt-7 items-end">
//                             {products.map(
//                                 (product, idx) =>
//                                     idx !== activeIndex && (
//                                         <button
//                                             key={product.id}
//                                             onClick={() => setActiveIndex(idx)}
//                                             className="bg-white/90 hover:bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center transition duration-300"
//                                         >
//                                             <img
//                                                 src={product.thumb}
//                                                 alt={product.name}
//                                                 className="w-10 h-10 rounded-full object-cover opacity-60"
//                                                 style={{ filter: "blur(1.5px)" }}
//                                             />
//                                         </button>
//                                     )
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AurosSlideshow;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Images from "../assets/images"; // your image imports

// const products = [
//     {
//         id: 1,
//         name: "LINAS CREW",
//         desc: "minimalist. creative. flexible",
//         price: "$183.76",
//         sku: "su1",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "UNA CHAIR",
//         desc: "modern. stylish. elegant",
//         price: "$210.50",
//         sku: "su2",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "ZEN CLOCK",
//         desc: "calm. focused. timeless",
//         price: "$159.90",
//         sku: "su3",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const AurosSlideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Auto slide every 5s
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prev) => (prev + 1) % products.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const activeProduct = products[activeIndex];

//     return (
//         <div className="min-h-screen flex items-center justify-between bg-[#c7e4e4] px-8 md:px-16 relative overflow-hidden">
//             {/* Left Content */}
//             <div className="flex-1 flex flex-col justify-center max-w-lg z-10">
//                 <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-4 tracking-tight text-gray-900">
//                     {activeProduct.name.split(" ")[0]}{" "}
//                     <br />
//                     {activeProduct.name.split(" ")[1]}
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-8 font-medium">
//                     {activeProduct.desc}
//                 </p>
//                 <button className="bg-[#e05b1c] text-white px-8 py-3 rounded font-semibold shadow hover:bg-[#d14c0f] transition">
//                     Discover Now
//                 </button>
//             </div>

//             {/* Right Content */}
//             <div className="flex-1 flex justify-center items-center relative">
//                 {/* White blob background */}
//                 <div className="absolute w-[600px] h-[480px] bg-white rounded-[40%_60%_60%_40%/55%_45%_70%_50%] -z-10"></div>

//                 {/* Product Image */}
//                 <div className="relative w-[450px] h-[420px] flex justify-center items-center">
//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={activeProduct.id}
//                             src={activeProduct.image}
//                             alt={activeProduct.name}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.6, ease: "easeInOut" }}
//                             className="w-full h-full object-contain select-none"
//                             draggable={false}
//                         />
//                     </AnimatePresence>

//                     {/* Price */}
//                     <div className="absolute bottom-6 right-8 text-right">
//                         <div className="uppercase text-[11px] text-gray-500 tracking-widest mb-1">
//                             Price
//                         </div>
//                         <div className="text-2xl font-bold text-gray-900">
//                             {activeProduct.price}
//                         </div>
//                     </div>

//                     {/* Right floating card + thumbnails */}
//                     <div className="absolute right-[-80px] top-16 flex flex-col items-end gap-6">
//                         {/* Active Card */}
//                         <div className="bg-white shadow-md rounded-full flex items-center px-6 py-2 min-w-[230px] relative">
//                             <img
//                                 src={activeProduct.thumb}
//                                 alt={activeProduct.name}
//                                 className="w-14 h-14 rounded-full object-cover ring-2 ring-white absolute -left-7 top-1/2 -translate-y-1/2"
//                             />
//                             <div className="ml-10">
//                                 <div className="font-bold text-gray-900 text-sm">
//                                     {activeProduct.name}
//                                 </div>
//                                 <div className="text-gray-400 text-xs font-mono">
//                                     #SKU: {activeProduct.sku}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Thumbnails */}
//                         {products.map(
//                             (product, idx) =>
//                                 idx !== activeIndex && (
//                                     <button
//                                         key={product.id}
//                                         onClick={() => setActiveIndex(idx)}
//                                         className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md hover:opacity-100 transition"
//                                     >
//                                         <img
//                                             src={product.thumb}
//                                             alt={product.name}
//                                             className="w-10 h-10 rounded-full object-cover opacity-50 hover:opacity-100 transition"
//                                         />
//                                     </button>
//                                 )
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AurosSlideshow;





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Images from '../assets/images';

// const products = [
//     {
//         id: 1,
//         name: "UNA CHAIR",
//         desc: "minimalist. creative. flexible",
//         price: "$102.84",
//         sku: "B02",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "TEAPOT",
//         desc: "modern. stylish. elegant",
//         price: "$120.05",
//         sku: "B03",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "LINAS CREW",
//         desc: "calm. focused. timeless",
//         price: "$183.76",
//         sku: "B04",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];

//     return (
//         <div className="w-full min-h-screen flex items-center justify-center p-6 bg-white font-sans">
//             <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center relative">

//                 {/* LEFT CONTENT */}
//                 <div className="flex-1 text-center lg:text-left space-y-6 z-10 p-4 lg:p-0">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -50 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//                                 {activeProduct.name}
//                             </h1>
//                             <p className="text-lg md:text-xl text-gray-600 mb-6">
//                                 {activeProduct.desc}
//                             </p>
//                             <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
//                                 Discover Now
//                             </button>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* RIGHT CONTENT - Main Product Image */}
//                 <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0 p-4">
//                     {/* Main Product Image (Placeholder) */}
//                     <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.img
//                                 key={activeProduct.id}
//                                 src={activeProduct.image}
//                                 alt={activeProduct.name}
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                                 className="w-4/5 object-contain"
//                             />
//                         </AnimatePresence>
//                     </div>

//                     {/* PRICE CARD */}
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 text-center">
//                         <AnimatePresence>
//                             <motion.div
//                                 key={activeProduct.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <p className="text-4xl font-extrabold text-gray-800">{activeProduct.price}</p>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {/* THUMBNAILS - Side Navigation in a circle */}
//                     <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
//                         {products.map((product, index) => (
//                             <button
//                                 key={product.id}
//                                 onClick={() => setActiveIndex(index)}
//                                 className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${index === activeIndex
//                                     ? "border-black scale-110"
//                                     : "border-transparent opacity-50 hover:opacity-80"
//                                     }`}
//                             >
//                                 <img
//                                     src={product.thumb}
//                                     alt={product.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slideshow;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Images from '../assets/images';

// const products = [
//     {
//         id: 1,
//         name: "UNA CHAIR",
//         desc: "minimalist. creative. flexible",
//         price: "$102.84",
//         sku: "B02",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "TEAPOT",
//         desc: "modern. stylish. elegant",
//         price: "$120.05",
//         sku: "B03",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "LINAS CREW",
//         desc: "calm. focused. timeless",
//         price: "$183.76",
//         sku: "B04",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];

//     return (
//         <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100 font-sans relative">

//             {/* Main Content Area */}
//             <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10">

//                 {/* LEFT CONTENT */}
//                 <div className="flex-1 text-center lg:text-left space-y-6 p-4 lg:p-0">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -50 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//                                 {activeProduct.name}
//                             </h1>
//                             <p className="text-lg md:text-xl text-gray-600 mb-6">
//                                 {activeProduct.desc}
//                             </p>
//                             <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
//                                 Discover Now
//                             </button>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* RIGHT CONTENT - Main Product Image & Price */}
//                 <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0 p-4">
//                     {/* WHITE ROUND BACKGROUND */}
//                     <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.img
//                                 key={activeProduct.id}
//                                 src={activeProduct.image}
//                                 alt={activeProduct.name}
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                                 className="w-4/5 object-contain"
//                             />
//                         </AnimatePresence>
//                     </div>

//                     {/* PRICE CARD */}
//                     <AnimatePresence>
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.5 }}
//                             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 text-center"
//                         >
//                             <p className="text-4xl font-extrabold text-gray-800">{activeProduct.price}</p>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>

//             {/* THUMBNAILS - Right Side Vertical Sidebar */}
//             <div className="hidden md:flex flex-col items-center justify-center space-y-4 absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-gray-100 p-4 rounded-lg shadow-lg">
//                 {products.map((product, index) => (
//                     <button
//                         key={product.id}
//                         onClick={() => setActiveIndex(index)}
//                         className={`relative w-24 h-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${index === activeIndex
//                             ? "border-green-500 opacity-100 scale-110"
//                             : "border-transparent opacity-50 hover:opacity-80"
//                             }`}
//                     >
//                         <img
//                             src={product.thumb}
//                             alt={product.name}
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 text-xs font-bold shadow-md">
//                             <span className="text-gray-800">{product.name}</span>
//                         </div>
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slideshow;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Images from '../assets/images';

// const products = [
//     {
//         id: 1,
//         name: "UNA CHAIR",
//         desc: "minimalist. creative. flexible",
//         price: "$102.84",
//         sku: "B02",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "TEAPOT",
//         desc: "modern. stylish. elegant",
//         price: "$120.05",
//         sku: "B03",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "LINAS CREW",
//         desc: "calm. focused. timeless",
//         price: "$183.76",
//         sku: "B04",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];

//     return (
//         <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100 font-sans relative overflow-hidden">

//             {/* Main Content Area */}
//             <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10">

//                 {/* LEFT CONTENT */}
//                 <div className="flex-1 text-center lg:text-left space-y-6 p-4 lg:p-0">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -50 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//                                 {activeProduct.name}
//                             </h1>
//                             <p className="text-lg md:text-xl text-gray-600 mb-6">
//                                 {activeProduct.desc}
//                             </p>
//                             <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
//                                 Discover Now
//                             </button>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* RIGHT CONTENT - Main Product Image & Price */}
//                 <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0 p-4">
//                     {/* WHITE ROUND BACKGROUND */}
//                     <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.img
//                                 key={activeProduct.id}
//                                 src={activeProduct.image}
//                                 alt={activeProduct.name}
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                                 className="w-4/5 object-contain"
//                             />
//                         </AnimatePresence>
//                     </div>

//                     {/* PRICE CARD */}
//                     <AnimatePresence>
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.5 }}
//                             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 text-center"
//                         >
//                             <p className="text-4xl font-extrabold text-gray-800">{activeProduct.price}</p>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>

//             {/* THUMBNAILS - Right Side Vertical Sidebar with Details */}
//             {/* <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-4 rounded-l-lg shadow-lg">
//                 <ul className="space-y-4">
//                     {products.map((product, index) => (
//                         <li key={product.id}>
//                             <button
//                                 onClick={() => setActiveIndex(index)}
//                                 className={`flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 ${index === activeIndex
//                                     ? "bg-gray-100 border-l-4 border-black"
//                                     : "hover:bg-gray-50"
//                                     }`}
//                             >
//                                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent">
//                                     <img
//                                         src={product.thumb}
//                                         alt={product.name}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <div className="text-left">
//                                     <p className="text-sm font-semibold text-gray-800">{product.name}</p>
//                                     <p className="text-xs text-gray-500 mt-1">#{product.sku}</p>
//                                 </div>
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div> */}
//             <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
//                 <ul className="flex flex-col items-end space-y-6">
//                     {products.map((product, index) => (
//                         <li key={product.id}>
//                             <button onClick={() => setActiveIndex(index)}>
//                                 {index === activeIndex ? (
//                                     // Active Product (big card)
//                                     <div className="flex items-center bg-white p-4 rounded-m-6xl shadow-lg space-x-4">
//                                         <div className="w-20 h-20 rounded-full overflow-hidden">
//                                             <img
//                                                 src={product.thumb}
//                                                 alt={product.name}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                         <div className="text-left">
//                                             <p className="text-base font-bold text-gray-800">{product.name}</p>
//                                             <p className="text-xs text-gray-500">#{product.sku}</p>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     // Inactive Products (small circles)
//                                     <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md opacity-80 hover:opacity-100 transition">
//                                         <img
//                                             src={product.thumb}
//                                             alt={product.name}
//                                             className="w-12 h-12 object-cover"
//                                         />
//                                     </div>
//                                 )}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     );
// };

// export default Slideshow;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Images from '../assets/images';

const products = [
    {
        id: 1,
        name: "UNA CHAIR",
        desc: "minimalist. creative. flexible",
        price: "$102.84",
        sku: "B02",
        image: Images.Slide1,
        thumb: Images.Slide1,
    },
    {
        id: 2,
        name: "TEAPOT",
        desc: "modern. stylish. elegant",
        price: "$120.05",
        sku: "B03",
        image: Images.Slide2,
        thumb: Images.Slide2,
    },
    {
        id: 3,
        name: "LINAS CREW",
        desc: "calm. focused. timeless",
        price: "$183.76",
        sku: "B04",
        image: Images.Slide3,
        thumb: Images.Slide3,
    },
];

const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProduct = products[activeIndex];

    // 🔄 Auto slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100 font-sans relative overflow-hidden">

            {/* Main Content Area */}
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left space-y-6 p-4 lg:p-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                                {activeProduct.name}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-6">
                                {activeProduct.desc}
                            </p>
                            <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
                                Discover Now
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT CONTENT - Main Product Image & Price */}
                <div className="flex-1 relative flex flex-col items-center justify-center mt-12 lg:mt-0 p-4 space-y-6">
                    {/* WHITE ROUND BACKGROUND */}
                    <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeProduct.id}
                                src={activeProduct.image}
                                alt={activeProduct.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-4/5 object-contain"
                            />
                        </AnimatePresence>
                    </div>

                    {/* PRICE CARD */}
                    <AnimatePresence>
                        <motion.div
                            key={activeProduct.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 text-center"
                        >
                            <p className="text-4xl font-extrabold text-gray-800">{activeProduct.price}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* THUMBNAILS - Right Side */}
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
                <ul className="flex flex-col items-end space-y-6">
                    {products.map((product, index) => (
                        <li key={product.id}>
                            <button onClick={() => setActiveIndex(index)}>
                                {index === activeIndex ? (
                                    // Active Product (capsule shape card)
                                    <div className="flex items-center bg-white p-4 rounded-l-full shadow-lg space-x-4">
                                        <div className="w-20 h-20 rounded-full overflow-hidden">
                                            <img
                                                src={product.thumb}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-base font-bold text-gray-800">{product.name}</p>
                                            <p className="text-xs text-gray-500">#{product.sku}</p>
                                        </div>
                                    </div>
                                ) : (
                                    // Inactive Products (small circles)
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md opacity-50 hover:opacity-100 transition">
                                        <img
                                            src={product.thumb}
                                            alt={product.name}
                                            className="w-12 h-12 object-cover"
                                        />
                                    </div>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Slideshow;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Images from '../assets/images';

// const products = [
//     {
//         id: 1,
//         name: "UNA CHAIR",
//         desc: "minimalist. creative. flexible",
//         price: "$102.84",
//         sku: "B02",
//         image: Images.Slide1,
//         thumb: Images.Slide1,
//     },
//     {
//         id: 2,
//         name: "TEAPOT",
//         desc: "modern. stylish. elegant",
//         price: "$120.05",
//         sku: "B03",
//         image: Images.Slide2,
//         thumb: Images.Slide2,
//     },
//     {
//         id: 3,
//         name: "LINAS CREW",
//         desc: "calm. focused. timeless",
//         price: "$183.76",
//         sku: "B04",
//         image: Images.Slide3,
//         thumb: Images.Slide3,
//     },
// ];

// const Slideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const activeProduct = products[activeIndex];

//     // 🔄 Auto slideshow
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) =>
//                 prevIndex === products.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 4000); // 4 seconds
//         return () => clearInterval(interval);
//     }, []);

//     const handleThumbnailClick = (index) => {
//         setActiveIndex(index);
//     };

//     return (
//         <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100 font-sans relative overflow-hidden">

//             {/* Main Content Area */}
//             <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10">

//                 {/* LEFT CONTENT */}
//                 <div className="flex-1 text-center lg:text-left space-y-6 p-4 lg:p-0">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -30 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                         >
//                             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//                                 {activeProduct.name}
//                             </h1>
//                             <p className="text-lg md:text-xl text-gray-600 mb-6">
//                                 {activeProduct.desc}
//                             </p>
//                             <button className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
//                                 Discover Now
//                             </button>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* RIGHT CONTENT - Main Product Image & Price */}
//                 <div className="flex-1 relative flex flex-col items-center justify-center mt-12 lg:mt-0 p-4 space-y-6">
//                     {/* WHITE ROUND BACKGROUND */}
//                     <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.img
//                                 key={activeProduct.id}
//                                 src={activeProduct.image}
//                                 alt={activeProduct.name}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.9 }}
//                                 transition={{ duration: 0.7, ease: "easeInOut" }}
//                                 className="w-4/5 object-contain"
//                             />
//                         </AnimatePresence>
//                     </div>

//                     {/* PRICE CARD */}
//                     <AnimatePresence>
//                         <motion.div
//                             key={activeProduct.id}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.4 }}
//                             className="p-4 text-center"
//                         >
//                             <p className="text-4xl font-extrabold text-gray-800">{activeProduct.price}</p>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>

//             {/* THUMBNAILS - Right Side Vertical Sidebar with Details */}
//             <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
//                 <ul className="flex flex-col items-end space-y-6">
//                     {products.map((product, index) => (
//                         <li key={product.id}>
//                             <motion.button
//                                 onClick={() => handleThumbnailClick(index)}
//                                 initial={{ x: 50, opacity: 0 }}
//                                 animate={{ x: 0, opacity: 1 }}
//                                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                                 className={`flex items-center space-x-4 p-2 rounded-l-full transition-all duration-300 ${index === activeIndex ? "bg-white shadow-lg" : "hover:bg-gray-100"
//                                     }`}
//                             >
//                                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent">
//                                     <img
//                                         src={product.thumb}
//                                         alt={product.name}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <div className="text-left flex-col pr-4">
//                                     <p className="text-sm font-semibold text-gray-800">{product.name}</p>
//                                     <p className="text-xs text-gray-500 mt-1">#{product.sku}</p>
//                                 </div>
//                             </motion.button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Slideshow;


