import React, { useState } from "react";
import Images from "../assets/images";
import Header from "./Header";
import Footer from "./Footer";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🟢 Shoes data
const shoes = [
  {
    id: 1,
    name: "Air Max 270",
    price: "$150",
    img: Images.Logo,
    hoverImg: Images.Slide1,
  },
  {
    id: 2,
    name: "Air Force 1",
    price: "$120",
    img: Images.Logo1,
    hoverImg: Images.Slide2,
  },
  {
    id: 3,
    name: "Jordan 1",
    price: "$180",
    img: Images.Slide1,
    hoverImg: Images.Logo,
  },
  {
    id: 4,
    name: "Blazer Mid",
    price: "$130",
    img: Images.Slide4,
    hoverImg: Images.Logo1,
  },
  {
    id: 5,
    name: "Dunk Low",
    price: "$110",
    img: Images.Slide3,
    hoverImg: Images.Slide5,
  },
  {
    id: 6,
    name: "Pegasus 40",
    price: "$140",
    img: Images.Slide5,
    hoverImg: Images.Slide4,
  },
];

// parent container with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

// icon animations → slide-in from left
const iconVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -20, scale: 0.8, transition: { duration: 0.3 } },
};

const AllProduct = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreColors, setShowMoreColors] = useState(false);
  const [gridCols, setGridCols] = useState(3);
  const [hovered, setHovered] = useState(null);

  // 👉 Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(shoes.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Tailwind grid map
  const gridMap = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" };

  // filters data
  const brands = [
    "AirWalk",
    "BoldWalks",
    "ComfortCreek",
    "EcoStride",
    "SportyFeet",
    "UrbanStep",
  ];
  const colors = [
    "black",
    "blue",
    "brown",
    "gray",
    "red",
    "white",
    "gold",
    "purple",
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-4">Man Shoes</h1>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-black text-white px-5 py-2 font-semibold"
            >
              {filterOpen ? "− Filter" : "+ Filter"}
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            {/* <div>
              Sort by:{" "}
              <select className="border-none focus:ring-0 text-black">
                <option>Popular</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div> */}

            {/* Grid Toggle */}
            <div className="flex border rounded overflow-hidden">
              {[3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => setGridCols(n)}
                  className={`px-4 py-2 text-sm border-r last:border-r-0 
                    ${
                      gridCols === n
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {"|".repeat(n)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {filterOpen && (
            <aside className="bg-white rounded-xl shadow-md p-6 w-72 hidden lg:block sticky top-24 h-fit space-y-8">
              {/* Availability */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                  Availability
                </h3>
                <label className="flex items-center text-gray-600 hover:text-black cursor-pointer mb-2">
                  <input type="checkbox" className="mr-2" /> In stock (15)
                </label>
                <label className="flex items-center text-gray-600 hover:text-black cursor-pointer">
                  <input type="checkbox" className="mr-2" /> Out of stock (10)
                </label>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                  Price
                </h3>
                <input
                  type="range"
                  min="0"
                  max="250"
                  className="w-full accent-black"
                />
                <div className="flex justify-between text-xs mt-3 text-gray-500">
                  <input
                    type="number"
                    placeholder="0"
                    className="border p-1 w-16 rounded"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="250"
                    className="border p-1 w-16 rounded"
                  />
                </div>
              </div>

              {/* Brand */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                  Brand
                </h3>
                <div className="space-y-2">
                  {brands
                    .slice(0, showMoreBrands ? brands.length : 6)
                    .map((b, i) => (
                      <label
                        key={i}
                        className="flex items-center text-gray-600 hover:text-black cursor-pointer"
                      >
                        <input type="checkbox" className="mr-2" /> {b}
                      </label>
                    ))}
                </div>
                <button
                  onClick={() => setShowMoreBrands(!showMoreBrands)}
                  className="text-sm text-blue-600 mt-2"
                >
                  {showMoreBrands ? "− Show less" : "+ Show more"}
                </button>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                  Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(showMoreColors ? colors : colors.slice(0, 6)).map(
                    (c, i) => (
                      <span
                        key={i}
                        className="w-6 h-6 rounded-full border shadow-sm cursor-pointer hover:scale-110 transition"
                        style={{ backgroundColor: c }}
                      ></span>
                    )
                  )}
                </div>
                <button
                  onClick={() => setShowMoreColors(!showMoreColors)}
                  className="text-sm text-blue-600 mt-2 block"
                >
                  {showMoreColors ? "− Show less" : "+ Show more"}
                </button>
              </div>
            </aside>
          )}

          {/* Product Grid with motion hover */}
          <section className={`grid gap-8 flex-1 ${gridMap[gridCols]}`}>
            {currentShoes.map((shoe) => (
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
                      hovered === shoe.id ? shoe.hoverImg || shoe.img : shoe.img
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

                  {/* Hover Icons */}
                  <AnimatePresence>
                    {hovered === shoe.id && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/40"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="flex gap-5">
                          <motion.button
                            variants={iconVariants}
                            whileHover={{
                              scale: 1.2,
                              backgroundColor: "#2563eb",
                              color: "#fff",
                            }}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                          >
                            <ShoppingCart size={18} />
                          </motion.button>
                          <motion.button
                            variants={iconVariants}
                            whileHover={{
                              scale: 1.2,
                              backgroundColor: "#16a34a",
                              color: "#fff",
                            }}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                          >
                            <Eye size={18} />
                          </motion.button>
                          <motion.button
                            variants={iconVariants}
                            whileHover={{
                              scale: [1, 1.3, 1],
                              backgroundColor: "#dc2626",
                              color: "#fff",
                            }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                          >
                            <Heart size={18} />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {shoe.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-base">{shoe.price}</p>
                </div>
              </motion.div>
            ))}
          </section>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
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
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
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
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
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
