# QMSR Readiness Snapshot

A comprehensive, beginner-friendly web application for assessing Quality Management System (QMS) readiness for FDA's QMSR (Quality Management System Regulation) aligned with ISO 13485.

## 🎯 What It Does

The QMSR Readiness Snapshot is a free, self-service assessment tool that helps medical device startups and SMBs:

- **Evaluate QMS maturity** across 12 core areas in 5 minutes
- **Get instant results** with Red/Yellow/Green scoring
- **Receive actionable plans** with tailored 30/60/90-day roadmaps
- **Identify gaps** before auditors do
- **Generate qualified leads** through value-first engagement

## ✨ Features

### Interactive Assessment
- 12 plain-English questions covering all critical QMS areas
- Simple Yes/Partially/No response options
- Real-time progress tracking
- Mobile-friendly responsive design

### Instant Scoring
- Automatic calculation (Yes=2pts, Partially=1pt, No=0pts)
- Smart categorization:
  - 🟢 **Green** (≥80%): Strong readiness
  - 🟡 **Yellow** (45-79%): Partial readiness
  - 🔴 **Red** (<45%): Major gaps

### Tailored Action Plans
- Category-specific 30/60/90-day roadmaps
- Prioritized tasks based on readiness level
- Coach-style guidance (not critique)

### Gap Analysis
- Detailed breakdown by QMS area
- Visual indicators for each response
- Easy identification of focus areas

### Export & Share
- **Print/PDF**: Clean, professional output for stakeholder review
- **Copy to Clipboard**: Formatted text for email or notes
- **Reset**: Start fresh anytime

### Lead Conversion
- "Book a Call" CTA at peak engagement moment
- Configurable booking URL integration

## 📦 What's Included

This repository contains:

1. **Web Application** (`/src`)
   - React/TypeScript implementation
   - Tailwind CSS styling
   - Framer Motion animations
   - Shadcn/ui components

2. **Typeform Specification** (`TYPEFORM-SPEC.md`)
   - Complete implementation guide
   - Question logic and calculator setup
   - Conditional ending screens

3. **Outreach Copy** (`OUTREACH-COPY.md`)
   - LinkedIn posts
   - Email campaigns (cold, warm, follow-up)
   - Social media templates
   - Blog post ideas
   - Newsletter announcements

4. **Management Report Template** (`MANAGEMENT-REPORT-TEMPLATE.md`)
   - Executive summary format
   - Detailed gap analysis
   - Risk assessment framework
   - Resource planning template

5. **Printable Checklist** (`QMSR-CHECKLIST.md`)
   - Quick reference for all 12 areas
   - 30/60/90-day planning worksheet
   - Self-scoring guide

## 🚀 Getting Started

### Running Locally

This is a Vite-powered React application:

```bash
npm install
npm run dev
```

Open your browser to the local development URL (typically `http://localhost:5173`).

### Customization

#### Update Booking URL
Edit `/src/App.tsx` and find the "Book a Call" button:

```tsx
<a href="https://qms.coach/book" target="_blank" rel="noopener noreferrer">
```

Replace `https://qms.coach/book` with your actual booking URL (Calendly, HubSpot Meetings, etc.).

#### Adjust Scoring Thresholds
Edit `/src/lib/assessment-data.ts` in the `getResultCategory` function:

```typescript
if (percentage >= 80) return 'green'  // Change 80 to your preferred threshold
if (percentage >= 45) return 'yellow' // Change 45 to your preferred threshold
return 'red'
```

#### Modify Questions
Edit the `questions` array in `/src/lib/assessment-data.ts`.

#### Customize Action Plans
Edit the `resultContent` object in `getResultData` function in `/src/lib/assessment-data.ts`.

## 🎨 Design Philosophy

- **Trustworthy**: Professional medical/regulatory tone
- **Empowering**: Coach-style guidance, not critique
- **Efficient**: 5-minute assessment, instant results
- **Accessible**: WCAG AA contrast ratios, keyboard navigation
- **Print-optimized**: Clean PDF output with page breaks

## 📊 QMS Areas Assessed

1. **Documented QMS** - Quality manual and SOPs
2. **CAPA** - Root cause analysis and effectiveness verification
3. **Training & Competence** - Records and role-based requirements
4. **Management Support** - Objectives and reviews
5. **Internal Audits** - Periodic audits and closure
6. **Audit Preparedness** - Records and readiness
7. **Design & Risk Controls** - Lifecycle integration
8. **Supplier Quality** - Qualification and monitoring
9. **Production & Process Control** - Validation and calibration
10. **Complaints/Feedback** - Logging and trending
11. **Continuous Improvement** - Metrics and action
12. **QMSR Transition Prep** - 2026 deadline planning

## 🔧 Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Shadcn/ui v4** - Component library
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Phosphor Icons** - Icon system

## 📄 License

See LICENSE file for details.

## 💬 Support

- **Documentation**: See included markdown files
- **Issues**: Submit via GitHub Issues
- **Consulting**: Visit https://qms.coach

## 🎯 Use Cases

- **Embedded on your website** - Lead generation tool
- **Standalone landing page** - Campaign-specific URL
- **Sales enablement** - Send to prospects pre-call
- **Workshop tool** - Live assessment in training sessions
- **Client onboarding** - Baseline evaluation

## 📈 Success Metrics

Track these to measure tool effectiveness:

- Assessment completion rate
- Results distribution (Green/Yellow/Red %)
- "Book a Call" conversion rate
- Lead quality (MQL → SQL rate)
- Time saved in discovery calls

## 🚢 Deployment

### Static Hosting
Build and deploy to any static host:

```bash
npm run build
```

Deploy the `dist/` folder to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Your own hosting

### Embedding
The tool can be embedded in an iframe or directly integrated into your site.

---

**Built by QMS.Coach** | Helping startups and SMBs navigate medical device quality compliance
