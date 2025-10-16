// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 100
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollTop.classList.remove('visible');
    }
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Smooth Scroll to Top
// ===================================
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Newsletter Form Submission
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        
        // Show success message (you can replace this with actual API call)
        alert(`Thank you for subscribing with: ${email}`);
        newsletterForm.reset();
    });
}

// ===================================
// Parallax Effect for Hero Background
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.gradient-orb');
    
    parallax.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// Animated Counter for Stats
// ===================================
const animateCounter = (element, target, suffix = '') => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current) + suffix;
        }
    }, 20);
};

// Trigger counters when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasStar = text.includes('★');
                const number = parseFloat(text.replace(/[^0-9.]/g, ''));
                
                if (hasStar) {
                    animateCounter(stat, number, '★');
                } else if (hasPlus) {
                    animateCounter(stat, number, 'K+');
                } else {
                    animateCounter(stat, number, '+');
                }
            });
            statsObserver.disconnect();
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// Screenshots Carousel Auto-scroll
// ===================================
const screenshotsCarousel = document.querySelector('.screenshots-carousel');
if (screenshotsCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    screenshotsCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsCarousel.style.cursor = 'grabbing';
        startX = e.pageX - screenshotsCarousel.offsetLeft;
        scrollLeft = screenshotsCarousel.scrollLeft;
    });

    screenshotsCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsCarousel.style.cursor = 'grab';
    });

    screenshotsCarousel.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsCarousel.style.cursor = 'grab';
    });

    screenshotsCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsCarousel.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll animation (optional)
    let scrollDirection = 1;
    const autoScroll = () => {
        if (!isDown) {
            screenshotsCarousel.scrollLeft += scrollDirection;
            
            if (screenshotsCarousel.scrollLeft >= screenshotsCarousel.scrollWidth - screenshotsCarousel.clientWidth) {
                scrollDirection = -1;
            } else if (screenshotsCarousel.scrollLeft <= 0) {
                scrollDirection = 1;
            }
        }
    };

    // Uncomment to enable auto-scroll
    // setInterval(autoScroll, 30);
}

// ===================================
// Tilt Effect for Feature Cards
// ===================================
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===================================
// Lazy Loading for Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Testimonial Slider Auto-rotate
// ===================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
if (testimonialCards.length > 0) {
    let currentTestimonial = 0;
    
    const highlightTestimonial = (index) => {
        testimonialCards.forEach((card, i) => {
            if (i === index) {
                card.style.transform = 'scale(1.05)';
                card.style.zIndex = '10';
            } else {
                card.style.transform = 'scale(1)';
                card.style.zIndex = '1';
            }
        });
    };
    
    // Uncomment to enable auto-rotation
    // setInterval(() => {
    //     currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    //     highlightTestimonial(currentTestimonial);
    // }, 5000);
}

// ===================================
// Add Ripple Effect to Buttons
// ===================================
const buttons = document.querySelectorAll('.btn, .store-button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn, .store-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Hide preloader if you add one
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// ===================================
// Dark Mode Toggle (Optional)
// ===================================
const initDarkMode = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
};

// Uncomment to enable dark mode
// initDarkMode();

// ===================================
// Console Welcome Message
// ===================================
console.log(
    '%c🎉 Welcome to PlayZone! 🎉',
    'font-size: 20px; font-weight: bold; color: #0066FF; background: linear-gradient(135deg, #0066FF, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
    '%cConnect. Train. Play.',
    'font-size: 14px; color: #6B7280;'
);
console.log(
    '%cInterested in joining our team? Visit playzone.com/careers',
    'font-size: 12px; color: #8B5CF6;'
);

// ===================================
// Performance Monitoring
// ===================================
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// ===================================
// Service Worker Registration (PWA)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('✅ Service Worker registered'))
        //     .catch(error => console.log('❌ Service Worker registration failed:', error));
    });
}

// ===================================
// Hero Device Screenshot Slider
// ===================================
const initHeroSlider = () => {
    const sliderImages = document.querySelectorAll('.screenshot-slider .slider-image');
    let currentSlide = 0;
    
    const showSlide = (index) => {
        sliderImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };
    
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    };
    
    // Auto-advance every 3 seconds
    if (sliderImages.length > 0) {
        setInterval(nextSlide, 3000);
    }
};

// ===================================
// Phone Showcase Slider with Controls
// ===================================
const initShowcaseSlider = () => {
    const showcaseImages = document.querySelectorAll('.showcase-slider .showcase-image');
    const controlDots = document.querySelectorAll('.control-dot');
    const descriptions = document.querySelectorAll('.description-item');
    let currentShowcase = 0;
    let autoPlayInterval;
    
    const showShowcaseSlide = (index) => {
        // Update images
        showcaseImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        
        // Update control dots
        controlDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Update descriptions
        descriptions.forEach((desc, i) => {
            desc.classList.toggle('active', i === index);
        });
        
        currentShowcase = index;
    };
    
    const nextShowcaseSlide = () => {
        currentShowcase = (currentShowcase + 1) % showcaseImages.length;
        showShowcaseSlide(currentShowcase);
    };
    
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextShowcaseSlide, 4000);
    };
    
    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };
    
    // Control dot click handlers
    controlDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            showShowcaseSlide(index);
            startAutoPlay();
        });
    });
    
    // Start auto-play
    if (showcaseImages.length > 0) {
        startAutoPlay();
        
        // Pause on hover
        const showcase = document.querySelector('.phone-showcase');
        if (showcase) {
            showcase.addEventListener('mouseenter', stopAutoPlay);
            showcase.addEventListener('mouseleave', startAutoPlay);
        }
    }
};

// ===================================
// Features Carousel Navigation
// ===================================
const initFeaturesCarousel = () => {
    const track = document.querySelector('.features-track');
    const prevBtn = document.getElementById('featurePrev');
    const nextBtn = document.getElementById('featureNext');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (!track) return;
    
    let currentPage = 0;
    const totalPages = 2; // 6 cards, 3 per page = 2 pages
    
    const updateCarousel = (page) => {
        const translateX = -page * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === page);
        });
        
        currentPage = page;
        
        // Update button states
        prevBtn.style.opacity = page === 0 ? '0.5' : '1';
        prevBtn.style.cursor = page === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = page === totalPages - 1 ? '0.5' : '1';
        nextBtn.style.cursor = page === totalPages - 1 ? 'not-allowed' : 'pointer';
    };
    
    // Navigation button handlers
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                updateCarousel(currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                updateCarousel(currentPage + 1);
            }
        });
    }
    
    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentPage > 0) {
            updateCarousel(currentPage - 1);
        } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
            updateCarousel(currentPage + 1);
        }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50 && currentPage < totalPages - 1) {
            updateCarousel(currentPage + 1);
        }
        if (touchEndX > touchStartX + 50 && currentPage > 0) {
            updateCarousel(currentPage - 1);
        }
    };
    
    // Initialize
    updateCarousel(0);
};

// ===================================
// Initialize All Sliders on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initShowcaseSlider();
    initFeaturesCarousel();
});

// ===================================
// Export functions for external use
// ===================================
window.PlayZone = {
    init: () => {
        console.log('PlayZone initialized');
        initHeroSlider();
        initShowcaseSlider();
        initFeaturesCarousel();
    },
    version: '1.0.0',
    sliders: {
        hero: initHeroSlider,
        showcase: initShowcaseSlider,
        features: initFeaturesCarousel
    }
};
