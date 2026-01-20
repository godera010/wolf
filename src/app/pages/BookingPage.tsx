import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import {
  ChevronDown,
  Calendar,
  MapPin,
  ArrowRightLeft,
  Clock,
  Wifi,
  Coffee,
  Tv,
  Bus as BusIcon,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// Mock Data Types
interface Bus {
  id: string;
  company: string;
  type: 'Luxury' | 'Standard' | 'Sleeper';
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  amenities: string[];
}

// Mock Data
const MOCK_BUSES: Bus[] = [
  {
    id: 'b1',
    company: 'RoadWolf Prime',
    type: 'Luxury',
    departureTime: '08:00',
    arrivalTime: '14:00',
    duration: '6h 00m',
    price: 45,
    seatsAvailable: 12,
    amenities: ['Wifi', 'AC', 'Snacks', 'TV'],
  },
  {
    id: 'b2',
    company: 'RoadWolf Express',
    type: 'Standard',
    departureTime: '10:30',
    arrivalTime: '17:00',
    duration: '6h 30m',
    price: 30,
    seatsAvailable: 28,
    amenities: ['AC', 'USB Charging'],
  },
  {
    id: 'b3',
    company: 'RoadWolf Night',
    type: 'Sleeper',
    departureTime: '22:00',
    arrivalTime: '05:00',
    duration: '7h 00m',
    price: 55,
    seatsAvailable: 8,
    amenities: ['Wifi', 'Blanket', 'Pillow', 'AC'],
  },
];

export default function BookingPage() {
  const navigate = useNavigate();
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [showTitle, setShowTitle] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 3500); // Wait for animation then hide
    return () => clearTimeout(timer);
  }, []);

  const cities = ['Harare', 'Bulawayo', 'Victoria Falls', 'Mutare', 'Gweru', 'Masvingo'];

  const handleSwap = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date) {
      setShowResults(true);
    }
  };

  const handleSelectBus = (bus: Bus) => {
    navigate('/booking/seats', {
      state: {
        bookingDetails: formData,
        selectedBus: bus
      }
    });
  };

  const handleBackToSearch = () => {
    setShowResults(false);
  };

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div className="bg-slate-50 relative overflow-hidden flex-grow min-h-[calc(100vh-64px)]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="flex-grow relative z-10 py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {showTitle && !showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl md:text-6xl text-center mb-3 bg-gradient-to-r from-[#01257d] to-[#e96f30] bg-clip-text text-transparent drop-shadow-sm">
                  Start Your Journey
                </h1>
                <p className="font-['Montserrat',sans-serif] font-light text-center text-slate-600 mb-10 text-lg">
                  Where would you like to go today?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Booking Steps */}
          <div className="mb-8">
            <BookingSteps currentStep={showResults ? 1.5 : 1} />
          </div>

          {/* Main Content Area */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {!showResults ? (
                /* Search Form */
                <motion.div
                  key="search-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 md:p-8 lg:p-10">
                    <div className="mb-8 text-center lg:text-left">
                      <h2 className="font-['Montserrat',sans-serif] font-bold text-2xl text-[#01257d] mb-1">
                        Plan Your Journey
                      </h2>
                      <p className="font-['Montserrat',sans-serif] text-slate-500 text-sm">
                        Find and book the perfect bus ride with RoadWolf
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form Fields (Identical to previous) */}
                      <div className="flex flex-row items-center gap-2 md:gap-4">
                        <div className="relative flex-1 group">
                          <label className="absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold text-[#01257d] z-10 whitespace-nowrap">
                            DEPARTURE POINT
                          </label>
                          <Select value={formData.from} onValueChange={(val) => setFormData({ ...formData, from: val })}>
                            <SelectTrigger className="border border-slate-200 rounded-xl focus:border-[#01257d] focus:ring-1 focus:ring-[#01257d]/20 transition-colors bg-white h-[50px] md:h-[60px] flex items-center shadow-none text-slate-700 font-['Montserrat',sans-serif] font-semibold text-[10px] md:text-sm pl-2 md:pl-4">
                              <div className="flex items-center gap-2 md:gap-3">
                                <MapPin size={18} className="text-[#e96f30] md:w-5 md:h-5 shrink-0" />
                                <SelectValue placeholder="Select Origin" />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              {cities.map((city) => (
                                <SelectItem key={`from-${city}`} value={city} className="font-['Montserrat',sans-serif]">
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="relative z-20 flex-shrink-0">
                          <button
                            type="button"
                            onClick={handleSwap}
                            className="p-2 md:p-3 bg-white border border-slate-100 hover:border-[#01257d] hover:bg-[#01257d] hover:text-white text-[#01257d] rounded-full shadow-md transition-all duration-300 focus:outline-none active:scale-95 group"
                            title="Swap locations"
                          >
                            <ArrowRightLeft size={16} className="md:w-5 md:h-5" />
                          </button>
                        </div>

                        <div className="relative flex-1 group">
                          <label className="absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold text-[#01257d] z-10 whitespace-nowrap">
                            DESTINATION POINT
                          </label>
                          <Select value={formData.to} onValueChange={(val) => setFormData({ ...formData, to: val })}>
                            <SelectTrigger className="border border-slate-200 rounded-xl focus:border-[#01257d] focus:ring-1 focus:ring-[#01257d]/20 transition-colors bg-white h-[50px] md:h-[60px] flex items-center shadow-none text-slate-700 font-['Montserrat',sans-serif] font-semibold text-[10px] md:text-sm pl-2 md:pl-4">
                              <div className="flex items-center gap-2 md:gap-3">
                                <MapPin size={18} className="text-[#01257d] md:w-5 md:h-5 shrink-0" />
                                <SelectValue placeholder="Select Destination" />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              {cities.filter(city => city !== formData.from).map((city) => (
                                <SelectItem key={`to-${city}`} value={city} className="font-['Montserrat',sans-serif]">
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-3 relative group">
                          <label
                            htmlFor="date-input"
                            className="absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold text-[#01257d] z-10 whitespace-nowrap"
                          >
                            TRAVEL DATE
                          </label>
                          <div
                            onClick={openDatePicker}
                            className="relative border border-slate-200 rounded-xl group-focus-within:border-[#01257d] group-focus-within:ring-1 group-focus-within:ring-[#01257d]/20 transition-colors bg-white h-[50px] md:h-[60px] flex items-center p-3 gap-3 cursor-pointer hover:border-[#01257d]/50"
                          >
                            <div className="p-2 bg-blue-50 text-[#01257d] rounded-lg pointer-events-none">
                              <Calendar size={18} />
                            </div>
                            <input
                              ref={dateInputRef}
                              id="date-input"
                              type="date"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              min={new Date().toISOString().split('T')[0]}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 pointer-events-none"
                              required
                            />
                            <div className="flex-grow text-slate-700 font-['Montserrat',sans-serif] font-semibold text-sm">
                              {formData.date ? new Date(formData.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : <span className="text-slate-400">Select Date</span>}
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="bg-[#042880] hover:bg-[#012275] text-white font-['Montserrat',sans-serif] font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 h-[50px] md:h-[60px]"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex justify-center space-x-8 mt-10 text-slate-400 opacity-80">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs uppercase tracking-wider font-semibold">Instant Booking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs uppercase tracking-wider font-semibold">Secure Payment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-xs uppercase tracking-wider font-semibold">24/7 Support</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Search Results */
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm transition-all duration-300">
                    <div>
                      <h2 className="text-[#01257d] font-['Montserrat',sans-serif] font-extrabold text-2xl md:text-3xl tracking-tight">
                        {formData.from} <span className="text-[#e96f30] mx-2">→</span> {formData.to}
                      </h2>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                        <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                          <Calendar size={14} className="text-[#e96f30]" />
                          {new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </p>
                        <Badge variant="outline" className="w-fit bg-blue-50/50 text-[#01257d] border-blue-100 font-bold px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                          Choose Available Bus
                        </Badge>
                      </div>
                    </div>
                    <Button
                      onClick={handleBackToSearch}
                      className="bg-transparent border-2 border-[#01257d] text-[#01257d] hover:bg-[#01257d] hover:text-white font-bold transition-all duration-300 px-6 rounded-xl hidden md:flex"
                    >
                      Back to Search
                    </Button>
                  </div>

                  {/* Bus List */}
                  <div className="grid gap-4">
                    {MOCK_BUSES.map((bus, idx) => (
                      <motion.div
                        key={bus.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#e96f30]/30 hover:shadow-lg transition-all duration-300 group">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                            {/* Bus Info */}
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center justify-between md:justify-start md:gap-4">
                                <Badge className={
                                  bus.type === 'Luxury' ? "bg-purple-100 text-purple-700 hover:bg-purple-100" :
                                    bus.type === 'Sleeper' ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-100" :
                                      "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                }>
                                  {bus.type}
                                </Badge>
                                <span className="text-slate-400 text-xs font-semibold tracking-wider">
                                  {bus.company}
                                </span>
                              </div>

                              <div className="flex items-center gap-6">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-[#01257d]">{bus.departureTime}</div>
                                  <div className="text-xs text-slate-400 font-medium">Departure</div>
                                </div>

                                <div className="flex-1 flex flex-col items-center px-4">
                                  <div className="text-xs text-slate-400 font-medium mb-1">{bus.duration}</div>
                                  <div className="w-full h-[2px] bg-slate-100 relative">
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300" />
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300" />
                                    <BusIcon size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300" />
                                  </div>
                                </div>

                                <div className="text-center">
                                  <div className="text-2xl font-bold text-slate-700">{bus.arrivalTime}</div>
                                  <div className="text-xs text-slate-400 font-medium">Arrival</div>
                                </div>
                              </div>

                              <div className="flex gap-3 text-slate-400">
                                {bus.amenities.includes('Wifi') && <Wifi size={14} />}
                                {bus.amenities.includes('AC') && <span className="text-[10px] border border-current px-1 rounded">AC</span>}
                                {bus.amenities.includes('Snacks') && <Coffee size={14} />}
                                {bus.amenities.includes('TV') && <Tv size={14} />}
                              </div>
                            </div>

                            {/* Separator */}
                            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

                            {/* Price & Action */}
                            <div className="flex items-center justify-between md:flex-col md:items-end md:gap-1">
                              <div>
                                <span className="text-sm text-slate-400 font-medium">Per Seat</span>
                                <div className="text-3xl font-bold text-[#e96f30]">
                                  ${bus.price}
                                </div>
                              </div>

                              <div className="text-right space-y-3">
                                <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full inline-block">
                                  {bus.seatsAvailable} seats left
                                </div>
                                <Button
                                  onClick={() => handleSelectBus(bus)}
                                  className="w-full md:w-auto bg-[#01257d] hover:bg-[#001a5c] text-white rounded-xl shadow-lg shadow-blue-900/10 group-hover:shadow-blue-900/20 active:scale-95 transition-all"
                                >
                                  Select Seat <ArrowRight size={16} className="ml-2" />
                                </Button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
