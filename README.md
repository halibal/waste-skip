# REM Waste Skip Selection Page

A modern, responsive web application for waste skip rental services. This application allows users to browse, compare, and select waste skips based on their requirements.

## Key Features

### 📱 Responsive Design

- Complete mobile responsiveness across all sections
- Adaptive layout for different screen sizes
- Clean, intuitive interface across devices

### 🎨 UI Enhancements

- White background theme conveying cleanliness and professionalism
- Custom skip-shaped polygon background element for brand identity
- Improved visual hierarchy with focus on key information

### 🔄 Progress Indicator

- Enhanced UI with improved visual feedback
- Responsive design that adapts to different screen sizes
- Clear indication of the current step in the booking process

### 📢 Banner Section

- Updated color scheme and sizing for better visibility
- Improved visual integration with the overall design

### 📋 Skip List

- Height-limited, scrollable list for future scalability (pagination support)
- Advanced sorting options (ascending and descending)
- Backend integration with Next.js SSR for data fetching
- Loading skeleton during data fetch for improved UX

### 🏷️ Skip List Items

- Redesigned card layout focusing on essential information
- Emphasis on size and price with larger font size and distinct background
- Clear hire period display
- Subtle selection indicator with radio button style and border highlight
- Additional badges for special conditions (private property, heavy waste)
- Price display (excluding VAT) with transportation fee information via tooltip
- Clear visual feedback for selected items

### 🔄 Navigation

- Context-sensitive button visibility
- Desktop: Hover-activated navigation buttons on screen edges
- Mobile: Fixed navigation buttons below the list
- Conditional Continue button activation based on selection state
- Selection status indicator for improved user guidance

### 🔍 Additional Improvements

- Device-specific favicons for better platform integration
- Open Graph image for improved social media sharing
- Enhanced SEO optimization
- Loading state management with skeleton UI

## Technology

- Built with Next.js leveraging Server-Side Rendering for optimal performance and SEO benefits.
- Developer friendly environment with TypeScript, ESLint, and Prettier for code quality and consistency.
- Husky and lint-staged for pre-commit hooks to ensure code quality before commits.
- Tailwind CSS for rapid UI development and consistent styling.

## Installation

To run the application locally, follow these steps:

```sh
pnpm install
```

```sh
pnpm dev
```

or

```sh
pnpm build
```

```sh
pnpm start
```

## Environment Variables

Ensure to set up the following environment variables in a `.env.local` file:

```env
REM_WASTE_API_URL="your_api_url_here"
```

## Usage

Browse through the available skip options, use the sorting functionality to find the perfect match for your needs, and select your preferred skip. The application provides clear guidance throughout the selection process with a user-friendly interface.

## Live Website

[https://rem-waste-eight.vercel.app/](https://rem-waste-eight.vercel.app/)
