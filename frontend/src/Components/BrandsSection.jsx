import React from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const brands = [
    {
      name: 'Exide',
      image: 'https://via.placeholder.com/150?text=Exide',
      description: 'Premium Car Batteries'
    },
    {
      name: 'Amaron',
      image: 'https://via.placeholder.com/150?text=Amaron',
      description: 'Long-Life Batteries'
    },
    {
      name: 'Luminous',
      image: 'https://via.placeholder.com/150?text=Luminous',
      description: 'Inverter Batteries'
    },
    {
      name: 'SF Sonic',
      image: 'https://via.placeholder.com/150?text=SF+Sonic',
      description: 'Advanced Technology Batteries'
    },
    {
      name: 'Tata Green',
      image: 'https://via.placeholder.com/150?text=Tata+Green',
      description: 'Reliable Power Solutions'
    },
    {
      name: 'Base Terminal',
      image: 'https://via.placeholder.com/150?text=Base+Terminal',
      description: 'Industrial Batteries'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          Premium Battery Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              to={`/brands/${brand.name.toLowerCase()}`}
              key={brand.name}
              className="group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={brand.image}
                alt={`${brand.name} Batteries`}
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <p className="mt-4 font-semibold text-white group-hover:text-red-500 transition-colors">
                {brand.name}
              </p>
              <p className="text-sm text-gray-400 mt-2 text-center">
                {brand.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/brands" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
          >
            View All Battery Brands →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;