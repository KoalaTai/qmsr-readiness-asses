# QMSR Readiness Snapshot

A free, interactive web tool to help medical device companies assess their Quality Management System (QMS) readiness for FDA QMSR alignment with ISO 13485. Get instant Red/Yellow/Green results with a personalized 30/60/90-day action plan.

## 🎯 Overview

The QMSR Readiness Snapshot is a lightweight React application that:
- Evaluates QMS maturity across 12 critical areas
- Provides instant scoring with Red/Yellow/Green categorization
- Generates customized 30/60/90-day action plans
- Offers gap analysis by QMS area
- Supports print/PDF export, clipboard copy, and email sharing
- Includes privacy-friendly analytics tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/              # shadcn components
├── lib/
│   ├── assessment-data.ts   # Questions, scoring logic, action plans
│   ├── analytics.ts         # Privacy-friendly event tracking
│   └── utils.ts             # Utility functions
├── App.tsx              # Main application component
├── index.css            # Theme and global styles
└── main.tsx             # Application entry point
```

## 🎨 Customization

### Questions & Scoring

Edit `src/lib/assessment-data.ts` to:
- Modify assessment questions
- Adjust scoring thresholds (default: Green ≥80%, Yellow 45-79%, Red <45%)
- Customize action plans for each result category

### Branding & Theme

Edit `src/index.css` to customize:
- Color palette (primary, accent, result colors)
- Border radius
- Typography

### Call-to-Action

Update the "Book a Call" URL in `src/App.tsx`:
```typescript
<a href="https://qms.coach/book" target="_blank" rel="noopener noreferrer">
```

### Meta Tags & SEO

Edit `index.html` to update:
- Page title and description
- Open Graph tags for social sharing
- Twitter card metadata
- Social preview image URL

## 📊 Analytics

The tool includes privacy-friendly, client-side analytics that track:
- Assessment starts
- Question answers
- Assessment completions
- Result categories
- Export actions (print, copy, email)

Analytics data is stored locally in the browser (localStorage) and never sent to external servers.

### Viewing Analytics

Open browser console and run:
```javascript
// Get analytics summary
import { getAnalyticsSummary } from '@/lib/analytics'
console.log(getAnalyticsSummary())

// View all events
import { getAnalytics } from '@/lib/analytics'
console.log(getAnalytics())
```

### Clearing Analytics

```javascript
import { clearAnalytics } from '@/lib/analytics'
clearAnalytics()
```

## 🔧 Key Features

### Assessment Flow
1. User answers 12 yes/partially/no questions
2. Submit button activates when all questions are answered
3. Results display with color-coded badge and percentage
4. 30/60/90-day action plan tailored to result category
5. Gap analysis shows individual question responses

### Export Options
- **Print/PDF**: Opens browser print dialog for saving
- **Copy to Clipboard**: Formatted text summary of results
- **Email**: Pre-filled mailto link with results
- **Reset**: Clear all responses and start over

### Responsive Design
- Mobile-first design
- Touch-friendly radio buttons
- Stacked layout on small screens
- Optimized for tablets and desktops

## 🚢 Deployment

### Static Hosting (Recommended)

This is a static React application that can be deployed to:
- **Vercel**: `npx vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify Deployment

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

## 📋 Environment Variables

No environment variables required for basic operation. The tool runs entirely client-side.

## 🔒 Privacy & Data

- **No server-side data collection**: All assessment data stays in the user's browser
- **No cookies**: Analytics uses localStorage only
- **No third-party tracking**: Privacy-friendly by design
- **User data never sent to external servers**

## 🛠 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Phosphor Icons** - Icon library
- **Sonner** - Toast notifications

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

This is a template project. Feel free to fork and customize for your own needs.

## 💡 Recommended Enhancements

- [ ] Add persistent "Book a call" floating button for mobile
- [ ] Implement question grouping into 3-4 sections for better scannability
- [ ] Add form submission capture (integrate with CRM or form service)
- [ ] Create social preview image (og-image.png)
- [ ] Add progress persistence (save to localStorage mid-assessment)
- [ ] Implement A/B testing for different action plans
- [ ] Add multi-language support

## 📞 Support

For questions about QMS.Coach services, visit [https://qms.coach](https://qms.coach)

---

Built with ❤️ for the medical device community
