import { Link } from 'react-router-dom';
import imgHero from "@/assets/home background.webp";
import { Timer, Milestone, Armchair, CircleDollarSign, Star, ArrowRight, Wifi, Zap, Wind } from 'lucide-react';
import { motion, Variants } from "motion/react";
import { usePerformance } from "@/hooks/usePerformance";

export default function HomePage() {
  const { tier } = usePerformance();

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

  // 3-tier performance-optimized animation variants
  const fadeInUp: Variants = tier === 'low'
    ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.05 } }
    }
    : tier === 'mid'
      ? {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
      }
      : {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

  const staggerContainer: Variants = tier === 'low'
    ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.05 } }
    }
    : tier === 'mid'
      ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }
      : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      };

  // Hero text stagger animation
  const heroTextVariants: Variants = tier === 'low'
    ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } }
    }
    : tier === 'mid'
      ? {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.4 } }
      }
      : {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
      };

  const heroContainerVariants: Variants = tier === 'low'
    ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } }
    }
    : {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: tier === 'mid' ? 0.15 : 0.3,
          delayChildren: tier === 'mid' ? 0.1 : 0.2
        }
      }
    };

  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen with Single Image */}
      <section className="relative min-h-[600px] md:min-h-[calc(100vh-80px)] overflow-hidden bg-[#00154d]">
        {/* Background Image with Subtle Zoom Animation */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            initial={tier === 'low' ? {} : { scale: 1 }}
            animate={tier === 'low' ? {} : { scale: 1.05 }}
            transition={tier === 'low' ? {} : {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            src={imgHero}
            alt="RoadWolf Coach"
            className="absolute w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#01257d]/85 via-[#01257d]/50 to-transparent" />
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={heroContainerVariants}
                className="font-['Montserrat',sans-serif] font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg"
              >
                <motion.span className="block" variants={heroTextVariants}>
                  Ride with the Pack –
                </motion.span>
                <motion.span className="block text-[#e96f30]" variants={heroTextVariants}>
                  Travel Smarter,
                </motion.span>
                <motion.span className="block" variants={heroTextVariants}>
                  Faster, Wilder
                </motion.span>
              </motion.h1>

              <motion.p
                initial={tier === 'low' ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={tier === 'low' ? { duration: 0.1, delay: 0.3 } : { delay: 1, duration: 0.6 }}
                className="text-white/80 text-lg md:text-xl mt-6 max-w-lg font-['Montserrat',sans-serif]"
              >
                Premium coach services connecting Zimbabwe's major cities with comfort, safety, and reliability.
              </motion.p>

              <motion.div
                initial={tier === 'low' ? { opacity: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={tier === 'low' ? { duration: 0.1, delay: 0.4 } : { delay: 1.2, duration: 0.8 }}
                className="mt-10"
              >
                <Link
                  to="/booking"
                  className="group inline-flex items-center bg-[#e96f30] text-white font-['Montserrat',sans-serif] font-bold text-lg px-8 py-4 rounded-full shadow-lg border-2 border-[#e96f30] hover:bg-[#d85e20] hover:shadow-[0_0_25px_rgba(233,111,48,0.5)] transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Book a Seat Now</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
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

      {/* Onboard Amenities Section */}
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
        {/* Background Blobs */}
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