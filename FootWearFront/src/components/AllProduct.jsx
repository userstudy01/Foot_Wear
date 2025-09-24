import React, { useState } from "react";
import Images from "../assets/images"
import Header from "./Header";

import { ShoppingCart, Eye, Heart } from "lucide-react";

const shoes = [
    { id: 1, name: "Air Max 270", price: "$150", img: Images.Logo },
    { id: 2, name: "Air Force 1", price: "$120", img: Images.Logo1 },
    { id: 3, name: "Jordan 1", price: "$180", img: Images.Slide1 },
    { id: 4, name: "Blazer Mid", price: "$130", img: Images.Slide4 },
    { id: 5, name: "Dunk Low", price: "$110", img: Images.Slide3 },
    { id: 6, name: "Pegasus 40", price: "$140", img: Images.Slide5 },
];

const AllProduct = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    return (

        <>
            <Header />
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Top section */}
                <div className="flex justify-between items-start mb-8">
                    {/* Left Title + Filter */}
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Man Shoes</h1>
                        <button
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="bg-black text-white px-5 py-2 font-semibold"
                        >
                            {filterOpen ? "− Filter" : "+ Filter"}
                        </button>
                    </div>

                    {/* Right side breadcrumbs + sort */}
                    <div className="flex items-center gap-6 text-gray-500 text-sm">
                        <span>Home &gt; Man &gt; Shoes</span>
                        <div>
                            Sort by:{" "}
                            <select className="border-none focus:ring-0 text-black">
                                <option>Popular</option>
                                <option>Newest</option>
                                <option>Price Low to High</option>
                                <option>Price High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Content Row */}
                <div className="flex gap-10">
                    {/* Sidebar */}
                    {/* Sidebar */}
                    {filterOpen && (
                        <div
                            className={`
      bg-white p-6 z-50
      ${/* Mobile = overlay */""}
      fixed inset-0 overflow-y-auto
      lg:static lg:w-64 lg:shrink-0 lg:block
    `}
                        >
                            {/* Close button only visible on mobile */}
                            <div className="flex justify-between items-center mb-4 lg:hidden">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button
                                    onClick={() => setFilterOpen(false)}
                                    className="text-gray-600 text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Filter Content */}
                            <div className="space-y-6 text-sm text-gray-700">
                                <div>
                                    <p className="font-semibold mb-2">New items (11)</p>
                                    <p>Sell-out (32)</p>
                                </div>
                                <div>
                                    <p className="uppercase text-xs font-bold mb-2">Categories</p>
                                    <ul className="space-y-1">
                                        <li>Air Max (65)</li>
                                        <li>Air Force (32)</li>
                                        <li>Air Jordan (1)</li>
                                        <li>Air VaporMax (32)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Shoes Grid */}
                    <div
                        className={`grid gap-10 flex-1 ${filterOpen
                            ? "grid-cols-1 sm:grid-cols-2"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >
                        {shoes.map((shoe) => (
                            <div
                                key={shoe.id}
                                className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
                            >
                                {/* Product Image + Hover Overlay */}
                                <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                                    <img
                                        src={shoe.img}
                                        alt={shoe.name}
                                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Dark overlay on hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                                    {/* Hover Action Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <button className="bg-white rounded-full p-3 shadow hover:bg-gray-100">
                                            <ShoppingCart size={18} />
                                        </button>
                                        <button className="bg-white rounded-full p-3 shadow hover:bg-gray-100">
                                            <Eye size={18} />
                                        </button>
                                        <button className="bg-white rounded-full p-3 shadow hover:bg-gray-100">
                                            <Heart size={18} />
                                        </button>
                                    </div>

                                    {/* SALE / NEW Tag */}
                                    {shoe.tag && (
                                        <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
                                            {shoe.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="mt-3 text-center pb-4">
                                    <h3 className="font-semibold text-base">{shoe.name}</h3>
                                    <div className="flex justify-center items-center gap-2 text-sm">
                                        {shoe.oldPrice && (
                                            <span className="line-through text-gray-400">{shoe.oldPrice}</span>
                                        )}
                                        <span className="font-medium">{shoe.price}</span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default AllProduct