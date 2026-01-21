# Walkthrough: Responsive Seat Selection Layout

The Seat Selection page has been completely refactored to use a **Fluid CSS Grid** system. This ensures the seat map adapts perfectly to any device width, from small Android phones (360px) to large tablets and desktops.

## Key Features

### 1. Fluid Seat Grid
Instead of fixed pixel sizes, the seats now live in a 5-column grid that expands and contracts with the screen.
- **Mobile (360px - 430px):** Seats auto-size to fill the available width (touch-friendly targets ~50-60px).
- **Desktop:** Seats cap at a comfortable size within the card.
- **Aisle Logic:** The 3rd column is reserved for the aisle/row number, maintaining perfect alignment.

### 2. "No-Scroll" Mobile Layout
To meet the requirement of minimizing scrolling within the card:
- The **Booking Summary** has been moved to a **Sticky Footer** on mobile devices.
- It stays fixed at the bottom of the screen, leaving the main view dedicated entirely to the seat map.
- This creates an "App-like" feel on mobile.

### 4. Interactive Tooltips & Confirmation
- **Desktop:** Hover over any seat to see a black tooltip with details. Clicking "Continue" goes straight to the next page.
- **Mobile:**
  - Tap "Continue" in the bottom bar.
  - **Expected:** A Confirmation Modal appears from the bottom.
  - Review the full details (Route, Date, Seats, Price).
  - Tap "Confirm & Continue" to proceed.

### Mobile Verification Modals (Added Jan 2026)
To prevent accidental clicks and ensure accuracy, we implemented verification steps for mobile users:
- **Passenger Info**: A "Review Details" modal appears before payment.
- **Payment Page**: A specific "Order Summary" modal appears when clicking "Pay".
- **Sticky Footer (Mobile)**: Added a persistent bottom bar with total and pay button.
- **Optimized Layout**: Hidden the redundant side-bar summary card on mobile devices.

### Verification
1. Open mobile view (width < 1024px).
2. Fill passenger info and click "Continue" -> Verify Modal appears.
3. On Payment page, verify "Sticky Footer" acts as the primary call-to-action.
4. Click "Pay Now" -> Verify "Order Summary" modal prevents immediate charge.

### 5. Multi-Passenger & Ticketing
- **Problem**: Booking for groups generated a single generic ticket.
- **Solution**: 
  - **Passenger Info**: Clean, refreshed UI for entering details for multiple passengers.
  - **Payment**: Summary sidebar lists all passenger names and assigned seats.
  - **Success**: Generates a **Unique Boarding Pass** for each seat booked (e.g., Ticket ID `RW-123-S1`).
- **Verification**:
  - Book 2+ seats.
  - Fill in different names for each.
  - Verify Payment Page lists all names.
  - Verify Success Page shows a stack of separate boarding passes.

### 6. Passenger Info (Mobile)
- **Problem**: Previously required scrolling past long forms to find the "Pay" button.
- **Solution**: Sticky Footer added.
- **Verification**:
  - Navigate to Passenger Info on mobile.
  - Verify "Continue" button and Price are always visible at the bottom.
  - Tapping it should validate the form (show native browser validity errors if empty) or proceed if valid.

### 7. UI Polishing (Desktop)
- **Problem**: Default cards felt too wide and "spacious" on standard desktop screens.
- **Solution**: 
  - Reduced max-width to `max-w-5xl`.
  - Tightened internal padding and gaps.
- **Verification**:
  - Open on Desktop (1024px+).
  - Verify cards feel "compact" and focused.
  - Verify the Summary Sidebar is close to the content.
  - Check Payment Processing: Click Pay -> Verify Full-screen "Processing" overlay appears.

## Verification Steps

### Mobile Test (e.g., iPhone SE / Android)
1. Open the page on a mobile viewport (or resize browser width to ~375px).
2. Verify the Seat Map fits horizontally without side-scrolling.
3. Scroll down/up and verify the **Booking Summary bar** stays fixed at the bottom.
4. Tap the "Continue" button in the footer to proceed.

### Desktop Test (Full Width)
1. Expand browser to full width.
2. Verify the layout switches to a **2-Column** design.
3. The Booking Summary should move to the right side and become sticky (follows you as you scroll).
4. Hover over seats to see the new black tooltips.

## Visual Reference (Design Intent)

> [!NOTE]
> The seat buttons are Squares (`aspect-square`). Their size is determined by the screen width divided by 5 (minus gaps). This ensures they never overflow.
