import { useLocation, Link } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import { CheckCircle, Download, Printer, ChevronRight, MapPin, Calendar, User, Clock } from 'lucide-react';
import imgLogo from "@/assets/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";

export default function BookingSuccessPage() {
  const location = useLocation();
  const state = location.state || {};

  // Robustly handle missing or null data
  const tickets = state.tickets || [];
  const ticketId = state.ticketId; // Fallback for legacy
  const passengerInfo = state.passengerInfo || { fullName: 'Guest' };
  const selectedSeats = state.selectedSeats || [];
  const amount = state.amount || 0;
  const bookingDetails = state.bookingDetails || {};

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      // Check if date is valid
      if (isNaN(date.getTime())) return 'N/A';
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    } catch (e) {
      return 'N/A';
    }
  };

  if (!tickets.length && !ticketId) {
    return (
      <div className="bg-white flex flex-col items-center justify-center p-4 flex-grow">
        <p className="text-gray-600 mb-4">No ticket information found.</p>
        <Link to="/" className="text-[#01257d] underline">Return Home</Link>
      </div>
    );
  }

  // Normalize tickets array if coming from legacy single ID
  const displayTickets = tickets.length > 0 ? tickets : [{
    id: ticketId,
    passengerName: passengerInfo.fullName,
    seatNumber: selectedSeats.join(', '),
  }];

  return (
    <div className="bg-slate-50 relative overflow-hidden flex-grow flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="flex-grow relative z-10 py-8">
        <div className="container mx-auto px-4">
          <BookingSteps currentStep={5} />

          <div className="max-w-3xl mx-auto mt-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8 shadow-lg shadow-green-100/50 ring-8 ring-green-50">
              <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={3} />
            </div>
            <h1 className="font-['Montserrat',sans-serif] font-bold text-3xl md:text-5xl text-[#01257d] mb-4">
              Booking Confirmed!
            </h1>
            <p className="font-['Montserrat',sans-serif] text-slate-600 mb-12 text-lg">
              Your ticket has been successfully generated. A copy has been sent to your email.
            </p>

            {/* Ticket Cards Loop */}
            <div className="space-y-8 mb-12">
              {displayTickets.map((ticket: any, index: number) => (
                <div key={ticket.id || index} className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden text-left relative max-w-2xl mx-auto border border-slate-100">
                  {/* Top Section (Color Strip) */}
                  <div className="bg-[#01257d] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <img
                          src={imgLogo}
                          alt="RoadWolf"
                          className="h-10 w-auto object-contain brightness-0 invert opacity-90 mb-4"
                        />
                        <div className="flex items-center space-x-3 text-white/80">
                          <span className="font-bold text-xl">{bookingDetails?.from || 'Harare'}</span>
                          <div className="flex flex-col items-center px-2">
                            <span className="text-[10px] uppercase tracking-widest opacity-60 mb-0.5">Route</span>
                            <div className="w-24 h-0.5 bg-white/30 relative">
                              <div className="absolute right-0 -top-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                              <div className="absolute left-0 -top-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="font-bold text-xl">{bookingDetails?.to || 'Bulawayo'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Boarding Pass</p>
                        <p className="font-mono text-2xl font-bold text-[#e96f30] tracking-wider">{ticket.id}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section (Cutouts) */}
                  <div className="relative bg-white h-8 w-full flex items-center justify-between">
                    <div className="w-4 h-8 bg-slate-50 rounded-r-full absolute left-0 border-y border-r border-slate-100"></div>
                    <div className="w-full border-b-2 border-dashed border-slate-200 mx-6"></div>
                    <div className="w-4 h-8 bg-slate-50 rounded-l-full absolute right-0 border-y border-l border-slate-100"></div>
                  </div>

                  {/* Bottom Section (Details) */}
                  <div className="p-8 pt-4 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold flex items-center gap-1"><User size={12} /> Passenger</p>
                        <p className="font-bold text-slate-800 text-sm md:text-base truncate">{ticket.passengerName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold flex items-center gap-1"><Calendar size={12} /> Date</p>
                        <p className="font-bold text-slate-800 text-sm md:text-base">
                          {formatDate(bookingDetails?.date)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold flex items-center gap-1"><Clock size={12} /> Time</p>
                        <p className="font-bold text-slate-800 text-sm md:text-base">08:00 AM</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Seat</p>
                        <p className="font-bold text-[#e96f30] text-sm md:text-base">{ticket.seatNumber}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-100">
                      <div className="text-center md:text-left">
                        <p className="text-xs text-slate-500 mb-1">Please show this barcode at the terminal</p>
                        <p className="text-[10px] text-slate-400">Gate closes 15 mins before departure</p>
                      </div>
                      {/* Barcode Visual */}
                      <div className="h-12 flex items-center gap-1 px-4 bg-white rounded border border-slate-200">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className={`h-full w-[2px] ${Math.random() > 0.5 ? 'bg-slate-800' : 'bg-transparent'} ${Math.random() > 0.8 ? 'w-[4px]' : ''}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all">
                <Printer size={18} />
                <span>Print Ticket</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-[#01257d] text-white rounded-xl font-bold hover:bg-[#012275] hover:shadow-lg hover:shadow-blue-900/20 transition-all">
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-[#e96f30] hover:text-[#d55f26] font-medium transition-colors">
                <ChevronRight className="rotate-180 mr-1" size={16} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}