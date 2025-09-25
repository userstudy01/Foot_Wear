// import React, { useState } from "react";
// import Images from "../assets/images";
// import Header from "./Header";
// import Footer from "./Footer";
// import { ShoppingCart, Eye, Heart } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

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

// const shoes = [
//   { id: 1, name: "Air Max 270", price: "$150", img: Images.Logo },
//   { id: 2, name: "Air Force 1", price: "$120", img: Images.Logo1 },
//   { id: 3, name: "Jordan 1", price: "$180", img: Images.Slide1 },
//   { id: 4, name: "Blazer Mid", price: "$130", img: Images.Slide4 },
//   { id: 5, name: "Dunk Low", price: "$110", img: Images.Slide3 },
//   { id: 6, name: "Pegasus 40", price: "$140", img: Images.Slide5 },
//   { id: 7, name: "Classic Leather", price: "$125", img: Images.Slide2 },
//   { id: 8, name: "Sporty Run", price: "$135", img: Images.Slide3 },
//   { id: 9, name: "Street Max", price: "$145", img: Images.Slide4 },
//   { id: 10, name: "Air Max 270", price: "$150", img: Images.Logo },
//   { id: 11, name: "Air Force 1", price: "$120", img: Images.Logo1 },
//   { id: 12, name: "Jordan 1", price: "$180", img: Images.Slide1 },
//   { id: 13, name: "Blazer Mid", price: "$130", img: Images.Slide4 },
//   { id: 14, name: "Dunk Low", price: "$110", img: Images.Slide3 },
//   { id: 15, name: "Pegasus 40", price: "$140", img: Images.Slide5 },
//   { id: 16, name: "Classic Leather", price: "$125", img: Images.Slide2 },
//   { id: 17, name: "Sporty Run", price: "$135", img: Images.Slide3 },
//   { id: 18, name: "Street Max", price: "$145", img: Images.Slide4 },
//   { id: 19, name: "Air Max 270", price: "$150", img: Images.Logo },
//   { id: 20, name: "Air Force 1", price: "$120", img: Images.Logo1 },
//   { id: 21, name: "Jordan 1", price: "$180", img: Images.Slide1 },
//   { id: 22, name: "Blazer Mid", price: "$130", img: Images.Slide4 },
//   { id: 23, name: "Dunk Low", price: "$110", img: Images.Slide3 },
//   { id: 24, name: "Pegasus 40", price: "$140", img: Images.Slide5 },
//   { id: 25, name: "Classic Leather", price: "$125", img: Images.Slide2 },
//   { id: 26, name: "Sporty Run", price: "$135", img: Images.Slide3 },
//   { id: 27, name: "Street Max", price: "$145", img: Images.Slide4 },
// ];

// const AllProduct = () => {
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [showMoreBrands, setShowMoreBrands] = useState(false);
//   const [showMoreColors, setShowMoreColors] = useState(false);
//   const [gridCols, setGridCols] = useState(3); // default 3 columns
//   const [hovered, setHovered] = useState(null);

//   // 👉 Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Pagination logic
//   const totalPages = Math.ceil(shoes.length / itemsPerPage);
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentShoes = shoes.slice(indexOfFirst, indexOfLast);

//   const goToPage = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   // Tailwind classes map for dynamic columns
//   const gridMap = {
//     2: "grid-cols-2",
//     3: "grid-cols-3",
//     4: "grid-cols-4",
//   };

//   const brands = [
//     "AirWalk",
//     "BoldWalks",
//     "ComfortCreek",
//     "CozySteps",
//     "EcoStride",
//     "GlamStep",
//     "LuxeFeet",
//     "ProSteps",
//     "RetroSole",
//     "SimplyShoes",
//     "SportyFeet",
//     "SprintMax",
//     "TrailGear",
//     "TrendyFeet",
//     "UrbanStep",
//   ];

//   const colors = [
//     "black",
//     "blue",
//     "brown",
//     "chocolate",
//     "darkslategray",
//     "deeppink",
//     "gray",
//     "red",
//     "beige",
//     "gold",
//     "purple",
//     "saddlebrown",
//     "white",
//   ];

//   return (
//     <>
//       <Header />
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         {/* Top section */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-2xl font-bold mb-4">Man Shoes</h1>
//             <button
//               onClick={() => setFilterOpen(!filterOpen)}
//               className="bg-black text-white px-5 py-2 font-semibold"
//             >
//               {filterOpen ? "− Filter" : "+ Filter"}
//             </button>
//           </div>

//           {/* Right side */}
//           <div className="flex items-center gap-6 text-gray-500 text-sm">
//             <span>Home &gt; Man &gt; Shoes</span>
//             <div>
//               Sort by:{" "}
//               <select className="border-none focus:ring-0 text-black">
//                 <option>Popular</option>
//                 <option>Newest</option>
//                 <option>Price Low to High</option>
//                 <option>Price High to Low</option>
//               </select>
//             </div>

//             {/* Grid Toggle Buttons */}
//             <div className="flex border rounded overflow-hidden">
//               {[2, 3, 4].map((n) => (
//                 <button
//                   key={n}
//                   onClick={() => setGridCols(n)}
//                   className={`px-4 py-2 text-sm border-r last:border-r-0
//                     ${
//                       gridCols === n
//                         ? "bg-black text-white"
//                         : "bg-white text-gray-600 hover:bg-gray-100"
//                     }`}
//                 >
//                   {"|".repeat(n)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex gap-8">
//           {/* Sidebar Filters (as it is) */}
//           {filterOpen && (
//             <aside className="bg-white rounded-xl shadow-md p-6 w-72 hidden lg:block sticky top-24 h-fit space-y-8">
//               {/* Section: Availability */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
//                   Availability
//                 </h3>
//                 <label className="flex items-center text-gray-600 hover:text-black cursor-pointer mb-2">
//                   <input type="checkbox" className="mr-2" /> In stock (15)
//                 </label>
//                 <label className="flex items-center text-gray-600 hover:text-black cursor-pointer">
//                   <input type="checkbox" className="mr-2" /> Out of stock (10)
//                 </label>
//               </div>

//               {/* Section: Price */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
//                   Price
//                 </h3>
//                 <input
//                   type="range"
//                   min="0"
//                   max="250"
//                   className="w-full accent-black"
//                 />
//                 <div className="flex justify-between text-xs mt-3 text-gray-500">
//                   <input
//                     type="number"
//                     placeholder="0"
//                     className="border p-1 w-16 rounded"
//                   />
//                   <span>-</span>
//                   <input
//                     type="number"
//                     placeholder="250"
//                     className="border p-1 w-16 rounded"
//                   />
//                 </div>
//               </div>

//               {/* Section: Brand */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
//                   Brand
//                 </h3>
//                 <div className="space-y-2">
//                   {brands
//                     .slice(0, showMoreBrands ? brands.length : 6)
//                     .map((b, i) => (
//                       <label
//                         key={i}
//                         className="flex items-center text-gray-600 hover:text-black cursor-pointer"
//                       >
//                         <input type="checkbox" className="mr-2" /> {b}
//                       </label>
//                     ))}
//                 </div>
//                 <button
//                   onClick={() => setShowMoreBrands(!showMoreBrands)}
//                   className="text-sm text-blue-600 mt-2"
//                 >
//                   {showMoreBrands ? "− Show less" : "+ Show more"}
//                 </button>
//               </div>

//               {/* Section: Color */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
//                   Color
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {(showMoreColors ? colors : colors.slice(0, 8)).map(
//                     (c, i) => (
//                       <span
//                         key={i}
//                         className="w-6 h-6 rounded-full border shadow-sm cursor-pointer hover:scale-110 transition"
//                         style={{ backgroundColor: c }}
//                       ></span>
//                     )
//                   )}
//                 </div>
//                 <button
//                   onClick={() => setShowMoreColors(!showMoreColors)}
//                   className="text-sm text-blue-600 mt-2 block"
//                 >
//                   {showMoreColors ? "− Show less" : "+ Show more"}
//                 </button>
//               </div>
//             </aside>
//           )}

//           {/* Product Grid */}
//           <section className={`grid gap-8 flex-1 ${gridMap[gridCols]}`}>
//             {currentShoes.map((shoe) => (
//               <motion.div
//                 key={shoe.id}
//                 className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
//                 onMouseEnter={() => setHovered(shoe.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
//                 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               >
//                 {/* Image */}
//                 <div className="relative h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
//                   <motion.img
//                     src={
//                       hovered === shoe.id
//                         ? shoe.hoverImage || shoe.img
//                         : shoe.img
//                     }
//                     alt={shoe.name}
//                     className="max-h-full max-w-full object-contain transition-transform duration-500"
//                     animate={
//                       hovered === shoe.id ? { y: [-5, 5, -5] } : { y: 0 }
//                     }
//                     transition={{
//                       repeat: hovered === shoe.id ? Infinity : 0,
//                       duration: 3,
//                       ease: "easeInOut",
//                     }}
//                   />

//                   {/* Hover Icons */}
//                   <AnimatePresence>
//                     {hovered === shoe.id && (
//                       <motion.div
//                         className="absolute inset-0 flex items-center justify-center bg-black/40"
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                       >
//                         <div className="flex gap-5">
//                           {/* Cart */}
//                           <motion.button
//                             variants={iconVariants}
//                             whileHover={{
//                               scale: 1.2,
//                               backgroundColor: "#2563eb",
//                               color: "#fff",
//                               boxShadow: "0 0 12px #2563eb",
//                             }}
//                             className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                           >
//                             <ShoppingCart size={20} />
//                           </motion.button>

//                           {/* Eye */}
//                           <motion.button
//                             variants={iconVariants}
//                             whileHover={{
//                               scale: 1.2,
//                               backgroundColor: "#16a34a",
//                               color: "#fff",
//                               boxShadow: "0 0 12px #16a34a",
//                             }}
//                             className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                           >
//                             <Eye size={20} />
//                           </motion.button>

//                           {/* Heart */}
//                           <motion.button
//                             variants={iconVariants}
//                             whileHover={{
//                               scale: [1, 1.3, 1],
//                               backgroundColor: "#dc2626",
//                               color: "#fff",
//                               boxShadow: "0 0 12px #dc2626",
//                             }}
//                             transition={{ duration: 0.6 }}
//                             className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
//                           >
//                             <Heart size={20} />
//                           </motion.button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Info */}
//                 <div className="p-4 text-center">
//                   <p className="text-gray-800 font-medium">{shoe.price}</p>
//                   <h3 className="text-base font-semibold text-red-600">
//                     {shoe.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">Sneakers</p>
//                 </div>
//               </motion.div>
//             ))}
//           </section>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-10 space-x-2">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 rounded ${
//               currentPage === 1
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             Previous
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`px-4 py-2 rounded ${
//                 currentPage === i + 1
//                   ? "bg-black text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`px-4 py-2 rounded ${
//               currentPage === totalPages
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AllProduct;

import React, { useState, useEffect } from "react";
import Images from "../assets/images";
import Header from "./Header";
import Footer from "./Footer";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const shoes = [
  { id: 1, name: "Air Max 270", price: "$150", img: Images.Logo },
  { id: 2, name: "Air Force 1", price: "$120", img: Images.Logo1 },
  { id: 3, name: "Jordan 1", price: "$180", img: Images.Slide1 },
  { id: 4, name: "Blazer Mid", price: "$130", img: Images.Slide4 },
  { id: 5, name: "Dunk Low", price: "$110", img: Images.Slide3 },
  { id: 6, name: "Pegasus 40", price: "$140", img: Images.Slide5 },
  { id: 7, name: "Classic Leather", price: "$125", img: Images.Slide2 },
  { id: 8, name: "Sporty Run", price: "$135", img: Images.Slide3 },
  { id: 9, name: "Street Max", price: "$145", img: Images.Slide4 },
  { id: 10, name: "Air Max 270", price: "$150", img: Images.Logo },
  { id: 11, name: "Air Force 1", price: "$120", img: Images.Logo1 },
  { id: 12, name: "Jordan 1", price: "$180", img: Images.Slide1 },
];

const AllProduct = () => {
  const [gridCols, setGridCols] = useState(3);
  const [hovered, setHovered] = useState(null);

  // 👉 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 👉 Loading state
  const [loading, setLoading] = useState(true);

  // Pagination logic
  const totalPages = Math.ceil(shoes.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // simulate fetch
    return () => clearTimeout(timer);
  }, [currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const gridMap = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  // 👉 Skeleton card
  const SkeletonCard = () => (
    <div className="border border-gray-200 rounded-lg bg-white shadow-md animate-pulse">
      {/* Image Skeleton with Icon */}
      <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96">
        <svg
          class="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      {/* Text Skeletons */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Man Shoes</h1>

          {/* Grid Toggle */}
          <div className="flex border rounded overflow-hidden">
            {[2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setGridCols(n)}
                className={`px-4 py-2 text-sm border-r last:border-r-0
                  ${gridCols === n
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {"|".repeat(n)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <section className={`grid gap-8 flex-1 ${gridMap[gridCols]}`}>
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
            : currentShoes.map((shoe) => (
              <motion.div
                key={shoe.id}
                className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
                onMouseEnter={() => setHovered(shoe.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Image */}
                <div className="relative h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <motion.img
                    src={
                      hovered === shoe.id
                        ? shoe.hoverImage || shoe.img
                        : shoe.img
                    }
                    alt={shoe.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500"
                    animate={
                      hovered === shoe.id ? { y: [-5, 5, -5] } : { y: 0 }
                    }
                    transition={{
                      repeat: hovered === shoe.id ? Infinity : 0,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <p className="text-gray-800 font-medium">{shoe.price}</p>
                  <h3 className="text-base font-semibold text-red-600">
                    {shoe.name}
                  </h3>
                  <p className="text-sm text-gray-500">Sneakers</p>
                </div>
              </motion.div>
            ))}
        </section>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded ${currentPage === i + 1
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProduct;
