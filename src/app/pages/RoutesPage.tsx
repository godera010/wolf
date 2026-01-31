import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Bus, Info } from 'lucide-react';

// Placeholder Assets (Keeping existing imports)
// Real Route Assets
import imgHarare from '@/assets/routes/harare.jpg';
import imgBulawayo from '@/assets/background/2.jpeg'; // Keep as fallback if not in folder
import imgVicFalls from '@/assets/routes/Vic Falls.jpg';
import imgGweru from '@/assets/routes/gweru.jpg';
import imgKwekwe from '@/assets/routes/Kwekwe.jpg';
import imgKadoma from '@/assets/routes/kadoma.jpg';
import imgChegutu from '@/assets/routes/chegutu.png';
import imgHwange from '@/assets/routes/hwange.jpg';

// Destination Data
const destinations = [
  {
    id: 'harare',
    name: 'Harare',
    description: 'The capital city. A bustling metropolis with a rich history, modern shopping malls, and vibrant nightlife.',
    image: imgHarare,
    coordinates: { x: 66.0, y: 36.3 },
    routes: ['Bulawayo', 'Mutare', 'Gweru', 'Kwekwe', 'Kadoma', 'Chegutu']
  },
  {
    id: 'bulawayo',
    name: 'Bulawayo',
    description: 'The City of Kings. Known for its wide streets, colonial architecture, and proximity to Matobo National Park.',
    image: imgBulawayo,
    coordinates: { x: 40.0, y: 66.3 },
    routes: ['Harare', 'Victoria Falls', 'Hwange', 'Gweru']
  },
  {
    id: 'vicballs',
    name: 'Victoria Falls',
    description: 'One of the Seven Natural Wonders of the World. The adventure capital offering bungee jumping, safaris, and breathtaking views.',
    image: imgVicFalls,
    coordinates: { x: 11.0, y: 37.6 },
    routes: ['Bulawayo', 'Hwange']
  },
  {
    id: 'gweru',
    name: 'Gweru',
    description: 'The Midlands capital. A central hub known for the Antelope Park and the corrupt-free Military Museum.',
    image: imgGweru,
    coordinates: { x: 53.0, y: 57.3 },
    routes: ['Harare', 'Bulawayo', 'Kwekwe']
  },
  {
    id: 'kwekwe',
    name: 'Kwekwe',
    description: 'An industrial and mining center, home to the National Mining Museum and a key stop on the main highway.',
    image: imgKwekwe,
    coordinates: { x: 53.0, y: 50.4 },
    routes: ['Harare', 'Bulawayo', 'Gweru', 'Kadoma']
  },
  {
    id: 'kadoma',
    name: 'Kadoma',
    description: 'The City of Gold. A historic mining town surrounded by rich agricultural lands and cotton fields.',
    image: imgKadoma,
    coordinates: { x: 54.0, y: 42.8 },
    routes: ['Harare', 'Kwekwe', 'Chegutu']
  },
  {
    id: 'chegutu',
    name: 'Chegutu',
    description: 'A vital farming town famously known for its textile industry and citrus plantations.',
    image: imgChegutu,
    coordinates: { x: 56.4, y: 40.2 },
    routes: ['Harare', 'Kadoma']
  },
  {
    id: 'hwange',
    name: 'Hwange',
    description: 'Ensure you spot the Big Five! Zimbabwe’s largest game reserve, famous for its massive elephant herds.',
    image: imgHwange,
    coordinates: { x: 17.9, y: 43.3 },
    routes: ['Victoria Falls', 'Bulawayo']
  }
];

export default function RoutesPage() {
  const [hoveredDestination, setHoveredDestination] = useState<any>(null);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);

  // Active destination is either one clicked or one being hovered
  const activeDestination = hoveredDestination || selectedDestination;

  // Handle map interaction
  const handleInteraction = (destination: any) => {
    setSelectedDestination(destination);
  };

  const clearSelection = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Montserrat',sans-serif]" onClick={clearSelection}>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Side Details Panel (Desktop Only) */}
            <div className={`hidden lg:block lg:col-span-4 sticky top-24 transition-opacity duration-300 ${activeDestination ? 'opacity-100' : 'opacity-50 grayscale'}`}>
              <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 min-h-[400px] flex flex-col items-center justify-center text-center">

                {activeDestination ? (
                  <motion.div
                    key={activeDestination.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-md">
                      <img src={activeDestination.image} alt={activeDestination.name} className="w-full h-full object-cover" />
                    </div>

                    <h2 className="text-3xl font-bold text-[#01257d] mb-3">{activeDestination.name}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{activeDestination.description}</p>

                    <div className="w-full text-left">
                      <span className="text-xs font-bold uppercase text-gray-400 block mb-3 pl-1">Connected Routes:</span>
                      <div className="flex flex-wrap gap-2">
                        {activeDestination.routes.map((route: string) => (
                          <span key={route} className="bg-blue-50 text-[#01257d] px-3 py-1.5 rounded-full text-sm font-bold">
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="p-4 bg-blue-50 rounded-full mb-6">
                      <Bus size={48} className="text-[#01257d]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-[#01257d] mb-3">Explore the RoadWolf Network</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                      Our interactive map is designed to help you plan your travel with ease. We connect major cities and tourist hubs across Zimbabwe, ensuring safe and comfortable journeys.
                    </p>
                    <div className="space-y-3 w-full max-w-xs text-left">
                      <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <MapPin size={18} className="text-[#e96f30]" />
                        <span><strong>7+ Major Dimensions</strong> covered</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <ArrowRight size={18} className="text-[#e96f30]" />
                        <span><strong>Direct Routes</strong> to key cities</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <Info size={18} className="text-[#e96f30]" />
                        <span><strong>Hover</strong> to see connection details</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Right Column: Interactive Map */}
            <div className="col-span-1 lg:col-span-8 sticky top-24">
              <div
                className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-2xl border border-gray-100 relative md:min-h-[500px] aspect-square md:aspect-[1.5/1] flex flex-col items-center justify-center overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent clearing when clicking inside map container
              >
                {/* Embedded Header */}
                <div className="absolute top-6 left-6 z-10 text-left pointer-events-none max-w-sm">
                  <div className="text-[#e96f30] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1">
                    Navigation
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#01257d] drop-shadow-sm mb-2">
                    Destinations Map
                  </h2>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed hidden md:block">
                    Explore our extensive travel network. Hover over any city to discover routes, attractions, and connections across Zimbabwe.
                  </p>
                </div>

                {/* Stylized Zimbabwe Map SVG */}
                <div className="relative w-full h-full max-w-2xl aspect-[1.2/1]">
                  <svg
                    viewBox="0 0 800 650"
                    className="w-full h-full drop-shadow-2xl"
                    style={{ overflow: 'visible' }}
                  >
                    {/* Simplified Zimbabwe Border Path */}
                    <path
                      d="M 539.5 608.3 L 494.7 599.9 L 466.3 610.0 L 425.5 595.7 L 391.2 594.8 L 337.5 556.7 L 272.3 543.8 L 247.6 490.3 L 247.4 460.6 L 211.3 451.6 L 115.9 359.0 L 89.4 310.2 L 72.4 295.2 L 40.0 227.8 L 134.2 237.0 L 161.6 246.8 L 190.0 244.8 L 236.7 190.3 L 310.0 121.0 L 340.1 114.3 L 350.4 85.1 L 398.4 51.5 L 462.2 40.0 L 467.7 71.4 L 537.9 69.8 L 577.0 87.5 L 595.2 108.4 L 635.3 114.5 L 679.1 141.6 L 679.3 248.3 L 662.8 306.7 L 659.2 369.6 L 672.8 394.6 L 663.2 444.2 L 650.5 451.9 L 628.3 512.7 L 539.5 608.3 Z"
                      fill="#01257d"
                      fillOpacity="0.05"
                      stroke="#01257d"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="transition-all duration-500"
                    />

                    {/* Connection Lines (Network) - Redrawn for new cities */}
                    <motion.path
                      d="M 527 236 L 452 261 M 452 261 L 434 278 M 434 278 L 425 328 M 425 328 L 425 372 M 425 372 L 320 431 M 320 431 L 143 281 M 143 281 L 88 244"
                      stroke="#e96f30"
                      strokeWidth="3"
                      strokeOpacity="0.3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* City Markers */}
                    {destinations.map((city) => {
                      // Convert % coordinates to SVG viewbox
                      const x = (city.coordinates.x / 100) * 800;
                      const y = (city.coordinates.y / 100) * 650;
                      const isActive = activeDestination?.id === city.id;

                      return (
                        <g
                          key={city.id}
                          onMouseEnter={() => setHoveredDestination(city)}
                          onMouseLeave={() => setHoveredDestination(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleInteraction(city);
                          }}
                          className="cursor-pointer hover:opacity-100"
                          style={{
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {/* Pulse Effect for Active */}
                          {isActive && (
                            <circle cx={x} cy={y} r="25" fill="#e96f30" fillOpacity="0.2">
                              <animate attributeName="r" from="25" to="50" dur="1.5s" repeatCount="indefinite" />
                              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                          )}

                          {/* Outer Ring */}
                          <circle
                            cx={x} cy={y} r={isActive ? 12 : 8}
                            fill="white" stroke={isActive ? "#e96f30" : "#d1d5db"} strokeWidth="3"
                            className="transition-all duration-300"
                          />
                          {/* Inner Dot */}
                          <circle
                            cx={x} cy={y} r={isActive ? 6 : 4}
                            fill={isActive ? "#e96f30" : "#01257d"}
                            className="transition-all duration-300"
                          />

                          {/* Label */}
                          <text
                            x={x} y={y - 25}
                            textAnchor="middle"
                            className={`text-[12px] font-bold font-sans transition-all duration-300 ${isActive ? 'fill-[#e96f30] text-[16px]' : 'fill-gray-400'}`}
                          >
                            {city.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Mobile ONLY: Bottom Sheet Info Card */}
                {/* Visible on Mobile, Hidden on LG screens */}
                <AnimatePresence>
                  {activeDestination && (
                    <motion.div
                      key={activeDestination.id}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      // IMPORTANT: This is FIXED at bottom screen on mobile, and HIDDEN on large screens
                      className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] p-6 lg:hidden border-t-4 border-[#e96f30]"
                    >
                      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div> {/* Drag handle indicator */}
                      <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                          <img src={activeDestination.image} alt={activeDestination.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-[#01257d] mb-1">{activeDestination.name}</h3>
                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{activeDestination.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {activeDestination.routes.slice(0, 3).map((route: string) => (
                              <span key={route} className="bg-blue-50 text-[#01257d] px-2 py-0.5 rounded-full text-[10px] font-bold">
                                {route}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
