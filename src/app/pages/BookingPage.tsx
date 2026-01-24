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
  ArrowRight,
  X,
  Loader2
} from 'lucide-react';
import { toast } from "sonner";
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
import { Calendar as CalendarComponent } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../components/ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription
} from "../components/ui/drawer";
import { useIsMobile } from "../components/ui/use-mobile";

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
    arrivalTime: '14:00', // Dynamic
    duration: '6h 00m', // Dynamic
    price: 20, // Luxury Price
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
    price: 15, // Standard Price
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
    price: 25, // Sleeper Price
    seatsAvailable: 8,
    amenities: ['Wifi', 'Blanket', 'Pillow', 'AC'],
  },
];

export default function BookingPage() {
  const navigate = useNavigate();
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [showTitle, setShowTitle] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });
  const [errors, setErrors] = useState({
    from: false,
    to: false,
    date: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 3500); // Wait for animation then hide
    return () => clearTimeout(timer);
  }, []);

  // Real Route Data
  // Real Route Data with Loading Points
  const LOCATIONS = [
    { id: 'hRE', city: 'Harare', label: 'Harare', point: 'Roadport Terminal', address: 'Cnr Robert Mugabe Rd & 5th St' },
    { id: 'bYO', city: 'Bulawayo', label: 'Bulawayo', point: 'City Hall / Fort St', address: 'Cnr Fort Street & 10th Avenue' },
    { id: 'gWU', city: 'Gweru', label: 'Gweru', point: 'Clonsilla Motors', address: 'Chicken Inn Complex' },
    { id: 'kWE', city: 'Kwekwe', label: 'Kwekwe', point: 'Golden Mile / Redan', address: 'Highway Turn-off or Redan Garage' },
    { id: 'kAD', city: 'Kadoma', label: 'Kadoma', point: 'Kadoma Hotel / Speck\'s', address: 'Kadoma Hotel Entrance or Speck\'s Hotel' },
    { id: 'cHE', city: 'Chegutu', label: 'Chegutu', point: 'Chegutu Hotel', address: 'Hotel or Total Service Station' },
  ];

  const SUPPORT_CONTACTS = {
    Harare: '0788 333 430',
    Bulawayo: '0788 333 432',
    Gweru: '0788 333 434',
  };

  const handleSwap = () => {
    setFormData(prev => ({ ...prev, from: prev.to, to: prev.from }));
    setErrors(prev => ({ ...prev, from: false, to: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      from: !formData.from,
      to: !formData.to,
      date: !formData.date
    };

    if (newErrors.from || newErrors.to || newErrors.date) {
      setErrors(newErrors);
      toast.error("Missing Information", {
        description: "Please fill in all required fields to search for buses.",
      });
      return;
    }

    // Proceed if valid
    setIsSearching(true);
    // Simulate API Search
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
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

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      // Use local date parts to avoid timezone offset issues (off-by-one error)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      setFormData({ ...formData, date: formattedDate });
      setErrors(prev => ({ ...prev, date: false }));
    }
  };

  return (
    <div className="relative flex-grow min-h-full">
      <div className={`flex-grow relative z-10 py-3 md:py-12 ${showResults ? 'pb-32 lg:pb-12' : ''}`}>
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
                <h1 className="font-['Montserrat',sans-serif] font-bold text-3xl md:text-6xl text-center mb-2 md:mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
                  Start Your Journey
                </h1>
                <p className="font-['Montserrat',sans-serif] font-light text-center text-slate-600 mb-6 md:mb-10 text-base md:text-lg">
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
                      <h2 className="font-['Montserrat',sans-serif] font-bold text-xl md:text-2xl text-primary mb-1">
                        Plan Your Journey
                      </h2>
                      <p className="font-['Montserrat',sans-serif] text-slate-500 text-xs md:text-sm">
                        Find and book the perfect bus ride with RoadWolf
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form Fields (Identical to previous) */}
                      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
                        <div className="relative w-full md:flex-1 group">
                          <label className={`absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold z-10 whitespace-nowrap ${errors.from ? 'text-red-500' : 'text-primary'}`}>
                            DEPARTURE POINT
                          </label>
                          <Select
                            value={formData.from}
                            onValueChange={(val) => {
                              setFormData({ ...formData, from: val });
                              setErrors(prev => ({ ...prev, from: false }));
                            }}
                          >
                            <SelectTrigger className={`border rounded-xl transition-all bg-white !h-[55px] md:!h-[65px] flex items-center shadow-none text-slate-700 font-['Montserrat',sans-serif] font-semibold text-xs md:text-sm pl-4 md:pl-5 py-0 overflow-hidden text-left ${errors.from ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20'}`}>
                              <div className="flex items-center gap-3">
                                <MapPin size={20} className={errors.from ? "text-red-500" : "text-secondary shrink-0"} />
                                <SelectValue placeholder="Select Origin" />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              {LOCATIONS.map((loc) => (
                                <SelectItem key={`from-${loc.id}`} value={loc.city} className="font-['Montserrat',sans-serif]">
                                  {loc.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="relative z-20 flex-shrink-0 -my-5 md:my-0">
                          <button
                            type="button"
                            onClick={handleSwap}
                            className="p-2.5 md:p-3 bg-white border border-slate-100 hover:border-primary hover:bg-primary hover:text-white text-primary rounded-full shadow-lg transition-all duration-300 focus:outline-none active:scale-95 group"
                            title="Swap locations"
                          >
                            <ArrowRightLeft size={16} className="md:w-5 md:h-5 rotate-90 md:rotate-0" />
                          </button>
                        </div>

                        <div className="relative w-full md:flex-1 group">
                          <label className={`absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold z-10 whitespace-nowrap ${errors.to ? 'text-red-500' : 'text-primary'}`}>
                            DESTINATION POINT
                          </label>
                          <Select
                            value={formData.to}
                            onValueChange={(val) => {
                              setFormData({ ...formData, to: val });
                              setErrors(prev => ({ ...prev, to: false }));
                            }}
                          >
                            <SelectTrigger className={`border rounded-xl transition-all bg-white !h-[55px] md:!h-[65px] flex items-center shadow-none text-slate-700 font-['Montserrat',sans-serif] font-semibold text-xs md:text-sm pl-4 md:pl-5 py-0 overflow-hidden text-left ${errors.to ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20'}`}>
                              <div className="flex items-center gap-3">
                                <MapPin size={20} className={errors.to ? "text-red-500" : "text-primary shrink-0"} />
                                <SelectValue placeholder="Select Destination" />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              {LOCATIONS.filter(loc => loc.city !== formData.from).map((loc) => (
                                <SelectItem key={`to-${loc.id}`} value={loc.city} className="font-['Montserrat',sans-serif]">
                                  {loc.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-3 relative group">
                          <label className={`absolute -top-2.5 left-3 bg-white px-1 font-['Montserrat',sans-serif] text-[9px] md:text-xs font-bold z-50 whitespace-nowrap ${errors.date ? 'text-red-500' : 'text-primary'}`}>
                            TRAVEL DATE
                          </label>

                          <DatePickerWrapper
                            date={formData.date ? new Date(formData.date) : undefined}
                            onSelect={handleDateSelect}
                            hasError={errors.date}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSearching}
                          className="bg-primary hover:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 !h-[55px] md:!h-[65px] w-full"
                        >
                          {isSearching ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Searching...
                            </>
                          ) : (
                            "Search Buses"
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* Trust Badges & Support */}
                  <div className="flex flex-col items-center mt-6 space-y-3">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 opacity-80">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold">Instant Booking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold">Secure Payment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold">24/7 Support</span>
                      </div>
                    </div>

                    {/* Office Contacts */}
                    <div className="text-[10px] text-slate-400 text-center font-medium bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100/50">
                      <span className="uppercase tracking-widest font-bold text-slate-500 mr-2">Office Support:</span>
                      <span className="hidden md:inline">Harare: <span className="text-[#01257d] font-bold">{SUPPORT_CONTACTS.Harare}</span> • Bulawayo: <span className="text-[#01257d] font-bold">{SUPPORT_CONTACTS.Bulawayo}</span></span>
                      <span className="md:hidden flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-0.5">
                        <span>HRE: <span className="text-[#01257d] font-bold">{SUPPORT_CONTACTS.Harare}</span></span>
                        <span>BYO: <span className="text-[#01257d] font-bold">{SUPPORT_CONTACTS.Bulawayo}</span></span>
                      </span>
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
                  <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm transition-all duration-300 md:mb-8">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-black text-[#e96f30] tracking-[0.2em] md:hidden">Current Search</span>
                        <Badge variant="outline" className="hidden md:inline-flex bg-blue-50/50 text-[#01257d] border-blue-100 font-bold px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                          Available Buses
                        </Badge>
                      </div>
                      <h2 className="text-[#01257d] font-['Montserrat',sans-serif] font-extrabold text-2xl md:text-3xl tracking-tight leading-tight">
                        {formData.from} <span className="text-[#e96f30] mx-1 md:mx-2">→</span> {formData.to}
                      </h2>
                      <div className="flex items-center gap-3 mt-2">
                        <p className="text-slate-500 text-xs md:text-sm font-medium flex items-center gap-2">
                          <Calendar size={14} className="text-[#e96f30]" />
                          {new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </p>
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
                                <div className="text-left min-w-[90px]">
                                  <div className="text-2xl font-bold text-[#01257d] leading-none">{bus.departureTime}</div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Departure</div>
                                  <div className="text-[11px] font-bold text-slate-800 mt-1 leading-tight text-wrap">
                                    {LOCATIONS.find(l => l.city === formData.from)?.point || formData.from}
                                  </div>
                                </div>

                                <div className="flex-1 flex flex-col items-center px-2">
                                  <div className="text-xs text-slate-400 font-medium mb-1">{bus.duration}</div>
                                  <div className="w-full h-[2px] bg-slate-100 relative">
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <BusIcon size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300" />
                                  </div>
                                </div>

                                <div className="text-right min-w-[90px]">
                                  <div className="text-2xl font-bold text-slate-700 leading-none">{bus.arrivalTime}</div>
                                  <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Arrival</div>
                                  <div className="text-[11px] font-bold text-slate-800 mt-1 leading-tight text-wrap">
                                    {LOCATIONS.find(l => l.city === formData.to)?.point || formData.to}
                                  </div>
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

      {/* Mobile Sticky Search Summary */}
      {showResults && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 shadow-[0_-5px_30px_-10px_rgba(0,0,0,0.15)] md:hidden z-50 animate-in slide-in-from-bottom-full duration-500">
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            <div className="flex flex-col flex-grow justify-center min-w-0 pr-2">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                <span>{formData.from}</span>
                <ArrowRight size={10} className="text-[#e96f30]" />
                <span>{formData.to}</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-[#01257d] text-sm">
                <Calendar size={14} className="text-[#e96f30]" />
                <span>{new Date(formData.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
              </div>
            </div>
            <Button
              onClick={handleBackToSearch}
              variant="outline"
              className="border-2 border-[#01257d] text-[#01257d] hover:bg-[#01257d] hover:text-white font-bold h-11 px-5 rounded-xl shadow-sm active:scale-95 transition-all text-xs"
            >
              Modify
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile and Desktop Responsive Date Picker Wrapper
function DatePickerWrapper({ date, onSelect, hasError }: { date?: Date, onSelect: (date: Date | undefined) => void, hasError?: boolean }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const Trigger = (
    <div className={`relative border rounded-xl transition-all bg-white !h-[55px] md:!h-[65px] flex items-center pl-4 md:pl-5 gap-3 cursor-pointer hover:border-[#01257d]/50 focus-within:ring-1 py-0 overflow-hidden ${hasError ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-200' : 'border-slate-200 focus-within:border-primary focus-within:ring-primary/20'}`}>
      <Calendar size={20} className={hasError ? "text-red-500 shrink-0" : "text-primary shrink-0"} />
      <div className="flex-grow text-slate-700 font-['Montserrat',sans-serif] font-semibold text-xs md:text-sm">
        {date ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : <span className="text-slate-400">Select Date</span>}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          {Trigger}
        </DrawerTrigger>
        <DrawerContent className="bg-white">
          <DrawerHeader className="border-b border-slate-50">
            <DrawerTitle className="font-['Montserrat',sans-serif] text-[#01257d]">Select Travel Date</DrawerTitle>
            <DrawerDescription className="sr-only">
              Please choose a date for your bus journey from the calendar below.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex justify-center">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={(d) => {
                onSelect(d);
                setOpen(false);
              }}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              initialFocus
              className="bg-white rounded-lg"
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {Trigger}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white" align="start">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={(d) => {
            onSelect(d);
            setOpen(false);
          }}
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
