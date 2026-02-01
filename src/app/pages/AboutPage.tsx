import { motion } from 'framer-motion';
import { Target, Eye, Shield, Bus, MapPin, Users, Heart, Clock, Award } from 'lucide-react';
import imgHero from '@/assets/background/4.jpg';

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-white font-['Montserrat',sans-serif]">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={imgHero}
                        alt="RoadWolf Bus on the road"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="will-change-transform"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                            Welcome to <span className="text-[#e96f30]">RoadWolf</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto px-4">
                            Redefining bus travel across Zimbabwe with comfort, safety, and reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-8 border-[#01257d] will-change-transform"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-[#01257d]/10 rounded-full mr-6">
                                    <Target className="w-10 h-10 text-[#01257d]" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#01257d]">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Road Wolf our mission is to provide safe and reliable transportation that connects communities.
                                We are committed to delivering exceptional customer service, ensuring comfort, convenience, and safety on every journey.
                                Furthermore, we strive to contribute to a sustainable transportation future.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-8 border-[#e96f30] will-change-transform"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-[#e96f30]/10 rounded-full mr-6">
                                    <Eye className="w-10 h-10 text-[#e96f30]" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#01257d]">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be the leading provider of transportation in Zimbabwe, enhancing mobility while promoting sustainability
                                within the transportation industry in Zimbabwe.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#01257d] mb-4">Services Offered</h2>
                        <div className="w-24 h-1 bg-[#e96f30] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#01257d] text-white p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                            <Bus className="w-12 h-12 text-[#e96f30] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Inter-City Travel</h3>
                            <p className="text-gray-200 leading-relaxed text-lg">
                                Daily bus services connecting <strong>Harare</strong> and <strong>Victoria Falls</strong>.
                                With convenient stops and scheduled departures in:
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {['Kadoma', 'Kwekwe', 'Gweru', 'Bulawayo', 'Hwange'].map(city => (
                                    <span key={city} className="bg-white/10 px-4 py-1 rounded-full text-sm font-semibold selection:bg-[#e96f30]">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-100 text-[#01257d] p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e96f30]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                            <Users className="w-12 h-12 text-[#e96f30] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Private Charters</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Exclusive bus rentals tailored for your specific needs. Perfect for:
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#e96f30] rounded-full mr-3"></div>
                                    School Trips & Educational Tours
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#e96f30] rounded-full mr-3"></div>
                                    Corporate Events & Outings
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#e96f30] rounded-full mr-3"></div>
                                    Weddings & Special Occasions
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section
                className="py-20 text-white relative overflow-hidden bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${imgHero})` }}
            >
                {/* Dark Overlay with Parallax Backup */}
                <div className="absolute inset-0 bg-[#01257d]/90 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block p-4 bg-[#e96f30] rounded-full mb-8 shadow-lg animate-pulse">
                            <Shield className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Your Safety is Our Howl</h2>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-12">
                            "At RoadWolf, your safety is our top priority. We ensure every journey is secure with <span className="text-[#e96f30] font-bold">24/7 GPS tracking</span>, sanitized buses, and trained drivers. Ride with confidence – because your peace of mind is our mission."
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <MapPin className="w-8 h-8 text-[#e96f30] mb-4" />
                                <h4 className="font-bold text-lg mb-2">24/7 GPS Tracking</h4>
                                <p className="text-sm text-gray-300">Real-time monitoring of all our fleets for enhanced security.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <Heart className="w-8 h-8 text-[#e96f30] mb-4" />
                                <h4 className="font-bold text-lg mb-2">Sanitized Buses</h4>
                                <p className="text-sm text-gray-300">Deep cleaning protocols before every trip for your health.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <Award className="w-8 h-8 text-[#e96f30] mb-4" />
                                <h4 className="font-bold text-lg mb-2">Expert Drivers</h4>
                                <p className="text-sm text-gray-300">Professionally trained and experienced driving team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Values (Extra content) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#01257d]">Why Choose RoadWolf?</h2>
                        <p className="text-gray-500 mt-4">More than just a bus ride, it's a premium travel experience.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: Clock, title: 'Reliability', text: 'On-time departures and arrivals you can count on.' },
                            { icon: Heart, title: 'Comfort', text: 'Reclining seats, ample legroom, and climate control.' },
                            { icon: Users, title: 'Community', text: 'Connecting people and places across our beautiful nation.' },
                            { icon: Award, title: 'Excellence', text: 'Committed to the highest standards of service quality.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center p-6 border rounded-2xl hover:border-[#e96f30] transition-colors group"
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e96f30]/10 transition-colors">
                                    <item.icon className="w-8 h-8 text-[#01257d] group-hover:text-[#e96f30] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#01257d] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
