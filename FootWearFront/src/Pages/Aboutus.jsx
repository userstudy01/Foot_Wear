// src/components/AboutUs.js
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from 'lucide-react';
import images from '../assets/images'; // Make sure AboutGirl and Shoes exist here
import CountUp from "react-countup";
import Footer from "../components/Footer";
import ReviewsSection from "../components/Reviews";
import { Reviews } from "@mui/icons-material";
import Header from "../components/Header";
import CartPage from "../components/CartPage";


const testimonials = [
    {
        text:
            "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
        name: "Rhodes Jhon",
        stars: 5,
        avatar: "/avatar1.jpg",
    },
    {
        text:
            "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
        name: "Rhodes Jhon",
        stars: 5,
        avatar: "/avatar2.jpg",
    },
];

const AboutUs = () => {

    const counters = [
        { end: 800, suffix: "+", label: "Product Types" },
        { end: 12, suffix: "+", label: "Years Of Experience" },
        { end: 2500, suffix: "+", label: "Trust Customers" },
        { end: 15, suffix: "+", label: "Stores Nationwide" },
    ];

    const [active, setActive] = useState(0);
    const intervalRef = useRef(null);

    // Auto-slide every 4 seconds
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
        // eslint-disable-next-line
    }, [active]);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            goRight();
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    // Manual navigation
    const goLeft = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const goRight = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };
    return (
        <>
            <Header />
            {/* About Us Section */}
            <section
                className="relative overflow-hidden min-h-[350px] bg-cover bg-center flex items-center justify-center text-center mb-5"
                style={{
                    backgroundImage: `url(${images.About_us})`,
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1
                        className="text-[72px] font-extrabold leading-[1.1] text-white tracking-tight"
                        style={{ fontFamily: 'Montserrat, Poppins, Arial, sans-serif' }}
                    >
                        About Us
                    </h1>

                    <div className="flex items-center justify-center space-x-4 text-[22px] font-sans mt-6">
                        <span className="text-white font-semibold leading-[1.1]">Home</span>
                        <ChevronRight className="w-6 h-6 text-white" />
                        <span className="text-white font-medium leading-[1.1]">About Us</span>
                    </div>
                </div>
            </section>

            {/* Promo Banner Section */}

            <section className="w-full bg-white mt-5">
                <div className="flex w-full min-h-[530px] overflow-hidden">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-center justify-center w-1/2 bg-[#f7f7f7] px-0">
                        <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
                            <span className="block text-[65px] font-light text-[#ee3f2b] font-sans leading-none mt-2 mb-3">
                                Saving 50%
                            </span>
                            <span className="block text-[70px] font-extrabold text-[#232323] font-sans leading-none mb-6" style={{ fontFamily: 'Poppins,Arial,sans-serif' }}>
                                All Online Store
                            </span>
                            <span className="block text-[28px] text-[#5d5d5d] font-normal tracking-wide uppercase mb-12 font-sans">
                                OFFER AVAILABLE ALL SHOES & PRODUCTS
                            </span>
                            <button className="bg-[#ee3f2b] text-white text-[26px] font-semibold px-20 py-6 rounded-none shadow hover:bg-[#be3120] transition mb-3">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="relative w-1/2 flex items-stretch bg-[#ee3f2b] px-0 overflow-hidden">
                        {/* Diagonal White/Overlay panel */}
                        <div
                            className="absolute left-0 top-0 h-full w-[55%] z-10"
                            style={{
                                background: "#f7f7f7",
                                clipPath: "polygon(0 0,100% 0,80% 100%,0 100%)"
                            }}
                        >
                            {/* Outlined NEW */}
                            <span
                                className="absolute left-[20px] top-1/2 -translate-y-1/2 text-transparent font-extrabold pointer-events-none select-none"
                                style={{
                                    fontSize: "120px",
                                    WebkitTextStroke: "2.5px #ee3f2b",
                                    transform: "rotate(-30deg)",
                                    letterSpacing: "15px",
                                    fontFamily: "Poppins, Arial, sans-serif"
                                }}
                            >
                                NEW
                            </span>
                        </div>
                        {/* Dots Overlay */}
                        <div
                            className="absolute right-0 bottom-0 top-0 left-[30%] z-20 pointer-events-none"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(0,0,0,0.12) 2px, transparent 1.5px)",
                                backgroundSize: "18px 18px"
                            }}
                        />
                        {/* Shoe Image */}
                        <img
                            src={images.Shoes}
                            alt="Promo Shoes"
                            className="z-30 ml-auto mr-[7%] mb-7 w-[75%] max-w-[540px] object-contain shadow-none pointer-events-none select-none"
                            style={{
                                maxHeight: "420px"
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>


            <section className="w-full py-12 bg-white flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-4">
                    {counters.map(({ end, suffix, label }, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f7f7f7] rounded-lg shadow-none flex flex-col items-center justify-center py-12
            transition-all duration-200 border border-transparent hover:border-black hover:bg-white cursor-pointer"
                        >
                            <span className="text-[56px] font-bold text-[#1a1a1a] mb-2 leading-none">
                                <CountUp end={end} duration={2.5} suffix={suffix} />
                            </span>
                            <span className="text-[20px] text-[#181818] font-normal">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full px-4 py-16 bg-white">
                {/* Section Header */}
                <div className="max-w-6xl mx-auto text-left">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#ff5d24] font-semibold text-lg">— Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#133d23] mb-2 leading-tight">
                        We Are Known For Our Abilities<br />Markets.
                    </h2>
                    <p className="text-[#899abb] text-lg max-w-3xl mb-8 mt-2">
                        All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                    </p>
                </div>
                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white border rounded-xl shadow-none py-12 px-2 flex flex-col items-center transition">
                        {/* Icon */}
                        <svg width="48" height="48" fill="none" stroke="#ff5d24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <rect x="9" y="14" width="30" height="20" rx="3" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#133d23] mb-2">Credit Card</h3>
                        <p className="text-[#899abb] text-base text-center">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white border rounded-xl shadow-none py-12 px-2 flex flex-col items-center transition">
                        {/* Icon */}
                        <svg width="48" height="48" fill="none" stroke="#ff5d24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <rect x="5" y="18" width="38" height="14" rx="3" />
                            <path d="M9 18l-4 4M39 18l4 4" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#133d23] mb-2">Free Shipping</h3>
                        <p className="text-[#899abb] text-base text-center">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white border rounded-xl shadow-none py-12 px-2 flex flex-col items-center transition">
                        {/* Icon */}
                        <svg width="48" height="48" fill="none" stroke="#ff5d24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <circle cx="24" cy="24" r="18" />
                            <polyline points="24 12 24 24 36 24" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#133d23] mb-2">24/7 Support</h3>
                        <p className="text-[#899abb] text-base text-center">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white border rounded-xl shadow-none py-12 px-2 flex flex-col items-center transition">
                        {/* Icon */}
                        <svg width="48" height="48" fill="none" stroke="#ff5d24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <path d="M36 24a12 12 0 1 0-12 12" />
                            <polyline points="36 24 36 36 24 36" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-[#133d23] mb-2">30 Days Returns</h3>
                        <p className="text-[#899abb] text-base text-center">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </div>
            </section>

            {/* <Reviews /> */}
            <ReviewsSection />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AboutUs;