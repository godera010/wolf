import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import { User, Mail, Phone, CreditCard, MapPin, Calendar, ChevronRight, Info, X } from 'lucide-react';

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

  const [showMobileConfirm, setShowMobileConfirm] = useState(false);

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setPassengers(updatedPassengers);
  };

  const proceedToPayment = () => {
    navigate('/booking/payment', {
      state: {
        selectedSeats,
        bookingDetails,
        passengers,
        contactDetails
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that all fields are filled
    const allPassengersFilled = passengers.every(p => p.fullName && p.idNumber);
    const contactFilled = contactDetails.email && contactDetails.phone;

    if (allPassengersFilled && contactFilled) {
      if (window.innerWidth < 1024) {
        setShowMobileConfirm(true);
      } else {
        proceedToPayment();
      }
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

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24 lg:mb-0">

            {/* LEFT COLUMN: Forms */}
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700">
              <form id="passenger-form" onSubmit={handleSubmit} className="space-y-8">

                {/* Contact Details Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-7">
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
                          <div className="flex items-center text-xs font-bold text-[#e96f30] bg-orange-50 px-3 py-1 rounded-full w-fit mt-1.5 border border-orange-100">
                            Seat {passenger.seatNumber}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-['Montserrat',sans-serif] font-bold text-sm text-slate-700 mb-2 block">
                          Full Name
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#e96f30] w-5 h-5 transition-colors" />
                          <input
                            type="text"
                            value={passenger.fullName}
                            onChange={(e) => handlePassengerChange(index, 'fullName', e.target.value)}
                            placeholder="Name as on ID"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl font-['Montserrat',sans-serif] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e96f30]/20 focus:border-[#e96f30] transition-all shadow-sm"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-['Montserrat',sans-serif] font-bold text-sm text-slate-700 mb-2 block">
                          ID / Passport Number
                        </label>
                        <div className="relative group">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#e96f30] w-5 h-5 transition-colors" />
                          <input
                            type="text"
                            value={passenger.idNumber}
                            onChange={(e) => handlePassengerChange(index, 'idNumber', e.target.value)}
                            placeholder="ID Number"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl font-['Montserrat',sans-serif] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e96f30]/20 focus:border-[#e96f30] transition-all shadow-sm"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </form>
            </div>

            {/* RIGHT COLUMN: Booking Summary (Desktop Sidebar) */}
            <div className="lg:col-span-1 hidden lg:block animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <div className="sticky top-24 space-y-4">

                {/* Summary Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                  <div className="p-5 pb-0">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-xl text-[#01257d]">Booking Summary</h3>
                    <div className="h-1 w-12 bg-[#e96f30] mt-2 rounded-full" />
                  </div>

                  <div className="p-5 space-y-5">
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
                        {selectedSeats.sort((a, b) => a - b).map(seat => (
                          <span key={seat} className="text-xs font-bold bg-slate-50 border border-slate-200 text-[#01257d] px-3 py-1.5 rounded-lg">
                            Seat {seat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Price Calculation */}
                    <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
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

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] lg:hidden z-50 animate-in slide-in-from-bottom-full duration-500">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Total Amount</p>
            <p className="text-[#e96f30] font-bold text-2xl leading-none">{formatPrice(selectedSeats.length * PRICE_PER_SEAT)}</p>
          </div>
          <button
            type="submit"
            form="passenger-form"
            className="flex-grow bg-[#042880] active:bg-[#012275] text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Continue</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      {/* Mobile Confirmation Modal */}
      {showMobileConfirm && (
        <div className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setShowMobileConfirm(false)} />

          <div className="relative bg-white w-full max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-full duration-300">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-[#01257d]">Review Details</h3>
              <button onClick={() => setShowMobileConfirm(false)} className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Passengers</p>
                <div className="space-y-3">
                  {passengers.map((p, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-700">{p.fullName}</span>
                        <span className="text-[10px] font-bold text-[#01257d] bg-blue-100/50 px-2 py-0.5 rounded">Seat {p.seatNumber}</span>
                      </div>
                      <div className="text-slate-500 text-xs">ID: {p.idNumber}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Contact</p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail size={14} className="text-slate-400" />
                    <span className="truncate">{contactDetails.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone size={14} className="text-slate-400" />
                    <span>{contactDetails.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="font-bold text-[#01257d]">Total Amount</span>
                <span className="font-bold text-[#e96f30] text-xl">{formatPrice(selectedSeats.length * PRICE_PER_SEAT)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-slate-100 bg-white rounded-b-2xl">
              <button
                onClick={proceedToPayment}
                className="w-full bg-[#042880] active:bg-[#012275] text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Confirm & Pay</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}