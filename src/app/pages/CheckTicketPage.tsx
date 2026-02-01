
import { useState } from 'react';
import { Search, Ticket, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import { Button } from '../components/ui/button';
import TicketCard from '../components/TicketCard';

export default function CheckTicketPage() {
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketData, setTicketData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketNumber) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setTicketData({
        ticketNumber: ticketNumber,
        passengerName: 'Sarah Moyo',
        from: 'Harare',
        to: 'Bulawayo',
        date: '2026-01-15',
        time: '09:00 AM',
        seatNumber: '12A',
        price: 25.00,
        status: 'Confirmed',
      });
      setLoading(false);
    }, 1500); // Slightly longer delay to feel like a "search"
  };

  const handleReset = () => {
    setTicketData(null);
    setTicketNumber('');
  };

  return (
    <div className="flex-grow flex flex-col min-h-full">
      {/* Page Hero */}
      <AnimatePresence>
        {!ticketData && (
          <motion.div
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden', transition: { duration: 0.5 } }}
            className="flex-shrink-0"
          >
            <PageHero
              title="Check Your Ticket"
              subtitle="Enter your ticket number to view your booking details"
              className="pb-6 md:pb-8"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Section className="pt-0 md:pt-4">
        <div className="max-w-4xl mx-auto px-4 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!ticketData ? (
              /* Search Form */
              <motion.div
                key="search-form"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.3 } }}
                className="max-w-xl mx-auto will-change-transform"
              >
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      value={ticketNumber}
                      onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
                      placeholder="Ticket Number (e.g., RW-8X92)"
                      className="w-full pl-12 pr-4 h-[60px] border border-slate-200 rounded-xl font-['Montserrat',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all uppercase placeholder:normal-case shadow-sm"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-[60px] px-8 bg-[#01257d] hover:bg-[#001a5c] text-white font-bold rounded-xl shadow-lg shadow-blue-900/10 transition-all active:scale-95 shrink-0"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Search size={22} />
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              /* Ticket Result */
              <motion.div
                key="ticket-result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full will-change-transform"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="font-['Montserrat',sans-serif] font-semibold text-slate-500 hover:text-primary gap-2"
                  >
                    <ArrowLeft size={18} />
                    Check Another Ticket
                  </Button>
                  <div className="px-3 py-1 bg-green-50 border border-green-100 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Ticket Valid</span>
                  </div>
                </div>

                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <TicketCard
                    ticket={ticketData}
                    // Map fields if names slightly differ, but here they match
                    bookingDetails={{
                      from: ticketData.from,
                      to: ticketData.to,
                      date: ticketData.date
                    }}
                  />
                </div>

                <div className="mt-8 flex justify-center">
                  <p className="text-slate-400 text-sm font-['Montserrat',sans-serif]">Ticket generated on {new Date().toLocaleDateString()}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}
