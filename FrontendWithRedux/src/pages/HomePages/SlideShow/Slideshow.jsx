import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Images from '../../../assets/images'

const products = [
    {
        id: 1,
        name: "LINAS CREW",
        desc: "minimalist. creative. flexible",
        price: "$183.76",
        sku: "su1",
        image: Images.Slide1,
        thumb: Images.Slide1,
    },
    {
        id: 2,
        name: "UNA CHAIR",
        desc: "modern. stylish. elegant",
        price: "$210.50",
        sku: "su2",
        image: Images.Slide2,
        thumb: Images.Slide2,
    },
    {
        id: 3,
        name: "ZEN CLOCK",
        desc: "calm. focused. timeless",
        price: "$159.90",
        sku: "su3",
        image: Images.Slide3,
        thumb: Images.Slide3,
    },
];


const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProduct = products[activeIndex];

    return (
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

            {/* LEFT CONTENT */}
            <div className="flex-1 text-center lg:text-left space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    {activeProduct.name}
                </h1>
                <p className="text-gray-700 text-lg">{activeProduct.desc}</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                    Discover Now
                </button>
                <div className="pt-6">
                    <p className="uppercase text-sm text-gray-500 tracking-widest">
                        Price
                    </p>
                    <p className="text-2xl font-bold">{activeProduct.price}</p>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 relative flex flex-col items-center mt-10 lg:mt-0">

                {/* MAIN IMAGE ANIMATION */}
                <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeProduct.id}
                            src={activeProduct.image}
                            alt={activeProduct.name}
                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                            transition={{ duration: 0.6 }}
                            className="w-56 lg:w-80 object-contain"
                        />
                    </AnimatePresence>
                </div>

                {/* THUMBNAILS */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => setActiveIndex(index)}
                            className={`w-20 h-20 rounded-full overflow-hidden shadow-md border-2 transition ${index === activeIndex ? "border-orange-500" : "border-transparent opacity-50 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={product.thumb}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slideshow