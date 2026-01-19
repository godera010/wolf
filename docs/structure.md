# Project Structure

The project follows a feature-based and component-driven structure, typical of modern React applications using Vite.

## Root Directory

- `README.md`: Entry point.
- `docs/`: Centralized documentation folder contains:
    - `project.md`, `structure.md`, `status.md`, `build.md`.
    - `walkthrough.md`, `implementation_plan.md`: Current sprint artifacts.
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
  - **`ui/`**: Core design system components (Button, Input, Card, etc.), likely derived from Shadcn UI.
  - **`figma/`**: Components specifically adapted from Figma designs (e.g., `ImageWithFallback`).
  - **`Navbar.tsx`, `Footer.tsx`**: Layout components.
  - **`BookingSteps.tsx`**: Progress indicator for the booking flow.
- **`pages/`**: Top-level page components for routes.
  - `HomePage.tsx`: Landing page.
  - `BookingPage.tsx`: Main booking wizard.
  - `SeatSelectionPage.tsx`: Seat map and selection.
  - `RoutesPage.tsx`: List of available bus routes.
  - `CheckTicketPage.tsx`: Ticket verification/status.
  - `AboutPage.tsx`: Information page.

### `src/assets/`
Static assets like images and icons. Contains extracted images from designs (e.g., coach images, placeholders).

### `src/imports/`
Components or logic imported directly from external tools or previous iterations (e.g., `Booking1.tsx`, `Booking2.tsx`). These might be "raw" components that need refactoring or integration.

### `src/styles/`
Global stylesheets.
- `index.css`: Main entry point (Tailwind directives).
- `theme.css`: Theme variables.
- `fonts.css`: Font definitions.

### `src/main.tsx`
Application entry point. Renders the root `App` component.

## Guidelines
- `guidelines/`: Contains `Guidelines.md` for project specific coding rules.
