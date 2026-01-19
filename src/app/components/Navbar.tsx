import { Link, useLocation } from 'react-router-dom';
import imgLogo from "@/assets/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/check-ticket', label: 'Check Ticket' },
    { path: '/routes', label: 'Routes' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
  ];
  
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={imgLogo} 
              alt="RoadWolf Coaches" 
              className="h-20 w-auto object-contain -mt-2 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span 
                  className={`font-['Montserrat',sans-serif] font-medium text-[15px] transition-colors duration-200 ${
                    isActive(link.path) ? 'text-[#e96f30]' : 'text-[#01257d] hover:text-[#e96f30]'
                  }`}
                >
                  {link.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#e96f30] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#042880] hover:bg-[#012275] text-white font-['Montserrat',sans-serif] font-bold text-[15px] px-8 py-3 rounded-full shadow-[0_4px_14px_0_rgba(1,37,125,0.39)] hover:shadow-[0_6px_20px_rgba(1,37,125,0.23)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#01257d] hover:text-[#e96f30] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-['Montserrat',sans-serif] font-medium text-[15px] py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.path) ? 'bg-orange-50 text-[#e96f30]' : 'text-[#01257d] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
                <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#042880] text-white font-['Montserrat',sans-serif] font-bold text-[15px] px-6 py-3 rounded-full text-center shadow-lg active:scale-95 transition-transform"
                >
                Book Now
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
