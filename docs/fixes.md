# Fixes & Optimizations Log - February 1, 2026

## 1. Performance & Memory Optimization

### Code Splitting (Lazy Loading)
- **File:** `src/app/App.tsx`
- **Action:** Refactored application routing to use `React.lazy()` and `Suspense`.
- **Impact:** Significant reduction in initial bundle size and memory usage. Pages are now loaded on-demand rather than all at once on startup.

### GPU Memory Reduction
- **File:** `src/app/components/Layout.tsx`
  - **Action:** Reduced global background blob blur radius from `120px` to `80px`.
  - **Reason:** High blur radius on large fixed elements consumes excessive GPU memory.
- **Files:** `HomePage.tsx`, `SeatSelectionPage.tsx`, `PaymentPage.tsx`, `PassengerInfoPage.tsx`
  - **Action:** Removed expensive `backdrop-blur` CSS filters from large surface areas.
  - **Reason:** `backdrop-blur` causes significant rendering overhead and frame drops on mobile devices and low-end GPUs.

### Hardware Acceleration
- **Files:** `HomePage.tsx`, `AboutPage.tsx`, `GalleryPage.tsx`, `RoutesPage.tsx`
  - **Action:** Applied `will-change-transform` and `will-change-opacity` to complex animated elements.
  - **Impact:** Promotes elements to their own compositing layers, ensuring smooth 60fps animations.

## 2. Animation & UX Fixes

### Booking Success Page
- **File:** `src/app/pages/BookingSuccessPage.tsx`
- **Issue:** Success confirmation message was auto-hiding after 4.5 seconds.
- **Fix:** Removed the auto-hide timer. The "Booking Confirmed" message now persists permanently.
- **Technical:** Removed `useEffect` timer and `AnimatePresence` wrapper for the success message.

### Booking Search Page
- **File:** `src/app/pages/BookingPage.tsx`
- **Issue:** "Start Your Journey" title was auto-hiding after 3.5 seconds, causing layout jumps.
- **Fix:** Removed the auto-hide timer. The title now only animates away when search results are displayed.
- **Refinement:** Added `layout` prop to the title's animation container to ensure the search form slides up smoothly instead of snapping.

### Gallery Page
- **File:** `src/app/pages/GalleryPage.tsx`
- **Issue:** Lightbox modal used basic CSS `animate-in` classes.
- **Fix:** Replaced with `Framer Motion` components (`AnimatePresence`, `motion.div`, `motion.img`).
- **Impact:** Consistent zoom/fade entry and exit animations matching the rest of the application.

### Layout Stability
- **File:** `src/app/pages/AboutPage.tsx`
- **Fix:** Added `overflow-hidden` to the "Mission & Vision" section.
- **Reason:** Prevents horizontal scrollbar flickering during lateral entry animations (`x: -50` / `x: 50`).

## 3. Asset & Dependency Management

### Image Import Repairs
- **File:** `src/app/pages/RoutesPage.tsx`
- **Fix:** Corrected broken import paths for `harare.webp` and `chegutu.webp`.
- **Verification:** Ensured all route cards display their correct destination images.

### Dependency Cleanup
- **Action:** Uninstalled unused heavy libraries to reduce `node_modules` size and build complexity.
- **Removed:**
  - `@mui/material`
  - `@mui/icons-material`
  - `@emotion/react`
  - `@emotion/styled`
  - `react-popper`
  - `@popperjs/core`
