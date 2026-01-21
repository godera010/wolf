# Implementation Plan - Multiple Ticket Support

## Goal
Ensure that when a user books multiple seats, they receive separate, downloadable tickets for each passenger, rather than a single group ticket.

## Proposed Changes

### 1. [PassengerInfoPage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/PassengerInfoPage.tsx)
- **Mobile UX**: 
  - Implement `showMobileConfirm` state.
  - Intercept form submission on mobile.
  - Show a "Review Passenger Details" modal (similar to Seat Selection) before navigation.
  - List all passengers in the modal for final check.

### 2. [PaymentPage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/PaymentPage.tsx)
- **Mobile UX**:
  - **Sticky Footer**: Add persistent "Pay" button and Total at bottom of screen.
  - **Expanded Checkout Modal**: Update the confirmation modal to show FULL details (Route, Date, Passengers, Seats) acting as a final "Checkout Summary" before payment.
  - **Processing State**: Implement a full-screen overlay with a spinner/animation to block UI and show progress during the payment simulation.
- **Desktop UX**:
  - **Layout Optimization**: Reduce container width to `max-w-5xl` for a tighter, more cohesive look.
  - **Compact Cards**: Reduce internal padding of the Booking Summary and Payment Method cards to remove excessive whitespace.

### 3. [PassengerInfoPage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/PassengerInfoPage.tsx)
- **Mobile UX**: 
  - Intercept form submission to show a "Review Details" modal.
  - **Sticky Footer**: Ensure "Continue" button is always accessible.
- **Desktop UX**:
  - Match layout width (`max-w-5xl`) and padding with Payment Page for consistency.
  - Use compact input fields.

### 2. [PaymentPage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/PaymentPage.tsx)
- **Summary Section Update**:
  - Replace "Primary Contact" with a list of all passengers.
  - Display "Name - Seat X" for each passenger.
- **Logic Update**: In `handlePayment`, instead of generating a single `ticketId`, generate an array of `tickets`.
- **Ticket Structure**: 
  ```typescript
  interface Ticket {
    id: string;
    passengerName: string;
    seatNumber: number;
    route: { from: string, to: string };
    date: string;
    time: string;
  }
  ```
- **Navigation State**: Pass `tickets` array to `/booking/success`.

### 2. [BookingSuccessPage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/BookingSuccessPage.tsx)
- **Component**: Extract the existing "Boarding Pass" UI into a reusable `TicketCard` component.
- **Rendering**: 
  - Check for `tickets` array in state.
  - Render a `TicketCard` for each item in the array.
- **Download Action**: Update text to imply downloading specific references (or keep generic "Download" which would theoretically zip them, but for UI just showing multiple cards is the first step).

## Verification Plan
- **Book 2 Seats**: Go through the flow selecting 2 seats.
- **Enter Details**: Enter 2 different passenger names.
- **Comple Payment**: Click Pay.
- **Verify Success Page**:
  - Should see **2 separate Booking Cards**.
  - Each card should have the correct Name and Seat Number.
  - Each card should have a unique Ticket ID.
