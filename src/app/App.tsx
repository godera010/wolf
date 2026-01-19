import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import PassengerInfoPage from './pages/PassengerInfoPage';
import PaymentPage from './pages/PaymentPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import RoutesPage from './pages/RoutesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import CheckTicketPage from './pages/CheckTicketPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          } />
          <Route path="/booking" element={
            <ErrorBoundary>
              <BookingPage />
            </ErrorBoundary>
          } />
          <Route path="/booking/seats" element={
            <ErrorBoundary>
              <SeatSelectionPage />
            </ErrorBoundary>
          } />
          <Route path="/booking/passengers" element={
            <ErrorBoundary>
              <PassengerInfoPage />
            </ErrorBoundary>
          } />
          <Route path="/booking/payment" element={
            <ErrorBoundary>
              <PaymentPage />
            </ErrorBoundary>
          } />
          <Route path="/booking/success" element={
            <ErrorBoundary>
              <BookingSuccessPage />
            </ErrorBoundary>
          } />
          <Route path="/routes" element={
            <ErrorBoundary>
              <RoutesPage />
            </ErrorBoundary>
          } />
          <Route path="/gallery" element={
            <ErrorBoundary>
              <GalleryPage />
            </ErrorBoundary>
          } />
          <Route path="/about" element={
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          } />
          <Route path="/check-ticket" element={
            <ErrorBoundary>
              <CheckTicketPage />
            </ErrorBoundary>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}