import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductsByBrand from './ProductsByBrand';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Exide Mileage ML75D23LBH',
      brand: 'Exide',
      image: 'https://m.media-amazon.com/images/I/71qF2WcxqhL._SL1500_.jpg',
      description: 'High-performance car battery',
      price: 7050,
      rating: 4.8,
      category: 'Car Battery',
      capacity: '150Ah',
      lifetime: '4 years'
    },
    {
      id: 2,
      name: 'Exide Mileage MLDIN55',
      brand: 'Exide',
      image: 'https://m.media-amazon.com/images/I/61vxhcGJn4L._SL1100_.jpg',
      description: 'Reliable inverter battery',
      price: 7560,
      rating: 4.7,
      category: 'Inverter Battery',
      capacity: '135Ah',
      lifetime: '4 years'
    },
    {
      id: 3,
      name: 'Exide Mileage MLDIN70 ISS',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=MLDIN70ISS',
      description: 'Smart idle start-stop compatible battery',
      price: 8700,
      rating: 4.6,
      category: 'Car Battery',
      capacity: '150Ah',
      lifetime: '5 years'
    },
    {
      id: 4,
      name: 'Exide Matrix MTRED45L',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=MTRED45L',
      description: 'Premium maintenance-free battery',
      price: 7199,
      rating: 4.9,
      category: 'Car Battery',
      capacity: '150Ah',
      lifetime: '5 years'
    },
    {
      id: 5,
      name: 'Exide Matrix MT40B20L',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=MT40B20L',
      description: 'Compact and powerful battery',
      price: 4800,
      rating: 4.7,
      category: 'Car Battery',
      capacity: '135Ah',
      lifetime: '4 years'
    },
    {
      id: 6,
      name: 'Exide Epiq EPIQ35L',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=EPIQ35L',
      description: 'Long-lasting and efficient battery',
      price: 5235,
      rating: 4.8,
      category: 'Car Battery',
      capacity: '135Ah',
      lifetime: '6 years'
    },
    {
      id: 7,
      name: 'Exide Epiq EPIQDIN74',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=EPIQDIN74',
      description: 'Reliable and maintenance-free',
      price: 12547,
      rating: 4.9,
      category: 'Car Battery',
      capacity: '150Ah',
      lifetime: '6 years'
    },
    {
      id: 8,
      name: 'Exide Xpress XP1300',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=XP1300',
      description: 'Heavy-duty battery for trucks and buses',
      price: 11800,
      rating: 4.7,
      category: 'Commercial Battery',
      capacity: '150Ah',
      lifetime: '5 years'
    },
    // Amaron Products
    {
      id: 9,
      name: 'Amaron Pro BK-35B20L',
      brand: 'Amaron',
      image: 'https://m.media-amazon.com/images/I/71RPqvXzP5L._SL1500_.jpg',
      description: 'Zero-maintenance car battery',
      price: 6800,
      rating: 4.7,
      category: 'Car Battery',
      capacity: '35Ah',
      lifetime: '4 years'
    },
    {
      id: 10,
      name: 'Amaron Hi-Life Pro',
      brand: 'Amaron',
      image: 'https://m.media-amazon.com/images/I/61J4cUE-SQL._SL1100_.jpg',
      description: 'Premium automotive battery',
      price: 8500,
      rating: 4.8,
      category: 'Car Battery',
      capacity: '45Ah',
      lifetime: '5 years'
    },

    // Luminous Products
    {
      id: 11,
      name: 'Luminous RC 18000',
      brand: 'Luminous',
      image: 'https://m.media-amazon.com/images/I/61dYrJwNYIL._SL1500_.jpg',
      description: 'High-capacity inverter battery',
      price: 14500,
      rating: 4.9,
      category: 'Inverter Battery',
      capacity: '150Ah',
      lifetime: '5 years'
    },
    {
      id: 12,
      name: 'Luminous Solar Plus',
      brand: 'Luminous',
      image: 'https://m.media-amazon.com/images/I/71E0FQGpDQL._SL1500_.jpg',
      description: 'Solar-compatible battery',
      price: 16800,
      rating: 4.8,
      category: 'Solar Battery',
      capacity: '200Ah',
      lifetime: '6 years'
    },

    // SF Sonic Products
    {
      id: 13,
      name: 'SF Sonic Flash Start',
      brand: 'SF Sonic',
      image: 'https://m.media-amazon.com/images/I/71cg3Rk+3GL._SL1500_.jpg',
      description: 'Quick-start automotive battery',
      price: 7200,
      rating: 4.6,
      category: 'Car Battery',
      capacity: '40Ah',
      lifetime: '4 years'
    },
    {
      id: 14,
      name: 'SF Sonic Stan Plus',
      brand: 'SF Sonic',
      image: 'https://m.media-amazon.com/images/I/61vR0oZZR4L._SL1100_.jpg',
      description: 'Heavy-duty commercial battery',
      price: 13500,
      rating: 4.7,
      category: 'Commercial Battery',
      capacity: '180Ah',
      lifetime: '5 years'
    },

    // Tata Green Products
    {
      id: 15,
      name: 'Tata Green Silver Plus',
      brand: 'Tata Green',
      image: 'https://m.media-amazon.com/images/I/61X4F3p6PIL._SL1500_.jpg',
      description: 'Economy car battery',
      price: 5900,
      rating: 4.5,
      category: 'Car Battery',
      capacity: '35Ah',
      lifetime: '3 years'
    },
    {
      id: 16,
      name: 'Tata Green Velocity Plus',
      brand: 'Tata Green',
      image: 'https://m.media-amazon.com/images/I/71RPqvXzP5L._SL1500_.jpg',
      description: 'Performance automotive battery',
      price: 7800,
      rating: 4.6,
      category: 'Car Battery',
      capacity: '45Ah',
      lifetime: '4 years'
    }
];

  const brands = ['all', ...new Set(products.map(product => product.brand))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = [];
    }
    acc[product.brand].push(product);
    return acc;
  }, {});

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 sm:text-5xl">
            Our Battery Products
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore our wide range of high-quality batteries
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className=" top-0  backdrop-blur-md bg-white/50 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white border-none rounded-xl focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <FaFilter className="text-red-500 text-xl" />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-gray-800 text-white border-none rounded-xl px-6 py-3 focus:ring-2 focus:ring-red-500 w-full md:w-auto"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Replace Products by Brand section with the new component */}
        {Object.entries(groupedProducts).map(([brand, brandProducts]) => (
          <ProductsByBrand 
            key={brand} 
            brand={brand} 
            products={brandProducts} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
