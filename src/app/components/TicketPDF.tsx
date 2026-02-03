import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// PDF Styles - Landscape Layout matching TicketCard
const styles = StyleSheet.create({
    page: {
        padding: 25,
        backgroundColor: '#f1f5f9',
        fontFamily: 'Helvetica',
    },
    ticket: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        border: '1pt solid #e2e8f0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    // Header
    header: {
        backgroundColor: '#01257d',
        paddingVertical: 14,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    logoText: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: -0.5,
    },
    boardingPass: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 9,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    ticketId: {
        color: '#e96f30',
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    // Main Body Container (horizontal layout)
    bodyContainer: {
        flexDirection: 'row',
        minHeight: 280,
    },
    // Main Content (left side - 75%)
    mainContent: {
        flex: 3,
        padding: 25,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    // Divider (dashed line)
    divider: {
        width: 1,
        borderLeft: '2pt dashed #e2e8f0',
        marginVertical: 15,
    },
    // Stub Panel (right side - 25%)
    stubPanel: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8fafc',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    // Route Section
    routeSection: {
        marginBottom: 20,
    },
    routeLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    routeLabel: {
        fontSize: 9,
        color: 'rgba(1, 37, 125, 0.5)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    routeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    routeCity: {
        width: '40%',
    },
    cityName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#01257d',
        textTransform: 'uppercase',
        letterSpacing: -0.5,
    },
    pointName: {
        fontSize: 7,
        color: 'rgba(1, 37, 125, 0.6)',
        textTransform: 'uppercase',
        marginTop: 3,
        letterSpacing: 0.5,
    },
    arrowContainer: {
        width: '20%',
        alignItems: 'center',
    },
    arrow: {
        fontSize: 28,
        color: '#e96f30',
        fontWeight: 'bold',
    },
    // Passenger Section
    passengerSection: {
        paddingBottom: 15,
        borderBottom: '1pt solid #f1f5f9',
        marginBottom: 15,
    },
    infoLabel: {
        fontSize: 9,
        color: 'rgba(1, 37, 125, 0.5)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    passengerName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#01257d',
        textTransform: 'uppercase',
        letterSpacing: -0.3,
    },
    // Info Row
    infoRow: {
        flexDirection: 'row',
        gap: 40,
    },
    infoItem: {
        minWidth: 100,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#01257d',
    },
    // Stub styles
    stubTop: {
        alignItems: 'flex-end',
    },
    seatLabel: {
        fontSize: 9,
        color: 'rgba(1, 37, 125, 0.5)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'right',
    },
    seatNumber: {
        fontSize: 52,
        fontWeight: 'bold',
        color: '#e96f30',
        textAlign: 'right',
        lineHeight: 1,
    },
    fareSection: {
        alignItems: 'flex-end',
    },
    fareLabel: {
        fontSize: 8,
        color: 'rgba(1, 37, 125, 0.5)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'right',
    },
    fareValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#01257d',
        textAlign: 'right',
    },
    // Barcode Section
    barcodeSection: {
        alignItems: 'flex-end',
    },
    barcodeContainer: {
        flexDirection: 'row',
        height: 35,
        marginBottom: 5,
        justifyContent: 'flex-end',
    },
    barcodeLine: {
        height: '100%',
        marginRight: 1,
    },
    barcodeText: {
        fontSize: 7,
        color: '#64748b',
        letterSpacing: 0.5,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    // Footer
    footer: {
        backgroundColor: '#e96f30',
        paddingVertical: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerText: {
        color: '#ffffff',
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    footerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    footerPhone: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

// Location data
const LOCATIONS: Record<string, string> = {
    'Harare': 'Roadport Terminal',
    'Bulawayo': 'City Hall / Fort St',
    'Gweru': 'Clonsilla Motors',
    'Kwekwe': 'Golden Mile / Redan',
    'Kadoma': 'Kadoma Hotel / Speck\'s',
    'Chegutu': 'Chegutu Hotel',
};

const SUPPORT_CONTACTS: Record<string, string> = {
    'Harare': '0788 333 430',
    'Bulawayo': '0788 333 432',
    'Gweru': '0788 333 434',
};

interface Ticket {
    id?: string;
    ticketNumber?: string;
    passengerName: string;
    seatNumber: string;
    from?: string;
    to?: string;
    date?: string;
    time?: string;
    price?: number | string;
}

interface TicketPDFProps {
    tickets: Ticket[];
    bookingDetails?: {
        from: string;
        to: string;
        date: string;
    };
    totalAmount?: number;
    amountPerTicket?: number;
}

// Generate barcode-like pattern
const generateBarcodeLines = () => {
    const lines = [];
    for (let i = 0; i < 35; i++) {
        const width = i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1;
        lines.push(
            <View
                key={i}
                style={[
                    styles.barcodeLine,
                    {
                        width: width,
                        backgroundColor: '#1e293b',
                    },
                ]}
            />
        );
    }
    return lines;
};

const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
        return 'N/A';
    }
};

const formatPrice = (amount?: number | string) => {
    if (amount === undefined) return '$0.00';
    if (typeof amount === 'string') return amount;
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Single ticket page component
const TicketPage = ({
    ticket,
    bookingDetails,
    ticketPrice
}: {
    ticket: Ticket;
    bookingDetails?: { from: string; to: string; date: string };
    ticketPrice: number;
}) => {
    const fromCity = bookingDetails?.from || ticket.from || 'Origin';
    const toCity = bookingDetails?.to || ticket.to || 'Destination';
    const travelDate = bookingDetails?.date || ticket.date;
    const ticketId = ticket.id || ticket.ticketNumber || 'TICKET';

    return (
        <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.ticket}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.logoText}>ROADWOLF</Text>
                        <Text style={styles.boardingPass}>Premium Boarding Pass</Text>
                    </View>
                    <Text style={styles.ticketId}>{ticketId}</Text>
                </View>

                {/* Body Container - Horizontal Layout */}
                <View style={styles.bodyContainer}>
                    {/* Main Content (Left Side) */}
                    <View style={styles.mainContent}>
                        {/* Route Section */}
                        <View style={styles.routeSection}>
                            <View style={styles.routeLabels}>
                                <Text style={styles.routeLabel}>Origin</Text>
                                <Text style={styles.routeLabel}>Destination</Text>
                            </View>
                            <View style={styles.routeRow}>
                                <View style={styles.routeCity}>
                                    <Text style={styles.cityName}>{fromCity}</Text>
                                    <Text style={styles.pointName}>{LOCATIONS[fromCity] || 'Terminal'}</Text>
                                </View>
                                <View style={styles.arrowContainer}>
                                    <Text style={styles.arrow}>›</Text>
                                </View>
                                <View style={[styles.routeCity, { alignItems: 'flex-end' }]}>
                                    <Text style={styles.cityName}>{toCity}</Text>
                                    <Text style={styles.pointName}>{LOCATIONS[toCity] || 'Terminal'}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Passenger Section */}
                        <View style={styles.passengerSection}>
                            <Text style={styles.infoLabel}>Passenger Name</Text>
                            <Text style={styles.passengerName}>{ticket.passengerName}</Text>
                        </View>

                        {/* Info Row */}
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Travel Date</Text>
                                <Text style={styles.infoValue}>{formatDate(travelDate)}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Departure</Text>
                                <Text style={styles.infoValue}>{ticket.time || '08:00 AM'}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Dashed Divider */}
                    <View style={styles.divider} />

                    {/* Stub Panel (Right Side) */}
                    <View style={styles.stubPanel}>
                        <View style={styles.stubTop}>
                            <Text style={styles.seatLabel}>Seat Number</Text>
                            <Text style={styles.seatNumber}>{ticket.seatNumber}</Text>
                        </View>

                        <View style={styles.fareSection}>
                            <Text style={styles.fareLabel}>Fare</Text>
                            <Text style={styles.fareValue}>{formatPrice(ticketPrice)}</Text>
                        </View>

                        {/* Barcode */}
                        <View style={styles.barcodeSection}>
                            <View style={styles.barcodeContainer}>
                                {generateBarcodeLines()}
                            </View>
                            <Text style={styles.barcodeText}>BOARDING PASS</Text>
                        </View>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>roadwolfcoaches.co.zw</Text>
                    <View style={styles.footerRight}>
                        <Text style={styles.footerText}>Office Support:</Text>
                        <Text style={styles.footerPhone}>{SUPPORT_CONTACTS[fromCity] || '0783 133 420'}</Text>
                    </View>
                </View>
            </View>
        </Page>
    );
};

// Main PDF Document - handles multiple tickets
export default function TicketPDF({ tickets, bookingDetails, totalAmount, amountPerTicket }: TicketPDFProps) {
    // Calculate price per ticket
    const pricePerTicket = amountPerTicket || (totalAmount && tickets.length > 0 ? totalAmount / tickets.length : 20);

    return (
        <Document>
            {tickets.map((ticket, index) => (
                <TicketPage
                    key={ticket.id || index}
                    ticket={ticket}
                    bookingDetails={bookingDetails}
                    ticketPrice={pricePerTicket}
                />
            ))}
        </Document>
    );
}
