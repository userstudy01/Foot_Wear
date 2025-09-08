import { ShoppingCart, Eye, Heart } from "lucide-react";
import images from "../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";


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

export default function ProductGrid() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="w-full px-4 md:px-10 lg:px-20 py-10">

            <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-sm tracking-widest uppercase text-gray-00">
                    The latest trends in athletic footwear
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Sneakers & Kicks
                </h2>
            </div>

            <div className="flex justify-center space-x-6 border-b border-gray-300 mb-8">
                <button className="pb-2 border-b-2 border-black font-medium">FEATURED</button>

                <button className="pb-2 hover:border-b-2 hover:border-black font-medium text-gray-500">
                    BEST SELLER
                </button>
                <button className="pb-2 hover:border-b-2 hover:border-black font-medium text-gray-500">
                    BEST SELLER
                </button>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                        onMouseEnter={() => setHovered(product.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Image */}
                        {/* <div className="flex items-center justify-center h-60 w-full bg-gray-50">
                            <img
                                src={hovered === product.id ? product.hoverImage : product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div> */}

                        <Link to={`/product/${product.id}`}>
                            <div className="flex items-center justify-center h-60 w-full bg-gray-50">
                                <img
                                    src={hovered === product.id ? product.hoverImage : product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </Link>
                        {/* 
                        <div className="flex items-center justify-center h-60 w-full bg-gray-50">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={hovered === product.id ? product.hoverImage : product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain cursor-pointer"
                                />
                            </Link>
                        </div> */}





                        {/* Info */}
                        <div className="p-4 text-center">
                            <p className="text-gray-800 font-medium">
                                ${product.price.toFixed(2)}
                            </p>
                            <h3 className="text-base font-semibold text-red-600">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500">{product.brand}</p>
                        </div>

                        {/* Actions row (hover par visible) */}
                        <div
                            className="flex items-center justify-between px-4 py-3 border-t 
    opacity-0 group-hover:opacity-100 
    translate-y-3 group-hover:translate-y-0
    transition-all duration-300"
                        >
                            {/* Add to Cart */}
                            <button
                                className="flex items-center gap-2 text-sm font-medium 
      border border-gray-300 rounded-md px-4 py-2
      bg-black text-white hover:bg-gray-800 transition"
                            >
                                <ShoppingCart size={16} /> ADD TO CART
                            </button>

                            {/* Icons */}
                            <div className="flex gap-3">
                                <button className="border border-gray-300 p-2 rounded-full text-gray-600 hover:text-black hover:border-black transition">
                                    <Eye size={18} />
                                </button>
                                <button className="border border-gray-300 p-2 rounded-full text-gray-600 hover:text-black hover:border-black transition">
                                    <Heart size={18} />
                                </button>
                            </div>
                        </div>

                        {/* <div
                            className="flex items-center justify-between px-4 py-3 border-t 
              opacity-0 group-hover:opacity-100 
              translate-y-3 group-hover:translate-y-0
              transition-all duration-300"
                        >
                            <button
                                className="flex items-center gap-2 text-sm font-medium 
                bg-black text-white px-4 py-2 rounded-md 
                hover:bg-gray-800 transition"
                            >
                                <ShoppingCart size={16} /> ADD TO CART
                            </button>

                            <div className="flex gap-3">
                                <button className="text-gray-600 hover:text-black">
                                    <Eye size={18} />
                                </button>
                                <button className="text-gray-600 hover:text-black">
                                    <Heart size={18} />
                                </button>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
