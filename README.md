# Designated Records

A professional and engaging website for Designated Records, inspired by leading record labels such as Universal Music.

## Overview

This website showcases a modern record label with a focus on visual appeal, responsive design, and interactive elements. Built with HTML, CSS, and JavaScript, it provides an immersive experience for music lovers and showcases the label's artists, releases, and events.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Music-centric aesthetic with bold typography and gradient accents
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Complete Sections**:
  - Hero section with compelling introduction
  - Featured artists with bios and profile links
  - Latest releases catalog with album artwork
  - Upcoming events calendar
  - About section with company statistics
  - Contact form for inquiries
  - Newsletter subscription
  - Social media integration

## Getting Started

### Viewing the Website

Simply open `index.html` in your web browser:

```bash
# Open directly in your default browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Or use a local web server:

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Node.js (with http-server installed)
npx http-server
```

Then navigate to `http://localhost:8080` in your browser.

## File Structure

```
designatedrecs/
├── index.html      # Main HTML file with page structure
├── styles.css      # Styling and responsive design
├── script.js       # Interactive functionality
├── .gitignore      # Git ignore configuration
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with custom properties, grid, and flexbox
- **JavaScript (ES6+)**: Interactive features and animations
- **No frameworks**: Pure vanilla JavaScript for lightweight performance

## Design Highlights

- **Color Scheme**: Dark background (#0a0a0a) with vibrant pink (#e91e63) and purple (#9c27b0) accents
- **Typography**: Bold, uppercase headings with gradient text effects
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions, hover effects, and scroll-based animations
- **Accessibility**: Keyboard navigation, ARIA labels, and reduced motion support

## Customization

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #e91e63;      /* Main brand color */
    --secondary-color: #9c27b0;    /* Secondary accent */
    --accent-color: #00bcd4;       /* Additional accent */
    --bg-dark: #0a0a0a;            /* Background color */
}
```

### Adding Real Content

Replace the dummy content in `index.html`:
- Artist information in the "Artists" section
- Album details in the "Catalog" section
- Event information in the "Events" section
- Contact details in the "Contact" section

### Implementing Backend

The contact form and newsletter subscription are currently client-side only. To make them functional:

1. Set up a backend API endpoint
2. Update form submission handlers in `script.js`
3. Add proper form validation
4. Implement email sending or database storage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Audio player integration
- Artist profile pages
- Music streaming integration
- Admin panel for content management
- Blog/news section
- Tour date integration with ticketing platforms
- Merchandise store

## License

All rights reserved © 2024 Designated Records

---

**Note**: This is a demonstration website with placeholder content. All artist names, releases, and events are fictional examples.