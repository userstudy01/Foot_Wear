import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import images from "../assets/images";

const faqs = [
    {
        question: "What sizes do you offer?",
        answer: "We offer sizes ranging from US 6 to US 12, including half sizes.",
    },
    {
        question: "What is your return policy?",
        answer:
            "You can return unworn shoes within 30 days for a full refund or exchange.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order ships, you’ll receive a tracking link via email or SMS.",
    },
    {
        question: "Are your shoes made from sustainable materials?",
        answer:
            "Yes! We use eco-friendly materials and ethical production practices.",
    },
    {
        question: "How do I care for my shoes?",
        answer:
            "Use a damp cloth to clean, avoid machine washing, and store in a cool, dry place.",
    },
];


const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 px-4 md:px-12 lg:px-20 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - FAQ */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-xl shadow-sm"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full p-4 text-left font-medium text-black"
                                >
                                    {faq.question}
                                    <FaChevronDown
                                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Image */}
                {/* <div className="flex justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md overflow-hidden border-4 border-yellow-400 rounded-lg">
                        <img
                            src={images.Slide5}
                            alt="Shoes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                                <span className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent"></span>
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md h-80 overflow-hidden border-4 border-yellow-400 rounded-lg">
                        <img
                            src={images.Slide5}
                            alt="Shoes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                                <span className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent"></span>
                            </button>
                        </div>
                    </div>
                </div>


                {/* <div className="flex justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md overflow-hidden rounded-[100%] border-4 border-yellow-400">
                        <img
                            src={images.Slide5}
                            alt="Shoes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-160 h-160 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                                <span className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent"></span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default FAQ