import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import imgLogo from "@/assets/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";

export default function Footer() {
  return (
    <footer className="bg-[#01257d] text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img 
              src={imgLogo} 
              alt="RoadWolf Coaches" 
              className="h-20 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="font-['Montserrat',sans-serif] text-sm text-gray-300 mb-4">
              Zimbabwe's premier bus service providing safe, comfortable, and reliable travel across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#e96f30] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#e96f30] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#e96f30] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat',sans-serif] font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-['Montserrat',sans-serif] text-sm">
              <li><Link to="/" className="hover:text-[#e96f30] transition-colors">Home</Link></li>
              <li><Link to="/booking" className="hover:text-[#e96f30] transition-colors">Book Ticket</Link></li>
              <li><Link to="/routes" className="hover:text-[#e96f30] transition-colors">Routes</Link></li>
              <li><Link to="/check-ticket" className="hover:text-[#e96f30] transition-colors">Check Ticket</Link></li>
              <li><Link to="/about" className="hover:text-[#e96f30] transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-['Montserrat',sans-serif] font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 font-['Montserrat',sans-serif] text-sm text-gray-300">
              <li>Express Bus Service</li>
              <li>Luxury Coaches</li>
              <li>Package Delivery</li>
              <li>Group Bookings</li>
              <li>Corporate Travel</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-['Montserrat',sans-serif] font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 font-['Montserrat',sans-serif] text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Main Street, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+263 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@roadwolf.co.zw</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-6 pt-6 text-center">
          <p className="font-['Montserrat',sans-serif] text-sm text-gray-400">
            © 2026 RoadWolf Coaches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
