import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

const SearchPopup = ({ isOpen, onClose }) => {
    const inputRef = useRef(null); // declare the ref

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus(); // auto focus inside popup input
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const trendingTags = ["Nike", "Puma", "Adidas"];
    const trendingSearches = [
        { Brand: "Nike" },
        { Brand: "Nike" },
        { Brand: "Puma" },
        { Brand: "Puma" },
        { Brand: "Adidas" },
        { Brand: "Adidas" },
        {
            Brand: "Nike",
            Model: "Air Force 1",
            rating: "Classic look; works with many outfits; many colorways.",
            cover: "https://via.placeholder.com/80x100",
        },
        {
            Brand: "Nike",
            Model: "Dunk Low",
            rating: "Good streetwear appeal; retro vibes",
            cover: "https://via.placeholder.com/80x100",
        },
        {
            Brand: "Nike",
            Model: "Air Max (various)",
            rating: "4.2",
            cover: "https://via.placeholder.com/80x100",
        },
        {
            Brand: "Puma",
            Model: "Speedcat OG / Speedcat line",
            rating: "4.2",
            cover: "https://via.placeholder.com/80x100",
        },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col p-6 overflow-y-auto transition-opacity duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-xl font-semibold">Search</h2>
                <button onClick={onClose} className="text-white hover:text-gray-400">
                    <X size={28} />
                </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center w-full mb-8">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for a book title, series, author, narrator or tag."
                    className="w-full bg-black border border-gray-600 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            {/* Trending Tags */}
            <div className="mb-8">
                <h3 className="text-gray-300 text-lg mb-3">Trending tags</h3>
                <div className="flex flex-wrap gap-3">
                    {trendingTags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Trending Searches */}
            <div>
                <h3 className="text-gray-300 text-lg mb-4">Trending searches</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trendingSearches.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 text-white rounded-lg p-4 flex items-center gap-4 hover:bg-gray-800 cursor-pointer"
                        >
                            {item.cover ? (
                                <img
                                    src={item.cover}
                                    alt={item.Brand}
                                    className="w-16 h-20 object-cover rounded"
                                />
                            ) : (
                                <div className="w-16 h-20 bg-gray-700 flex items-center justify-center rounded">
                                    <span className="text-lg font-bold">
                                        {item.Brand.slice(0, 2)}
                                    </span>
                                </div>
                            )}
                            <div>
                                <h4 className="font-semibold">{item.Brand}</h4>
                                {item.author && (
                                    <p className="text-sm text-gray-400">{item.author}</p>
                                )}
                                {item.rating && (
                                    <span className="text-yellow-400 text-xs">
                                        ⭐ {item.rating}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4">
                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                    View all search results
                </button>
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
                    Subscribe now
                </button>
            </div>
        </div>
    );
};

export default SearchPopup;
