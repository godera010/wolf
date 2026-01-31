# Project Structure

The project follows a feature-based and component-driven structure, typical of modern React applications using Vite.

## Root Directory

- `README.md`: Entry point.
- `docs/`: Centralized documentation folder contains:
    - `project.md`, `structure.md`, `status.md`, `build.md`.
    - `walkthrough.md`, `implementation_plan.md`: Current sprint artifacts.
    - `CHANGELOG.md`: Version history.
- `setup.sh`: Setup script for initialization.
- `package.json`: Dependencies and scripts.
- `vite.config.ts`: Vite configuration (defines `@` alias for `src`).
- `tailwind.config.js` (or inline in v4): Tailwind configuration.
- `tsconfig.json`: TypeScript configuration.

## `src/` Directory

The source code is located here.

### `src/app/`
Main application logic and components.

- **`components/`**: Reusable UI components.
  - **`ui/`**: Core design system components.
    - `Button.tsx`, `Input.tsx`, `Select.tsx`.
    - **`Card.tsx`**: Standardized content container with variants.
    - **`Section.tsx`**: Global layout wrapper for consistent padding.
    - **`PageHero.tsx`**: Standardized page header with animations.
  - **`figma/`**: Components specifically adapted from Figma designs.
  - **`Layout.tsx`**: Main application wrapper (Navbar + Outlet + Footer).
  - **`Navbar.tsx`, `Footer.tsx`**: Global navigation.
  - **`BookingSteps.tsx`**: Progress indicator for the booking flow.
  - **`TicketCard.tsx`**: Premium, detailed boarding pass component.
  - **`ErrorBoundary.tsx`**: Global error handling.

- **`pages/`**: Top-level page components for routes.
  - **Core**:
    - `HomePage.tsx`: Landing page with search.
    - `AboutPage.tsx`: Company info and values.
    - `GalleryPage.tsx`: Fleet and travel gallery.
    - `RoutesPage.tsx`: List of available bus routes.
    - `CheckTicketPage.tsx`: Ticket verification/status.
  - **Booking Flow**:
    - `BookingPage.tsx`: Step 1 - Search & Route Selection.
    - `SeatSelectionPage.tsx`: Step 2 - Seat Map.
    - `PassengerInfoPage.tsx`: Step 3 - Passenger Details.
    - `PaymentPage.tsx`: Step 4 - Payment Method.
    - `BookingSuccessPage.tsx`: Step 5 - Confirmation & Ticket.

### `src/assets/`
Static assets like images and icons.
- **`routes/`**: Images for specific destinations (Harare, Bulawayo, etc.).
- **`background/`**: General background images.

### `src/imports/`
Components or logic imported directly from external tools or previous iterations. These are legacy references.

### `src/styles/`
Global stylesheets.
- `index.css`: Main entry point (Tailwind directives).
- `theme.css`: Theme variables (CSS variables for colors).
- `fonts.css`: Font definitions.

### `src/main.tsx`
Application entry point. Renders the root `App` component.

## Guidelines
- `guidelines/`: Contains `Guidelines.md` for project specific coding rules.
