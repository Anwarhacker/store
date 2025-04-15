import React from "react";
import Navbar from "../Components/Navbar";
//import Footer from "../Components/Footer";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import FeatureProducts from "../Components/FeatureProducts";
import BrandsSection from "../Components/BrandsSection";
import AdvertisementGrid from "../Components/AdvertisementGrid";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section with Navbar and Search */}
      <div className="relative h-screen">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://i.pinimg.com/736x/8f/f2/d5/8ff2d5d7d644efd5e1c96d4528f06900.jpg"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80">
          <Navbar />

          <div className="max-w-7xl mx-auto px-4 pt-32">
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dobzhyq0g/image/upload/v1744701079/uploads/doa614bvyzmxgiwmven6.jpg"
                alt="Store Logo"
                className="w-40 h-40 mb-12 rounded-full shadow-2xl shadow-red-500/20"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center uppercase">
                Hindustan battery sindagi
              </h1>
              <p className="text-xl text-gray-300 mb-4 text-center max-w-2xl"></p>
              <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl">
                Wholesale prices available for every orders. Contact us for more
                details!
              </p>
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for batteries, brands, or services..."
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                  />
                  <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">Special Offer!</span>
            <span className="text-lg">20% off on all products</span>
            <button className="px-6 py-2 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      {/* <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-gray-700">
              <div className="relative">
                <img
                  src={`https://via.placeholder.com/300x200?text=Product${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <FaHeart className="text-2xl text-white/50 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Product Name</h3>
                <p className="text-red-500 text-2xl font-bold mb-4">₹99.99</p>
                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <FeatureProducts />

      {/* Brands Section */}
      <BrandsSection />

      {/* Advertisement Grid */}
      <AdvertisementGrid />
    </div>
  );
};

export default Home;
