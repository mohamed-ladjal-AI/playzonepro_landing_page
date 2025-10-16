# PlayZone Landing Page

A premium, professional landing page for the PlayZone mobile app featuring glassmorphism design, smooth animations, and interactive elements.

## 🎨 Design Features

- **Modern Glassmorphism Effects**: Frosted glass aesthetic with blur and transparency
- **Premium Device Mockups**: Realistic iPhone-style phone frames with auto-sliding screenshots
- **Interactive Carousels**: 
  - Hero section with auto-rotating screenshots
  - Feature cards carousel with navigation
  - Phone showcase with manual/auto controls
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Responsive Design**: Mobile-first approach with 3 breakpoints
- **Color Scheme**: Blue (#0066FF) and Purple (#8B5CF6) gradient theme

## 📁 File Structure

```
landing_page/
├── index.html              # Main landing page
├── privacy.html            # Privacy Policy page
├── terms.html              # Terms of Service page
├── refund.html             # Refund Policy page
├── README.md               # This file
├── css/
│   └── style.css           # All styles (1200+ lines)
├── js/
│   └── script.js           # Interactive features
└── assets/
    ├── logo.png            # PlayZone logo
    ├── favicon.png         # Browser favicon (to be created)
    └── screenshots/
        ├── screenshot1.jpg # App screenshot 1
        ├── screenshot2.jpg # App screenshot 2
        └── screenshot3.jpg # App screenshot 3
```

## 🚀 Features

### Hero Section
- Premium device mockup with sliding screenshots (3-second intervals)
- Gradient orb animations in background
- CTA buttons for App Store and Google Play
- Feature highlights (Free to Download, 17+ Sports, Secure Payments)

### Features Carousel
- 6 feature cards organized in sliding carousel
- Navigation arrows and indicators
- Touch/swipe support for mobile
- Keyboard navigation (Arrow keys)
- Displays 3 cards at a time (1 on mobile)

### App Preview Section
- Large phone showcase with manual controls
- 3 app screenshots with descriptions
- Auto-play with 4-second intervals
- Pause on hover functionality
- Smooth transitions and animations

### Legal Pages
- Comprehensive Privacy Policy (GDPR/CCPA compliant)
- Detailed Terms of Service
- Complete Refund Policy
- Consistent styling with main page

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)**: Interactive features, sliders, carousels
- **External Libraries**:
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
  - [Font Awesome 6.4.0](https://fontawesome.com/) - Icons
  - [Google Fonts (Inter)](https://fonts.google.com/) - Typography

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (3 feature cards visible)
- **Tablet**: 768px - 1023px (2 feature cards visible)
- **Mobile**: 767px and below (1 feature card visible)

## 🎯 Key Interactions

### Auto-Playing Sliders
1. **Hero Device**: Cycles through 3 screenshots every 3 seconds
2. **Showcase Section**: Auto-advances every 4 seconds with pause-on-hover

### Manual Controls
- **Feature Carousel**: Previous/Next buttons, indicators, keyboard arrows, touch swipe
- **Showcase Slider**: Click dots to jump to specific screenshot

### Animations
- Floating device mockups
- Gradient orb parallax effect
- Smooth fade transitions
- Scale and tilt effects on hover
- Ripple effect on button clicks

## 🚀 Deployment Instructions

### Option 1: Static Hosting (Netlify)

1. **Sign up** at [Netlify](https://www.netlify.com/)
2. **Drag and drop** the `landing_page` folder
3. **Configure settings**:
   - Site name: `playzone-app` (or your choice)
   - Build command: None
   - Publish directory: `/`
4. **Custom domain** (optional):
   - Add your domain in Site Settings → Domain Management
   - Update DNS records as instructed

### Option 2: GitHub Pages

1. **Create repository**: `playzone-landing`
2. **Push files**:
   ```bash
   cd landing_page
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/playzone-landing.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
4. **Access**: `https://YOUR_USERNAME.github.io/playzone-landing/`

### Option 3: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
2. **Deploy**:
   ```bash
   cd landing_page
   vercel
   ```
3. **Follow prompts** to configure project
4. **Production deployment**: `vercel --prod`

### Option 4: Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login**:
   ```bash
   firebase login
   ```
3. **Initialize**:
   ```bash
   cd landing_page
   firebase init hosting
   ```
   - Select existing Firebase project (your PlayZone project)
   - Public directory: `.` (current directory)
   - Single-page app: No
   - Overwrite files: No
4. **Deploy**:
   ```bash
   firebase deploy --only hosting
   ```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #0066FF;      /* Main blue */
    --primary-purple: #8B5CF6;    /* Main purple */
    --dark-purple: #6D28D9;       /* Darker purple */
    --light-blue: #3B82F6;        /* Lighter blue */
}
```

### Screenshots
1. Take 3 app screenshots (ideally 1080x2400px)
2. Replace files in `assets/screenshots/`:
   - `screenshot1.jpg`
   - `screenshot2.jpg`
   - `screenshot3.jpg`
3. Update descriptions in `index.html`:
   - Search for "description-item"
   - Edit h3 and p tags

### Logo
- Replace `assets/logo.png` with your logo (recommended: PNG with transparent background, 200x200px)
- For Favicon: Create 32x32px version and save as `assets/favicon.png`

### App Store Links
Update in `index.html`:
```html
<!-- Hero buttons -->
<a href="YOUR_APP_STORE_URL" class="btn btn-primary">
<a href="YOUR_GOOGLE_PLAY_URL" class="btn btn-secondary">

<!-- Download section -->
<a href="YOUR_APP_STORE_URL" class="store-button">
<a href="YOUR_GOOGLE_PLAY_URL" class="store-button">
```

### Social Links
Update footer social links in `index.html`:
```html
<a href="https://facebook.com/YOUR_PAGE" class="social-link">
<a href="https://twitter.com/YOUR_HANDLE" class="social-link">
<a href="https://instagram.com/YOUR_PROFILE" class="social-link">
```

### Contact Information
Update in legal pages (`privacy.html`, `terms.html`, `refund.html`):
- Email addresses
- Phone numbers
- Physical address
- Support URLs

## 🔧 Development

### Local Testing
Simply open `index.html` in a web browser, or use a local server:

**Python**:
```bash
cd landing_page
python -m http.server 8000
# Visit: http://localhost:8000
```

**Node.js**:
```bash
npx http-server landing_page -p 8000
# Visit: http://localhost:8000
```

**VS Code Live Server**:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Performance Optimization

Before deploying:
1. **Optimize images**:
   - Use [TinyPNG](https://tinypng.com/) to compress screenshots
   - Convert to WebP format for better compression
   - Recommended size: 1080x2400px at 80% quality

2. **Minify assets** (optional):
   ```bash
   # CSS minification
   npm install -g clean-css-cli
   cleancss -o css/style.min.css css/style.css
   
   # JS minification
   npm install -g terser
   terser js/script.js -o js/script.min.js
   ```

3. **Add meta tags** for SEO (already included):
   - Description
   - Keywords
   - Open Graph tags
   - Twitter cards

## 📊 Analytics Setup

Add to `<head>` section before `</head>`:

**Google Analytics**:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel**:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🐛 Troubleshooting

### Screenshots not loading
- Check file paths are correct: `assets/screenshots/screenshot1.jpg`
- Ensure files are actually JPG format (not PNG renamed)
- Check console for 404 errors

### Sliders not working
- Verify JavaScript file is loaded: Open DevTools Console
- Check for errors in Console tab
- Ensure AOS library is loading from CDN

### Glassmorphism not showing
- Check browser support for `backdrop-filter`
- Fallback is already included for older browsers
- Test in modern browsers (Chrome 76+, Safari 14+, Firefox 103+)

### Mobile menu not toggling
- Ensure JavaScript is loaded
- Check hamburger button has correct ID: `id="hamburger"`
- Verify nav menu has ID: `id="navMenu"`

## 📝 Browser Support

- **Chrome/Edge**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Mobile Safari**: 14+
- **Chrome Android**: 90+

## 📄 License

This landing page is part of the PlayZone project. All rights reserved © 2025 PlayZone.

## 🤝 Credits

- **Design**: Custom premium design with glassmorphism
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)
- **Animations**: AOS by Michał Sajnóg
- **App Store Badges**: Official Apple and Google badges

## 📞 Support

For questions or issues:
- Email: support@playzone.com
- Website: [Coming Soon]
- GitHub: [Your Repo URL]

---

**Built with ❤️ for PlayZone**

*Last Updated: October 16, 2025*
