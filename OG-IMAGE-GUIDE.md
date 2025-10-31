# Social Preview Image

## Requirements

To enable rich previews when sharing the QMSR Readiness Snapshot on social media, create an Open Graph image with the following specifications:

### Image Specifications

- **Dimensions**: 1200 x 630 pixels (1.91:1 ratio)
- **Format**: PNG or JPG
- **File size**: Under 1 MB
- **Filename**: `og-image.png`
- **Location**: Place in the `public` folder or root directory

### Recommended Content

The image should include:
- **Tool name**: "QMSR Readiness Snapshot"
- **Value proposition**: "Free QMS Assessment Tool"
- **Visual elements**: Traffic light colors (Red/Yellow/Green) or medical device imagery
- **Branding**: QMS.Coach logo and URL
- **Key benefit**: "Get Your 30/60/90-Day Action Plan"

### Design Guidelines

- Use the brand colors from `src/index.css`:
  - Primary: oklch(0.45 0.09 250) - Professional blue
  - Green: oklch(0.65 0.18 150)
  - Yellow: oklch(0.75 0.15 85)
  - Red: oklch(0.60 0.22 25)
- Use Inter font (same as the application)
- Ensure text is legible at small sizes (mobile previews)
- Test on multiple platforms (Twitter, LinkedIn, Facebook)

### Current Status

⚠️ **Action Required**: Create and add the social preview image

Current placeholder URL in `index.html`:
```html
<meta property="og:image" content="https://qms.coach/og-image.png" />
```

### Tools for Creating OG Images

- [Figma](https://figma.com) - Design tool
- [Canva](https://canva.com) - Online design tool
- [OG Image Generator](https://og-image.vercel.app) - Generate programmatically
- [Photopea](https://photopea.com) - Free online photo editor

### Testing

After creating the image, test the preview using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Example Design Elements

```
┌─────────────────────────────────────────┐
│                                         │
│  QMSR Readiness Snapshot                │
│                                         │
│  [Traffic Light Graphic]                │
│   🟢 🟡 🔴                              │
│                                         │
│  Free QMS Assessment for FDA QMSR       │
│  ✓ 12 Questions                         │
│  ✓ Instant Results                      │
│  ✓ 30/60/90-Day Action Plan             │
│                                         │
│  QMS.Coach                              │
└─────────────────────────────────────────┘
```

## Implementation

Once created:

1. Save the image as `public/og-image.png`
2. Update the URL in `index.html` if needed
3. Deploy the updated application
4. Test social previews on all platforms
5. Update this documentation with final design notes
