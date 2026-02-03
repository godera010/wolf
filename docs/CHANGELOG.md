# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2026-02-03

### Added
- **3-Tier Performance Optimization:**
  - New `usePerformance` hook detects device capability (HIGH/MID/LOW).
  - Tier detection based on CPU cores, RAM, Android version, and `prefers-reduced-motion`.
  - HIGH tier: Full animations with springs and blur effects.
  - MID tier: Simplified animations (150ms duration).
  - LOW tier: Instant transitions (50ms), no blur, no slide animations.
  - All 9 animated components updated to use tier-aware logic.
  
- **PDF Ticket Download (`@react-pdf/renderer`):**
  - New `TicketPDF` component generates professional boarding passes.
  - Landscape A4 layout matching on-screen TicketCard design.
  - Multi-ticket support: Each ticket rendered on its own page.
  - Download button saves PDF file directly (vs print dialog).
  - Dynamic filename: `RoadWolf_Tickets_{count}_seats_{name}.pdf`.

- **Animation Variants Utility:**
  - New `animationVariants.ts` provides reusable tier-aware animation helpers.
  - Functions: `getSlideIn()`, `getFadeIn()`, `getCardEntrance()`, `getModalAnimation()`.

### Changed
- **BookingSuccessPage:** Print opens dialog; Download generates PDF file.
- **Navbar:** Mobile menu animation now tier-aware.
- **Layout:** Background blur conditionally applied based on tier.
- **All Booking Pages:** Modals and footers use tier-based animations.

## [0.2.3] - 2026-01-24

### Refactored
- **Code Standardization (Booking Flow):**
  - Refactored `SeatSelectionPage`, `PassengerInfoPage`, `PaymentPage`, and `BookingSuccessPage` to use the unified `Section` and `Card` components.
  - Replaced manual `<div>` containers with semantic and reusable layout components, improving maintainability.
  - **Design System Compliance:** Removed all hardcoded hex color values. All pages now strictly use `text-primary`, `bg-secondary`, etc., drawing from the central theme tokens.
  - **Code Cleanup:** Removed duplicated logic and unused imports across the booking journey.

## [0.2.2] - 2026-01-23

### Changed
- **Luxury Ticket Redesign (`BookingSuccessPage`):**
  - **Unified Card Layout:** Merged the separate "Passenger Copy" and "Stub" into a single, cohesive "Premium Boarding Pass" card.
  - **5-Row Stack Structure:** Reorganized ticket details into a clean vertical stack:
    1.  **Route:** High-contrast Origin/Destination with a bold Chevron divider and sub-labels.
    2.  **Passenger & Seat:** Combined row with left-aligned details and a prominent orange seat number.
    3.  **Travel Date & Time:** Left-aligned formatting with explicit labels (e.g., "Departure :").
    4.  **Perforation:** Added a realistic CSS-based perforation line with semi-circle notches.
    5.  **Footer:** Total Fare and a stretched, high-density barcode row.
  - **Visual Polish:**
    - Applied **Montserrat** font family for a premium feel.
    - Updated color palette to brand standards: Dark Blue (`#01257d`) and Orange (`#e96f30`).
    - Added a centered, non-rotated watermark for a balanced background.
    - Removed clutter (icons, "Confirmed" stamps, extra boarding details) for a minimalist, text-focused design.

## [0.2.1] - 2026-01-23

### Added
- **Success Page Animations:**
  - Staggered entrance animations for the "Booking Confirmed" message and ticket cards.
  - "Payment Verified" status indicator with heartbeat pulse in the header.
- **Header Navigation:** Added "Return Home" breadcrumb link at the top of the success page for better space utilization.

### Removed
- **Progress Bar:** Removed redundant `BookingSteps` component from the success page to focus on the final confirmation/receipt state.

### Fixed
- **Code Cleanliness:** Removed unused imports and legacy layout wrappers in `BookingSuccessPage`.

## [0.2.0] - 2026-01-21

### Added
- **Mobile Verification Modals:**
  - **Passenger Info:** "Review Details" modal summary before payment.
  - **Payment Page:** "Order Summary" modal (showing Route, Date, Passengers) before confirming transaction.
- **Payment Processing:** Full-screen "Processing Payment" overlay with animation to provide user feedback.
- **Mobile Sticky Footer (Payment):** Persistent "Pay Now" bottom bar on the final payment screen.

### UX Improvements
- **Compact Desktop UI:**
  - Reduced max-width of Payment, Passenger, and Seat Selection pages (`max-w-5xl`) for a cleaner, focused look.
  - Tightened internal padding on all cards and forms for a more premium feel.
- **Visual Consistency:** Standardized button sizes and input field heights across the entire booking flow.

## [0.1.0] - 2026-01-20


### Added
- **Fluid Seat Grid:** Implemented a continuous 5-column grid for the seat selection map, ensuring perfect sizing on mobile devices (360px+).
- **Mobile Sticky Footers:**
  - **Seat Selection:** Booking summary (Price & Continue button) is now fixed to the bottom on mobile.
  - **Passenger Info:** "Pay Now" button and Total Price are fixed to the bottom on mobile.
- **Mobile Confirmation Modal:** Added a review modal that appears when clicking "Continue" on mobile, showing full trip details before proceeding.
- **Desktop Hover Tooltips:** Added detailed black tooltips (Seat #, Type, Price) when hovering over seats.
- **Smart Form Validation:** Mobile footer buttons now automatically trigger form validation and focus on missing fields.

### Changed
- **Responsive Layouts:** 
  - Hidden desktop sidebars on mobile screens to reduce clutter.
  - Refactored `BookingPage` and `SeatSelectionPage` to use a "Mobile-First" approach.
- **Documentation:** Updated `status.md` and `project.md` to reflect the "Polished MVP" status.
