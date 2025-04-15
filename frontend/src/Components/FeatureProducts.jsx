import React from 'react';
import { FaWhatsapp, FaStar } from 'react-icons/fa';

const FeatureProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Exide Matrix MTRED45L',
      brand: 'Exide',
      price: 7199,
      rating: 4.9,
      image: 'https://via.placeholder.com/300x200?text=ExideMTRED45L',
      category: 'Car Battery'
    },
    {
      id: 2,
      name: 'Amaron FLO 40B20L',
      brand: 'Amaron',
      price: 5999,
      rating: 4.8,
      image: 'https://via.placeholder.com/300x200?text=AmaronFLO',
      category: 'Car Battery'
    },
    {
      id: 3,
      name: 'Luminous RC 18000',
      brand: 'Luminous',
      price: 13999,
      rating: 4.7,
      image: 'https://via.placeholder.com/300x200?text=LuminousRC',
      category: 'Inverter Battery'
    },
    {
      id: 4,
      name: 'SF Sonic FFS0-FS1440',
      brand: 'SF Sonic',
      price: 8499,
      rating: 4.6,
      image: 'https://via.placeholder.com/300x200?text=SFSonic',
      category: 'Car Battery'
    },
    {
      id: 5,
      name: 'Exide Epiq EPIQ35L',
      brand: 'Exide',
      price: 6799,
      rating: 4.8,
      image: 'https://via.placeholder.com/300x200?text=ExideEpiq',
      category: 'Car Battery'
    },
    {
      id: 6,
      name: 'Amaron PRO BT-1350LMF',
      brand: 'Amaron',
      price: 9299,
      rating: 4.7,
      image: 'https://via.placeholder.com/300x200?text=AmaronPRO',
      category: 'Commercial Battery'
    },
    {
      id: 7,
      name: 'Luminous IPRO 2000',
      brand: 'Luminous',
      price: 15999,
      rating: 4.9,
      image: 'https://via.placeholder.com/300x200?text=LuminousIPRO',
      category: 'Inverter Battery'
    },
    {
      id: 8,
      name: 'SF Sonic Flash Start',
      brand: 'SF Sonic',
      price: 7299,
      rating: 4.7,
      image: 'https://via.placeholder.com/300x200?text=SFSonicFlash',
      category: 'Motorcycle Battery'
    }
  ];

  const handleOrder = (product) => {
    const message = `Hi, I'm interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Brand: ${product.brand}\n` +
      `Price: ₹${product.price}\n` +
      `Category: ${product.category}`;
    
    const whatsappUrl = `https://wa.me/+919535111427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-gray-700">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="text-white font-medium">{product.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-red-500 font-semibold">{product.brand}</span>
              <h3 className="font-bold text-xl text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{product.category}</p>
              <p className="text-red-500 text-2xl font-bold mb-4">₹{product.price.toLocaleString()}</p>
              <button 
                onClick={() => handleOrder(product)}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;