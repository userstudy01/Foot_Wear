import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import Slideshow from "./Slideshow";
import Product from "./Product";
import Footer from "./Footer";
import NewsletterPopup from "./NewsletterPopup";
import Categoreis from "./Categoreis";
import OurPackages from "./OurPackages";
import ReviewsPage from "./Reviews";
import FAQ from "./FAQ";
import FeatureSection from "./FeatureSection ";

const HomePage = () => {

    // Brand placeholder images
    const brands = [
        "https://placehold.co/200x200?text=Brand+1",
        "https://placehold.co/200x200?text=Brand+2",
        "https://placehold.co/200x200?text=Brand+3",
        "https://placehold.co/200x200?text=Brand+4",
    ];

    // Blog placeholder images
    const blogs = [
        { img: "https://placehold.co/300x200?text=Blog+1" },
        { img: "https://placehold.co/300x200?text=Blog+2" },
    ];

    // Review placeholder images
    const reviews = [
        { img: "https://placehold.co/300x200?text=Review+1" },
        { img: "https://placehold.co/300x200?text=Review+2" },
    ];

    // Package placeholder images
    const packages = [
        { img: "https://placehold.co/300x200?text=Package+1" },
        { img: "https://placehold.co/300x200?text=Package+2" },
    ];

    return (
        <div>
            {/* Header*/}
            <Header />

            {/* slideshow */}
            <Slideshow />

            {/* Product */}
            <Product />

            {/* <NewsletterPopup /> */}

            {/* Brands */}
            {/* <section className="py-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Brands</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand}
                            alt={`Brand ${index}`}
                            className="rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </section> */}

            {/* Blogs */}
            {/* <section className="py-10 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
                <div className="grid md:grid-cols-2 gap-6 px-8">
                    {blogs.map((blog, index) => (
                        <img
                            key={index}
                            src={blog.img}
                            alt={`Blog ${index}`}
                            className="rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </section> */}

            {/* Reviews */}
            <ReviewsPage />
            {/* <section className="py-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 px-8">
                    {reviews.map((review, index) => (
                        <img
                            key={index}
                            src={review.img}
                            alt={`Review ${index}`}
                            className="rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </section> */}

            {/* Packages */}
            {/* <section className="py-10 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Packages</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 px-8">
                    {packages.map((pkg, index) => (
                        <img
                            key={index}
                            src={pkg.img}
                            alt={`Package ${index}`}
                            className="rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </section> */}
            <OurPackages />

            {/* FAQ */}
            <FAQ />

            {/* Categories */}
            <Categoreis />

            {/* FeatureSection */}
            {/* <FeatureSection /> */}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
