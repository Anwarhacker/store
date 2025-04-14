import React from 'react';

const AdvertisementGrid = () => {
  const advertisements = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x300?text=Ad1',
      title: 'Special Offer',
      description: 'Limited time deals on premium batteries'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x300?text=Ad2',
      title: 'New Arrivals',
      description: 'Check out our latest battery collections'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advertisements.map((ad) => (
            <div key={ad.id} className="group relative overflow-hidden rounded-2xl">
              <img
                src={ad.image}
                alt={`Advertisement ${ad.id}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{ad.title}</h3>
                  <p className="text-gray-300">{ad.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementGrid;