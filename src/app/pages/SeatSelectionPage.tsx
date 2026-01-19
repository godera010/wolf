import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import { ChevronRight, Info, MapPin, Calendar, User } from 'lucide-react';
import clsx from 'clsx';

// Constants moved outside component
const ROWS = 12;
const PRICE_PER_SEAT = 25;
const UNAVAILABLE_SEATS = [7, 12, 15, 23, 29, 30, 41];

export default function SeatSelectionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  
  // Robust booking details retrieval
  const defaultBooking = {
    from: 'Harare',
    to: 'Bulawayo',
    date: new Date().toISOString().split('T')[0]
  };

  // Safe access to state with Type Assertion to avoid TS errors
  const state = location.state as { bookingDetails?: typeof defaultBooking } | null;
  const bookingDetails = state?.bookingDetails || defaultBooking;

  const toggleSeat = (seatNumber: number) => {
    if (UNAVAILABLE_SEATS.includes(seatNumber)) return;
    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const getSeatStatus = (seatNumber: number) => {
    if (UNAVAILABLE_SEATS.includes(seatNumber)) return 'unavailable';
    if (selectedSeats.includes(seatNumber)) return 'selected';
    return 'available';
  };

  const formatPrice = (amount: number) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    } catch (e) {
      return `$${amount}`;
    }
  };

  // Safe date formatting helper
  const getFormattedDate = () => {
    try {
      const dateStr = bookingDetails?.date;
      if (!dateStr) return 'Select Date';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return 'Invalid Date';
      return d.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    } catch (e) {
      return 'Select Date';
    }
  };

  return (
    <div className="bg-slate-50 relative overflow-hidden flex-grow flex flex-col">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="flex-grow relative z-10 py-8">
        <div className="container mx-auto px-4">
          <BookingSteps currentStep={2} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* LEFT COLUMN: Seat Map */}
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-xl text-[#01257d]">
                    Select Your Seats
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Info size={16} />
                    <span>Click on a seat to select</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 mb-10 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#042880]" />
                    <span className="text-sm font-medium text-slate-600">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#e96f30]" />
                    <span className="text-sm font-medium text-slate-600">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-300 opacity-60" />
                    <span className="text-sm font-medium text-slate-600">Booked</span>
                  </div>
                </div>

                {/* Seat Map Layout */}
                <div className="max-w-[400px] mx-auto">
                    <h3 className="text-center font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">Front of Bus</h3>
                    
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {Array.from({ length: ROWS }, (_, rowIndex) => (
                            <div key={rowIndex} className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                                {/* Row Indicator */}
                                <div className="w-4 sm:w-6 text-center text-[10px] font-bold text-slate-300">{rowIndex + 1}</div>

                                {/* Left Side Seats */}
                                <div className="flex gap-1 sm:gap-2">
                                    {[0, 1].map((seatIdx) => {
                                        const seatNumber = rowIndex * 4 + seatIdx + 1;
                                        const status = getSeatStatus(seatNumber);
                                        return (
                                            <button
                                                key={seatNumber}
                                                onClick={() => toggleSeat(seatNumber)}
                                                disabled={status === 'unavailable'}
                                                className={clsx(
                                                    'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md font-["Montserrat",sans-serif] font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center',
                                                    status === 'available' && 'bg-[#042880] text-white hover:bg-[#012275]',
                                                    status === 'selected' && 'bg-[#e96f30] text-white shadow-lg scale-105',
                                                    status === 'unavailable' && 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                                                )}
                                            >
                                                {seatNumber}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Aisle */}
                                <div className="w-4 sm:w-6 md:w-8" />

                                {/* Right Side Seats */}
                                <div className="flex gap-1 sm:gap-2">
                                    {[2, 3].map((seatIdx) => {
                                        const seatNumber = rowIndex * 4 + seatIdx + 1;
                                        const status = getSeatStatus(seatNumber);
                                        return (
                                            <button
                                                key={seatNumber}
                                                onClick={() => toggleSeat(seatNumber)}
                                                disabled={status === 'unavailable'}
                                                className={clsx(
                                                    'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md font-["Montserrat",sans-serif] font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center',
                                                    status === 'available' && 'bg-[#042880] text-white hover:bg-[#012275]',
                                                    status === 'selected' && 'bg-[#e96f30] text-white shadow-lg scale-105',
                                                    status === 'unavailable' && 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                                                )}
                                            >
                                                {seatNumber}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <h3 className="text-center font-bold text-slate-400 uppercase tracking-[0.3em] mt-8 text-xs sm:text-sm">Back of Bus</h3>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Booking Summary */}
            <div className="lg:col-span-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <div className="sticky top-24 space-y-4">
                
                {/* Summary Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                  {/* Clean Header - No Background Color */}
                  <div className="p-6 pb-0">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-xl text-[#01257d]">Booking Summary</h3>
                    <div className="h-1 w-12 bg-[#e96f30] mt-2 rounded-full" />
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Route Info */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-[#e96f30] shrink-0 mt-0.5" size={18} />
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Travel Route</p>
                                <div className="font-semibold text-slate-800">
                                    {bookingDetails?.from || 'Origin'} <span className="text-[#01257d] mx-1">→</span> {bookingDetails?.to || 'Destination'}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Calendar className="text-[#e96f30] shrink-0 mt-0.5" size={18} />
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Travel Date</p>
                                <div className="font-semibold text-slate-800">
                                    {getFormattedDate()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Seat Details */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-slate-600 font-semibold text-sm">Selected Seats</span>
                            <span className="bg-[#01257d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {selectedSeats.length}
                            </span>
                        </div>
                        {selectedSeats.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {selectedSeats.sort((a,b) => a-b).map(seat => (
                                    <span key={seat} className="text-xs font-bold bg-slate-50 border border-slate-200 text-[#01257d] px-3 py-1.5 rounded-lg">
                                        Seat {seat}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-400 italic">Please select at least one seat</p>
                        )}
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Price Calculation */}
                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <div className="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Base Fare ({selectedSeats.length} x {formatPrice(PRICE_PER_SEAT)})</span>
                            <span>{formatPrice(selectedSeats.length * PRICE_PER_SEAT)}</span>
                         </div>
                         <div className="flex justify-between items-center pt-2 border-t border-slate-200 mt-2">
                            <span className="font-bold text-[#01257d]">Total Amount</span>
                            <span className="font-bold text-[#e96f30] text-2xl">
                                {formatPrice(selectedSeats.length * PRICE_PER_SEAT)}
                            </span>
                         </div>
                    </div>

                    {/* Action Button */}
                    <button
                        disabled={selectedSeats.length === 0}
                        onClick={() => navigate('/booking/passengers', { 
                            state: { 
                                bookingDetails, 
                                selectedSeats 
                            } 
                        })}
                        className="w-full bg-[#042880] hover:bg-[#012275] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-['Montserrat',sans-serif] font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                    >
                        <span>Continue to Passenger Details</span>
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </div>
                </div>

                {/* Support Info */}
                <div className="p-4 flex gap-3 items-center opacity-70">
                    <User size={16} className="text-[#01257d]" /> {/* User icon added back if it was missing or ensure imported */}
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                        Need Help? Call +263 123 456
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
