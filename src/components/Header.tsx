import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-2xl font-bold text-gray-900">ShopStyle</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-md mt-2">
              <a href="#home" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                <Search className="h-5 w-5 text-gray-600" />
                <User className="h-5 w-5 text-gray-600" />
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;