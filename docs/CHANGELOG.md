# Changelog

All notable changes to this project will be documented in this file.

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
