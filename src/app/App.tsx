import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages to reduce initial bundle size and memory usage
const HomePage = lazy(() => import('./pages/HomePage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const SeatSelectionPage = lazy(() => import('./pages/SeatSelectionPage'));
const PassengerInfoPage = lazy(() => import('./pages/PassengerInfoPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const BookingSuccessPage = lazy(() => import('./pages/BookingSuccessPage'));
const RoutesPage = lazy(() => import('./pages/RoutesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CheckTicketPage = lazy(() => import('./pages/CheckTicketPage'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Very short branded loading (400ms) - fast but shows logo
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ErrorBoundary><Suspense fallback={null}><HomePage /></Suspense></ErrorBoundary>} />
          <Route path="/booking" element={<ErrorBoundary><Suspense fallback={null}><BookingPage /></Suspense></ErrorBoundary>} />
          <Route path="/booking/seats" element={<ErrorBoundary><Suspense fallback={null}><SeatSelectionPage /></Suspense></ErrorBoundary>} />
          <Route path="/booking/passengers" element={<ErrorBoundary><Suspense fallback={null}><PassengerInfoPage /></Suspense></ErrorBoundary>} />
          <Route path="/booking/payment" element={<ErrorBoundary><Suspense fallback={null}><PaymentPage /></Suspense></ErrorBoundary>} />
          <Route path="/booking/success" element={<ErrorBoundary><Suspense fallback={null}><BookingSuccessPage /></Suspense></ErrorBoundary>} />
          <Route path="/routes" element={<ErrorBoundary><Suspense fallback={null}><RoutesPage /></Suspense></ErrorBoundary>} />
          <Route path="/gallery" element={<ErrorBoundary><Suspense fallback={null}><GalleryPage /></Suspense></ErrorBoundary>} />
          <Route path="/about" element={<ErrorBoundary><Suspense fallback={null}><AboutPage /></Suspense></ErrorBoundary>} />
          <Route path="/check-ticket" element={<ErrorBoundary><Suspense fallback={null}><CheckTicketPage /></Suspense></ErrorBoundary>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}