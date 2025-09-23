import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Logo from "../assets/shoes-logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Shoes</span>
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">Site</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="hover:text-orange-400">
              Home
            </a>

            {/* <div className="relative group">
                            <a href="#" className="hover:text-orange-400">Product</a>
                            <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-40">
                                <a href="/men" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                <a href="/women" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                <a href="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
                            </div>
                        </div> */}

            <div className="relative group inline-block">
              <div className="cursor-pointer hover:text-orange-400">
                Product
              </div>
              <div className="absolute left-0 mt-2 bg-white rounded shadow-lg w-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 z-50">
                <a
                  href="/men"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Men
                </a>
                <a
                  href="/women"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Women
                </a>
                <a
                  href="/kids"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Kids
                </a>
              </div>
            </div>

            {/* <a href="/blog" className="hover:text-orange-400">Blog</a> */}
            {/* <Link to="/blog" className="hover:text-orange-400">
                            Blog
                        </Link> */}

            <div className="relative group inline-block">
              <div href="#" className="cursor-pointer hover:text-orange-400">
                Pages
              </div>
              <div className="absolute left-0 mt-2 bg-white rounded shadow-lg w-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 z-50">
                <a
                  href="/aboutus"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  About us
                </a>
                <a
                  href="/blog"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Blog
                </a>
                {/* <a href="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</a> */}
              </div>
            </div>
            {/* <a href="/pages" className="hover:text-orange-400"></a> */}
            {/* <a href="/about" className="hover:text-orange-400">About</a> */}
            <Link to="/aboutus" className="hover:text-orange-400">
              About
            </Link>
            <Link to="/contactus" className="hover:text-orange-400">
              Contact US
            </Link>
          </nav>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-800 text-gray-300 px-4 py-2 outline-none w-40 md:w-56"
              />
              <button className="bg-orange-600 p-2 rounded-full hover:bg-orange-500">
                <Search size={18} />
              </button>
            </div>
            {/* <button className="bg-orange-600 p-2 rounded-full hover:bg-orange-500">
                            <ShoppingCart size={18} />
                        </button> */}

            <Link
              to="/signin"
              className="bg-orange-600 p-2 rounded-full hover:bg-orange-500 flex items-center justify-center"
            >
              <User size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-orange-400 font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-orange-400">
              Shop
            </a>
            <a href="#" className="hover:text-orange-400">
              Blog
            </a>
            <a href="#" className="hover:text-orange-400">
              Pages
            </a>
            <a href="#" className="hover:text-orange-400">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-2 mt-4">
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-800 text-gray-300 px-4 py-2 outline-none w-full"
              />
              <button className="bg-orange-600 p-2 rounded-full hover:bg-orange-500">
                <Search size={18} />
              </button>
            </div>
            <button className="bg-orange-600 p-2 rounded-full hover:bg-orange-500">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
