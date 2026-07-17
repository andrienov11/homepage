// Redirect to Streamlit app
function redirectToStreamlit() {
    window.location.href = 'https://novandri.streamlit.app//';
}

// Smooth scroll for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    // Page load animations
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const features = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.features, .how-it-works, .python-library, .about, .cta-section');
    const codeBlocks = document.querySelectorAll('.code-block');
    const featureHighlights = document.querySelectorAll('.feature-highlight');
    
    // Animate navbar
    if (navbar) {
        navbar.classList.add('navbar-animate-in');
    }
    
    // Animate hero
    if (hero) {
        hero.classList.add('hero-animate-in');
    }
    
    // Animate hero content with stagger
    if (heroContent) {
        heroContent.style.animation = 'slideInUp 0.8s ease-out 0.2s both';
    }
    
    // Animate feature cards with stagger
    features.forEach((card, index) => {
        card.style.animation = `scaleIn 0.6s ease-out ${0.4 + index * 0.1}s both`;
    });
    
    // Animate steps with stagger
    steps.forEach((step, index) => {
        if (!step.classList.contains('step-arrow')) {
            step.style.animation = `slideInUp 0.6s ease-out ${0.8 + index * 0.15}s both`;
        }
    });
    
    // Animate sections
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn 0.8s ease-out ${1.2 + index * 0.2}s both`;
    });
    
    // Animate code blocks
    codeBlocks.forEach((block, index) => {
        block.style.animation = `slideInUp 0.6s ease-out ${2.2 + index * 0.15}s both`;
    });
    
    // Animate feature highlights
    featureHighlights.forEach((highlight, index) => {
        highlight.style.animation = `scaleIn 0.6s ease-out ${2.5 + index * 0.1}s both`;
    });
    
    // Add active class to current navigation item
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and steps
    const animatedElements = document.querySelectorAll('.feature-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard shortcut
document.addEventListener('keydown', function(e) {
    // Press 'B' to go to build button
    if (e.key === 'b' || e.key === 'B') {
        const hero = document.querySelector('.hero');
        hero.scrollIntoView({ behavior: 'smooth' });
    }
});

// Add parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const heroBefore = document.querySelector('.hero::before');
    if (heroBefore) {
        document.querySelector('.hero').style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// Add button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
