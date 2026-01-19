import { Link } from 'react-router-dom';
import imgHero1 from "@/assets/72c4d03818baa064f073c65d62f9828655982ce2.png";
import imgHero2 from "@/assets/DH9iuo6qo8ZS4deIgYiQ8DaQWH2c0N05y06Wl8sm.jpg";
import imgHero3 from "@/assets/IMG-20250223-WA0006.jpg";
import { Timer, Milestone, Armchair, CircleDollarSign, Star, ArrowRight, Wifi, Zap, Wind } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from "motion/react";

export default function HomePage() {
  const heroImages = [imgHero1, imgHero2, imgHero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Timer,
      title: 'Wolf-Punctual',
      description: '99% On-Time Guarantee',
    },
    {
      icon: Milestone,
      title: 'Safe Travels',
      description: 'GPS Tracking & Expert Drivers.',
    },
    {
      icon: Armchair,
      title: 'Stretch Out',
      description: 'Extra-Legroom Seats',
    },
    {
      icon: CircleDollarSign,
      title: 'Unbeatable Prices',
      description: 'Lowest Fare Promise',
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      desc: "Stay connected throughout your journey."
    },
    {
      icon: Zap,
      title: "Charging Ports",
      desc: "USB ports at every seat to keep devices powered."
    },
    {
      icon: Armchair,
      title: "Reclining Seats",
      desc: "Extra legroom and comfort for long trips."
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      desc: "Climate control for a pleasant environment."
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Moyo',
      text: 'Best bus service in Zimbabwe! Always on time and comfortable seats.',
      rating: 5,
    },
    {
      name: 'John Dube',
      text: 'Safe, reliable, and affordable. RoadWolf is my first choice for travel.',
      rating: 5,
    },
    {
      name: 'Grace Ncube',
      text: 'Excellent customer service and very professional drivers.',
      rating: 5,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden flex items-center justify-center py-8 md:py-12">
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`RoadWolf Coach ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transform scale-105 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <span className="inline-block py-2 px-4 rounded-full bg-[#e96f30] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm border border-white/20 shadow-lg">
              Premium Travel Experience
            </span>
          </div>

          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 max-w-5xl leading-[1.1] drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Travel Comfortably <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              Across Zimbabwe
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 px-4">
            Experience the new standard of bus travel with reliable daily schedules between Harare, Bulawayo, and Victoria Falls.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link
              to="/booking"
              className="group relative inline-flex items-center justify-center bg-[#e96f30] hover:bg-[#d55f26] text-white font-bold text-lg md:text-xl px-10 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(233,111,48,0.5)] hover:shadow-[0_0_30px_rgba(233,111,48,0.7)] hover:-translate-y-1 active:scale-95"
            >
              <span>Book Your Seat Now</span>
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f3f2f8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="font-bold text-4xl md:text-5xl text-[#01257d] mb-4">
              Why Choose Us?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    <Icon className="text-[#e96f30]" size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl text-[#01257d] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Onboard Amenities Section (Replaces Popular Routes) */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-[#e96f30] font-bold uppercase tracking-widest text-sm mb-2 block">Travel in Comfort</motion.span>
            <motion.h2 variants={fadeInUp} className="font-bold text-3xl md:text-4xl text-[#01257d] mb-6">
              Onboard Amenities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 max-w-2xl mx-auto">
              Our luxury coaches are equipped with everything you need for a comfortable and productive journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {amenities.map((item, index) => (
              <motion.div variants={fadeInUp} key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e96f30] transition-colors duration-300">
                  <item.icon size={32} className="text-[#01257d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-[#01257d] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 px-4">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-slate-50 p-2 rounded-full pr-6 border border-slate-100">
              <div className="bg-[#01257d] text-white text-xs font-bold px-3 py-1.5 rounded-full">New</div>
              <p className="text-sm text-slate-600 font-medium">All buses are sanitized before every trip.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        {/* Background Blobs (Inverted positions) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="font-bold text-3xl md:text-4xl text-[#01257d] mb-4">
              Passenger Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 max-w-xl mx-auto">Don't just take our word for it. Here's what our travelers have to say about their journey.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-slate-100 font-serif text-6xl leading-none">"</div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e96f30] text-[#e96f30]" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic relative z-10 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#01257d] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-400">Verified Traveler</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}