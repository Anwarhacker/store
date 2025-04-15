import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ProductsByBrand = ({ brand, products }) => {
  const handleOrder = (product) => {
    const message = `Hi, I'm interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price}\n` +
      `Category: ${product.category}\n` +
      `Capacity: ${product.capacity}`;
    
    const whatsappUrl = `https://wa.me/+919535111427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
        <span className="text-red-500 mr-3">|</span>
        {brand} Products
      </h3>
      <div className="overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 min-w-full">
          {products.map((product) => (
            <div key={product.id} className="group min-w-[350px] bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-white font-medium">{product.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                  {product.name}
                </h4>
                <p className="mt-2 text-gray-400">{product.description}</p>
                <div className="mt-4 flex items-center justify-between text-white text-sm">
                  <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="text-red-500 font-semibold">{product.capacity}</span>
                </div>
                <div className="mt-2 text-gray-300 text-sm">
                  <span className="font-semibold">Lifetime:</span> {product.lifetime}
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                    {product.category}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button 
                    onClick={() => handleOrder(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
                  >
                    <FaWhatsapp className="text-xl animate-pulse" />
                    <span className="font-semibold">Order on WhatsApp</span>
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    →
                  </Link>
                </div>
                <a 
                      href="tel:+919535111427"
                      className="flex items-center justify-center mt-3 gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                    >
                      <FaPhone className="text-lg animate-bounce" />
                      <span className="font-semibold">Call Now</span>
                    </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsByBrand;