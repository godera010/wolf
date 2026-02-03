import { useLocation, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { CheckCircle, Download, Printer, ChevronRight, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import TicketCard from '../components/TicketCard';
import TicketPDF from '../components/TicketPDF';
import Section from '../components/ui/Section';
import { usePerformance } from '@/hooks/usePerformance';
import { toast } from 'sonner';

export default function BookingSuccessPage() {
    const location = useLocation();
    const state = location.state || {};
    const { tier } = usePerformance();
    const ticketRef = useRef<HTMLDivElement>(null);
    const [isPrinting, setIsPrinting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

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
        passengerName: passengerInfo.fullName || (passengerInfo.firstName ? `${passengerInfo.firstName} ${passengerInfo.lastName}` : 'Guest'),
        seatNumber: selectedSeats.length > 0 ? selectedSeats.join(', ') : 'N/A',
    }];

    // Print ticket functionality - opens print dialog
    const handlePrint = () => {
        setIsPrinting(true);

        // Create a print-specific stylesheet
        const printStyles = `
      @media print {
        body * { visibility: hidden; }
        #ticket-container, #ticket-container * { visibility: visible; }
        #ticket-container { 
          position: absolute; 
          left: 0; 
          top: 0; 
          width: 100%;
          padding: 20px;
        }
        .no-print { display: none !important; }
        @page { margin: 0.5in; }
      }
    `;

        // Add print styles
        const styleElement = document.createElement('style');
        styleElement.id = 'print-styles';
        styleElement.textContent = printStyles;
        document.head.appendChild(styleElement);

        // Trigger print
        setTimeout(() => {
            window.print();
            // Remove print styles after printing
            setTimeout(() => {
                document.getElementById('print-styles')?.remove();
                setIsPrinting(false);
            }, 500);
        }, 100);
    };

    // Download as PDF using @react-pdf/renderer
    const handleDownload = async () => {
        setIsDownloading(true);
        toast.loading('Generating PDF...', { id: 'pdf-download' });

        try {
            // Generate PDF blob with all tickets
            const pdfBlob = await pdf(
                <TicketPDF
                    tickets={displayTickets}
                    bookingDetails={bookingDetails}
                    totalAmount={amount ? amount : 20 * selectedSeats.length}
                    amountPerTicket={20}
                />
            ).toBlob();

            // Create download link
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');

            // Generate filename with booking info
            const ticketCount = displayTickets.length;
            const passengerName = displayTickets[0]?.passengerName?.replace(/\s+/g, '_') || 'passenger';
            const filename = `RoadWolf_Tickets_${ticketCount > 1 ? ticketCount + '_seats_' : ''}${passengerName}.pdf`;

            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up blob URL
            URL.revokeObjectURL(url);

            toast.success('Ticket downloaded successfully!', { id: 'pdf-download' });
        } catch (error) {
            console.error('PDF generation error:', error);
            toast.error('Failed to download PDF. Please try again.', { id: 'pdf-download' });
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="relative flex-grow flex flex-col min-h-screen">
            <Section className="py-8">
                <div className="flex justify-between items-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500 no-print">
                    <Link to="/" className="inline-flex items-center text-slate-500 hover:text-secondary font-bold text-xs uppercase tracking-widest transition-colors">
                        <ChevronRight className="rotate-180 mr-1.5" size={14} strokeWidth={3} />
                        Return Home
                    </Link>
                    <div className="px-3 py-1 bg-green-50 border border-green-100 rounded-full flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] uppercase font-black text-green-700 tracking-wider">Payment Verified</span>
                    </div>
                </div>

                <div className={`max-w-3xl mx-auto text-center will-change-transform gpu-accelerated ${tier === 'low' ? '' : tier === 'mid' ? 'animate-in fade-in duration-300' : 'animate-in fade-in zoom-in duration-700'}`}>
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

                {/* Ticket Cards Loop - with print container */}
                <div id="ticket-container" ref={ticketRef} className="space-y-8 mt-8">
                    {displayTickets.map((ticket: any, index: number) => (
                        <div
                            key={ticket.id || index}
                            className={`gpu-accelerated ${tier === 'low' ? '' : tier === 'mid' ? 'animate-in fade-in duration-200' : 'animate-in fade-in zoom-in-95 duration-500'}`}
                            style={tier === 'high' ? { animationDelay: `${0.2 + (index * 0.1)}s`, animationFillMode: 'backwards' } : {}}
                        >
                            <TicketCard
                                ticket={ticket}
                                bookingDetails={bookingDetails}
                                totalAmount={amount ? amount : 20 * selectedSeats.length}
                            />
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-12 no-print">
                    <button
                        onClick={handlePrint}
                        disabled={isPrinting}
                        className="flex items-center justify-center space-x-2 px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPrinting ? <Loader2 size={18} className="animate-spin" /> : <Printer size={18} />}
                        <span>{isPrinting ? 'Preparing...' : 'Print Ticket'}</span>
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="flex items-center justify-center space-x-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-blue-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                        <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
                    </button>
                </div>
            </Section>
        </div>
    );
}
