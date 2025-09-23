import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

// Dummy data for products
const allProducts = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 100}/600/600`,
    price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
}));

const ProductsDetails = () => {

    const [products, setProducts] = useState(allProducts);
    const [view, setView] = useState("grid"); // 'grid' or 'list'
    const [sortOption, setSortOption] = useState("featured");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    // Filter and sort products
    const filteredAndSortedProducts = [...products].sort((a, b) => {
        if (sortOption === "price-low-to-high") {
            return a.price - b.price;
        }
        if (sortOption === "price-high-to-low") {
            return b.price - a.price;
        }
        if (sortOption === "alphabetically-a-z") {
            return a.name.localeCompare(b.name);
        }
        if (sortOption === "alphabetically-z-a") {
            return b.name.localeCompare(a.name);
        }
        return 0;
    });

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredAndSortedProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(
        filteredAndSortedProducts.length / productsPerPage
    );

    const handlePaginationChange = (e) => {
        setProductsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    return (
        <div className="bg-gray-50 font-sans">
            <header className="py-4 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm">
                                <a href="tel:9876543210">9876543210</a> | <a href="mailto:info@somedomain.com">info@somedomain.com</a>
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-sm">Store Location</a>
                            <a href="#" className="text-sm">Track Your Order</a>
                            <a href="#" className="text-sm">USD ▼</a>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Navigation and Header */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <img
                            src="https://placehold.co/100x40/E5E7EB/E5E7EB"
                            alt="Shoe Zone Logo"
                            className="h-10"
                        />
                        <h1 className="text-2xl font-bold ml-2">ShoeZone</h1>
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <div className="relative group">
                            <a href="#" className="text-gray-800 hover:text-gray-600 flex items-center">
                                Collections <span className="ml-1 text-sm">▼</span>
                            </a>
                            <div className="absolute hidden group-hover:block bg-white p-2 rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Men's</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Women's</a>
                            </div>
                        </div>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Blogs</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Pages</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-800 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                        <button className="text-gray-800 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        </button>
                        <button className="lg:hidden text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-black text-white py-12 px-4">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://placehold.co/1920x400/000000/000000')" }}></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold">Collection</h2>
                    <p className="text-sm mt-2">Home / Gym Sneakers</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filter Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white p-6 shadow rounded-md">
                            <h3 className="text-lg font-bold mb-4">Availability</h3>
                            <div className="space-y-2">
                                <label className="flex items-center text-sm">
                                    <input type="checkbox" className="form-checkbox text-blue-500" />
                                    <span className="ml-2">In stock (8)</span>
                                </label>
                                <label className="flex items-center text-sm">
                                    <input type="checkbox" className="form-checkbox text-blue-500" />
                                    <span className="ml-2">Out of stock (1)</span>
                                </label>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button className="flex-1 py-2 text-sm border rounded-md">CLEAR</button>
                                <button className="flex-1 py-2 text-sm bg-purple-600 text-white rounded-md">APPLY</button>
                            </div>

                            <div className="mt-6 border-t pt-6">
                                <h3 className="text-lg font-bold mb-4">Price</h3>
                                <div className="flex space-x-2">
                                    <input
                                        type="number"
                                        placeholder="From $"
                                        className="w-1/2 p-2 text-sm border rounded-md"
                                    />
                                    <input
                                        type="number"
                                        placeholder="To $"
                                        className="w-1/2 p-2 text-sm border rounded-md"
                                    />
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <button className="flex-1 py-2 text-sm border rounded-md">CLEAR</button>
                                    <button className="flex-1 py-2 text-sm bg-purple-600 text-white rounded-md">APPLY</button>
                                </div>
                            </div>

                            {/* Hot Deals Section */}
                            <div className="mt-6 border-t pt-6">
                                <h3 className="text-lg font-bold mb-4">Hot Deals</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <img src="https://placehold.co/80x80" alt="Hot Deal" className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <p className="text-sm font-semibold">Product Name</p>
                                            <p className="text-xs text-gray-500">$99.99</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src="https://placehold.co/80x80" alt="Hot Deal" className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <p className="text-sm font-semibold">Product Name</p>
                                            <p className="text-xs text-gray-500">$129.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid and Controls */}
                    <div className="w-full lg:w-3/4">
                        {/* Controls Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b mb-6">
                            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                                <button onClick={() => setView("grid")} className={`p-2 rounded-md ${view === "grid" ? "bg-gray-200" : "bg-white"}`}>
                                    <FaTh />
                                </button>
                                <button onClick={() => setView("list")} className={`p-2 rounded-md ${view === "list" ? "bg-gray-200" : "bg-white"}`}>
                                    <FaList />
                                </button>
                                <div className="ml-4">
                                    <span className="text-sm text-gray-700">Paginate by:</span>
                                    <select
                                        value={productsPerPage}
                                        onChange={handlePaginationChange}
                                        className="ml-2 p-2 border rounded-md text-sm"
                                    >
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="48">48</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700">Sort by:</span>
                                <select
                                    value={sortOption}
                                    onChange={handleSortChange}
                                    className="p-2 border rounded-md text-sm"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="alphabetically-a-z">Alphabetically, A-Z</option>
                                    <option value="alphabetically-z-a">Alphabetically, Z-A</option>
                                    <option value="price-low-to-high">Price, low to high</option>
                                    <option value="price-high-to-low">Price, high to low</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Display Area */}
                        {view === "grid" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentProducts.map((product) => (
                                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover rounded-md"
                                        />
                                        <h4 className="mt-2 text-center text-lg font-semibold">{product.name}</h4>
                                        <p className="text-center text-gray-600">${product.price}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {currentProducts.map((product) => (
                                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-6">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-32 h-32 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold">{product.name}</h4>
                                            <p className="text-gray-600 mt-1">${product.price}</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                A short description of the product.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails