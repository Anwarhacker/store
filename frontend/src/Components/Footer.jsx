import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl text-center font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              About Us
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Your trusted partner in power solutions. Providing quality batteries and exceptional service since 1995.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-red-500 transition-all duration-300 group hover:scale-110"
                >
                  <Icon className="text-gray-400 group-hover:text-white transition-colors" size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="group inline-flex items-center text-gray-300 hover:text-red-500 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                      <FaArrowRight className="text-red-500" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-6">
              {[
                { Icon: FaMapMarkerAlt, text: 'Goushiya complex sindagi dist bijapur' },
                { Icon: FaPhone, text: '+91 95351 11427 ,  9945664021 ' },
                { Icon: FaEnvelope, text: 'hindustanbatterysindagi@gmail.com' }
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-4 group justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-red-500 transition-all duration-300">
                    <item.Icon className="text-gray-400 group-hover:text-white transition-colors" size={22} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Newsletter
            </h3>
            <p className="text-gray-300">Stay updated with our latest offers and updates.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">&copy; 2024 Battery Store. All rights reserved.</p>
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;