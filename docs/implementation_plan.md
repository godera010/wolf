# Add Scroll Animations to Landing Page

## Goal Description
Add "animate on scroll" effects to the landing page (`HomePage.tsx`) to enhance the visual experience. The animations will reveal content as the user scrolls down the page.

## Proposed Changes

### Dependencies
- Use existing `motion` (Framer Motion) library.

### `src/app/pages`

#### [MODIFY] [HomePage.tsx](file:///c:/Users/Godwin/Documents/projects/New%20folder/New%20folder/roadwolf/src/app/pages/HomePage.tsx)
- Import `motion` from `framer-motion`.
- Wrap sections (Features, Amenities, Testimonials) with `motion.div`.
- Apply `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}` props.
- Configure `viewport={{ once: true }}` so animations only happen once.
- Add staggered animations for list items (features cards, amenity icons, testimonials).

## Verification Plan

### Manual Verification
- Start the development server (`npm run dev`).
- Open the landing page in the browser.
- Scroll down and observe if elements fade in and slide up as they enter the viewport.
- specific verification of:
    - Features section cards appearing.
    - Amenities grid appearing.
    - Testimonials cards appearing.
