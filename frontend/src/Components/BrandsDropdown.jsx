import React from 'react';
import { Link } from 'react-router-dom';

const BrandsDropdown = () => {
  const brands = [
    { id: 1, name: 'Exide', category: 'Automotive' },
    { id: 2, name: 'Amaron', category: 'Automotive & UPS' },
    { id: 3, name: 'Luminous', category: 'Home & Industrial' },
    { id: 4, name: 'SF Sonic', category: 'Automotive' },
    { id: 5, name: 'Tata Green', category: 'Commercial' },
    { id: 6, name: 'Base Terminal', category: 'Industrial' }
  ];

  return (
    <div className="py-2">
      <h3 className="text-lg font-semibold px-4 mb-2">Popular Brands</h3>
      <div className="divide-y">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand/${brand.id}`}
            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            <div className="text-sm font-medium">{brand.name}</div>
            <div className="text-xs text-gray-500">{brand.category}</div>
          </Link>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t px-4">
        <Link
          to="/brands"
          className="text-red-600 hover:text-red-700 text-sm font-medium"
        >
          View All Brands →
        </Link>
      </div>
    </div>
  );
};

export default BrandsDropdown;