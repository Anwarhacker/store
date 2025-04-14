import React from 'react';
import { FaStar, FaShippingFast, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import ProductsByBrand from '../ProductsByBrand';

const Exide = () => {
  const products = [
    {
      id: 1,
      name: 'Exide Mileage ML75D23LBH',
      brand: 'Exide',
      image: 'https://via.placeholder.com/200?text=ML75D23LBH',
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
      image: 'https://via.placeholder.com/200?text=MLDIN55',
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
    
      {
        "id": 9,
        "name": "Exide PowerPro PP100L",
        "brand": "Exide",
        "image": "https://via.placeholder.com/200?text=PP100L",
        "description": "High-capacity battery for SUVs",
        "price": 9500,
        "rating": 4.8,
        "category": "Car Battery",
        "capacity": "150Ah",
        "lifetime": "5 years"
      },
      {
        "id": 10,
        "name": "Exide InvaPlus IP1500",
        "brand": "Exide",
        "image": "https://via.placeholder.com/200?text=IP1500",
        "description": "Durable inverter battery for home use",
        "price": 8200,
        "rating": 4.6,
        "category": "Inverter Battery",
        "capacity": "150Ah",
        "lifetime": "4 years"
      },
      {
        "id": 11,
        "name": "Exide Matrix MTRED70",
        "brand": "Exide",
        "image": "https://via.placeholder.com/200?text=MTRED70",
        "description": "Maintenance-free battery for sedans",
        "price": 7800,
        "rating": 4.9,
        "category": "Car Battery",
        "capacity": "150Ah",
        "lifetime": "5 years"
      },
      {
        "id": 12,
        "name": "Exide Xpress XP1800",
        "brand": "Exide",
        "image": "https://via.placeholder.com/200?text=XP1800",
        "description": "Heavy-duty battery for commercial vehicles",
        "price": 13500,
        "rating": 4.7,
        "category": "Commercial Battery",
        "capacity": "180Ah",
        "lifetime": "5 years"
      },
      
        {
          "id": 13,
          "name": "Exide Neo NX120-7L",
          "brand": "Exide",
          "image": "https://via.placeholder.com/200?text=NX120-7L",
          "description": "High-efficiency battery for motorcycles",
          "price": 5600,
          "rating": 4.7,
          "category": "Motorcycle Battery", // Updated category
          "capacity": "120Ah",
          "lifetime": "4 years"
        },
        {
          "id": 14,
          "name": "Exide InvaTubular IT500",
          "brand": "Exide",
          "image": "https://via.placeholder.com/200?text=IT500",
          "description": "Tubular inverter battery for extended backup",
          "price": 14500,
          "rating": 4.8,
          "category": "Tubular Battery", // Updated category
          "capacity": "150Ah",
          "lifetime": "6 years"
        },
        {
          "id": 15,
          "name": "Exide Mileage ML55D21LBH",
          "brand": "Exide",
          "image": "https://via.placeholder.com/200?text=ML55D21LBH",
          "description": "Reliable battery for mid-size vehicles",
          "price": 6800,
          "rating": 4.6,
          "category": "Car Battery",
          "capacity": "135Ah",
          "lifetime": "4 years"
        },
        {
          "id": 16,
          "name": "Exide Xpress XP2000",
          "brand": "Exide",
          "image": "https://via.placeholder.com/200?text=XP2000",
          "description": "Ultra-heavy-duty battery for large trucks",
          "price": 16500,
          "rating": 4.9,
          "category": "Commercial Battery",
          "capacity": "200Ah",
          "lifetime": "5 years"
        }
      
    
  ];

  // Group products by category
  const categories = {
    'Car Battery': {
      title: 'Car Batteries',
      description: 'High-performance batteries for all types of cars'
    },
    'Motorcycle Battery': {
      title: 'Motorcycle Batteries',
      description: 'Reliable power solutions for two-wheelers'
    },
    'Tubular Battery': {
      title: 'Tubular Batteries',
      description: 'Long-lasting batteries for inverter and solar applications'
    }
  };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 sm:text-5xl">
            Exide Batteries
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Premium Quality Car Batteries with Extended Warranty
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaShippingFast />, text: 'Free Shipping' },
            { icon: <FaCheckCircle />, text: 'Genuine Products' },
            { icon: <FaPhoneAlt />, text: '24/7 Support' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 bg-gray-800/50 p-6 rounded-xl">
              <span className="text-2xl text-red-500">{feature.icon}</span>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Category Sections */}
        {Object.entries(categories).map(([category, info]) => (
          <div key={category} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                {info.title}
              </h2>
              <p className="mt-2 text-gray-400">{info.description}</p>
            </div>
            {groupedProducts[category] && (
              <ProductsByBrand 
                brand="Exide" 
                products={groupedProducts[category]} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exide;