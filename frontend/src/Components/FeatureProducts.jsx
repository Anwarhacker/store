import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const FeatureProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
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
    </section>
  );
};

export default FeatureProducts;