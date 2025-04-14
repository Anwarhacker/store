import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const storeInfo = {
    name: "Power Battery Store",
    owner: "John Smith",
    address: "123 Battery Street, Power City, State 12345",
    phone: "+1 (234) 567-8900",
    whatsapp: "+1 (234) 567-8900",
    email: "contact@powerbatterystore.com",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Store Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">{storeInfo.name}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">Store Location</h3>
                    <p className="text-gray-400 mt-1">{storeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaClock className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">Business Hours</h3>
                    <div className="text-gray-400 mt-1">
                      <p>Monday - Friday: {storeInfo.hours.weekdays}</p>
                      <p>Saturday: {storeInfo.hours.saturday}</p>
                      <p>Sunday: {storeInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <a href={`tel:${storeInfo.phone}`} className="text-gray-400 hover:text-red-500 transition-colors">
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaWhatsapp className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">WhatsApp</h3>
                    <a href={`https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                       className="text-gray-400 hover:text-red-500 transition-colors">
                      {storeInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href={`mailto:${storeInfo.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                      {storeInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 h-[300px]">
              <iframe
                src="https://www.google.co.in/maps/@16.9207143,76.2316199,3a,75y,300.79h,93.78t/data=!3m7!1e1!3m5!1s3C1nUia0ZloqxJ6lKYPLCg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.7797724402873456%26panoid%3D3C1nUia0ZloqxJ6lKYPLCg%26yaw%3D300.7933406247916!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;