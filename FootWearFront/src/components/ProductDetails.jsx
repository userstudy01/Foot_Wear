import React, { useState } from "react";
// import { Heart, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import images from "../assets/images"
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ProductDetails = () => {


    const [hovered, setHovered] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null); // track product loading

    const [selectedSize, setSelectedSize] = useState("41");
    const [selectedColor, setSelectedColor] = useState("white");

    // const wishlistItems = [
    //     { id: 1, name: "Lodge Flush Mount", price: 144.26, date: "September 26, 2025", stock: "In stock", image: images.Logo },
    //     { id: 2, name: "Forma", price: 138.48, date: "September 26, 2025", stock: "In stock", image: images.Logo1 },
    //     { id: 3, name: "Sentel Pruning Shears", price: 141.36, date: "September 26, 2025", stock: "In stock", image: images.Slide1 },
    //     { id: 4, name: "Discus Floor and Table", price: 167.12, date: "August 8, 2025", stock: "In stock", image: images.Slide2 },
    // ];

    const handleAddToWishlist = (product) => {
        setLoadingId(product.id); // show loader only on this product
        setTimeout(() => {
            setLoadingId(null); // stop loader
            setWishlistItems((prev) => [...prev, product]); // add product
            setWishlistOpen(true); // open wishlist popup
        }, 1500);
    };

    const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];
    const colors = [
        { id: "white", img: images.Slide5 },
        { id: "gray", img: images.Slide4 },
        { id: "black", img: images.Slide3 },
    ];
    const productImages = [
        images.Slide2,
        images.Logo1,
        images.Logo,
        images.Slide3
    ];

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


    return (

        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Container */}
                <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Product Images */}
                    <div>
                        <img
                            src={productImages[0]}
                            alt="Main Product"
                            className="w-full rounded-lg shadow-sm"
                        />
                        <div className="flex gap-3 mt-4">
                            {productImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Product ${idx}`}
                                    className="w-20 h-20 object-cover border rounded cursor-pointer hover:border-black"
                                />
                            ))}
                            <button className="w-20 h-20 border rounded text-sm text-gray-500">
                                +4 more
                            </button>
                        </div>
                    </div>

                    {/* Right - Product Info */}
                    <div>
                        <h2 className="text-sm uppercase text-gray-600 font-semibold">
                            Reebok
                        </h2>
                        <h1 className="text-2xl font-bold mt-2">
                            Shoes Reebok Zig Kinetica 3
                        </h1>

                        {/* Reviews */}
                        <div className="flex items-center mt-2 text-yellow-500">
                            {"★".repeat(4)}{" "}
                            <span className="text-gray-400 ml-2 text-sm">42 reviews</span>
                        </div>

                        {/* Price */}
                        <p className="text-3xl font-bold mt-4">$199.00</p>

                        {/* Color Options */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Color</h3>
                            <div className="flex gap-3">
                                {colors.map((c) => (
                                    <div
                                        key={c.id}
                                        onClick={() => setSelectedColor(c.id)}
                                        className={`p-1 border rounded cursor-pointer ${selectedColor === c.id ? "border-black" : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={c.img}
                                            alt={c.id}
                                            className="w-12 h-12 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Size • EU Men</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`border rounded px-3 py-2 text-sm ${selectedSize === size
                                            ? "bg-black text-white border-black"
                                            : "border-gray-300 hover:border-black"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <a href="#" className="text-sm text-gray-400 mt-2 block">
                                Size guide
                            </a>
                        </div>

                        {/* Add to Cart + Wishlist */}
                        <div className="mt-8 flex items-center gap-3">
                            <button className="flex-1 bg-black text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-gray-900 transition">
                                <ShoppingCart size={18} /> Add to cart
                            </button>
                            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Free delivery */}
                        <p className="text-sm text-gray-500 mt-4 flex items-center">
                            🚚 Free delivery on orders over $30.0
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-12 px-6">
                {/* Tabs Header */}
                <div className="flex justify-center border-b border-gray-200 space-x-8">
                    {["description", "additional", "reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 font-semibold text-lg ${activeTab === tab
                                ? "text-black border-b-2 border-orange-500"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            {tab === "description" && "Description"}
                            {tab === "additional" && "Additional information"}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="mt-6 text-gray-600 leading-relaxed">
                    {activeTab === "description" && (
                        <div className="max-w-3xl mx-auto text-left">
                            <p>
                                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                                portable active stereo speaker takes the unmistakable look and
                                sound of Marshall, unplugs the chords, and takes the show on the
                                road.
                            </p>
                            <p className="mt-4">
                                Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                                vintage styled engineering. Setting the bar as one of the loudest
                                speakers in its class, the Kilburn is a compact, stout-hearted
                                hero with a well-balanced audio which boasts a clear midrange and
                                extended highs for a sound that is both articulate and pronounced.
                                The analogue knobs allow you to fine tune the controls to your
                                personal preferences while the guitar-influenced leather strap
                                enables easy and stylish travel.
                            </p>
                        </div>
                    )}

                    {activeTab === "additional" && (
                        <div className="max-w-3xl mx-auto">
                            <table className="w-full border border-gray-200 text-sm">
                                <tbody>
                                    {[
                                        ["Handle height (ground to handle)", '37-45"'],
                                        ["Width", '24"'],
                                        ["Wheels", "12” air / wide track slick tread"],
                                        ["Seat back height", '21.5"'],
                                        ["Head room (inside canopy)", '25"'],
                                        ["Weight Capacity", "60 LBS"],
                                        ["Weight (w/o wheels)", "20 LBS"],
                                        ["Folded (w/o wheels)", '32.5"L x 18.5"W x 16.5"H'],
                                        ["Folded (w/ wheels)", '32.5"L x 24"W x 18.5"H'],
                                        ["Door Pass Through", "24"],
                                        ["Frame", "Aluminum"],
                                        ["Stand Up", '35"L x 24"W x 37-45"H (front to back wheel)'],
                                    ].map(([label, value], idx) => (
                                        <tr
                                            key={idx}
                                            className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 font-medium border border-gray-200">
                                                {label}
                                            </td>
                                            <td className="px-4 py-3 border border-gray-200">
                                                {value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            </div>

            <div className="w-full px-4 md:px-10 lg:px-20 py-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Related Shoes</h2>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="relative border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md group cursor-pointer"
                            onMouseEnter={() => setHovered(product.id)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            {/* Image */}
                            <div className="relative h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
                                <motion.img
                                    src={hovered === product.id ? product.hoverImage : product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500"
                                    animate={hovered === product.id ? { y: [-5, 5, -5] } : { y: 0 }}
                                    transition={{
                                        repeat: hovered === product.id ? Infinity : 0,
                                        duration: 3,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Straight Line Icons with slide-in from left */}
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
                                                {/* <motion.button
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
                                                </motion.button> */}
                                                {/* Heart */}
                                                {/* <motion.button
                                                    onClick={() => handleAddToWishlist(product)}
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
                                                    {loadingId === product.id ? (
                                                        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                                                    ) : (
                                                        <Heart size={20} />
                                                    )}
                                                </motion.button> */}
                                                <motion.button
                                                    onClick={() => handleAddToWishlist(product)}
                                                    variants={iconVariants}
                                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                                                >
                                                    {loadingId === product.id ? (
                                                        <div className="circle-loader"></div>
                                                    ) : (
                                                        <Heart size={20} />
                                                    )}
                                                </motion.button>



                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

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
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Wishlist Popup */}
            <AnimatePresence>
                {wishlistOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
                    >
                        <div className="bg-white rounded-md shadow-lg w-full max-w-md md:max-w-lg">
                            {/* Header */}
                            <div className="flex justify-between items-center px-4 py-3 border-b bg-black text-white">
                                <h2 className="font-semibold">WISHLIST ({wishlistItems.length})</h2>
                                <button onClick={() => setWishlistOpen(false)}>✕</button>
                            </div>

                            {/* Items */}
                            <div className="max-h-[400px] overflow-y-auto">
                                {wishlistItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 px-4 py-3 border-b">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                            <p className="text-sm text-gray-400">{item.brand}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-green-600">In stock</p>
                                            <button className="text-sm text-blue-600 hover:underline">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between p-4 border-t bg-gray-100">
                                <Link to="/wishlistdetails">
                                    <button className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
                                        OPEN WISHLIST PAGE
                                    </button>
                                </Link>
                                <button
                                    onClick={() => setWishlistOpen(false)}
                                    className="px-4 py-2 text-black border border-black rounded hover:bg-black hover:text-white"
                                >
                                    CONTINUE SHOPPING
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
};

export default ProductDetails