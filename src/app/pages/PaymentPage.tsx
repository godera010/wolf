import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/card';
import { CreditCard, Smartphone, Lock, MapPin, Calendar, User, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const selectedSeats = state.selectedSeats || [];
  const passengerInfo = state.passengerInfo || { fullName: 'Guest' }; // Fallback
  const passengers = state.passengers || []; // From new flow
  const contactDetails = state.contactDetails || {};
  const bookingDetails = state.bookingDetails || {
    from: 'Harare',
    to: 'Bulawayo',
    date: new Date().toISOString()
  };

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentReview, setShowPaymentReview] = useState(false);

  const pricePerSeat = 25;
  const totalAmount = selectedSeats.length * pricePerSeat;

  const processPayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);

      // Generate a unique ticket for each passenger/seat
      const tickets = passengers.length > 0
        ? passengers.map((p: any) => ({
          id: `RW-${Math.floor(Math.random() * 90000) + 10000}-${p.seatNumber}`,
          passengerName: `${p.firstName} ${p.lastName}`,
          firstName: p.firstName,
          lastName: p.lastName,
          seatNumber: p.seatNumber,
          idNumber: p.isMinor ? 'MINOR' : p.idNumber,
          gender: p.gender
        }))
        : selectedSeats.map((seat: number) => ({
          id: `RW-${Math.floor(Math.random() * 90000) + 10000}-${seat}`,
          passengerName: passengerInfo.fullName || 'Guest',
          seatNumber: seat,
          idNumber: 'N/A'
        }));

      navigate('/booking/success', {
        state: {
          selectedSeats,
          passengerInfo: passengers.length > 0 ? passengers[0] : passengerInfo,
          passengers,
          contactDetails,
          bookingDetails,
          tickets, // Pass the array of generated tickets
          amount: totalAmount
        }
      });
    }, 2000);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (window.innerWidth < 1024 && !showPaymentReview) {
      setShowPaymentReview(true);
      return;
    }
    processPayment();
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
        <BookingSteps currentStep={4} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24 lg:mb-0">

          {/* LEFT COLUMN: Payment Methods */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-4 duration-700">
            <Card className="p-6 md:p-7">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-['Montserrat',sans-serif] font-bold text-xl text-primary">
                  Payment Method
                </h2>
                <div className="flex items-center space-x-2 text-primary">
                  <Lock size={14} className="text-secondary" />
                  <span className="text-xs font-black uppercase tracking-widest">Secure Checkout</span>
                </div>
              </div>

              {/* Method Tabs */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={clsx(
                    'flex-1 flex items-center justify-center space-x-3 py-4 rounded-xl border-2 transition-all duration-200 group relative overflow-hidden',
                    paymentMethod === 'card'
                      ? 'border-primary bg-blue-50/50 text-primary shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 text-slate-500 hover:bg-slate-50'
                  )}
                >
                  <CreditCard size={24} className={clsx(paymentMethod === 'card' && "text-secondary")} />
                  <div className="text-left">
                    <span className={clsx("block font-bold text-sm", paymentMethod === 'card' ? "text-primary" : "text-slate-600")}>Credit Card</span>
                    <span className="text-[10px] opacity-70">Visa, Mastercard</span>
                  </div>
                  {paymentMethod === 'card' && <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-r-[16px] border-t-primary border-r-primary opacity-20 rounded-bl-lg" />}
                </button>

                <button
                  onClick={() => setPaymentMethod('mobile')}
                  className={clsx(
                    'flex-1 flex items-center justify-center space-x-3 py-4 rounded-xl border-2 transition-all duration-200 group relative overflow-hidden',
                    paymentMethod === 'mobile'
                      ? 'border-primary bg-blue-50/50 text-primary shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 text-slate-500 hover:bg-slate-50'
                  )}
                >
                  <Smartphone size={24} className={clsx(paymentMethod === 'mobile' && "text-secondary")} />
                  <div className="text-left">
                    <span className={clsx("block font-bold text-sm", paymentMethod === 'mobile' ? "text-primary" : "text-slate-600")}>Mobile Money</span>
                    <span className="text-[10px] opacity-70">EcoCash, OneMoney</span>
                  </div>
                </button>
              </div>

              <form id="payment-form" onSubmit={handlePayment} className="space-y-6">
                {paymentMethod === 'card' ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Card Number
                      </label>
                      <div className="relative group">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary w-5 h-5 transition-colors" />
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-center"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                          CVC
                        </label>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary w-4 h-4 transition-colors" />
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3 border border-slate-100">
                      <input type="checkbox" id="save-card" className="mt-1 w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                      <label htmlFor="save-card" className="text-sm text-slate-600">Securely save this card for a faster checkout next time.</label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <label className="font-['Montserrat',sans-serif] font-medium text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Mobile Number
                      </label>
                      <div className="relative group">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary w-5 h-5 transition-colors" />
                        <input
                          type="tel"
                          placeholder="+263 7..."
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-sm text-orange-800">
                      <p>You will receive a prompt on your phone to authorize the transaction.</p>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* RIGHT COLUMN: Booking Summary (Sticky) */}
          <div className="hidden lg:block lg:col-span-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
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

                  {/* Passenger Details */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Passengers</p>
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {selectedSeats.length} Person{selectedSeats.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {passengers.length > 0 ? (
                        passengers.map((p: any, idx: number) => (
                          <div key={idx} className="flex items-start justify-between gap-2 text-sm">
                            <div className="flex items-center gap-2 overflow-hidden">
                              <User size={14} className="text-slate-400 shrink-0" />
                              <span className="font-medium text-slate-700 truncate">{p.firstName} {p.lastName}</span>
                            </div>
                            <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                              Seat {p.seatNumber}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-start justify-between gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-slate-400" />
                            <span className="font-medium text-slate-700">{passengerInfo.fullName || 'Guest'}</span>
                          </div>
                          <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            Seat {selectedSeats.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="h-px bg-slate-100" />

                  {/* Price Calculation */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Base Fare ({selectedSeats.length} x {formatPrice(pricePerSeat)})</span>
                      <span>{formatPrice(totalAmount)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Tax & Fees</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200 mt-2">
                      <span className="font-bold text-primary">Total To Pay</span>
                      <span className="font-bold text-secondary text-2xl">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    form="payment-form"
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white font-['Montserrat',sans-serif] font-bold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Lock size={18} />
                        <span>Pay {formatPrice(totalAmount)}</span>
                      </>
                    )}
                  </button>

                  <div className="flex justify-center items-center gap-2 opacity-50 grayscale">
                    {/* Placeholder for payment logos if needed */}
                    <div className="h-4 w-8 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8 bg-slate-300 rounded"></div>
                    <div className="h-4 w-8 bg-slate-300 rounded"></div>
                  </div>
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
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Total to Pay</p>
            <p className="text-secondary font-bold text-2xl leading-none">{formatPrice(totalAmount)}</p>
          </div>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="flex-grow bg-primary active:bg-primary/90 disabled:bg-primary/70 text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>Pay Now</span>
                <ChevronRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Confirm Payment Modal / Checkout Summary */}
          {showPaymentReview && (
            <div className="fixed inset-0 z-[60] lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
              <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={() => setShowPaymentReview(false)} />
      
              <div className="relative bg-white w-full max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-full duration-300">            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-primary">Order Summary</h3>
              <button onClick={() => setShowPaymentReview(false)} className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-5 max-h-[65vh] overflow-y-auto">

              {/* Route Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Route</p>
                    <div className="text-sm font-bold text-slate-700">{bookingDetails.from} <span className="text-primary mx-1">→</span> {bookingDetails.to}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-secondary shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Date</p>
                    <div className="text-sm font-bold text-slate-700">
                      {(() => {
                        try {
                          const d = new Date(bookingDetails.date);
                          return isNaN(d.getTime()) ? 'Select Date' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                        } catch (e) { return 'Select Date'; }
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Passengers Summary */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Passengers & Seats</p>
                <div className="space-y-2">
                  {passengers.length > 0 ? (
                    passengers.map((p: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between text-sm bg-white border border-slate-100 p-2 rounded-lg">
                        <span className="font-medium text-slate-700 truncate max-w-[150px]">{p.firstName} {p.lastName}</span>
                        <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Seat {p.seatNumber}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center justify-between text-sm bg-white border border-slate-100 p-2 rounded-lg">
                      <span className="font-medium text-slate-700">{passengerInfo.fullName || 'Guest'}</span>
                      <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Seat {selectedSeats.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Method Selected */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {paymentMethod === 'card' ? <CreditCard className="text-primary" size={18} /> : <Smartphone className="text-primary" size={18} />}
                  <span className="font-bold text-slate-700 text-sm">{paymentMethod === 'card' ? 'Card Payment' : 'Mobile Money'}</span>
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Secure</span>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="font-bold text-primary">Total Amount</span>
                <span className="font-bold text-secondary text-xl">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-slate-100 bg-white rounded-b-2xl">
              <button
                onClick={processPayment}
                className="w-full bg-primary active:bg-primary/90 text-white font-['Montserrat',sans-serif] font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <Lock size={16} />
                <span>Pay Securely {formatPrice(totalAmount)}</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Processing Overlay */}
          {isProcessing && (
            <div className="fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center animate-in fade-in duration-200">
              <div className="relative">            <div className="w-20 h-20 border-4 border-slate-100 rounded-full" />
            <div className="absolute top-0 left-0 w-20 h-20 border-secondary border-t-transparent rounded-full animate-spin" />
            <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={24} />
          </div>
          <h3 className="mt-8 font-['Montserrat',sans-serif] font-bold text-xl text-primary">Processing Payment</h3>
          <p className="text-slate-500 text-sm mt-2 font-medium">Please do not close this window...</p>
        </div>
      )}
    </div>
  );
}