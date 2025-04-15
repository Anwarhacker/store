import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOrder = () => {
    const message = `Hi, I'm interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price}\n` +
      `Category: ${product.category}\n` +
      `Capacity: ${product.capacity}`;
    
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-red-500 hover:text-red-400 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="text-white font-medium">{product.rating}</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
              <p className="text-gray-300">{product.description}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Price</span>
                  <span className="text-3xl font-bold text-white">₹{product.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white">{product.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Capacity</span>
                  <span className="text-white">{product.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lifetime</span>
                  <span className="text-white">{product.lifetime}</span>
                </div>
              </div>
              
              <button
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-colors mt-8"
              >
                <FaWhatsapp className="text-xl" />
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;