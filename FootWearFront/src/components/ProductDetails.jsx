import { useState } from "react";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";


const ProductDetails = () => {
    const [size, setSize] = useState("S");
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side - Product Image */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co/vv8DFLj/shoes.png"
                        alt="Sneakers"
                        className="w-full object-cover rounded-md"
                    />
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Right Side - Product Info */}
                <div>
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-4">
                        <a href="/" className="hover:underline text-yellow-500">Home</a> / Classic White Tennis Sneakers
                    </nav>

                    {/* Title */}
                    <h1 className="text-2xl font-semibold mb-2">Classic White Tennis Sneakers</h1>
                    <p className="text-lg font-medium mb-6">$25.00</p>

                    {/* Sizes */}
                    <div className="mb-6">
                        <p className="mb-2">Size : {size}</p>
                        <div className="flex gap-2">
                            {["S", "M", "L"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`w-12 h-12 border ${size === s ? "bg-black text-white" : "bg-white"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <button className="mt-2 text-sm underline">Size Guide</button>
                    </div>

                    {/* Quantity + Buttons */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center border">
                            <button
                                className="px-3 py-2"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                                −
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button className="px-3 py-2" onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>

                        <button className="bg-red-700 text-white px-6 py-3">ADD TO CART</button>
                        <button className="bg-black text-white px-6 py-3">BUY IT NOW</button>
                    </div>

                    {/* Wishlist + Compare */}
                    <div className="flex items-center gap-6 mb-6 text-sm">
                        <button className="flex items-center gap-2">
                            <Heart className="w-4 h-4" /> Add To Wishlist
                        </button>
                        <button className="flex items-center gap-2">↔ Compare</button>
                    </div>

                    {/* Product Info */}
                    <div className="text-sm text-gray-700 space-y-1 mb-6">
                        <p><span className="font-semibold">Vendor:</span> SportyFeet</p>
                        <p><span className="font-semibold">Type:</span> Sneakers</p>
                        <p><span className="font-semibold">Sku:</span> null</p>
                        <p><span className="font-semibold">Available:</span> Available</p>
                    </div>

                    {/* Collapsible Sections */}
                    <div className="divide-y border rounded-md">
                        <button className="w-full flex justify-between px-4 py-3 text-left">
                            Shipping information <span>+</span>
                        </button>
                        <button className="w-full flex justify-between px-4 py-3 text-left">
                            Care Guide <span>+</span>
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-6 space-y-2 text-sm">
                        <p>✅ 55% Linen, 45% Rayon</p>
                        <p>✅ Secure payment</p>
                        <p>✅ 2 Year Warranty</p>
                    </div>

                    {/* Customers Watching */}
                    <div className="mt-4 text-red-600 text-sm">
                        ❤️ 19 customers are viewing this product
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails