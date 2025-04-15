import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    name: "Saddam patel",
    // owner: "Saddam patel",
    address: "Goushiya complex sindagi dist bijapur",
    phone: "+919535111427 , 9945664021",
    whatsapp: "+919535111427",
    email: "hindustanbatterysindagi.com",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      saturday: "10:00 AM - 8:00 PM",
      sunday: "Closed",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
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
              <h2 className="text-2xl font-bold text-white mb-6">
                {storeInfo.name}
              </h2>
              {/* <h2 className="text-2xl font-bold text-white underline mb-6">{"Owner :"+ " "+storeInfo.owner}</h2> */}
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
                    <a
                      href={`tel:${storeInfo.phone}`}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaWhatsapp className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${storeInfo.whatsapp.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {storeInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-red-500 text-xl mt-1" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 h-[300px]">
              <iframe
                src="https://www.google.co.in/maps/place/Hindustan+battery/@16.9207544,76.2315303,3a,75y,345.6h,90t/data=!3m7!1e1!3m5!1stwQPNCVWiLBB4cPeCBjEeg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DtwQPNCVWiLBB4cPeCBjEeg%26yaw%3D345.59543!7i13312!8i6656!4m15!1m8!3m7!1s0x3bc63229e1641ddf:0x8d1dba7205f181c2!2sSindagi,+Karnataka+586128!3b1!8m2!3d16.9172558!4d76.2334278!16zL20vMGY2OW5y!3m5!1s0x3bc631bad1628529:0x86cf49c0fb3123b7!8m2!3d16.9208058!4d76.2315102!16s%2Fg%2F11hzpjr7c3?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
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
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>
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
