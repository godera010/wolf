import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import { User, Mail, Phone, CreditCard, MapPin, Calendar, ChevronRight, Info } from 'lucide-react';

interface Passenger {
  seatNumber: number;
  fullName: string;
  idNumber: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}

export default function PassengerInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const selectedSeats: number[] = state.selectedSeats || [];
  const bookingDetails = state.bookingDetails || {
    from: 'Harare',
    to: 'Bulawayo',
    date: new Date().toISOString().split('T')[0]
  };

  const PRICE_PER_SEAT = 25;

  // Initialize passengers array based on selected seats
  const [passengers, setPassengers] = useState<Passenger[]>(
    selectedSeats.map(seat => ({ seatNumber: seat, fullName: '', idNumber: '' }))
  );

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: '',
    phone: ''
  });

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that all fields are filled
    const allPassengersFilled = passengers.every(p => p.fullName && p.idNumber);
    const contactFilled = contactDetails.email && contactDetails.phone;

    if (allPassengersFilled && contactFilled) {
      navigate('/booking/payment', { 
        state: { 
          selectedSeats,
          bookingDetails,
          passengers,
          contactDetails
        } 
      });
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
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
          <BookingSteps currentStep={3} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* LEFT COLUMN: Forms */}
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700">
              <form id="passenger-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Contact Details Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#01257d]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h2 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#01257d]">
                        Contact Details
                      </h2>
                      <p className="text-sm text-slate-500">Where should we send the ticket?</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Email Address
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#01257d] w-5 h-5 transition-colors" />
                        <input
                          type="email"
                          value={contactDetails.email}
                          onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                          placeholder="example@email.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#01257d]/20 focus:border-[#01257d] transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#01257d] w-5 h-5 transition-colors" />
                        <input
                          type="tel"
                          value={contactDetails.phone}
                          onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                          placeholder="+263 7..."
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#01257d]/20 focus:border-[#01257d] transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passenger Details Loop */}
                {passengers.map((passenger, index) => (
                  <div key={passenger.seatNumber} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#e96f30]">
                          <User size={20} />
                        </div>
                        <div>
                          <h2 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#01257d]">
                            Passenger {index + 1}
                          </h2>
                          <div className="flex items-center text-xs font-bold text-[#e96f30] bg-orange-50 px-2 py-0.5 rounded w-fit mt-1">
                             Seat {passenger.seatNumber}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                          Full Name
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#e96f30] w-5 h-5 transition-colors" />
                          <input
                            type="text"
                            value={passenger.fullName}
                            onChange={(e) => handlePassengerChange(index, 'fullName', e.target.value)}
                            placeholder="Name as on ID"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#e96f30]/20 focus:border-[#e96f30] transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                          ID / Passport Number
                        </label>
                        <div className="relative group">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#e96f30] w-5 h-5 transition-colors" />
                          <input
                            type="text"
                            value={passenger.idNumber}
                            onChange={(e) => handlePassengerChange(index, 'idNumber', e.target.value)}
                            placeholder="ID Number"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#e96f30]/20 focus:border-[#e96f30] transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </form>
            </div>

            {/* RIGHT COLUMN: Booking Summary (Sticky) */}
            <div className="lg:col-span-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <div className="sticky top-24 space-y-4">
                
                {/* Summary Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
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
                                    {bookingDetails.from} <span className="text-[#01257d] mx-1">→</span> {bookingDetails.to}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Calendar className="text-[#e96f30] shrink-0 mt-0.5" size={18} />
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Travel Date</p>
                                <div className="font-semibold text-slate-800">
                                    {(() => {
                                      try {
                                        const d = new Date(bookingDetails.date);
                                        return isNaN(d.getTime()) ? 'Select Date' : d.toLocaleDateString('en-GB', { 
                                            day: 'numeric', 
                                            month: 'long', 
                                            year: 'numeric' 
                                        });
                                      } catch (e) {
                                        return 'Select Date';
                                      }
                                    })()}
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
                        <div className="flex flex-wrap gap-2">
                            {selectedSeats.sort((a,b) => a-b).map(seat => (
                                <span key={seat} className="text-xs font-bold bg-slate-50 border border-slate-200 text-[#01257d] px-3 py-1.5 rounded-lg">
                                    Seat {seat}
                                </span>
                            ))}
                        </div>
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
                        type="submit"
                        form="passenger-form"
                        className="w-full bg-[#042880] hover:bg-[#012275] text-white font-['Montserrat',sans-serif] font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                    >
                        <span>Continue to Payment</span>
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    
                     <p className="text-xs text-center text-slate-400">
                        Secure SSL Encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}