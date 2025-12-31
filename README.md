# Journey of Kodai - Forest Resort Landing Page

A premium, modern landing page for Journey of Kodai, featuring two unique forest resort properties in Kodaikanal: **Mowgli Camp** and **Dinosaur Park**.

## 🌲 Overview

Journey of Kodai offers an immersive forest experience with eco-conscious hospitality. This landing page showcases both properties with stunning visuals, smooth animations, and a premium design aesthetic.

## ✨ Features

### Design & Aesthetics
- **Premium Forest Green & White Theme** - Carefully curated color palette
- **Modern Typography** - Playfair Display for headings, Inter for body text
- **Smooth Animations** - Fade-ins, hover effects, and micro-interactions
- **Responsive Design** - Optimized for all screen sizes
- **Glassmorphism Effects** - Modern UI elements with backdrop blur
- **Hero Section** - Full-screen with animated background and compelling CTAs

### Sections
1. **Hero Section** - Captivating introduction with forest background
2. **About Section** - Brand story and eco-conscious values
3. **Properties Section**
   - **Mowgli Camp**: A-Frame Cottages (2) & Luxury Tents (5)
   - **Dinosaur Park**: Forest Domes (2), Cozy Huts (2), Dormitory Hut (1)
4. **Experiences Section** - Activities and amenities
5. **Gallery Section** - High-quality images of accommodations
6. **Testimonials Section** - Guest reviews with fade-in animations
7. **Contact Section** - Location, contact details, and action buttons
8. **Footer** - Quick links, social media, and legal information

### SEO Optimization
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card integration
- Semantic HTML5 structure
- Optimized page title and description

### User Experience
- **Smooth Scroll Navigation** - Seamless section transitions
- **Interactive Elements** - Hover effects on cards and buttons
- **Clear CTAs** - Multiple booking touchpoints
- **Accessibility** - High contrast ratios and readable typography
- **Fast Loading** - Optimized images and minimal dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "c:/Users/ASUS/resort website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#1a4d2e` - Main brand color
- **Primary Light**: `#2d6a4f` - Lighter variant
- **Primary Dark**: `#0f2818` - Darker variant
- **Accent**: `#52b788` - Highlight color
- **White**: `#ffffff` - Clean backgrounds
- **Off-White**: `#f8f9fa` - Subtle backgrounds

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)
- **Font Sizes**: Responsive using clamp()

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem
- 2XL: 8rem

## 📁 Project Structure

```
resort website/
├── public/
│   ├── hero.png              # Hero section background
│   ├── aframe.png            # A-Frame cottage image
│   ├── tent.png              # Luxury tent image
│   ├── dome.png              # Forest dome image
│   ├── hut.png               # Cozy hut image
│   ├── campfire.png          # Campfire experience
│   ├── forest-walk.png       # Forest trail image
│   └── family.png            # Family activities image
├── src/
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles and design system
│   └── main.jsx              # React entry point
├── index.html                # HTML template with SEO meta tags
├── package.json              # Project dependencies
└── vite.config.js            # Vite configuration
```

## 🏨 Properties

### Mowgli Camp
Jungle-inspired adventure stay where wilderness meets comfort.
- **A-Frame Cottages**: 2 available
- **Luxury Tents**: 5 available

### Dinosaur Park
Family-friendly themed forest resort with playful charm.
- **Forest Domes**: 2 available
- **Cozy Huts**: 2 available
- **Dormitory Hut**: 1 available

## 🎯 Key Features

### Interactive Elements
- Smooth scroll navigation
- Hover animations on accommodation cards
- Animated experience cards with icon transformations
- Gallery with zoom effects
- Sticky header with scroll detection

### Conversion Optimization
- Multiple "Book Now" CTAs throughout the page
- Direct contact buttons (Call, WhatsApp, Email)
- Clear capacity indicators
- Social proof through testimonials
- Visual hierarchy guiding to booking actions

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling (no frameworks for maximum control)
- **Google Fonts** - Typography (Playfair Display & Inter)

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+ (max-width container)
- **Tablet**: 968px and below
- **Mobile**: 640px and below

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact Information

- **Location**: Kodaikanal Forest Region, Tamil Nadu
- **Email**: hello@journeyofkodai.com
- **Phone**: +91 98765 43210
- **WhatsApp**: +91 98765 43210

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #1a4d2e;
  --color-accent: #52b788;
  /* ... other colors */
}
```

### Adding New Sections
1. Create the section in `src/App.jsx`
2. Add corresponding styles in `src/index.css`
3. Update navigation links if needed

### Updating Images
Replace images in the `public/` folder with your own, keeping the same filenames.

## 📄 License

This project is created for Journey of Kodai. All rights reserved.

## 🙏 Acknowledgments

- Forest landscape images generated using AI
- Design inspired by modern eco-resort aesthetics
- Built with love for nature and sustainable tourism

---

**Journey of Kodai** - Stay Wild. Sleep in Nature. 🌲
