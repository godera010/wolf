# Walkthrough - Scroll Animations

I have added "animate on scroll" effects to the landing page (`HomePage.tsx`) using Framer Motion. The animations enhance the user experience by revealing content as the user scrolls down.

## Changes

### Landing Page Animations

I updated `src/app/pages/HomePage.tsx` to include the `motion` component from `framer-motion`.

- **Features Section**: The "Why Choose Us?" title and the feature cards now fade in and slide up as they enter the viewport.
- **Amenities Section**: The "Onboard Amenities" section and its grid items animate in sequence.
- **Testimonials Section**: The "Passenger Stories" section and individual testimonial cards now have a smooth entrance animation.

The animations use a staggered effect (`staggerChildren`) so that items in a grid appear one after another rather than all at once, creating a more polished feel.

## Verification Results

### Build Verification
Ran `npm run build` to verify that the changes compile correctly.
- **Result**: Build successful using `vite build`.
- **Output**:
  ```
  vite v6.3.5 building for production...
  ✓ 2096 modules transformed.
  ✓ built in 3.06s
  ```

### Manual Verification
To experience the animations:
1. Run `npm run dev`.
2. Open the application in your browser.
3. Scroll down the entry page.
4. Observe the elements drifting up and fading in as you reach each section.
