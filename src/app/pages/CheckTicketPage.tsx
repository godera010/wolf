import { useState } from 'react';
import { Search, Ticket, Calendar, MapPin, Clock, User } from 'lucide-react';

export default function CheckTicketPage() {
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketData, setTicketData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (ticketNumber) {
        setTicketData({
          ticketNumber: ticketNumber,
          passengerName: 'Sarah Moyo',
          from: 'Harare',
          to: 'Bulawayo',
          date: '2026-01-15',
          time: '09:00 AM',
          seatNumber: '12A',
          price: '$25.00',
          status: 'Confirmed',
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex-grow py-12 bg-gray-50 min-h-full">
        <div className="container mx-auto px-4">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl md:text-5xl text-center text-[#01257d] mb-4">
            Check Your Ticket
          </h1>
          <p className="font-['Montserrat',sans-serif] text-center text-gray-600 mb-12">
            Enter your ticket number to view your booking details
          </p>

          <div className="max-w-2xl mx-auto">
            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <form onSubmit={handleSearch}>
                <div className="relative mb-6">
                  <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={ticketNumber}
                    onChange={(e) => setTicketNumber(e.target.value)}
                    placeholder="Enter your ticket number (e.g., TKT123456)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg font-['Montserrat',sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#e96f30] focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#042880] hover:bg-[#012275] disabled:bg-gray-400 text-white font-['Montserrat',sans-serif] font-medium text-[15px] px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Search size={20} />
                  {loading ? 'Searching...' : 'Search Ticket'}
                </button>
              </form>
            </div>

            {/* Ticket Details */}
            {ticketData && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#01257d] to-[#e96f30] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-['Montserrat',sans-serif] font-bold text-2xl mb-1">
                        Ticket Details
                      </h2>
                      <p className="font-['Montserrat',sans-serif] text-sm opacity-90">
                        Ticket #{ticketData.ticketNumber}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-4 py-2 rounded-full ${
                        ticketData.status === 'Confirmed' 
                          ? 'bg-green-500' 
                          : 'bg-yellow-500'
                      }`}>
                        <span className="font-['Montserrat',sans-serif] font-semibold text-sm">
                          {ticketData.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <User className="text-[#01257d] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Passenger Name
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-semibold text-gray-800">
                          {ticketData.passengerName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#01257d] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Route
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-semibold text-gray-800">
                          {ticketData.from} → {ticketData.to}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="text-[#01257d] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Travel Date
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-semibold text-gray-800">
                          {new Date(ticketData.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-[#01257d] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Departure Time
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-semibold text-gray-800">
                          {ticketData.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Seat Number
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-bold text-2xl text-[#01257d]">
                          {ticketData.seatNumber}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-['Montserrat',sans-serif] text-sm text-gray-600 mb-1">
                          Total Amount
                        </p>
                        <p className="font-['Montserrat',sans-serif] font-bold text-2xl text-[#e96f30]">
                          {ticketData.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-['Montserrat',sans-serif] text-sm text-gray-700">
                      <strong>Important:</strong> Please arrive at the station at least 30 minutes before departure time. Bring a valid ID for verification.
                    </p>
                  </div>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-['Montserrat',sans-serif] font-medium py-3 rounded-lg transition-colors">
                    Download Ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
