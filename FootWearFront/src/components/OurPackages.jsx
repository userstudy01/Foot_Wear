// import { ShoppingCart, Eye, Heart } from "lucide-react";
// import images from "../assets/images";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const products = [
//     {
//         id: 1,
//         name: "Classic White Tennis Sneakers",
//         brand: "SportyFeet",
//         price: 25.0,
//         image: images.Logo,
//         hoverImage: images.Slide1,
//     },
//     {
//         id: 2,
//         name: "Waterproof Hiking Boots",
//         brand: "TrailGear",
//         price: 25.0,
//         image: images.Logo1,
//         hoverImage: images.Slide2,
//     },
//     {
//         id: 3,
//         name: "Classic Leather Sneakers",
//         brand: "UrbanStep",
//         price: 21.0,
//         image: images.Slide1,
//         hoverImage: images.Logo,
//     },
//     {
//         id: 4,
//         name: "High-Top Canvas Sneakers",
//         brand: "TrendyFeet",
//         price: 25.0,
//         image: images.Slide2,
//         hoverImage: images.Logo1,
//     },
// ];

// export default function ProductGrid() {
//     const [hovered, setHovered] = useState(null);

//     return (
//         <div className="w-full px-4 md:px-10 lg:px-20 py-10">

//             <div className="text-center max-w-2xl mx-auto mb-12">
//                 <p className="text-sm tracking-widest uppercase text-gray-00">
//                     The latest trends in athletic footwear
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-bold mt-2">
//                     Sneakers & Kicks
//                 </h2>
//             </div>

//             <div className="flex justify-center space-x-6 border-b border-gray-300 mb-8">
//                 <button className="pb-2 border-b-2 border-black font-medium">FEATURED</button>

//                 <button className="pb-2 hover:border-b-2 hover:border-black font-medium text-gray-500">
//                     BEST SELLER
//                 </button>
//                 <button className="pb-2 hover:border-b-2 hover:border-black font-medium text-gray-500">
//                     BEST SELLER
//                 </button>
//             </div>
//             {/* Product Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
//                         onMouseEnter={() => setHovered(product.id)}
//                         onMouseLeave={() => setHovered(null)}
//                     >
//                         {/* Image */}
//                         {/* <div className="flex items-center justify-center h-60 w-full bg-gray-50">
//                             <img
//                                 src={hovered === product.id ? product.hoverImage : product.image}
//                                 alt={product.name}
//                                 className="max-h-full max-w-full object-contain"
//                             />
//                         </div> */}

//                         <Link to={`/product/${product.id}`}>
//                             <div className="flex items-center justify-center h-60 w-full bg-gray-50">
//                                 <img
//                                     src={hovered === product.id ? product.hoverImage : product.image}
//                                     alt={product.name}
//                                     className="max-h-full max-w-full object-contain"
//                                 />
//                             </div>
//                         </Link>
//                         {/*
//                         <div className="flex items-center justify-center h-60 w-full bg-gray-50">
//                             <Link to={`/product/${product.id}`}>
//                                 <img
//                                     src={hovered === product.id ? product.hoverImage : product.image}
//                                     alt={product.name}
//                                     className="max-h-full max-w-full object-contain cursor-pointer"
//                                 />
//                             </Link>
//                         </div> */}

//                         {/* Info */}
//                         <div className="p-4 text-center">
//                             <p className="text-gray-800 font-medium">
//                                 ${product.price.toFixed(2)}
//                             </p>
//                             <h3 className="text-base font-semibold text-red-600">
//                                 {product.name}
//                             </h3>
//                             <p className="text-sm text-gray-500">{product.brand}</p>
//                         </div>

//                         {/* Actions row (hover par visible) */}
//                         <div
//                             className="flex items-center justify-between px-4 py-3 border-t
//     opacity-0 group-hover:opacity-100
//     translate-y-3 group-hover:translate-y-0
//     transition-all duration-300"
//                         >
//                             {/* Add to Cart */}
//                             <button
//                                 className="flex items-center gap-2 text-sm font-medium
//       border border-gray-300 rounded-md px-4 py-2
//       bg-black text-white hover:bg-gray-800 transition"
//                             >
//                                 <ShoppingCart size={16} /> ADD TO CART
//                             </button>

//                             {/* Icons */}
//                             <div className="flex gap-3">
//                                 <button className="border border-gray-300 p-2 rounded-full text-gray-600 hover:text-black hover:border-black transition">
//                                     <Eye size={18} />
//                                 </button>
//                                 <button className="border border-gray-300 p-2 rounded-full text-gray-600 hover:text-black hover:border-black transition">
//                                     <Heart size={18} />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* <div
//                             className="flex items-center justify-between px-4 py-3 border-t
//               opacity-0 group-hover:opacity-100
//               translate-y-3 group-hover:translate-y-0
//               transition-all duration-300"
//                         >
//                             <button
//                                 className="flex items-center gap-2 text-sm font-medium
//                 bg-black text-white px-4 py-2 rounded-md
//                 hover:bg-gray-800 transition"
//                             >
//                                 <ShoppingCart size={16} /> ADD TO CART
//                             </button>

//                             <div className="flex gap-3">
//                                 <button className="text-gray-600 hover:text-black">
//                                     <Eye size={18} />
//                                 </button>
//                                 <button className="text-gray-600 hover:text-black">
//                                     <Heart size={18} />
//                                 </button>
//                             </div>
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// import { ShoppingCart, Eye, Heart } from "lucide-react";
// import images from "../assets/images";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const products = [
//   {
//     id: 1,
//     name: "Classic White Tennis Sneakers",
//     brand: "SportyFeet",
//     price: 25.0,
//     image: images.Logo,
//     hoverImage: images.Slide1,
//   },
//   {
//     id: 2,
//     name: "Waterproof Hiking Boots",
//     brand: "TrailGear",
//     price: 25.0,
//     image: images.Logo1,
//     hoverImage: images.Slide2,
//   },
//   {
//     id: 3,
//     name: "Classic Leather Sneakers",
//     brand: "UrbanStep",
//     price: 21.0,
//     image: images.Slide1,
//     hoverImage: images.Logo,
//   },
//   {
//     id: 4,
//     name: "High-Top Canvas Sneakers",
//     brand: "TrendyFeet",
//     price: 25.0,
//     image: images.Slide2,
//     hoverImage: images.Logo1,
//   },
// ];

// const iconVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
//   }),
// };

// export default function ProductGrid() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="w-full px-4 md:px-10 lg:px-20 py-10">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <p className="text-sm tracking-widest uppercase text-gray-500">
//           The latest trends in athletic footwear
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">Sneakers & Kicks</h2>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
//             onMouseEnter={() => setHovered(product.id)}
//             onMouseLeave={() => setHovered(null)}
//             whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
//             transition={{ type: "spring", stiffness: 200, damping: 12 }}
//           >
//             {/* Image */}
//             <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
//               <motion.img
//                 src={hovered === product.id ? product.hoverImage : product.image}
//                 alt={product.name}
//                 className="max-h-full max-w-full object-contain transition-transform duration-500"
//                 animate={hovered === product.id ? { y: [-5, 5, -5] } : { y: 0 }}
//                 transition={{ repeat: hovered === product.id ? Infinity : 0, duration: 3 }}
//               />

//               {/* Overlay Icons */}
//               {hovered === product.id && (
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   {[<ShoppingCart />, <Eye />, <Heart />].map((icon, i) => (
//                     <motion.button
//                       key={i}
//                       variants={iconVariants}
//                       custom={i}
//                       initial="hidden"
//                       animate="visible"
//                       whileHover={{ scale: 1.2, rotate: i === 2 ? -15 : 10 }}
//                       className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100"
//                     >
//                       {icon}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </div>

//             {/* Info */}
//             <div className="p-4 text-center">
//               <p className="text-gray-800 font-medium">
//                 ${product.price.toFixed(2)}
//               </p>
//               <h3 className="text-base font-semibold text-red-600">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-500">{product.brand}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { ShoppingCart, Eye, Heart } from "lucide-react";
// import images from "../assets/images";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const products = [
//   {
//     id: 1,
//     name: "Classic White Tennis Sneakers",
//     brand: "SportyFeet",
//     price: 25.0,
//     image: images.Logo,
//     hoverImage: images.Slide1,
//   },
//   {
//     id: 2,
//     name: "Waterproof Hiking Boots",
//     brand: "TrailGear",
//     price: 25.0,
//     image: images.Logo1,
//     hoverImage: images.Slide2,
//   },
//   {
//     id: 3,
//     name: "Classic Leather Sneakers",
//     brand: "UrbanStep",
//     price: 21.0,
//     image: images.Slide1,
//     hoverImage: images.Logo,
//   },
//   {
//     id: 4,
//     name: "High-Top Canvas Sneakers",
//     brand: "TrendyFeet",
//     price: 25.0,
//     image: images.Slide2,
//     hoverImage: images.Logo1,
//   },
// ];

// // positions around circle
// const positions = [
//   { x: -60, y: 0, color: "#2563eb" }, // Cart → blue
//   { x: 0, y: -60, color: "#16a34a" }, // Eye → green
//   { x: 60, y: 0, color: "#dc2626" }, // Heart → red
// ];

// export default function ProductGrid() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="w-full px-4 md:px-10 lg:px-20 py-10">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <p className="text-sm tracking-widest uppercase text-gray-500">
//           The latest trends in athletic footwear
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">Sneakers & Kicks</h2>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
//             onMouseEnter={() => setHovered(product.id)}
//             onMouseLeave={() => setHovered(null)}
//             whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           >
//             {/* Image */}
//             <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
//               <motion.img
//                 src={hovered === product.id ? product.hoverImage : product.image}
//                 alt={product.name}
//                 className="max-h-full max-w-full object-contain transition-transform duration-500"
//                 animate={hovered === product.id ? { y: [-5, 5, -5] } : { y: 0 }}
//                 transition={{
//                   repeat: hovered === product.id ? Infinity : 0,
//                   duration: 3,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Luxury Circle Icons */}
//               <AnimatePresence>
//                 {hovered === product.id && (
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center bg-black/40"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {[<ShoppingCart />, <Eye />, <Heart />].map((icon, i) => (
//                       <motion.button
//                         key={i}
//                         initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
//                         animate={{
//                           opacity: 1,
//                           scale: 1,
//                           x: positions[i].x,
//                           y: positions[i].y,
//                           rotate: 360,
//                         }}
//                         exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
//                         transition={{
//                           duration: 0.6,
//                           delay: i * 0.15,
//                           ease: "easeOut",
//                         }}
//                         whileHover={{
//                           scale: 1.3,
//                           backgroundColor: positions[i].color,
//                           color: "#fff",
//                           boxShadow: `0 0 15px ${positions[i].color}`,
//                         }}
//                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-xl"
//                       >
//                         {icon}
//                       </motion.button>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Info */}
//             <div className="p-4 text-center">
//               <p className="text-gray-800 font-medium">
//                 ${product.price.toFixed(2)}
//               </p>
//               <h3 className="text-base font-semibold text-red-600">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-500">{product.brand}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { ShoppingCart, Eye, Heart } from "lucide-react";
// import images from "../assets/images";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const products = [
//   {
//     id: 1,
//     name: "Classic White Tennis Sneakers",
//     brand: "SportyFeet",
//     price: 25.0,
//     image: images.Logo,
//     hoverImage: images.Slide1,
//   },
//   {
//     id: 2,
//     name: "Waterproof Hiking Boots",
//     brand: "TrailGear",
//     price: 25.0,
//     image: images.Logo1,
//     hoverImage: images.Slide2,
//   },
//   {
//     id: 3,
//     name: "Classic Leather Sneakers",
//     brand: "UrbanStep",
//     price: 21.0,
//     image: images.Slide1,
//     hoverImage: images.Logo,
//   },
//   {
//     id: 4,
//     name: "High-Top Canvas Sneakers",
//     brand: "TrendyFeet",
//     price: 25.0,
//     image: images.Slide2,
//     hoverImage: images.Logo1,
//   },
// ];

// // parent container with stagger
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 },
//   },
//   exit: { opacity: 0 },
// };

// // icon animations → slide-in from left
// const iconVariants = {
//   hidden: { opacity: 0, x: -40, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
//   exit: { opacity: 0, x: -20, scale: 0.8, transition: { duration: 0.3 } },
// };

// export default function ProductGrid() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="w-full px-4 md:px-10 lg:px-20 py-10">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <p className="text-sm tracking-widest uppercase text-gray-500">
//           The latest trends in athletic footwear
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">Sneakers & Kicks</h2>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
//             onMouseEnter={() => setHovered(product.id)}
//             onMouseLeave={() => setHovered(null)}
//             whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           >
//             {/* Image */}
//             <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
//               <motion.img
//                 src={hovered === product.id ? product.hoverImage : product.image}
//                 alt={product.name}
//                 className="max-h-full max-w-full object-contain transition-transform duration-500"
//                 animate={hovered === product.id ? { y: [-5, 5, -5] } : { y: 0 }}
//                 transition={{
//                   repeat: hovered === product.id ? Infinity : 0,
//                   duration: 3,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Straight Line Icons with slide-in from left */}
//               <AnimatePresence>
//                 {hovered === product.id && (
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center bg-black/40"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                   >
//                     <div className="flex gap-5">
//                       {/* Cart */}
//                       <motion.button
//                         variants={iconVariants}
//                         whileHover={{
//                           scale: 1.2,
//                           backgroundColor: "#2563eb",
//                           color: "#fff",
//                           boxShadow: "0 0 12px #2563eb",
//                         }}
//                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                       >
//                         <ShoppingCart size={20} />
//                       </motion.button>

//                       {/* Eye */}
//                       <motion.button
//                         variants={iconVariants}
//                         whileHover={{
//                           scale: 1.2,
//                           backgroundColor: "#16a34a",
//                           color: "#fff",
//                           boxShadow: "0 0 12px #16a34a",
//                         }}
//                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                       >
//                         <Eye size={20} />
//                       </motion.button>

//                       {/* Heart */}
//                       <motion.button
//                         variants={iconVariants}
//                         whileHover={{
//                           scale: [1, 1.3, 1],
//                           backgroundColor: "#dc2626",
//                           color: "#fff",
//                           boxShadow: "0 0 12px #dc2626",
//                         }}
//                         transition={{ duration: 0.6 }}
//                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                       >
//                         <Heart size={20} />
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Info */}
//             <div className="p-4 text-center">
//               <p className="text-gray-800 font-medium">
//                 ${product.price.toFixed(2)}
//               </p>
//               <h3 className="text-base font-semibold text-red-600">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-500">{product.brand}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { ShoppingCart, Eye, Heart } from "lucide-react";
import images from "../assets/images";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: 25.0,
    image: images.Logo,
    hoverImage: images.Slide1,
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: 25.0,
    image: images.Logo1,
    hoverImage: images.Slide2,
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: 21.0,
    image: images.Slide1,
    hoverImage: images.Logo,
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: 25.0,
    image: images.Slide2,
    hoverImage: images.Logo1,
  },
];

// parent with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

// icon bottom slide-up animation
const iconVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.3 } },
};

// Parent variant (stagger control)
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// Child variant (for each text)
const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm tracking-widest uppercase text-gray-500">
          The latest trends in athletic footwear
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Sneakers & Kicks
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Image */}
            <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
              <motion.img
                src={
                  hovered === product.id ? product.hoverImage : product.image
                }
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500"
                animate={hovered === product.id ? { y: [-5, 5, -5] } : { y: 0 }}
                transition={{
                  repeat: hovered === product.id ? Infinity : 0,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* Straight Line Overlay Icons */}
              <AnimatePresence>
                {hovered === product.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex gap-5">
                      {/* Cart */}
                      <motion.button
                        variants={iconVariants}
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: "#2563eb",
                          color: "#fff",
                          boxShadow: "0 0 12px #2563eb",
                        }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                      >
                        <ShoppingCart size={20} />
                      </motion.button>

                      {/* Eye */}
                      <motion.button
                        variants={iconVariants}
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: "#16a34a",
                          color: "#fff",
                          boxShadow: "0 0 12px #16a34a",
                        }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                      >
                        <Eye size={20} />
                      </motion.button>

                      {/* Heart */}
                      <motion.button
                        variants={iconVariants}
                        whileHover={{
                          scale: [1, 1.3, 1],
                          backgroundColor: "#dc2626",
                          color: "#fff",
                          boxShadow: "0 0 12px #dc2626",
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                      >
                        <Heart size={20} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Info with animated text */}
            {/* Info with animated text */}
            {/* Info with sequence animation */}
            <motion.div
              className="p-4 text-center relative"
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Price */}
              <motion.p
                variants={textItem}
                className="text-gray-800 font-medium"
              >
                ${product.price.toFixed(2)}
              </motion.p>

              {/* Product Name */}
              <motion.h3
                variants={textItem}
                className="text-base font-semibold text-red-600"
                whileHover={{ scale: 1.05, color: "#b91c1c" }}
              >
                {product.name}
              </motion.h3>

              {/* Brand Name */}
              <motion.p
                variants={textItem}
                className="text-sm text-gray-500"
                whileHover={{ color: "#111827" }}
              >
                {product.brand}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
