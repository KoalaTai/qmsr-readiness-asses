# Planning Guide

A comprehensive QMSR (Quality Management System Regulation) readiness assessment tool that evaluates organizations' preparedness for FDA's QMSR alignment with ISO 13485, delivering instant Red/Yellow/Green scoring with actionable 30/60/90-day improvement plans.

**Experience Qualities**:
1. **Trustworthy** - Professional medical/regulatory tone with clear, jargon-free language that builds confidence without overwhelming users
2. **Empowering** - Coach-style guidance that frames gaps as opportunities, providing concrete next steps rather than criticism
3. **Efficient** - Streamlined 12-question assessment with instant results, no account required, respecting the user's time

**Complexity Level**: Light Application (multiple features with basic state)
This tool combines form interaction, scoring logic, result categorization, action plan generation, and export capabilities (PDF, copy to clipboard) while maintaining data in browser session for privacy.

## Essential Features

### 1. Interactive Assessment Form
- **Functionality**: 12-question questionnaire with three response options (Yes/Partially/No) covering core QMS areas
- **Purpose**: Systematically evaluate QMS maturity across documentation, CAPA, training, audits, design controls, and QMSR transition readiness
- **Trigger**: User lands on page and begins answering questions
- **Progression**: Landing screen → Question-by-question completion → Submit button activation → Instant results display
- **Success criteria**: All questions answered with clear visual feedback; score calculated correctly (Yes=2, Partially=1, No=0; max 24 points)

### 2. Smart Scoring & Color-Coded Results
- **Functionality**: Automatic calculation categorizing results as Green (≥80%, 19-24pts), Yellow (45-79%, 11-18pts), or Red (<45%, ≤10pts)
- **Purpose**: Provide immediate, digestible assessment of QMS readiness without requiring regulatory expertise
- **Trigger**: User clicks "Calculate Results" after completing all questions
- **Progression**: Submit → Score calculation → Category determination → Results panel display with badge, progress bar, percentage
- **Success criteria**: Correct threshold logic; clear visual distinction between categories; percentage and score displayed

### 3. Contextual 30/60/90-Day Action Plans
- **Functionality**: Category-specific roadmaps with prioritized tasks for each timeframe
- **Purpose**: Transform assessment into executable improvement plan aligned with user's current maturity level
- **Trigger**: Results calculation displays corresponding plan
- **Progression**: Score determined → Category-matched plan rendered → Tasks organized by 30/60/90-day phases
- **Success criteria**: Plans differ meaningfully by category; tasks are specific and sequenced logically

### 4. Gap Analysis Breakdown
- **Functionality**: Individual question results displayed by QMS area (Documented QMS, CAPA, Training, etc.)
- **Purpose**: Help users identify specific weaknesses and strengths for targeted improvement
- **Trigger**: Results panel includes expandable/scrollable gap breakdown
- **Progression**: Results display → Gap map shows each area → User identifies specific focus areas
- **Success criteria**: All 12 areas listed with user's response; easy to scan and identify "No" or "Partially" items

### 5. Export & Share Capabilities
- **Functionality**: Print/PDF export, copy results to clipboard, reset assessment
- **Purpose**: Enable users to save, share with stakeholders, or use results in planning sessions
- **Trigger**: User clicks "Print/Save PDF", "Copy Results", or "Reset Assessment" buttons
- **Progression**: Click Print → Browser print dialog → Save as PDF | Click Copy → Results formatted → Clipboard confirmation | Click Reset → Form clears → Start over
- **Success criteria**: Print includes all results and action plans; copy produces readable text format; reset clears all selections

### 6. Call-to-Action Integration
- **Functionality**: "Book a Call" button prominently displayed in results section
- **Purpose**: Convert qualified leads by offering expert consultation at the moment of highest engagement (post-results)
- **Trigger**: Results panel includes CTA button
- **Progression**: View results → Recognize gaps → Click "Book a Call" → Opens booking URL
- **Success criteria**: CTA visible and accessible; configurable URL (placeholder for now)

## Edge Case Handling
- **Incomplete submissions** - Submit button disabled until all 12 questions answered; visual indicator shows progress
- **No JavaScript** - Graceful degradation with message prompting modern browser use
- **Print formatting** - CSS ensures clean, professional PDF output with page breaks and branding
- **Mobile users** - Touch-friendly radio buttons; responsive layout; scrollable results
- **Accidental reset** - Brief confirmation or undo-friendly design (form retains state until deliberate reset)

## Design Direction
The design should evoke trust, professionalism, and clarity—balancing the serious, regulated nature of medical device quality management with an approachable, coaching tone. It should feel like a premium healthcare/consulting tool: clean, modern, and evidence-based. A minimal interface serves the content best, reducing cognitive load and emphasizing the assessment flow and results.

## Color Selection
**Complementary palette** rooted in healthcare credibility (blues) with traffic-light semantics for results (red/yellow/green), ensuring accessibility and instant recognition of readiness levels.

- **Primary Color**: Deep professional blue (oklch(0.45 0.09 250)) - conveys trust, expertise, and regulatory seriousness without feeling cold
- **Secondary Colors**: Soft neutral grays (oklch(0.96 0 0)) for backgrounds and cards; darker gray (oklch(0.35 0 0)) for secondary text
- **Accent Color**: Vibrant medium blue (oklch(0.55 0.15 240)) for CTAs and interactive elements, guiding user attention to key actions
- **Result Colors**: 
  - Green (oklch(0.65 0.18 150)) for "Strong Readiness"
  - Yellow/Amber (oklch(0.75 0.15 85)) for "Partial Readiness"  
  - Red (oklch(0.60 0.22 25)) for "Major Gaps"
  
**Foreground/Background Pairings**:
- Background (White oklch(1 0 0)): Foreground dark gray oklch(0.25 0 0) - Ratio 14.1:1 ✓
- Card (Light gray oklch(0.97 0 0)): Foreground dark gray oklch(0.25 0 0) - Ratio 13.5:1 ✓
- Primary (Deep blue oklch(0.45 0.09 250)): White text oklch(1 0 0) - Ratio 7.2:1 ✓
- Accent (Medium blue oklch(0.55 0.15 240)): White text oklch(1 0 0) - Ratio 4.9:1 ✓
- Green result (oklch(0.65 0.18 150)): White text oklch(1 0 0) - Ratio 4.6:1 ✓
- Yellow result (oklch(0.75 0.15 85)): Dark text oklch(0.25 0 0) - Ratio 12.5:1 ✓
- Red result (oklch(0.60 0.22 25)): White text oklch(1 0 0) - Ratio 5.1:1 ✓

## Font Selection
Typography should convey professionalism and readability appropriate for a tool used by quality managers, executives, and consultants—crisp, modern, and authoritative without being overly technical.

**Primary typeface**: Inter (from Google Fonts) - excellent readability at all sizes, professional without being corporate, widely trusted in SaaS and healthcare tools

- **Typographic Hierarchy**:
  - H1 (Tool Title): Inter SemiBold / 32px / tight letter-spacing (-0.02em) / line-height 1.2
  - H2 (Section Headers): Inter SemiBold / 24px / normal letter-spacing / line-height 1.3
  - H3 (Question Labels, Result Category): Inter Medium / 18px / line-height 1.4
  - Body (Questions, Descriptions): Inter Regular / 16px / line-height 1.6
  - Small (Helper text, Labels): Inter Regular / 14px / line-height 1.5
  - Button Text: Inter Medium / 16px / line-height 1

## Animations
Animations should be subtle and purposeful, reinforcing the tool's professionalism while providing clear feedback. Think medical device UI—smooth, precise, confidence-inspiring, never frivolous.

- **Purposeful Meaning**: Gentle transitions communicate progress and system responsiveness; result reveals create a moment of clarity and focus
- **Hierarchy of Movement**:
  - Question selection: Instant visual feedback (50ms) on radio button state change
  - Submit button: Subtle scale on hover (100ms) to signal interactivity
  - Results reveal: Smooth slide-in from bottom (300ms ease-out) to create focus shift from assessment to results
  - Score bar: Animated fill (600ms ease-out) to emphasize achievement level
  - Badge appearance: Gentle scale-in (200ms) for visual emphasis without distraction

## Component Selection

- **Components**:
  - **Card**: Primary container for assessment form and results panel; subtle shadow for depth
  - **RadioGroup**: Question responses (Yes/Partially/No); large touch targets, clear selected state
  - **Button**: Primary (Submit, Book a Call), Secondary (Print, Copy), Destructive-style (Reset)
  - **Progress**: Visual score bar in results; color-coded to match category
  - **Badge**: Result category indicator (Green/Yellow/Red); prominent in results header
  - **Separator**: Divides 30/60/90-day plan sections and gap analysis areas
  - **ScrollArea**: For gap breakdown if content exceeds comfortable viewport height
  - **Accordion** (optional): For collapsible 30/60/90 plan sections if screen real estate is tight

- **Customizations**:
  - Custom radio button styling with larger hit areas (min 44x44px) and clear visual states
  - Color-coded result badges using custom classes for red/yellow/green states
  - Print-specific CSS to ensure professional PDF output with page breaks and clean formatting
  - Score progress bar with dynamic color based on category

- **States**:
  - Radio buttons: Default (outlined), Selected (filled with checkmark), Hover (subtle background), Focus (ring)
  - Submit button: Disabled (gray, no pointer) until all questions answered; Enabled (primary color); Hover (darker); Active (pressed effect)
  - Action buttons (Print, Copy, Reset): Rest, Hover (background shift), Active, Focus (keyboard ring)
  - Results panel: Hidden initially; Visible after submission with smooth entrance

- **Icon Selection**:
  - CheckCircle (from Phosphor) for "Yes" selections and Green result badge
  - WarningCircle for Yellow result badge  
  - XCircle for Red result badge
  - Printer for Print/PDF button
  - Copy for Copy Results button
  - ArrowClockwise for Reset button
  - Phone or Calendar for "Book a Call" CTA

- **Spacing**:
  - Page padding: p-6 (mobile), p-8 (tablet+)
  - Card padding: p-6 (mobile), p-8 (desktop)
  - Question spacing: gap-6 between questions
  - Section spacing: gap-8 between major sections
  - Button groups: gap-3 for related actions

- **Mobile**:
  - Single column layout throughout
  - Radio button groups stack vertically with generous touch targets
  - Results panel scrolls naturally within viewport
  - Action buttons stack on mobile, row on tablet+
  - Font sizes remain readable (no scaling below 16px for body text)
  - Print button may show different icon/label on mobile ("Share Results")
