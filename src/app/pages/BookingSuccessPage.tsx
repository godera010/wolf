import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { CheckCircle, Download, Printer, ChevronRight } from 'lucide-react';
import TicketCard from '../components/TicketCard';
import Section from '../components/ui/Section';

export default function BookingSuccessPage() {
  const location = useLocation();
  const state = location.state || {};
  // const [showConfirmation, setShowConfirmation] = useState(true); // Removed auto-hide state

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowConfirmation(false);
  //   }, 4500);
  //   return () => clearTimeout(timer);
  // }, []);

  // Robustly handle missing or null data
  const tickets = state.tickets || [];
  const ticketId = state.ticketId; // Fallback for legacy
  const passengerInfo = state.passengerInfo || { fullName: 'Guest' };
  const selectedSeats = state.selectedSeats || [];
  const amount = state.amount || 0;
  const bookingDetails = state.bookingDetails || {};

  if (!tickets.length && !ticketId) {
    return (
      <div className="bg-white flex flex-col items-center justify-center p-4 flex-grow min-h-[50vh]">
        <p className="text-gray-600 mb-4 font-['Montserrat',sans-serif]">No ticket information found.</p>
        <Link to="/" className="text-primary underline font-bold">Return Home</Link>
      </div>
    );
  }

  // Normalize tickets array if coming from legacy single ID
  const displayTickets = tickets.length > 0 ? tickets : [{
    id: ticketId,
    passengerName: passengerInfo.fullName || passengerInfo.firstName ? `${passengerInfo.firstName} ${passengerInfo.lastName}` : 'Guest',
    seatNumber: selectedSeats.length > 0 ? selectedSeats.join(', ') : 'N/A',
  }];

  return (
    <div className="relative flex-grow flex flex-col min-h-screen">
      <Section className="py-8">
        <div className="flex justify-between items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-secondary font-bold text-xs uppercase tracking-widest transition-colors">
            <ChevronRight className="rotate-180 mr-1.5" size={14} strokeWidth={3} />
            Return Home
          </Link>
          <div className="px-3 py-1 bg-green-50 border border-green-100 rounded-full flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase font-black text-green-700 tracking-wider">Payment Verified</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center will-change-transform animate-in fade-in zoom-in duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full mb-6 md:mb-8 shadow-lg shadow-green-100/50 ring-8 ring-green-50">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600" strokeWidth={3} />
          </div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-3xl md:text-5xl text-primary mb-4">
            Booking Confirmed!
          </h1>
          <p className="font-['Montserrat',sans-serif] text-slate-600 text-base md:text-lg">
            Your ticket has been successfully generated. A copy has been sent to your email.
          </p>
        </div>

        {/* Ticket Cards Loop */}
        <motion.div
          layout
          className="space-y-8 mt-8"
        >
          {displayTickets.map((ticket: any, index: number) => (
            <motion.div
              key={ticket.id || index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <TicketCard
                ticket={ticket}
                bookingDetails={bookingDetails}
                totalAmount={amount ? amount : 20 * selectedSeats.length}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-12">
          <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all">
            <Printer size={18} />
            <span>Print Ticket</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-blue-900/20 transition-all">
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </Section>
    </div>
  );
}