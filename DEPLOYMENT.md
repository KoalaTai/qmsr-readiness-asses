# Deployment Guide

Quick reference for deploying the QMSR Readiness Snapshot to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
1. Built the production version: `npm run build`
2. Tested the build locally: `npm run preview`
3. Updated meta tags and URLs in `index.html`
4. Created and added the social preview image (`og-image.png`)

## Platform-Specific Deployment

### Vercel (Recommended)

**Easiest option with automatic builds from Git**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from the project directory:
```bash
vercel --prod
```

3. Or connect your Git repository:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub/GitLab repository
   - Vercel auto-detects Vite configuration
   - Deploy

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify

**Option 1: Drag and Drop**
1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

**Option 2: Git Integration**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

**Option 3: Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### GitHub Pages

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/qmsr-readiness"
}
```

3. Update `vite.config.ts` to set base path:
```typescript
export default defineConfig({
  base: '/qmsr-readiness/', // Use your repo name
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages, root

### AWS S3 + CloudFront

**For enterprise deployments with CDN**

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://qmsr-readiness-snapshot
```

3. Upload build files:
```bash
aws s3 sync dist/ s3://qmsr-readiness-snapshot --delete
```

4. Enable static website hosting:
```bash
aws s3 website s3://qmsr-readiness-snapshot --index-document index.html --error-document index.html
```

5. Set up CloudFront distribution for HTTPS and global CDN

6. Configure Route 53 for custom domain (optional)

### Custom VPS (e.g., DigitalOcean, Linode)

**Using Nginx**

1. Build locally:
```bash
npm run build
```

2. Upload `dist` folder to server:
```bash
scp -r dist/* user@your-server:/var/www/qmsr-readiness
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name qms.coach www.qms.coach;
    root /var/www/qmsr-readiness;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

4. Reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

5. Set up SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d qms.coach -d www.qms.coach
```

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly at the production URL
- [ ] All 12 questions display properly
- [ ] Assessment submission works
- [ ] Results display with correct colors and formatting
- [ ] Print/PDF export works
- [ ] Copy to clipboard functions
- [ ] Email results opens email client
- [ ] "Book a Call" link opens correct URL
- [ ] Analytics tracking works (check localStorage in browser console)
- [ ] Responsive design works on mobile devices
- [ ] Meta tags appear correctly (view page source)
- [ ] Social sharing previews work:
  - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Test with [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records with your registrar

### General DNS Configuration

For `qms.coach`:
```
Type: A
Name: @
Value: [Your host IP or CNAME target]

Type: CNAME
Name: www
Value: qms.coach
```

## Environment-Specific URLs

Update these URLs before deploying:

**In `src/App.tsx`:**
```typescript
// Update to your actual booking URL
<a href="https://qms.coach/book" target="_blank" rel="noopener noreferrer">
```

**In `index.html`:**
```html
<!-- Update to your actual domain -->
<meta property="og:url" content="https://qms.coach/" />
<meta property="og:image" content="https://qms.coach/og-image.png" />
```

## Performance Optimization

For production deployments:

1. **Enable CDN caching** for static assets
2. **Enable gzip/brotli compression**
3. **Set cache headers** for JS/CSS files:
   ```
   Cache-Control: public, max-age=31536000, immutable
   ```
4. **Enable HTTP/2 or HTTP/3**
5. **Monitor with tools:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

## Troubleshooting

**404 errors on refresh:**
- Ensure your hosting platform redirects all routes to `index.html`
- For Netlify, add `_redirects` file: `/* /index.html 200`
- For Vercel, configuration is automatic

**Analytics not working:**
- Check browser console for errors
- Verify localStorage is enabled in browser
- Clear localStorage and test fresh

**Social previews not showing:**
- Verify image URL is absolute (not relative)
- Check image file size (under 1 MB)
- Clear cache in social platform debuggers
- Wait 5-10 minutes for cache to update

## Continuous Deployment

**Recommended Setup:**
1. Connect Git repository to Vercel or Netlify
2. Enable automatic deployments on push to `main` branch
3. Set up staging environment from `develop` branch
4. Use branch previews for pull requests

**Git Workflow:**
```bash
# Development
git checkout -b feature/new-enhancement
# ... make changes ...
git commit -m "Add new feature"
git push origin feature/new-enhancement

# Create PR → Vercel/Netlify creates preview deployment
# Review → Merge to main → Auto-deploy to production
```
