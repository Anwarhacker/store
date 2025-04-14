import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const batteryBrands = [
    {
      id: 1,
      name: 'Exide',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFR-jeE6Z5qNytA0PAhwxK8QlIVz3sC0xNA&s',
      description: 'Premium Car Batteries',
      category: 'Automotive',
      rating: 4.8,
      products: 25,
    },
    {
      id: 2,
      name: 'Amaron',
      image: 'https://i.pinimg.com/736x/db/7a/9b/db7a9bd171f546ce05fb99d46bc2a576.jpg',
      description: 'Long-Life Batteries',
      category: 'Automotive & UPS',
      rating: 4.7,
      products: 30,
    },
    {
      id: 3,
      name: 'Luminous',
      image: 'https://i.pinimg.com/736x/bc/53/5d/bc535dc35fe26fdb96816eb0a30ac393.jpg',
      description: 'Inverter Batteries',
      category: 'Home & Industrial',
      rating: 4.6,
      products: 20,
    },
    {
      id: 4,
      name: 'SF Sonic',
      image: 'https://i.pinimg.com/474x/1f/4b/04/1f4b043f13c6822f9330153ebca66325.jpg',
      description: 'Advanced Technology Batteries',
      category: 'Automotive',
      rating: 4.5,
      products: 15,
    },
    {
      id: 5,
      name: 'Tata Green',
      image: 'https://i.pinimg.com/736x/95/57/8b/95578b80fbed5f37fe20b2642fea7e31.jpg',
      description: 'Reliable Power Solutions',
      category: 'Commercial',
      rating: 4.4,
      products: 18,
    },
    {
      id: 6,
      name: 'sky',
      image: 'data:image/jpeg;base64,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',
      description: 'Industrial Batteries',
      category: 'Industrial',
      rating: 4.3,
      products: 22,
    }
  ];

  const categories = ['all', ...new Set(batteryBrands.map(brand => brand.category))];

  const filteredBrands = batteryBrands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 sm:text-5xl">
            Our Premium Battery Brands
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose from our wide selection of trusted battery brands
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="sticky top-0 z-10 backdrop-blur-md bg-white/50 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white border-none rounded-xl focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <FaFilter className="text-red-500 text-xl" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 text-white border-none rounded-xl px-6 py-3 focus:ring-2 focus:ring-red-500 w-full md:w-auto"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBrands.map((brand) => (
            <Link
              to={`/brands/${brand.name.toLowerCase()}`}
              key={brand.id}
              className="group block"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white font-medium">{brand.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="mt-3 text-gray-400">{brand.description}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                      {brand.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      {brand.products} Products
                    </span>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-white font-medium group-hover:text-red-500 transition-colors">
                      View Collection
                    </span>
                    <span className="w-8 h-8 rounded-full border border-red-500/20 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;