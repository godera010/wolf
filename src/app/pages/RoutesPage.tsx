import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Bus, Info } from 'lucide-react';

// Placeholder Assets (Keeping existing imports)
// Real Route Assets
import imgHarare from '@/assets/routes/harare.webp';
import imgBulawayo from '@/assets/background/3.jpg'; // Fallback
import imgGweru from '@/assets/routes/gweru.jpg';
import imgKwekwe from '@/assets/routes/Kwekwe.jpg';
import imgKadoma from '@/assets/routes/kadoma.jpg';
import imgChegutu from '@/assets/routes/chegutu.webp';
import imgHeroBg from '@/assets/background/5.jpeg';
import logo from '@/assets/logo3.png';

// Destination Data
const destinations = [
  {
    id: 'harare',
    name: 'Harare',
    stopName: 'Holiday Inn Harare',
    category: 'Hotel',
    rating: 4.2,
    status: 'Open',
    reviewSnippet: 'A dependable choice for travelers seeking comfort and modern amenities in the heart of the capital.',
    mapLink: 'https://www.ihg.com/holidayinn/hotels/us/en/harare/harsf/hoteldetail',
    description: 'The capital city. A bustling metropolis with a rich history, modern shopping malls, and vibrant nightlife.',
    image: imgHarare,
    coordinates: { x: 66.0, y: 36.3 },
    routes: ['Bulawayo', 'Gweru', 'Kwekwe', 'Kadoma', 'Chegutu']
  },
  {
    id: 'bulawayo',
    name: 'Bulawayo',
    stopName: 'Bulawayo Rainbow Hotel',
    category: 'Hotel',
    rating: 4.2,
    status: 'Open',
    reviewSnippet: 'Stood out for its good food and great views over Bulawayo town.',
    mapLink: 'https://rtgafrica.com/bulawayo-rainbow-hotel/',
    description: 'The City of Kings. Known for its wide streets, colonial architecture, and proximity to Matobo National Park.',
    image: imgBulawayo,
    coordinates: { x: 40.0, y: 66.3 },
    routes: ['Harare', 'Gweru', 'Kwekwe']
  },
  {
    id: 'gweru',
    name: 'Gweru',
    stopName: 'Steers',
    category: 'Restaurant',
    rating: 4.0,
    status: 'Opens 07:00',
    reviewSnippet: 'Standard refreshment and pick-up point known for quick service and flame-grilled food.',
    mapLink: 'https://zimbabwelocations.steers.africa/restaurants-ZW-SteersGweru',
    description: 'The Midlands capital. A central hub known for the Antelope Park and the Military Museum.',
    image: imgGweru,
    coordinates: { x: 53.0, y: 57.3 },
    routes: ['Harare', 'Bulawayo', 'Kwekwe']
  },
  {
    id: 'kwekwe',
    name: 'Kwekwe',
    stopName: 'TotalEnergies Service Station',
    category: 'Gas Station',
    rating: 3.7,
    status: 'Open 24h',
    reviewSnippet: 'Primary fuel and rest stop, providing a functional and safe environment for quick stops.',
    mapLink: 'https://zw.totalenergies.com/',
    description: 'An industrial and mining center, home to the National Mining Museum and a key stop on the main highway.',
    image: imgKwekwe,
    coordinates: { x: 53.0, y: 50.4 },
    routes: ['Harare', 'Bulawayo', 'Gweru', 'Kadoma']
  },
  {
    id: 'kadoma',
    name: 'Kadoma',
    stopName: 'Odyssey Lodge',
    category: 'Lodging',
    rating: 3.9,
    status: 'Open 24h',
    reviewSnippet: 'Key landmark and popular local entertainment venue with 24-hour service.',
    mapLink: 'http://www.odysseylodge.co.zw/',
    description: 'The City of Gold. A historic mining town surrounded by rich agricultural lands and cotton fields.',
    image: imgKadoma,
    coordinates: { x: 54.0, y: 42.8 },
    routes: ['Harare', 'Kwekwe', 'Chegutu']
  },
  {
    id: 'chegutu',
    name: 'Chegutu',
    stopName: 'Chegutu Bus Terminus',
    category: 'Bus Station',
    rating: 3.5,
    status: 'Open',
    reviewSnippet: 'Main transit point for travelers heading to Harare or Kadoma.',
    mapLink: '#',
    description: 'A vital farming town famously known for its textile industry and citrus plantations.',
    image: imgChegutu,
    coordinates: { x: 56.4, y: 40.2 },
    routes: ['Harare', 'Kadoma']
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

      <section className="relative pt-32 pb-24 overflow-hidden -mt-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img src={imgHeroBg} alt="RoadWolf Network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#01257d]/95 via-[#01257d]/85 to-[#e96f30]/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl tracking-tight">Our Routes & Network</h1>
          <p className="text-blue-50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium drop-shadow-md">
            Discover our extensive bus routes connecting Zimbabwe's major cities.
            <br className="hidden md:block" />
            <span className="text-[#e96f30] font-bold">Scroll down</span> to interact with our live map and view stop details.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Side Details Panel (Desktop Only) */}
            <div className={`hidden lg:block lg:col-span-4 sticky top-24 backface-visibility-hidden transform-gpu ${activeDestination ? 'opacity-100' : 'opacity-50 grayscale'}`} style={{ transition: 'opacity 0.3s ease' }}>
              <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 h-[500px] flex flex-col items-center justify-center text-center overflow-hidden">

                {activeDestination ? (
                  <motion.div
                    key={activeDestination.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex flex-col will-change-contents"
                  >
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-md relative">
                      <img src={activeDestination.image} alt={activeDestination.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#e96f30] shadow-sm flex items-center gap-1">
                        <MapPin size={12} />
                        {activeDestination.category}
                      </div>
                    </div>

                    <div className="w-full text-left mb-2">
                      <h2 className="text-3xl font-bold text-[#01257d] leading-none">{activeDestination.name}</h2>
                      <span className="text-lg font-medium text-[#e96f30] block mt-1">{activeDestination.stopName}</span>
                    </div>

                    <div className="flex items-center gap-4 w-full mb-4 text-sm">
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100 text-yellow-700 font-bold">
                        <span>★</span> {activeDestination.rating}
                      </div>
                      <div className={`px-2 py-1 rounded-lg border font-bold ${activeDestination.status.includes('Open') ? 'bg-green-50 border-green-100 text-green-700' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
                        {activeDestination.status}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm text-left">{activeDestination.description}</p>

                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-50 text-left mb-4">
                      <p className="text-xs text-gray-500 italic mb-2">"{activeDestination.reviewSnippet}"</p>
                    </div>

                    <div className="w-full text-left mt-auto">
                      <div className="flex items-center justify-between">
                        <a
                          href={activeDestination.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#01257d] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#021b5b] transition-colors"
                        >
                          View Details <ArrowRight size={16} />
                        </a>
                        <div className="flex -space-x-2">
                          {activeDestination.routes.map((route: string) => (
                            <div key={route} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#01257d]" title={`To ${route}`}>
                              {route.substring(0, 2).toUpperCase()}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="p-4 bg-blue-50 rounded-full mb-6">
                      <Bus size={48} className="text-[#01257d]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-[#01257d] mb-3">Tap a City to View Bus Stop Details</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                      Explore our premium stop locations including hotels, restaurants, and service stations. Tap any city marker on the map to see exactly where we stop.
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
            <div className="col-span-1 lg:col-span-8 sticky top-24 backface-visibility-hidden transform-gpu">
              <div
                className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-2xl border border-gray-100 relative h-[500px] flex flex-col items-center justify-center overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent clearing when clicking inside map container
              >
                {/* Map Controls / Legend */}
                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-gray-100 shadow-sm text-xs space-y-2 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#e96f30]"></div>
                    <span className="text-gray-600 font-bold">Route Stop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#01257d]"></div>
                    <span className="text-gray-600 font-bold">Major City</span>
                  </div>
                </div>

                {/* Background Watermark/Logo */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                  <img src={logo} alt="" className="w-[80%] max-w-[400px] object-contain grayscale" />
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
                    {/* Connection Lines (Network) - Simplified for removed routes */}
                    <motion.path
                      d="M 527 236 L 452 261 M 452 261 L 434 278 M 434 278 L 425 328 M 425 328 L 425 372 M 425 372 L 320 431"
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
                          className="cursor-pointer"
                          style={{
                            transition: 'transform 0.3s ease',
                            transform: isActive ? 'scale(1.3)' : 'scale(1)',
                            transformOrigin: `${x}px ${y}px`,
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
                            cx={x} cy={y} r={8}
                            fill="white" stroke={isActive ? "#e96f30" : "#d1d5db"} strokeWidth="3"
                            className="transition-all duration-300"
                          />
                          {/* Inner Dot */}
                          <circle
                            cx={x} cy={y} r={4}
                            fill={isActive ? "#e96f30" : "#01257d"}
                            className="transition-all duration-300"
                          />

                          {/* Label */}
                          <text
                            x={x} y={y - 25}
                            textAnchor="middle"
                            className={`font-bold font-sans transition-all duration-300 ${isActive ? 'fill-[#e96f30]' : 'fill-gray-400'}`}
                            style={{ fontSize: isActive ? '16px' : '12px' }}
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
                      transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
                      // IMPORTANT: This is FIXED at bottom screen on mobile, and HIDDEN on large screens
                      className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] p-6 lg:hidden border-t-4 border-[#e96f30]"
                    >
                      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div> {/* Drag handle indicator */}
                      <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                          <img src={activeDestination.image} alt={activeDestination.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-[#01257d] mb-1 leading-none">{activeDestination.name}</h3>
                          <span className="text-sm font-medium text-[#e96f30] block mb-2">{activeDestination.stopName}</span>

                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">★ {activeDestination.rating}</span>
                            <span className={`text-xs font-bold px-1.5 py-0.5 rounded border ${activeDestination.status.includes('Open') ? 'bg-green-50 text-green-700 border-green-100' : 'bg-gray-50 text-gray-600 border-gray-100'}`}>{activeDestination.status}</span>
                          </div>

                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{activeDestination.description}</p>

                          <div className="flex justify-between items-center mt-2">
                            <a
                              href={activeDestination.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-[#01257d] underline decoration-[#e96f30] decoration-2 underline-offset-2"
                            >
                              View Stop Details
                            </a>
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
    </div >
  );
}
