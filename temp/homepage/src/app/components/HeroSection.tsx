import { motion } from "motion/react";
import imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1 from "figma:asset/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";
import imgAboutUs from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgGeminiGeneratedImageGb3Zaqgb3Zaqgb3Z21 from "figma:asset/3a733a3e44520e7f060922e1f8b95c202527412d.png";

const navItems = [
  { name: "Home", active: true },
  { name: "Check Ticket", active: false },
  { name: "Routes", active: false },
  { name: "About Us", active: false },
];

export function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#00154d]">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
         <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
          src={imgGeminiGeneratedImageGb3Zaqgb3Zaqgb3Z21}
          alt="Bus Background"
          className="absolute w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01257d]/80 via-[#013675]/40 to-transparent" />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[80px] bg-[#01257d] shadow-lg flex items-center justify-between px-12 z-50"
      >
        {/* Logo Area */}
        <div className="relative h-full w-[150px] flex items-center">
            <motion.img 
                src={imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1} 
                alt="RoadWolf Logo" 
                className="absolute top-[-20px] left-0 w-[120px] object-contain drop-shadow-md"
                whileHover={{ scale: 1.05 }}
            />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 ml-auto mr-12">
            {navItems.map((item) => (
                <motion.a
                    key={item.name}
                    href="#"
                    className={`relative font-['Montserrat',sans-serif] text-[15px] font-medium transition-colors duration-300 ${
                        item.active ? "text-[#e96f30]" : "text-white hover:text-[#e96f30]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item.name}
                    {item.active && (
                        <motion.div 
                            layoutId="underline"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e96f30]"
                        />
                    )}
                </motion.a>
            ))}
        </div>

        {/* Book Now Button (Nav) */}
        <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#d85e20" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e96f30] text-white px-6 py-2 rounded-full font-['Montserrat',sans-serif] font-bold text-[15px] border border-[#e96f30] shadow-sm"
        >
            Book Now
        </motion.button>
      </motion.nav>

      {/* Hero Content */}
      <div className="absolute top-[140px] left-[50px] max-w-[700px] z-10 p-8">
        <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.3,
                        delayChildren: 0.2
                    }
                }
            }}
            className="font-['Montserrat',sans-serif] font-black text-[64px] text-white leading-tight drop-shadow-lg"
        >
          <motion.span 
            className="block"
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            Ride with the Pack –
          </motion.span>
          <motion.span 
            className="block text-[#e96f30]"
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            Travel Smarter,
          </motion.span>
          <motion.span 
            className="block"
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
            }}
          >
            Faster, Wilder
          </motion.span>
        </motion.h1>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12"
        >
            <motion.button
                whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 0px 20px rgba(233, 111, 48, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e96f30] text-white font-['Montserrat',sans-serif] font-bold text-[18px] px-8 py-4 rounded-full shadow-lg border-2 border-[#e96f30] hover:bg-[#d85e20] transition-colors"
            >
                Book a Seat Now
            </motion.button>
        </motion.div>
      </div>
      
    </div>
  );
}
