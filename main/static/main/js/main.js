// ── Theme Toggle ──
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// ── Sticky Navbar + Active Section Highlight ──
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const allNavLinks = document.querySelectorAll('nav a'); // ← naam badla

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ── Scroll Animations ──
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll(
    '.skill-card, .project-card, .about p, .hero-text, .hero-image, .contact-container'
);

animateElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.05}s`;
    el.classList.add('animate-hidden');
    observer.observe(el);
});

// ── Hamburger Menu ──
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links'); // ← naam badla

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});