import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/card';
import { ChevronRight, Info, MapPin, Calendar, X } from 'lucide-react';
import clsx from 'clsx';

// Constants
const ROWS = 12; // 48 Seats Total
const TOTAL_SEATS = ROWS * 4;

// Type definition for Bus (matching BookingPage)
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

export default function SeatSelectionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [showMobileConfirm, setShowMobileConfirm] = useState(false);

  // Parse State
  const state = location.state as {
    bookingDetails?: { from: string; to: string; date: string },
    selectedBus?: Bus
  } | null;

  const bookingDetails = state?.bookingDetails || {
    from: 'Harare',
    to: 'Bulawayo',
    date: new Date().toISOString().split('T')[0]
  };

  const selectedBus = state?.selectedBus;
  const pricePerSeat = selectedBus?.price || 25;

  // Generate Unavailable Seats consistently
  const unavailableSeats = useMemo(() => {
    if (!selectedBus) return [7, 12, 15, 23, 29, 30, 41]; // Fallback hardcoded defaults

    const seatsToBlock = TOTAL_SEATS - selectedBus.seatsAvailable;
    const blocked = new Set<number>();

    // Seeded-like random generation (simple version)
    // We want it to be deterministic for the same bus if possible, 
    // but for now random is fine as long as count is correct.
    while (blocked.size < seatsToBlock) {
      const seat = Math.floor(Math.random() * TOTAL_SEATS) + 1;
      if (!blocked.has(seat)) {
        blocked.add(seat);
      }
    }
    return Array.from(blocked);
  }, [selectedBus]);

  const toggleSeat = (seatNumber: number) => {
    if (unavailableSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const getSeatStatus = (seatNumber: number) => {
    if (unavailableSeats.includes(seatNumber)) return 'unavailable';
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

  const handleContinue = () => {
    // On mobile, show confirmation modal first
    if (window.innerWidth < 1024) {
      setShowMobileConfirm(true);
    } else {
      proceedToNextStep();
    }
  };

  const proceedToNextStep = () => {
    navigate('/booking/passengers', {
      state: {
        bookingDetails,
        selectedSeats,
        selectedBus, // Pass it forward
        totalAmount: selectedSeats.length * pricePerSeat
      }
    });
  };

  // Redirect if no bus selected data (optional, but good practice)
  useEffect(() => {
    if (!state?.selectedBus && !state?.bookingDetails) {
      // navigate('/booking'); // Commented out to prevent jarring dev experience if reloading page directly
    }
  }, [state, navigate]);

  return (
    <div className="flex-grow flex flex-col min-h-screen">
      <Section className="py-4 sm:py-6">
        <BookingSteps currentStep={2} />

        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* LEFT COLUMN: Seat Map */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700 pb-32 lg:pb-0">
            <Card className="p-4 sm:p-5 mb-4 lg:mb-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-lg text-primary">
                    Select Your Seats
                  </h2>
                  {selectedBus && (
                    <p className="text-xs text-slate-500 font-medium">
                      {selectedBus.company} • {selectedBus.type}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <Info size={14} />
                  <span>Hover for details</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-primary" />
                  <span className="text-[11px] font-medium text-slate-600">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-secondary" />
                  <span className="text-[11px] font-medium text-slate-600">Selected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-gray-300 opacity-60" />
                  <span className="text-[11px] font-medium text-slate-600">Booked</span>
                </div>
              </div>

              {/* Fluid Seat Grid */}
              <div className="max-w-[320px] sm:max-w-[380px] mx-auto select-none">
                <h3 className="text-center font-bold text-slate-300 uppercase tracking-[0.3em] mb-4 text-[10px]">Front</h3>

                {/* 5-Column Grid: Seat | Seat | Aisle | Seat | Seat */}
                <div className="grid grid-cols-5 gap-y-2 gap-x-2 sm:gap-x-4">
                  {Array.from({ length: ROWS }, (_, rowIndex) => (
                    <div key={rowIndex} className="contents">
                      {/* Left Side Seats (A & B) */}
                      {[0, 1].map((seatOffset) => {
                        const seatNumber = rowIndex * 4 + seatOffset + 1;
                        const status = getSeatStatus(seatNumber);
                        const isWindow = seatOffset === 0;

                        return (
                          <SeatButton
                            key={seatNumber}
                            seatNumber={seatNumber}
                            status={status}
                            type={isWindow ? 'Window' : 'Aisle'}
                            price={pricePerSeat}
                            onClick={() => toggleSeat(seatNumber)}
                          />
                        );
                      })}

                      {/* Aisle / Row Indicator */}
                      <div className="flex items-center justify-center">
                        <span className="text-[10px] font-bold text-slate-300 transform translate-y-[1px]">
                          {rowIndex + 1}
                        </span>
                      </div>

                      {/* Right Side Seats (C & D) */}
                      {[2, 3].map((seatOffset) => {
                        const seatNumber = rowIndex * 4 + seatOffset + 1;
                        const status = getSeatStatus(seatNumber);
                        const isWindow = seatOffset === 3;

                        return (
                          <SeatButton
                            key={seatNumber}
                            seatNumber={seatNumber}
                            status={status}
                            type={isWindow ? 'Window' : 'Aisle'}
                            price={pricePerSeat}
                            onClick={() => toggleSeat(seatNumber)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                <h3 className="text-center font-bold text-slate-300 uppercase tracking-[0.3em] mt-8 text-[10px]">Back</h3>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: Booking Summary */}
          <div className="lg:col-span-1 fixed bottom-0 left-0 right-0 lg:static lg:block z-50 lg:z-auto">

            <Card className="lg:sticky lg:top-24 border-t lg:border-none rounded-none lg:rounded-2xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] lg:shadow-md overflow-hidden p-0">
              <div className="p-4 sm:p-5 pb-0 hidden lg:block">
                <h3 className="font-['Montserrat',sans-serif] font-bold text-lg text-primary">Booking Summary</h3>
                <div className="h-0.5 w-10 bg-secondary mt-1.5 rounded-full" />
              </div>

              <div className="p-4 sm:p-5 space-y-3 lg:space-y-4 flex flex-row lg:flex-col items-center lg:items-stretch justify-between lg:justify-start gap-4">

                {/* Route & Date (Hidden on mobile to save space, visible on large) */}
                <div className="space-y-3 hidden lg:block">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="text-secondary shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Travel Route</p>
                      <div className="font-bold text-slate-800 text-sm">
                        {bookingDetails?.from || 'Origin'} <span className="text-primary mx-1">→</span> {bookingDetails?.to || 'Destination'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Calendar className="text-secondary shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Travel Date</p>
                      <div className="font-bold text-slate-800 text-sm">
                        {getFormattedDate()}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 w-full" />
                </div>

                {/* Mobile Summary: Condensed View */}
                <div className="flex flex-col lg:hidden flex-grow justify-center min-w-0 pr-2">
                  {/* Route & Date Line */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    <span>{bookingDetails?.from?.slice(0, 3).toUpperCase()}</span>
                    <span className="text-primary text-[8px]">➜</span>
                    <span>{bookingDetails?.to?.slice(0, 3).toUpperCase()}</span>
                    <span className="text-slate-300">|</span>
                    <span>{new Date(bookingDetails?.date || '').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                  </div>

                  {/* Price & Seat Count Line */}
                  <div className="flex items-end gap-2">
                    <span className="text-secondary font-bold text-lg leading-none">
                      {formatPrice(selectedSeats.length * pricePerSeat)}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium pb-0.5 truncate max-w-[120px]">
                      {selectedSeats.length > 0
                        ? `(S${selectedSeats.sort((a, b) => a - b).join(', S')})`
                        : '(Select seats)'
                      }
                    </span>
                  </div>
                </div>

                {/* Desktop Price & Details */}
                <div className="hidden lg:block space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                    <span>Base Fare</span>
                    <span>{formatPrice(selectedSeats.length * pricePerSeat)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1.5 border-t border-slate-200 mt-1.5">
                    <span className="font-bold text-primary text-sm">Total Amount</span>
                    <span className="font-bold text-secondary text-xl">
                      {formatPrice(selectedSeats.length * pricePerSeat)}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  disabled={selectedSeats.length === 0}
                  onClick={handleContinue}
                  className="w-auto lg:w-full bg-primary hover:bg-primary/90 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-['Montserrat',sans-serif] font-bold text-sm px-6 lg:px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-1.5 group shrink-0"
                >
                  <span>Continue</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Mobile Confirmation Modal */}
      {showMobileConfirm && (
        <div className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setShowMobileConfirm(false)} />

          <div className="relative bg-white w-full max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-full duration-300">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-primary">Confirm Selection</h3>
              <button onClick={() => setShowMobileConfirm(false)} className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <div className="space-y-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                {/* Route */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Route</p>
                    <div className="font-bold text-slate-800 text-sm">
                      {bookingDetails?.from} <span className="text-secondary mx-1">➜</span> {bookingDetails?.to}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Calendar className="text-secondary" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Date</p>
                    <div className="font-bold text-slate-800 text-sm">
                      {getFormattedDate()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Seats & Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-semibold text-xs">Selected Seats ({selectedSeats.length})</span>
                  <div className="flex gap-1">
                    {selectedSeats.sort((a, b) => a - b).map(s => (
                      <span key={s} className="text-[10px] font-bold bg-primary text-white px-1.5 py-0.5 rounded">S{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-end pt-3 border-t border-slate-100">
                  <span className="text-slate-500 text-xs font-medium mb-1">Total to Pay</span>
                  <span className="text-secondary font-bold text-2xl leading-none">
                    {formatPrice(selectedSeats.length * pricePerSeat)}
                  </span>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={proceedToNextStep}
                className="w-full bg-primary active:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 mt-2"
              >
                <span>Confirm & Continue</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Sub-component for individual Seat Button
interface SeatButtonProps {
  seatNumber: number;
  status: 'available' | 'selected' | 'unavailable';
  type: 'Window' | 'Aisle';
  price: number;
  onClick: () => void;
}

function SeatButton({ seatNumber, status, type, price, onClick }: SeatButtonProps) {
  return (
    <div className="relative group flex items-center justify-center aspect-square w-full">
      <button
        onClick={onClick}
        disabled={status === 'unavailable'}
        className={clsx(
          'w-full h-full rounded-lg font-["Montserrat",sans-serif] font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex items-center justify-center relative z-10',
          'border border-transparent',
          status === 'available' && 'bg-primary text-white hover:bg-primary/90 hover:shadow-md hover:scale-[1.05] hover:border-blue-300',
          status === 'selected' && 'bg-secondary text-white shadow-lg scale-105 ring-2 ring-orange-200',
          status === 'unavailable' && 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-80'
        )}
      >
        {seatNumber}
      </button>

      {/* Hover Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none">
        <div className="bg-slate-800 text-white text-[10px] rounded px-2.5 py-1.5 shadow-xl flex flex-col items-center gap-0.5">
          <span className="font-bold">Seat {seatNumber}</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>{type}</span>
            <span className="w-0.5 h-2 bg-slate-600 rounded-full" />
            <span>${price}</span>
          </div>
        </div>
        {/* Arrow */}
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800 mx-auto -mt-0.5" />
      </div>
    </div>
  );
}
