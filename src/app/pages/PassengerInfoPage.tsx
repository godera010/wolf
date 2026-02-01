import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/card';
import { ChevronRight, Mail, Phone, CreditCard, MapPin, Calendar, X } from 'lucide-react';

interface Passenger {
  seatNumber: number;
  firstName: string;
  lastName: string;
  idNumber: string;
  isMinor: boolean;
  gender: 'male' | 'female' | '';
}

interface ContactDetails {
  email: string;
  phone: string;
}

// Removed unused DEFAULT_PRICE

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

  // Use passed price or default
  // Note: SeatSelectionPage passed 'totalAmount', but per seat price might be implicit.
  // Ideally we should pass pricePerSeat in state. For now, we'll assume 25 or use logic.
  const PRICE_PER_SEAT = 25;

  // Initialize passengers array based on selected seats
  const [passengers, setPassengers] = useState<Passenger[]>(
    selectedSeats.map(seat => ({
      seatNumber: seat,
      firstName: '',
      lastName: '',
      idNumber: '',
      isMinor: false,
      gender: ''
    }))
  );

  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: '',
    phone: ''
  });

  const [showMobileConfirm, setShowMobileConfirm] = useState(false);

  const handlePassengerChange = (index: number, field: keyof Passenger, value: any) => {
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
    const allPassengersFilled = passengers.every(p =>
      p.firstName && p.lastName && p.gender && (p.isMinor || p.idNumber)
    );
    const contactFilled = contactDetails.email && contactDetails.phone;

    if (allPassengersFilled && contactFilled) {
      if (window.innerWidth < 1024) {
        setShowMobileConfirm(true);
      } else {
        proceedToPayment();
      }
    } else if (!allPassengersFilled) {
      // Auto-expand the first incomplete passenger
      const firstIncomplete = passengers.findIndex(p => !p.firstName || !p.lastName || (!p.isMinor && !p.idNumber) || !p.gender);
      if (firstIncomplete !== -1) setExpandedIndex(firstIncomplete);
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="flex-grow flex flex-col min-h-screen">
      <Section className="py-8">
        <BookingSteps currentStep={3} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24 lg:mb-0">

          {/* LEFT COLUMN: Forms */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700">
            <form id="passenger-form" onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Details Card */}
              <Card className="p-6 md:p-7">
                <div className="flex items-center space-x-3 mb-6 border-b border-slate-100 pb-4">
                  <Mail size={22} className="text-primary shrink-0" />
                  <div>
                    <h2 className="font-['Montserrat',sans-serif] font-bold text-lg text-primary">
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
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary w-5 h-5 transition-colors" />
                      <input
                        type="email"
                        value={contactDetails.email}
                        onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary w-5 h-5 transition-colors" />
                      <input
                        type="tel"
                        value={contactDetails.phone}
                        onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                        placeholder="+263 7..."
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Passenger Details Accordion */}
              <div className="space-y-4">
                {passengers.map((passenger, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <Card
                      key={passenger.seatNumber}
                      className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'border-orange-200 ring-4 ring-orange-50' : 'border-slate-100'}`}
                      padding="none"
                    >
                      {/* Accordion Header */}
                      <button
                        type="button"
                        onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                        className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 flex items-center justify-center font-bold text-sm ${isExpanded ? 'text-secondary' : 'text-slate-500'}`}>
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-['Montserrat',sans-serif] font-bold text-slate-800 text-sm">
                              {passenger.firstName || passenger.lastName ? `${passenger.firstName} ${passenger.lastName}`.trim() : `Traveler ${index + 1}`}
                            </h3>
                            <p className="text-[10px] text-secondary font-black uppercase tracking-widest mt-0.5">Seat {passenger.seatNumber}</p>
                          </div>
                        </div>
                        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-secondary' : 'text-slate-400'}`}>
                          <ChevronRight className="rotate-90" size={16} strokeWidth={3} />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        <div className="p-6 pt-0 border-t border-slate-50 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            {/* First Name */}
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">First Name</label>
                              <input
                                type="text"
                                value={passenger.firstName}
                                onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                                placeholder="Enter first name"
                                className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-sm font-['Montserrat',sans-serif] focus:outline-none focus:border-secondary transition-all"
                                required={isExpanded}
                              />
                            </div>

                            {/* Last Name */}
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Last Name</label>
                              <input
                                type="text"
                                value={passenger.lastName}
                                onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                                placeholder="Enter last name"
                                className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-sm font-['Montserrat',sans-serif] focus:outline-none focus:border-secondary transition-all"
                                required={isExpanded}
                              />
                            </div>

                            {/* ID / Passport Number */}
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center">
                                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ID / Passport Number</label>
                                <label className="flex items-center gap-1.5 cursor-pointer group">
                                  <input
                                    type="checkbox"
                                    checked={passenger.isMinor}
                                    onChange={(e) => handlePassengerChange(index, 'isMinor', e.target.checked)}
                                    className="w-3.5 h-3.5 rounded border-slate-300 text-secondary focus:ring-secondary"
                                  />
                                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Minor (No ID)</span>
                                </label>
                              </div>
                              <div className="relative group">
                                <input
                                  type="text"
                                  value={passenger.idNumber}
                                  onChange={(e) => handlePassengerChange(index, 'idNumber', e.target.value)}
                                  disabled={passenger.isMinor}
                                  placeholder={passenger.isMinor ? "Not required for minors" : "Enter ID/Passport No."}
                                  className={`w-full bg-slate-50 border-b-2 px-4 py-3 text-sm font-['Montserrat',sans-serif] focus:outline-none transition-all ${passenger.isMinor ? 'border-slate-100 text-slate-400' : 'border-slate-200 focus:border-secondary'}`}
                                  required={isExpanded && !passenger.isMinor}
                                />
                                <CreditCard className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${passenger.isMinor ? 'text-slate-200' : 'text-slate-400'}`} size={16} />
                              </div>
                            </div>

                            {/* Gender Selection */}
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Gender</label>
                              <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handlePassengerChange(index, 'gender', 'male')}
                                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${passenger.gender === 'male' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                                >
                                  Male
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePassengerChange(index, 'gender', 'female')}
                                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${passenger.gender === 'female' ? 'bg-white text-secondary shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                                >
                                  Female
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Booking Summary (Desktop Sidebar) */}
          <div className="lg:col-span-1 hidden lg:block animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
            <div className="sticky top-24 space-y-4">

              {/* Summary Card */}
              <Card className="overflow-hidden p-0">
                <div className="p-5 pb-0">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-xl text-primary">Booking Summary</h3>
                  <div className="h-1 w-12 bg-secondary mt-2 rounded-full" />
                </div>

                <div className="p-5 space-y-5">
                  {/* Route Info */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-secondary shrink-0 mt-0.5" size={18} />
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Travel Route</p>
                        <div className="font-semibold text-slate-800">
                          {bookingDetails.from} <span className="text-primary mx-1">→</span> {bookingDetails.to}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="text-secondary shrink-0 mt-0.5" size={18} />
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
                      <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {selectedSeats.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSeats.sort((a, b) => a - b).map(seat => (
                        <span key={seat} className="text-xs font-bold bg-slate-50 border border-slate-200 text-primary px-3 py-1.5 rounded-lg">
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
                      <span className="font-bold text-primary">Total Amount</span>
                      <span className="font-bold text-secondary text-2xl">
                        {formatPrice(selectedSeats.length * PRICE_PER_SEAT)}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    form="passenger-form"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                  >
                    <span>Continue to Payment</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Secure SSL Encryption
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] lg:hidden z-50 animate-in slide-in-from-bottom-full duration-500">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Total Amount</p>
            <p className="text-secondary font-bold text-2xl leading-none">{formatPrice(selectedSeats.length * PRICE_PER_SEAT)}</p>
          </div>
          <button
            type="submit"
            form="passenger-form"
            className="flex-grow bg-primary active:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Continue</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      {/* Mobile Confirmation Modal */}
          {showMobileConfirm && (
            <div className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
              <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={() => setShowMobileConfirm(false)} />
      
              <div className="relative bg-white w-full max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-full duration-300">            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-primary">Review Details</h3>
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
                        <span className="font-bold text-slate-700">{p.firstName} {p.lastName}</span>
                        <span className="text-[10px] font-bold text-primary bg-blue-100/50 px-2 py-0.5 rounded">Seat {p.seatNumber}</span>
                      </div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold flex gap-3">
                        <span>ID: {p.isMinor ? 'MINOR (NO ID)' : p.idNumber}</span>
                        <span>Gender: {p.gender}</span>
                      </div>
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
                <span className="font-bold text-primary">Total Amount</span>
                <span className="font-bold text-secondary text-xl">{formatPrice(selectedSeats.length * PRICE_PER_SEAT)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-slate-100 bg-white rounded-b-2xl">
              <button
                onClick={proceedToPayment}
                className="w-full bg-primary active:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
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