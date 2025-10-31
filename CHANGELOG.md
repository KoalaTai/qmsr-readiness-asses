# Changelog

All notable changes to the QMSR Readiness Snapshot project will be documented in this file.

## [1.1.0] - 2024 (Current Version)

### Added

#### Email Results Feature
- Added "Email Results" button to action buttons section
- Pre-fills email subject and body with formatted assessment results
- Tracks email action in analytics

#### Persistent Header CTA
- Added "Book a Call" button in header for better visibility
- Improves conversion opportunities on mobile devices
- Button persists across entire user journey

#### Privacy-Friendly Analytics
- Client-side event tracking using localStorage
- Tracks key user actions:
  - Assessment starts
  - Individual question answers
  - Assessment completions
  - Result categories (Red/Yellow/Green)
  - Export actions (print, copy, email)
  - Assessment resets
- No external server calls or third-party tracking
- Provides completion and drop-off rate metrics
- Accessible via browser console for analysis
- User data never leaves the browser

#### SEO & Social Sharing Improvements
- Added comprehensive meta tags for better SEO
- Implemented Open Graph tags for Facebook sharing
- Added Twitter Card metadata
- Enhanced page description for search engines
- Prepared for social preview image (og-image.png)

#### Documentation
- Created comprehensive README.md with:
  - Quick start guide
  - Project structure overview
  - Customization instructions
  - Analytics usage guide
  - Deployment options
  - Privacy and data handling details
- Added OG-IMAGE-GUIDE.md with social preview image specifications
- Updated PRD.md to reflect new features

### Changed
- Reorganized action buttons for better flow: Book Call → Email → Copy → Print → Reset
- Simplified button labels for better mobile UX (e.g., "Copy" instead of "Copy Results")
- Updated analytics tracking to include all major user interactions

### Technical Details
- Created `src/lib/analytics.ts` for analytics functionality
- Added `trackEvent()` calls throughout App.tsx
- Updated imports to include `EnvelopeSimple` icon
- Added `useEffect` hook to track assessment starts

## [1.0.0] - Initial Release

### Features
- 12-question QMSR readiness assessment
- Red/Yellow/Green scoring (Red ≤10, Yellow 11-18, Green ≥19)
- Customized 30/60/90-day action plans
- Gap analysis by QMS area
- Print/PDF export functionality
- Copy results to clipboard
- Assessment reset capability
- Responsive mobile-first design
- Professional healthcare-focused theme
- Smooth animations and transitions
- Progress tracking during assessment
- Accessibility-focused UI components

### Technical Stack
- React 19 with TypeScript
- Vite build tool
- Tailwind CSS styling
- shadcn/ui component library
- Framer Motion animations
- Phosphor Icons
- Sonner toast notifications

---

## Future Enhancements (Planned)

- [ ] Question grouping into 3-4 sections for better scannability
- [ ] Form submission capture (CRM integration)
- [ ] Social preview image (og-image.png)
- [ ] Progress persistence using localStorage
- [ ] Floating mobile CTA button
- [ ] A/B testing for action plans
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Export to PDF with custom branding
- [ ] Share unique result URLs
