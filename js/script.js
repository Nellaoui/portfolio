
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

// Make sure button is in the correct state on page load
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});
// typing animation
var typed = new Typed('.typing', {
    strings: ["Aspiring software engineer", "Web Developer", "Student at 1337"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navigation Link Activation
// const navLinks = document.querySelectorAll('.nav a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.forEach(navLink => navLink.classList.remove('active'));
//         link.classList.add('active');
//     });
// });

// Section Activation Logic
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

// Hamburger Menu for mobile
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

