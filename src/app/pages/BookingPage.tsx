import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import { ChevronDown, Calendar, MapPin, ArrowRightLeft } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default function BookingPage() {
  const navigate = useNavigate();
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
  });

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
      navigate('/booking/seats', { state: { bookingDetails: formData } });
    }
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
          {/* Title Section with Animation */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl md:text-6xl text-center mb-3 bg-gradient-to-r from-[#01257d] to-[#e96f30] bg-clip-text text-transparent drop-shadow-sm">
              Start Your Journey
            </h1>
            <p className="font-['Montserrat',sans-serif] font-light text-center text-slate-600 mb-10 text-lg">
              Where would you like to go today?
            </p>
          </div>

          {/* Booking Steps */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
             <BookingSteps currentStep={1} />
          </div>

          {/* Booking Form Card */}
          <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 md:p-8 lg:p-10">
              <h2 className="font-['Montserrat',sans-serif] font-semibold text-xl text-[#01257d] mb-8 text-center lg:text-left">
                Search Availability
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* KEY SECTION: Forced horizontal layout (flex-row) for all screen sizes */}
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    
                    {/* From Dropdown Group */}
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

                    {/* Switch Icon */}
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

                    {/* To Dropdown Group */}
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

                {/* Secondary Row (Dates & Search) */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
