import { useLocation, Link } from 'react-router-dom';

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

          <div className="flex justify-between items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#e96f30] font-bold text-xs uppercase tracking-widest transition-colors">
              <ChevronRight className="rotate-180 mr-1.5" size={14} strokeWidth={3} />
              Return Home
            </Link>
            <div className="px-3 py-1 bg-green-50 border border-green-100 rounded-full flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase font-black text-green-700 tracking-wider">Payment Verified</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
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
                <div key={ticket.id || index} className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-w-xl mx-auto group hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 animate-in zoom-in-95 duration-700 delay-500 font-['Montserrat',sans-serif]">

                  {/* Blue Header Section */}
                  <div className="bg-[#01257d] p-5 px-8 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="flex items-center space-x-4 relative z-10">
                      <img
                        src={imgLogo}
                        alt="RoadWolf Logo"
                        className="h-8 w-auto object-contain brightness-0 invert"
                      />
                      <div className="h-5 w-[1px] bg-white/20 hidden sm:block"></div>
                      <span className="text-white/90 text-[11px] font-bold uppercase tracking-[0.2em] hidden sm:block">
                        Premium Boarding Pass
                      </span>
                    </div>
                    <div className="text-[#e96f30] text-[10px] font-black uppercase tracking-[0.3em] relative z-10">
                      {ticket.id || 'TICKET'}
                    </div>
                  </div>

                  {/* Main Body with Watermark */}
                  <div className="p-5 relative flex-grow flex flex-col">

                    {/* Brand Watermark (Faded Silhouette) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
                      <img
                        src={imgLogo}
                        alt=""
                        className="w-[75%] opacity-[0.04] grayscale"
                      />
                    </div>
                    {/* Content Section (Luxury Stack Design) */}
                    <div className="relative z-10">
                      <div className="flex flex-col gap-4">

                        {/* Row 1: Route */}
                        <div className="border-b border-slate-100 pb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em]">Origin</span>
                            <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em]">Destination</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-col flex-1 text-left items-start">
                              <span className="text-2xl md:text-3xl font-black text-[#01257d] uppercase leading-none tracking-tight">{bookingDetails?.from || 'Origin'}</span>
                              <span className="text-[9px] text-[#01257d]/60 font-bold uppercase tracking-wider mt-1">Origin Point</span>
                            </div>

                            <div className="flex items-center justify-center">
                              <ChevronRight className="text-[#e96f30]" size={32} strokeWidth={4} />
                            </div>

                            <div className="flex flex-col flex-1 text-right items-end">
                              <span className="text-2xl md:text-3xl font-black text-[#01257d] uppercase leading-none tracking-tight">{bookingDetails?.to || 'Destination'}</span>
                              <span className="text-[9px] text-[#01257d]/60 font-bold uppercase tracking-wider mt-1">Destination Point</span>
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Passenger & Seat (Luxury Style) */}
                        <div className="border-b border-slate-100 pb-4">
                          <div className="flex items-end justify-between">
                            <div className="text-left items-start flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em] block mb-1">Passenger Name :</span>
                              <span className="text-xl font-bold text-slate-800 tracking-tight">{ticket.passengerName}</span>
                            </div>
                            <div className="text-right items-end flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em] block mb-0.5">Seat No. :</span>
                              <span className="text-3xl font-black text-[#e96f30]">{ticket.seatNumber}</span>
                            </div>
                          </div>
                        </div>

                        {/* Row 3: Travel Date & Time */}
                        <div className="pb-2">
                          <div className="flex items-end justify-between">
                            <div className="text-left items-start flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em] block mb-1">Travel Date :</span>
                              <span className="text-lg font-bold text-slate-800">{formatDate(bookingDetails?.date)}</span>
                            </div>
                            <div className="text-right items-end flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em] block mb-1">Departure :</span>
                              <span className="text-lg font-bold text-slate-800">08:00 AM</span>
                            </div>
                          </div>
                        </div>
                        {/* Ticket Cutoff / Perforation */}
                        <div className="relative flex items-center justify-center -mx-6 my-2">
                          <div className="absolute left-0 w-3 h-6 bg-slate-50 rounded-r-full shadow-inner"></div>
                          <div className="w-full h-[1px] border-t-2 border-dashed border-slate-100 mx-3"></div>
                          <div className="absolute right-0 w-3 h-6 bg-slate-50 rounded-l-full shadow-inner"></div>
                        </div>

                        {/* Row 4: Price */}
                        <div className="border-b border-slate-100 pb-4 relative">
                          <div className="flex items-center justify-between relative z-10">
                            <span className="text-[10px] uppercase font-bold text-[#01257d] tracking-[0.2em]">Total Fare</span>
                            <span className="text-3xl font-black text-[#01257d] tracking-tight">$30.00</span>
                          </div>
                        </div>

                        {/* Row 5: Barcode */}
                        <div className="pt-4">
                          <div className="flex flex-col items-center gap-4">
                            <div className="h-14 w-full flex items-end justify-center gap-[2px] opacity-80 group-hover:opacity-100 transition-opacity px-6">
                              {[...Array(70)].map((_, i) => (
                                <div key={i} className={`bg-slate-900 ${i % 7 === 0 ? 'w-[3.5px]' : i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'} ${i % 5 === 0 ? 'h-full' : 'h-[85%]'}`}></div>
                              ))}
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 tracking-[0.8em] uppercase font-bold">{ticket.id || 'RW-OFFICIAL'}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Gradient Footer Strip */}
                  <div className="bg-[#e96f30] p-3 px-8 flex justify-between items-center text-[10px] text-white font-bold tracking-[0.2em] uppercase">
                    <span className="opacity-90">roadwolfcoaches.co.zw</span>
                    <div className="flex items-center gap-4">
                      <span className="opacity-80 font-medium">Support:</span>
                      <span className="text-white">0783 133 420</span>
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


          </div>
        </div>
      </div>
    </div>
  );
}