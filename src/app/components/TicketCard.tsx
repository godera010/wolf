import { ChevronRight } from 'lucide-react';
import imgLogo from '../../assets/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png';
import clsx from 'clsx';

// Shared Location Data Source (Ideally this should be in a constants file or context)
export const LOCATIONS = [
    { id: 'hRE', city: 'Harare', label: 'Harare', point: 'Roadport Terminal', address: 'Cnr Robert Mugabe Rd & 5th St' },
    { id: 'bYO', city: 'Bulawayo', label: 'Bulawayo', point: 'City Hall / Fort St', address: 'Cnr Fort Street & 10th Avenue' },
    { id: 'gWU', city: 'Gweru', label: 'Gweru', point: 'Clonsilla Motors', address: 'Chicken Inn Complex' },
    { id: 'kWE', city: 'Kwekwe', label: 'Kwekwe', point: 'Golden Mile / Redan', address: 'Highway Turn-off or Redan Garage' },
    { id: 'kAD', city: 'Kadoma', label: 'Kadoma', point: 'Kadoma Hotel / Speck\'s', address: 'Kadoma Hotel Entrance or Speck\'s Hotel' },
    { id: 'cHE', city: 'Chegutu', label: 'Chegutu', point: 'Chegutu Hotel', address: 'Hotel or Total Service Station' },
];

export const SUPPORT_CONTACTS: Record<string, string> = {
    Harare: '0788 333 430',
    Bulawayo: '0788 333 432',
    Gweru: '0788 333 434',
};

interface TicketCardProps {
    ticket: {
        id?: string;
        ticketNumber?: string;
        passengerName: string;
        seatNumber: string;
        // Add other fields as needed for CheckTicketPage data shape if different
        from?: string;
        to?: string;
        date?: string;
        time?: string;
        price?: number | string;
    };
    bookingDetails?: {
        from: string;
        to: string;
        date: string;
    };
    totalAmount?: number;
    className?: string;
}

export default function TicketCard({ ticket, bookingDetails, totalAmount, className }: TicketCardProps) {
    // Normalize data access
    const fromCity = bookingDetails?.from || ticket.from || 'Origin';
    const toCity = bookingDetails?.to || ticket.to || 'Destination';
    const travelDate = bookingDetails?.date || ticket.date;

    // Format helpers
    const formatDate = (dateString?: string) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'N/A';
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        } catch (e) {
            return 'N/A';
        }
    };

    const formatPrice = (amount?: number | string) => {
        if (amount === undefined) return '$0.00';
        if (typeof amount === 'string') return amount; // Already formatted
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const getPriceDisplay = () => {
        if (totalAmount) return formatPrice(totalAmount);
        if (ticket.price) return formatPrice(ticket.price);
        return '$0.00'; // Default
    };

    const ticketId = ticket.id || ticket.ticketNumber || 'TICKET';

    return (
        <div className={clsx("flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-w-5xl mx-auto group hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 font-['Montserrat',sans-serif]", className)}>

            {/* --- FULL WIDTH HEADER --- */}
            <div className="bg-[#01257d] p-5 px-8 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="flex items-center space-x-4 relative z-10">
                    <img
                        src={imgLogo}
                        alt="RoadWolf Logo"
                        className="h-8 w-auto object-contain brightness-0 invert"
                    />
                    <span className="text-white font-black text-xl tracking-tighter">ROADWOLF</span>
                    <div className="h-5 w-[1px] bg-white/20 hidden sm:block"></div>
                    <span className="text-white/90 text-[11px] font-bold uppercase hidden sm:block">
                        Premium Boarding Pass
                    </span>
                </div>
                {/* Ticket ID on the right for both mobile and desktop */}
                <div className="text-[#e96f30] text-[10px] font-black uppercase relative z-10">
                    {ticketId}
                </div>
            </div>

            {/* --- MIDDLE SECTION (Main Body | Stub) --- */}
            <div className="flex flex-col md:flex-row flex-grow relative">

                {/* Main Ticket Area */}
                <div className="flex-1 flex flex-col min-w-0 p-5 relative">
                    {/* Brand Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden select-none w-full flex justify-center">
                        <img src={imgLogo} alt="" className="w-[70%] opacity-[0.05] grayscale" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-5 justify-center h-full">
                        {/* Row 1: Route */}
                        <div className="border-b border-slate-100 pb-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] uppercase font-bold text-[#01257d]/50">Origin</span>
                                <span className="text-[10px] uppercase font-bold text-[#01257d]/50">Destination</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex flex-col flex-1 text-left items-start">
                                    <span className="text-2xl md:text-3xl font-black text-[#01257d] uppercase leading-none tracking-tight">{fromCity}</span>
                                    <span className="text-[9px] text-[#01257d]/60 font-bold uppercase tracking-wider mt-1">{LOCATIONS.find(l => l.city === fromCity)?.point || 'Origin Point'}</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <ChevronRight className="text-[#e96f30]" size={32} strokeWidth={4} />
                                </div>
                                <div className="flex flex-col flex-1 text-right items-end">
                                    <span className="text-2xl md:text-3xl font-black text-[#01257d] uppercase leading-none tracking-tight">{toCity}</span>
                                    <span className="text-[9px] text-[#01257d]/60 font-bold uppercase tracking-wider mt-1">{LOCATIONS.find(l => l.city === toCity)?.point || 'Destination Point'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Passenger & Date/Time on Desktop */}
                        <div className="border-b border-slate-100 pb-4 md:border-none md:pb-0">
                            <div className="flex items-end justify-between">
                                <div className="text-left items-start flex flex-col">
                                    <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Passenger Name</span>
                                    <span className="text-2xl font-black text-[#01257d] tracking-tight uppercase truncate max-w-[200px] md:max-w-none">{ticket.passengerName}</span>
                                </div>

                                <div className="hidden md:flex items-center gap-12 mr-8">
                                    <div className="text-left flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Travel Date</span>
                                        <span className="text-xl font-black text-[#01257d]">{formatDate(travelDate)}</span>
                                    </div>
                                    <div className="text-left flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Departure</span>
                                        <span className="text-xl font-black text-[#01257d]">{ticket.time || '08:00 AM'}</span>
                                    </div>
                                </div>

                                {/* Mobile Only Seat Display */}
                                <div className="text-right items-end flex flex-col md:hidden">
                                    <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-0.5">Seat No.</span>
                                    <span className="text-3xl font-black text-[#e96f30]">{ticket.seatNumber}</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Only: Date, Time, Price, Barcode */}
                        <div className="md:hidden space-y-4">
                            <div className="pb-2 border-b border-slate-100">
                                <div className="flex items-end justify-between">
                                    <div className="text-left items-start flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Travel Date</span>
                                        <span className="text-xl font-black text-[#01257d]">{formatDate(travelDate)}</span>
                                    </div>
                                    <div className="text-right items-end flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Departure</span>
                                        <span className="text-xl font-black text-[#01257d]">{ticket.time || '08:00 AM'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center -mx-6 my-2">
                                <div className="absolute left-0 w-3 h-6 bg-slate-50 rounded-r-full shadow-inner"></div>
                                <div className="w-full h-[1px] border-t-2 border-dashed border-slate-100 mx-3"></div>
                                <div className="absolute right-0 w-3 h-6 bg-slate-50 rounded-l-full shadow-inner"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase font-bold text-[#01257d]/50">Total Fare</span>
                                <span className="text-3xl font-black text-[#01257d] tracking-tight">{getPriceDisplay()}</span>
                            </div>
                            <div className="pt-4 flex flex-col items-center gap-4">
                                <div className="h-12 w-full flex items-end justify-center gap-[2px] opacity-80">
                                    {[...Array(60)].map((_, i) => (
                                        <div key={i} className={`bg-slate-900 ${i % 7 === 0 ? 'w-[3px]' : 'w-[1px]'} ${i % 5 === 0 ? 'h-full' : 'h-[70%] '}`}></div>
                                    ))}
                                </div>
                                <span className="text-[10px] font-mono text-[#01257d]/60 uppercase font-bold">{ticketId}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP DIVIDER (Perforation) --- */}
                <div className="hidden md:flex flex-col relative w-[1px] bg-slate-100">
                    <div className="h-full w-full border-l-2 border-dashed border-slate-200"></div>
                </div>

                {/* --- STUB PANEL (Desktop Only) --- */}
                <div className="hidden md:flex w-[220px] bg-slate-50/50 flex-col p-5 justify-between relative">
                    <div className="space-y-6 flex-grow flex flex-col justify-center">
                        <div className="flex flex-col items-end text-right">
                            <span className="text-[10px] uppercase font-bold text-[#01257d]/50 block mb-1">Seat Number</span>
                            <span className="text-5xl font-black text-[#e96f30] leading-none">{ticket.seatNumber}</span>
                        </div>

                        <div>
                            <span className="text-[9px] uppercase font-bold text-[#01257d]/50 block mb-1 text-right">Fare</span>
                            <span className="text-2xl font-black text-[#01257d] block text-right tracking-tight">{getPriceDisplay()}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-end gap-3 opacity-80">
                        {/* Mini Barcode */}
                        <div className="h-10 w-full max-w-[150px] flex items-end justify-end gap-[2px]">
                            {[...Array(40)].map((_, i) => (
                                <div key={i} className={`bg-slate-900 ${i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'} h-full`}></div>
                            ))}
                        </div>
                        <span className="text-[9px] font-mono font-bold text-slate-400">BOARDING PASS</span>
                    </div>
                </div>
            </div>

            {/* --- FULL WIDTH FOOTER --- */}
            <div className="bg-[#e96f30] p-3 px-8 flex justify-between items-center text-[10px] text-white font-bold uppercase overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <span className="opacity-90 relative z-10">roadwolfcoaches.co.zw</span>
                <div className="flex items-center gap-4 relative z-10">
                    <span className="opacity-80 font-medium hidden sm:inline">Office Support:</span>
                    <span className="text-white">{SUPPORT_CONTACTS[fromCity] || '0783 133 420'}</span>
                </div>
            </div>

        </div>
    );
}
