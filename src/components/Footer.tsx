
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-studio-black text-white" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-studio-orange">Fire Escape Art Studio</h3>
            <p className="text-sm text-gray-300">
              A creative space where everyone can unleash their artistic potential through pottery,
              painting, and various art forms.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/fireescapestudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-studio-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@fireescapeartstudio.com" 
                className="text-white hover:text-studio-orange transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:9202312224" 
                className="text-white hover:text-studio-orange transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-studio-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-studio-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-studio-orange transition-colors">Party & Events</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-studio-orange transition-colors">Class Calendar</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-studio-orange transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/gift-certificates" className="text-gray-300 hover:text-studio-orange transition-colors">Gift Certificates</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Studio Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Monday - Friday: 10am - 7pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Saturday: 10am - 5pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Sunday: 11am - 4pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>927 Oregon Street, Oshkosh, Wisconsin 54902</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:9202312224" className="hover:text-studio-orange transition-colors">(920) 231-2224</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@fireescapeartstudio.com" className="hover:text-studio-orange transition-colors">info@fireescapeartstudio.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fire Escape Art Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
