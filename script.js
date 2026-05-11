// Redirect to Streamlit app
function redirectToStreamlit() {
    window.location.href = 'https://novandri.streamlit.app/';
}

// Smooth scroll for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
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
