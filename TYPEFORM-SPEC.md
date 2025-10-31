# QMSR Readiness Snapshot - Typeform Implementation Guide

## Form Settings

### Welcome Screen
- **Title**: "QMSR Readiness Snapshot"
- **Body**: "Answer 12 quick questions to see if your QMS is on track for FDA's QMSR (aligned to ISO 13485). You'll get a Red/Yellow/Green result with a 30/60/90-day plan."
- **Button**: "Start"

### Hidden Variable
- **Variable Name**: `score`
- **Initial Value**: 0

---

## Questions

All questions are **Multiple Choice** and **Required**.

### Response Options (identical for all questions):
- Yes (2 points)
- Partially (1 point)
- No (0 points)

### Question List

#### Question 1
**Question**: Do you have a written quality manual and SOPs that you keep up to date?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 2
**Question**: Do you have a formal process to find root causes, fix issues, and verify effectiveness?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 3
**Question**: Are people trained on their procedures with records kept up to date?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 4
**Question**: Does leadership set quality objectives and hold regular management reviews?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 5
**Question**: Do you perform periodic audits and close out findings to improve your QMS?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 6
**Question**: Could you handle an FDA/ISO audit on short notice with records readily available?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 7
**Question**: Do you use design plans/reviews and integrate risk management across the lifecycle?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 8
**Question**: Do you qualify, control, and monitor critical suppliers/CMOs effectively?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 9
**Question**: Are processes documented/validated and equipment calibrated/maintained?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 10
**Question**: Do you log, investigate, and trend complaints and feed improvements into the QMS?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 11
**Question**: Do you track quality metrics (e.g., CAPA, defects) and act on trends?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

#### Question 12
**Question**: Are you actively preparing for FDA's QMSR (aligned to ISO 13485) before 2026?
**Logic**: 
- If Yes → score = score + 2
- If Partially → score = score + 1
- If No → score = score + 0

---

## End Screens (Logic-Based)

Maximum possible score = 24 points

### GREEN Ending (score ≥ 19)
**Condition**: If score is greater than or equal to 19

**Title**: "Green — Strong Readiness"

**Body**: 
"Your QMS appears robust and largely aligned with QMSR/ISO 13485. Next steps focus on polish and sustaining audit-readiness."

**30/60/90-Day Plan**:
- **30 Days**: Close minor 'Partial' items and align terminology for QMSR
- **60 Days**: Run a short mock audit; refresh training
- **90 Days**: Lock in cadence for audits/reviews; consider ISO 13485 certification (if not already)

**Button**: "Book a Call" → [Your booking URL]

---

### YELLOW Ending (score 11-18)
**Condition**: If score is greater than or equal to 11 AND less than 19

**Title**: "Yellow — Partial Readiness"

**Body**: 
"You've got a solid base, with targeted gaps to close (often CAPA effectiveness, supplier controls, or risk integration)."

**30/60/90-Day Plan**:
- **30 Days**: Prioritize 2–3 high-impact fixes; assign owners/dates
- **60 Days**: Update SOPs and retrain; track 2–3 quality metrics
- **90 Days**: Run a focused internal audit and management review; close findings

**Button**: "Book a Call" → [Your booking URL]

---

### RED Ending (score ≤ 10)
**Condition**: If score is less than 11

**Title**: "Red — Major Gaps Identified"

**Body**: 
"You're early in QMS maturity. Focus on building foundational SOPs and habits—this is common for startups and SMBs."

**30/60/90-Day Plan**:
- **30 Days**: Publish core SOPs (Doc Control, CAPA, Complaints, Training)
- **60 Days**: Train, implement basic record-keeping, start CAPA & complaint logs
- **90 Days**: Expand into design control, supplier oversight, and production controls

**Button**: "Book a Call" → [Your booking URL]

---

## Optional Thank-You Screen
**Message**: "We've sent a copy of your results to your email. Want help executing your 30/60/90 plan?"

**Button**: "Schedule a Free Consult" → [Your booking URL]

---

## Implementation Notes

1. **Calculator Logic**: Typeform's built-in Calculator feature allows you to add points based on responses
2. **Logic Jumps**: Use Typeform Logic to route users to the appropriate ending screen based on their score
3. **Integrations**: Consider connecting to your CRM (HubSpot, Salesforce) or email marketing platform to capture leads
4. **Email Follow-Up**: Set up email notifications to send results to respondents automatically
5. **Customization**: Replace "[Your booking URL]" with your actual calendar/booking link (e.g., Calendly, HubSpot Meetings)
