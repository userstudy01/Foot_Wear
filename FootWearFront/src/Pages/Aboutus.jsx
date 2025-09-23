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
            <section className="relative bg-[#fbf7f3] overflow-hidden min-h-[650px]">
                {/* Top thin yellow stripe */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ffe97a] z-30" />

                {/* Top faint white band */}
                <div className="absolute top-[3px] left-0 w-full h-8 bg-[#fffaf6] z-20" />

                {/* Faint circle decoration */}
                <svg
                    className="absolute top-[70px] left-[-40px] h-[220px] w-[220px] z-10 opacity-70"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="60" cy="60" r="57" stroke="#f2d7c5" strokeWidth="2.5" />
                    <circle cx="40" cy="70" r="49" stroke="#fff" strokeWidth="2" opacity="0.7" />
                </svg>

                {/* Content Container */}
                <div className="relative z-40 max-w-[1440px] mx-auto w-full flex px-10 xl:px-28 py-20 min-h-[400px] items-center justify-between">
                    {/* Left Side Text */}
                    <div className="flex-1 flex flex-col gap-8 items-start">
                        <h1
                            className="text-[72px] font-extrabold leading-[1.1] text-[#202032] tracking-tight"
                            style={{ fontFamily: 'Montserrat, Poppins, Arial, sans-serif' }}
                        >
                            About Us
                        </h1>
                        <div className="flex items-center space-x-4 text-[22px] font-sans">
                            <span className="text-[#ea395f] font-semibold leading-[1.1]">Home</span>
                            <ChevronRight className="w-6 h-6 text-[#202032]" />
                            <span className="text-[#202032] font-medium leading-[1.1]">About Us</span>
                        </div>
                    </div>

                    {/* Right Side Image and Decorations */}
                    <div className="flex-1 relative flex items-center justify-end h-full">
                        {/* Dashed arrow SVG */}
                        <svg
                            viewBox="0 0 100 50"
                            className="absolute -top-4 left-[90px] w-[90px] h-[60px] z-50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 30C30 5,70 55,95 20"
                                stroke="black"
                                strokeWidth="2.5"
                                strokeDasharray="8 6"
                            />
                            <polyline
                                points="95,20 91,18 93,20 91,22"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>

                        {/* Sparkles SVG */}
                        <svg
                            viewBox="0 0 60 60"
                            className="absolute top-0 right-10 w-[66px] h-[60px] z-50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g stroke="#202032" strokeWidth="3" strokeLinecap="round">
                                <path d="M30 10 L30 21" />
                                <path d="M30 50 L30 39" />
                                <path d="M10 30 L21 30" />
                                <path d="M50 30 L39 30" />
                                <circle cx="30" cy="30" r="8" stroke="#FFD98A" strokeWidth="3" />
                            </g>
                            <g fill="#FFD98A">
                                <circle cx="17" cy="14" r="2.5" />
                                <circle cx="43" cy="14" r="2.5" />
                                <circle cx="30" cy="46" r="1.5" />
                            </g>
                            <g fill="#202032">
                                <circle cx="14" cy="38" r="1" />
                                <circle cx="41" cy="43" r="1" />
                            </g>
                        </svg>

                        {/* AboutGirl Image */}
                        <img
                            src={images.AboutGirl}
                            alt="About Us"
                            className="relative z-40 max-w-[480px] w-full object-contain pointer-events-none"
                            style={{ marginBottom: '-40px', marginRight: '-40px' }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0 w-full z-30 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 150"
                        className="w-full h-[140px]"
                    >
                        <path
                            fill="#fffaf6"
                            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,69.3C672,75,768,117,864,117.3C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,150L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        />
                    </svg>
                </div>

                {/* Scroll to top button */}
                <button className="fixed bottom-6 right-6 bg-[#ea395f] text-white rounded-full p-4 shadow-xl hover:bg-[#c51b42] transition z-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            </section>

            <CartPage />
            {/* Promo Banner Section */}

            <section className="w-full bg-white">
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