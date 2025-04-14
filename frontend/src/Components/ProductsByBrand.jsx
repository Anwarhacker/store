import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductsByBrand = ({ brand, products }) => {
    
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
        <span className="text-red-500 mr-3">|</span>
        {brand} Products
      </h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
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
                <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl hover:bg-red-700 transition-colors">
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByBrand;