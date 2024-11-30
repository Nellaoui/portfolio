document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navLinks = document.querySelectorAll('.aside .nav li a');

    navToggler.addEventListener('click', function() {
        this.classList.toggle('active');
        aside.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggler.classList.remove('active');
            aside.classList.remove('open');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!aside.contains(event.target) && !navToggler.contains(event.target)) {
            navToggler.classList.remove('active');
            aside.classList.remove('open');
        }
    });
});

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});
var typed = new Typed('.typing', {
    strings: ["Aspiring software engineer", "Web Developer", "Student at 1337"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section');

    function activateSection(targetLink) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        sections.forEach(section => {
            section.classList.remove('active-section');
            section.classList.remove('section-enter');
        });

        targetLink.classList.add('active');

        const targetId = targetLink.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.classList.add('active-section');
        targetSection.classList.add('section-enter');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            activateSection(e.currentTarget);
        });
    });

    const homeLink = document.querySelector('.nav a[href="#home"]');
    if (homeLink) {
        activateSection(homeLink);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburgerMenu.addEventListener('click', () => {
        navOverlay.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });
            targetSection.classList.add('active-section');
            navOverlay.classList.remove('active');
        });
    });
});

