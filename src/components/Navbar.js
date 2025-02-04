import React, { useState } from "react";
import { Search, ShoppingCart, X } from "lucide-react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 p-4 flex items-center md:hidden">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search here..."
                className="input input-bordered bg-white border-gray-300 focus:outline-none focus:border-blue-500 w-full py-3 rounded-full text-gray-800 pl-12 pr-10"
                autoFocus
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 md:h-20" />
            </a>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto px-4">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search here..."
                className="input input-bordered bg-white border-gray-300 focus:outline-none focus:border-blue-500 w-full py-3 rounded-full text-gray-800 pl-12"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>

          {/* Mobile Search Icon & Cart */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Button */}
            <button className="md:hidden" onClick={() => setIsSearchOpen(true)}>
              <Search size={24} />
            </button>

            {/* Cart */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="relative flex items-center gap-2 hover:text-orange-100 transition-colors"
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
