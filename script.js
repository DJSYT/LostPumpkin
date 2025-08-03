// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Shake animation for icons
    const shakeIcons = document.querySelectorAll('.shake-icon');
    
    shakeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
            }, 500);
        });
    });

    // Smooth fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section, .about-card, .corp-card, .social-card, .service-card, .gallery-item, .effect-item');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Dynamic particle generation
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        document.querySelector('.animated-bg').appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }

    // Generate particles periodically
    setInterval(createParticle, 2000);

    // Interactive hover effects
    const interactiveElements = document.querySelectorAll('.corp-card, .social-card, .service-card, .gallery-item, .effect-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Special effects for creations page
    if (window.location.pathname.includes('creations')) {
        // Neon effect interaction
        const neonEffect = document.getElementById('neon-effect');
        if (neonEffect) {
            neonEffect.addEventListener('click', function() {
                const neonText = this.querySelector('.neon-text');
                neonText.style.animation = 'none';
                setTimeout(() => {
                    neonText.style.animation = 'neon-flicker 0.5s infinite alternate';
                }, 100);
                setTimeout(() => {
                    neonText.style.animation = 'neon-flicker 2s infinite alternate';
                }, 2000);
            });
        }

        // Particle effect interaction
        const particleEffect = document.getElementById('particle-effect');
        if (particleEffect) {
            particleEffect.addEventListener('click', function() {
                const particles = this.querySelectorAll('.effect-particle');
                particles.forEach((particle, index) => {
                    particle.style.animation = 'none';
                    setTimeout(() => {
                        particle.style.animation = `particle-move 1s infinite linear`;
                        particle.style.animationDelay = (index * 0.2) + 's';
                    }, 100);
                    setTimeout(() => {
                        particle.style.animation = `particle-move 3s infinite linear`;
                        particle.style.animationDelay = (index * 0.5) + 's';
                    }, 3000);
                });
            });
        }

        // Glitch effect interaction
        const glitchEffect = document.getElementById('glitch-effect');
        if (glitchEffect) {
            glitchEffect.addEventListener('click', function() {
                const glitchText = this.querySelector('.glitch-text');
                glitchText.style.animation = 'none';
                setTimeout(() => {
                    glitchText.style.animation = 'glitch-effect-1 0.2s infinite, glitch-effect-2 0.2s infinite';
                }, 100);
                setTimeout(() => {
                    glitchText.style.animation = 'none';
                }, 1000);
            });
        }
    }

    // Typing effect for hero titles
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        const originalText = element.textContent;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typing effect to main titles on page load
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, titleText, 150);
        }, 1000);
    }

    // Enhanced scroll animations
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.particle');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Social media link analytics (placeholder for future implementation)
    const socialLinks = document.querySelectorAll('.social-card, .social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.classList.contains('instagram') ? 'Instagram' : 
                           this.classList.contains('discord') ? 'Discord' : 
                           this.classList.contains('roblox') ? 'Roblox' : 'Unknown';
            
            // Analytics tracking would go here
            console.log(`Social link clicked: ${platform}`);
        });
    });

    // Form submission handling (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form handling logic would go here
            console.log('Form submitted');
        });
    });

    // Dynamic theme switching (placeholder for future implementation)
    function switchTheme(theme) {
        const root = document.documentElement;
        switch(theme) {
            case 'dark':
                root.style.setProperty('--primary-black', '#0a0a0a');
                root.style.setProperty('--accent-orange', '#ff6b35');
                break;
            case 'light':
                root.style.setProperty('--primary-black', '#f5f5f5');
                root.style.setProperty('--accent-orange', '#ff4500');
                break;
        }
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Performance optimization: Lazy load images when implemented
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Page load animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Stagger animation for cards
        const cards = document.querySelectorAll('.about-card, .corp-card, .social-card, .service-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Error handling for missing elements
    function safeQuerySelector(selector, callback) {
        const element = document.querySelector(selector);
        if (element && callback) {
            callback(element);
        }
    }

    // Initialize all interactive elements safely
    safeQuerySelector('#hero-pumpkin', (element) => {
        element.addEventListener('click', function() {
            this.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        });
    });

    // Console welcome message
    console.log(`
    🎃 Welcome to Lost Pumpkin's Portfolio! 🎃
    
    Built with:
    - HTML5 & CSS3
    - Vanilla JavaScript
    - Gaming-themed animations
    - Responsive design
    
    Connect with Lost Pumpkin on social media!
    `);
});

// Additional utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    const scrolled = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Export functions for potential future use
window.LostPumpkinPortfolio = {
    createParticle,
    typeWriter,
    switchTheme,
    debounce
};
