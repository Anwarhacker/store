import React from "react";
import {
  FaCar,
  FaCarBattery,
  FaRecycle,
  FaTint,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  // Update the services array to include images
  // Update the services array with unique images
  const services = [
    {
      id: 1,
      title: "Battery Sales",
      icon: <FaCarBattery className="text-4xl text-red-500" />,
      image:
        "https://www.portbook.com/sites/default/files/client-images/2019-05/11708003_10153601986263288_6649582488247821013_o%20(1).jpg",
      description:
        "Wide range of new batteries for all types of vehicles and applications.",
      features: [
        "Premium Brands",
        "Warranty Coverage",
        "Expert Guidance",
        "Best Prices",
      ],
    },
    {
      id: 2,
      title: "Battery Charging",
      icon: <FaCarBattery className="text-4xl text-red-500" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKf_VnE7ji-gtrjmKJpVM-bmjSQETvqd5LzA&s",
      description:
        "Fast and efficient battery charging solutions for your vehicles.",
      features: [
        "Fast Charging",
        "Deep Cycle Charging",
        "Battery Testing",
        "24/7 Service",
      ],
    },
    {
      id: 3,
      title: "Battery Exchange",
      icon: <FaRecycle className="text-4xl text-red-500" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvnC8mbt690E3M1yKYm94XpcyolFHTiEAUQ&s",
      description:
        "Exchange your old battery and get great value on new purchases.",
      features: [
        "Fair Evaluation",
        "Instant Exchange",
        "Environmental Friendly",
        "Best Exchange Rates",
      ],
    },
    {
      id: 4,
      title: "Royal Water Services",
      icon: <FaTint className="text-4xl text-red-500" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59ld4MmwO2zL3fWld_liSSKvGCpwC7tjluw&s",
      description: "Pure distilled water for your battery maintenance needs.",
      features: [
        "High Purity",
        "Bulk Supply",
        "Home Delivery",
        "Regular Supply",
      ],
    },
    {
      id: 5,
      title: "Automotive Services",
      icon: <FaCar className="text-4xl text-red-500" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IQb7IUbZr02DVqIrgVvohSouitF2aiEdhQ&s",
      description:
        "Complete automotive electrical system diagnostics and repair.",
      features: [
        "Alternator Service",
        "Starter Repair",
        "Wiring Solutions",
        "System Diagnosis",
      ],
    },
    {
      id: 6,
      title: "Emergency Services",
      icon: <FaTools className="text-4xl text-red-500" />,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-we-tested-65677d1419c0d.jpeg",
      description: "24/7 emergency battery services at your location.",
      features: [
        "Quick Response",
        "Mobile Service",
        "Jump Start",
        "Roadside Assistance",
      ],
    },
  ];

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 sm:text-5xl">
            Our Battery Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional battery solutions for all your needs
          </p>
        </div>

        {/* Services Grid */}
        {/* // Update the service card rendering */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 border border-gray-700"
            >
              {/* Add image container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white text-black p-2 px-5 rounded-2xl">
                  {React.cloneElement(service.icon, {
                    className: "text-3xl text-red-500",
                  })}
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rest of the card content remains the same */}
              <div className="p-6 bg-gray-800/80 border-t border-gray-700">
                <button
                  onClick={handleClick}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform group-hover:scale-105"
                >
                  <FaPhoneAlt className="mr-2" />
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
              <FaPhoneAlt className="text-4xl text-red-500" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              Need Emergency Service?
            </h3>
            <p className="mt-4 text-xl text-gray-300">
              Our team is available 24/7 for emergency battery services
            </p>
            <a
              href="tel:+919535111427"
              className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white text-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
            >
              <FaPhoneAlt className="mr-3 text-xl" />
              Call Now: +91-9535111427
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
