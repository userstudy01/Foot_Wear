import React from 'react'
import slide1 from "../assets/formal.webp";
import slide2 from "../assets/boot4.webp";
import slide3 from "../assets/slide-3.jpg";

const categories = [
    {
        name: "Formal",
        img: slide1,
        bgColor: "bg-gradient-to-b",
        splash: "/images/bg-pink-splash.png",
    },
    {
        name: "Boots",
        img: slide2,
        bgColor: "bg-gradient-to-b",
        splash: "/images/bg-blue-splash.png",
    },
    {
        name: "Sneakers",
        img: "/images/sneakers.png",
        bgColor: "bg-gradient-to-b from-orange-400 to-pink-500",
        splash: "/images/bg-orange-splash.png",
    },
    {
        name: "Loafer",
        img: "/images/loafer.png",
        bgColor: "bg-gradient-to-b from-purple-500 to-gray-400",
        splash: "/images/bg-purple-splash.png",
    },
    {
        name: "Sports",
        img: "/images/sports.png",
        bgColor: "bg-gradient-to-b from-red-500 to-orange-400",
        splash: "/images/bg-red-splash.png",
    },
];
const Product = () => {
    return (
        <section className="py-16 bg-white text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-[Montserrat]">
                Our Product Category
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Category Cards */}
            <div className="mt-12 flex gap-8 justify-center overflow-x-auto px-6 scrollbar-hide">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-44 h-72 rounded-[100px] flex flex-col items-center justify-end relative shadow-lg overflow-hidden ${item.bgColor}`}
                    >
                        {/* Splash behind the shoe */}
                        <img
                            src={item.splash}
                            alt=""
                            className="absolute w-200  object-contain opacity-90"
                        />

                        {/* Shoe */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-400 h-1500 object-contain absolute z-10"
                        />

                        {/* Category name */}
                        <span className="text-white font-semibold text-lg mb-6 drop-shadow-md z-20">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product
