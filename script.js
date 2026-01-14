// ========================================
// Mobile Menu Toggle
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty anchors
        if (href === '#' || href === '#!') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Add active class to home if at top of page
    if (window.pageYOffset < 100) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    }
});

// ========================================
// Navbar Background on Scroll
// ========================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
    }
});

// ========================================
// Form Submission Handling
// ========================================

// Contact form
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // In a real application, you would send this to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        this.reset();
    });
}

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.artist-card, .release-card, .event-card, .stat-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// Play Button Interaction
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // In a real application, this would trigger music playback
            console.log('Play button clicked');
            
            // Visual feedback
            this.innerHTML = '⏸';
            
            setTimeout(() => {
                this.innerHTML = '▶';
            }, 2000);
        });
    });
});

// ========================================
// Artist Card Click Handling
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const artistLinks = document.querySelectorAll('.artist-link');
    
    artistLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const artistName = this.closest('.artist-card').querySelector('.artist-name').textContent;
            
            // In a real application, this would navigate to the artist's page
            console.log('View profile clicked for:', artistName);
            alert(`Opening profile for ${artistName}...`);
        });
    });
});

// ========================================
// Event Ticket Button Handling
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const ticketButtons = document.querySelectorAll('.event-card .btn-primary');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const eventTitle = this.closest('.event-card').querySelector('.event-title').textContent;
            
            // In a real application, this would open a ticket purchasing interface
            console.log('Get tickets clicked for:', eventTitle);
            alert(`Tickets for "${eventTitle}" - Coming soon!`);
        });
    });
});

// ========================================
// Release Card Click Handling
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const releaseCards = document.querySelectorAll('.release-card');
    
    releaseCards.forEach(card => {
        card.addEventListener('click', function() {
            const releaseTitle = this.querySelector('.release-title').textContent;
            const releaseArtist = this.querySelector('.release-artist').textContent;
            
            // In a real application, this would open the album/track details
            console.log('Release clicked:', releaseTitle, 'by', releaseArtist);
        });
    });
});

// ========================================
// Parallax Effect for Hero Section
// ========================================

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < hero.offsetHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    }
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%c🎵 Welcome to Designated Records! 🎵', 'font-size: 20px; font-weight: bold; color: #e91e63;');
console.log('%cDiscover extraordinary music and talented artists.', 'font-size: 14px; color: #b0b0b0;');
