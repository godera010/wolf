import { Link, useLocation } from 'react-router-dom';
import imgLogo from "@/assets/logo3.svg";
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePerformance } from '@/hooks/usePerformance';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { tier } = usePerformance();

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

  // 3-tier performance-optimized animation variants
  const menuContainerVariants = tier === 'low'
    ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.05 }
    }
    : tier === 'mid'
      ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 }
      }
      : {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
      };

  const menuItemVariants = (index: number) => tier === 'low'
    ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.05 }
    }
    : tier === 'mid'
      ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: index * 0.02 }
      }
      : {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.05 }
      };

  const bookNowVariants = tier === 'low'
    ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.05 }
    }
    : tier === 'mid'
      ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.15 }
      }
      : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 }
      };

  return (
    <nav className="bg-[#01257d] text-white shadow-lg sticky top-0 z-50 border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Mobile: Spacer to balance the Menu button on the right, keeping Logo centered */}
          <div className="md:hidden w-10"></div>

          {/* Logo (Centered on Mobile, Left on Desktop) */}
          <Link to="/" className="flex items-center justify-center group flex-grow md:flex-grow-0">
            <img
              src={imgLogo}
              alt="RoadWolf Coaches"
              width={200}
              height={80}
              className="h-12 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
                  className={`font-['Montserrat',sans-serif] font-medium text-[15px] transition-colors duration-200 ${isActive(link.path) ? 'text-[#d84315]' : 'text-gray-200 hover:text-[#d84315]'
                    }`}
                >
                  {link.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#d84315] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#d84315] hover:bg-[#bf360c] text-white font-['Montserrat',sans-serif] font-bold text-[15px] px-8 py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden w-10 flex justify-end">
            <button
              className="text-white hover:text-[#e96f30] transition-colors p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Performance Optimized */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={menuContainerVariants.initial}
            animate={menuContainerVariants.animate}
            exit={menuContainerVariants.exit}
            transition={menuContainerVariants.transition}
            className={`md:hidden absolute top-full left-0 w-full bg-[#01257d] border-t border-white/10 shadow-xl overflow-hidden gpu-accelerated`}
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => {
                const itemVariants = menuItemVariants(index);
                return (
                  <motion.div
                    key={link.path}
                    initial={itemVariants.initial}
                    animate={itemVariants.animate}
                    transition={itemVariants.transition}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block font-['Montserrat',sans-serif] font-medium text-lg py-3 px-4 rounded-xl transition-all ${isActive(link.path) ? 'text-[#e96f30]' : 'text-gray-200 hover:bg-white/5'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={bookNowVariants.initial}
                animate={bookNowVariants.animate}
                transition={bookNowVariants.transition}
                className="pt-4"
              >
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-[#e96f30] text-white font-['Montserrat',sans-serif] font-bold text-lg px-6 py-4 rounded-xl text-center shadow-lg active:scale-95 transition-transform"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

