import React from 'react';
import { FaArrowRight, FaPercent, FaBolt, FaClock, FaTruck } from 'react-icons/fa';

const AdvertisementGrid = () => {
  const advertisements = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW3cfDjy4544sh9LgjMU3Cp4H3lGfUicfLQ&s',
      title: 'Premium Car Batteries',
      description: 'Up to 30% off on selected models',
      features: ['Extended Warranty', 'Free Installation', '24/7 Support'],
      icon: <FaPercent className="text-red-500" />
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMJRLILVhr4__x-Q9-knr5IQM2VwSjYv3oA&s',
      title: 'Quick Replacement Service',
      description: 'Professional battery replacement at your doorstep',
      features: ['Same Day Service', 'Expert Technicians', 'Quality Assured'],
      icon: <FaBolt className="text-red-500" />
    },
    {
      id: 3,
      image: 'data:image/jpeg;base64,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',
      title: 'Limited Time Offer',
      description: 'Special discounts on Exide and Amaron batteries',
      features: ['Instant Discount', 'Free Testing', 'Extended Warranty'],
      icon: <FaClock className="text-red-500" />
    },
    {
      id: 4,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgNDQ0IBwcHBwcHBw0HBwcHBw8IDQcNFREWFhURExMYHSggGCYlGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKy03KysrKy0tLS0rLTctNy0rKystKysrKy0tLSsrKysrKysrKysrKysrKysrKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8A8jKJFir3oqxCgtI2KyyJXkRcXFwWkHFwsXBbyGLhY2CfI42HjYk8hjYeJgeRxsJg8hjYWNgjyGMWIK2CxYgjgoSCtgsqCiMzIQhJFQmLFjRYNJFitFkSvI0hMsgvI2LiyNgvImLhY2C3kcbCxcE+QxsPEwPIY2HiYI8hjYWNgrYCWFiCtgpSsQUsBCqClGotSjOozIIWFBhRCYUWIUGsiyE0WJaSNIUjSFBpImLi4sg0kRcXFwW4OLi4uCeDiYeIHBxMPEwRwMTDsSwUsBLDGitgJSsQZ2BRp0aMrBolUGdBiYVaFBhRC2ShRIUG2YUWRoUS1kaQo0WQayNIUZYNJGxcWRhbiYuKwtxMTCYODiYaWCOBg2HUopYGJTo0Z2BRp0aMrAo0woy1Bo0qNGWkZmFGhwIcQvk4USFBvmFCgw4ltIsKJCg1kaLGiwaSKysL8ZsVhPEYkDgsSCODYNMaKWCNMaM7Ao06NGVgUKdGjHQUKdCjDSMzCiwoMOIaZOHAhwdGShRIUS2yUKDCg1ixY0WDSKqRReMqKJZFYERWECNKoKUaNKpRShRpUaMaFCulCjHTnQp0KOfQszIZlDgQ4NMnDgw4OjJQoMOJb5KLEhQaxYsSFBpFZlF2ZlFmRUBkVBUalKiKVKNKjRSjQp0aMdBQp0KMdOfQU6HSHNoWZhmUOBDg0y6Q45x0iXRk4UCFBvk4UGFBrFKDFg0hRUUXZUUWZFQGRUFalFagpUo0qNFKNGlQox0NCnQqGOgrn0dDoc+hZmGRQ4EODTJw4EOJb5OFAhwbwoUGFBrCiwYUGkKMii8VkUWZmQGasgqlSqIpUqVaNFKNGlRox0FGlQqGOgoU6FHPpEVhmsOBCiV8ukKBCg3ycOBCg2zThQIQ1lKEEqyjSU1FhfpKLCekiMHVRGEdYatGilrDVGjO1KNWjRnqjRq0ahjqjQpUKMNIzMM1OBDiVslDgQoNsnCgQoNZThQIso1lOLBlXRpKcqhKui8pMOronqsmpodJNTU0R1RrVLRS1rRrJRnalGraNGdqUKVCoZaqUKVGjHSMjDMiglErwoUCFBpDWUZVGspwpQii8pyrKGqNJXSVtHW0W6Wro62ielraOtonq62jraI6to2tqClrWjayUUtS1KyWjO1LRq0UMrUoUqNGVRmYVJYixK0KLBijSGsoxRaUilCVUtJT1YGrotKeto62i3o9bQ1dE+i1tHW0PRamjraI9LqampqEWraLJaKWtaiJaM7Wo1aNRVLUSqNGdRmYVOMipWWEKi0pLKLJX6S6LaJ6eroa2i3o9bR1tE+j1tDW0T6PW0NbQ9HqaOtoj0Wpo62iPS6iaiFbVtRk0VtapWQUtSpVo1CtZmYVJWZK6tFYWZWZKWVmFmaKwMzMJZmYSzMwMisIRmYQlZmQhEZhWo1RhWojMhWszMIf/9k=',
      title: 'Free Home Delivery',
      description: 'Order now and get free delivery within 24 hours',
      features: ['No Minimum Order', 'Safe Handling', 'Pan India Service'],
      icon: <FaTruck className="text-red-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advertisements.map((ad) => (
            <div key={ad.id} className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-red-500/30 transition-colors">
              <img
                src={ad.image}
                alt={`Advertisement ${ad.id}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-3">
                  {ad.icon}
                  <h3 className="text-2xl font-bold text-white">{ad.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-4">{ad.description}</p>
                <ul className="space-y-2">
                  {ad.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group/btn">
                  Learn More
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementGrid;