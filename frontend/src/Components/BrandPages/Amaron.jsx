import React from 'react';
import { FaStar, FaShippingFast, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';

const Amaron = () => {
  const products = [
    {
      id: 1,
      name: 'Amaron Pro',
      image: 'https://via.placeholder.com/300x200?text=Amaron+Pro',
      price: '₹8,200',
      rating: 4.7,
      warranty: '60 Months',
      capacity: '40Ah'
    },
    {
      id: 2,
      name: 'Amaron Go',
      image: 'https://via.placeholder.com/300x200?text=Amaron+Go',
      price: '₹7,400',
      rating: 4.6,
      warranty: '48 Months',
      capacity: '35Ah'
    },
    {
      id: 3,
      name: 'Amaron UPS',
      image: 'https://via.placeholder.com/300x200?text=Amaron+UPS',
      price: '₹9,800',
      rating: 4.8,
      warranty: '36 Months',
      capacity: '150Ah'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 sm:text-5xl">
            Amaron Batteries
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Long-lasting Automotive & UPS Batteries with Industry-leading Warranty
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaShippingFast />, text: 'Pan India Delivery' },
            { icon: <FaCheckCircle />, text: 'Factory Warranty' },
            { icon: <FaPhoneAlt />, text: 'Installation Support' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 bg-gray-800/50 p-6 rounded-xl">
              <span className="text-2xl text-red-500">{feature.icon}</span>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white">{product.rating}</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400">Capacity: {product.capacity}</p>
                  <p className="text-gray-400">Warranty: {product.warranty}</p>
                  <p className="text-2xl font-bold text-red-500">{product.price}</p>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amaron;