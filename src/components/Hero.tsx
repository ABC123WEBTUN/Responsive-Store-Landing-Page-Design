import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Your
              <span className="text-emerald-400 block">Perfect Style</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Explore our curated collection of premium products designed to elevate your lifestyle.
              Quality meets affordability in every item we offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Collection
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured Products"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                50% OFF
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold">
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;