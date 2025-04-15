import React from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const brands = [
    {
      name: 'Exide',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgNDQ0IBwcHBwcHBw0HBwcHBw8IDQcNFREWFhURExMYHSggGCYlGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKy03KysrKy0tLS0rLTctNy0rKystKysrKy0tLSsrKysrKysrKysrKysrKysrKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8A8jKJFir3oqxCgtI2KyyJXkRcXFwWkHFwsXBbyGLhY2CfI42HjYk8hjYeJgeRxsJg8hjYWNgjyGMWIK2CxYgjgoSCtgsqCiMzIQhJFQmLFjRYNJFitFkSvI0hMsgvI2LiyNgvImLhY2C3kcbCxcE+QxsPEwPIY2HiYI8hjYWNgrYCWFiCtgpSsQUsBCqClGotSjOozIIWFBhRCYUWIUGsiyE0WJaSNIUjSFBpImLi4sg0kRcXFwW4OLi4uCeDiYeIHBxMPEwRwMTDsSwUsBLDGitgJSsQZ2BRp0aMrBolUGdBiYVaFBhRC2ShRIUG2YUWRoUS1kaQo0WQayNIUZYNJGxcWRhbiYuKwtxMTCYODiYaWCOBg2HUopYGJTo0Z2BRp0aMrAo0woy1Bo0qNGWkZmFGhwIcQvk4USFBvmFCgw4ltIsKJCg1kaLGiwaSKysL8ZsVhPEYkDgsSCODYNMaKWCNMaM7Ao06NGVgUKdGjHQUKdCjDSMzCiwoMOIaZOHAhwdGShRIUS2yUKDCg1ixY0WDSKqRReMqKJZFYERWECNKoKUaNKpRShRpUaMaFCulCjHTnQp0KOfQszIZlDgQ4NMnDgw4OjJQoMOJb5KLEhQaxYsSFBpFZlF2ZlFmRUBkVBUalKiKVKNKjRSjQp0aMdBQp0KMdOfQU6HSHNoWZhmUOBDg0y6Q45x0iXRk4UCFBvk4UGFBrFKDFg0hRUUXZUUWZFQGRUFalFagpUo0qNFKNGlQox0NCnQqGOgrn0dDoc+hZmGRQ4EODTJw4EOJb5OFAhwbwoUGFBrCiwYUGkKMii8VkUWZmQGasgqlSqIpUqVaNFKNGlRox0FGlQqGOgoU6FHPpEVhmsOBCiV8ukKBCg3ycOBCg2zThQIQ1lKEEqyjSU1FhfpKLCekiMHVRGEdYatGilrDVGjO1KNWjRnqjRq0ahjqjQpUKMNIzMM1OBDiVslDgQoNsnCgQoNZThQIso1lOLBlXRpKcqhKui8pMOronqsmpodJNTU0R1RrVLRS1rRrJRnalGraNGdqUKVCoZaqUKVGjHSMjDMiglErwoUCFBpDWUZVGspwpQii8pyrKGqNJXSVtHW0W6Wro62ielraOtonq62jraI6to2tqClrWjayUUtS1KyWjO1LRq0UMrUoUqNGVRmYVJYixK0KLBijSGsoxRaUilCVUtJT1YGrotKeto62i3o9bQ1dE+i1tHW0PRamjraI9LqampqEWraLJaKWtaiJaM7Wo1aNRVLUSqNGdRmYVOMipWWEKi0pLKLJX6S6LaJ6eroa2i3o9bR1tE+j1tDW0T6PW0NbQ9HqaOtoj0Wpo62iPS6iaiFbVtRk0VtapWQUtSpVo1CtZmYVJWZK6tFYWZWZKWVmFmaKwMzMJZmYSzMwMisIRmYQlZmQhEZhWo1RhWojMhWszMIf/9k=',
      description: 'Premium Car Batteries'
    },
    {
      name: 'Amaron',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW3cfDjy4544sh9LgjMU3Cp4H3lGfUicfLQ&s',
      description: 'Long-Life Batteries'
    },
    {
      name: 'Luminous',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkqQ3Lx-EfeZZ1-OT-SoLKgIRgC7y-VxVRQ&s',
      description: 'Inverter Batteries'
    },
    {
      name: 'SF Sonic',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXlye8i3rx/AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
      description: 'Advanced Technology Batteries'
    },
    {
      name: 'Tata Green',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNRweU1fc2QWWBXP98YyUke_Bx3MTK0Kzhw&s',
      description: 'Reliable Power Solutions'
    },
    {
      name: 'Base Terminal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTgLim7UVkRqc853eTQL_T3sR-N4wBg6fAQ&s',
      description: 'Industrial Batteries'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          Premium Battery Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link
              to={`/brands/${brand.name.toLowerCase()}`}
              key={brand.name}
              className="group relative h-64 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={brand.image}
                  alt={`${brand.name} Batteries`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform">
                  {brand.name}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {brand.description}
                </p>
              </div>
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