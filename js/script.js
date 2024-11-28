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
})

/* */
var typed = new Typed('.typing', {
    strings: ["Aspiring software engineer", "Web Developer", "Designer", "Student at 1337"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});


// Add this to your script.js
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links and sections
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section');

    // Function to handle section activation
    function activateSection(targetLink) {
        // Remove active class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active-section');
            section.classList.remove('section-enter');
        });

        // Add active class to clicked/default link
        targetLink.classList.add('active');

        // Get the target section
        const targetId = targetLink.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Add animation classes to target section
        targetSection.classList.add('active-section');
        targetSection.classList.add('section-enter');
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            activateSection(e.currentTarget);
        });
    });

    // Activate home page by default
    const homeLink = document.querySelector('.nav a[href="#home"]');
    if (homeLink) {
        activateSection(homeLink);
    }
});

// 

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburgerMenu.addEventListener('click', () => {
        navOverlay.classList.toggle('active');
    });

    // Close overlay and navigate when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Activate section
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });
            targetSection.classList.add('active-section');

            // Close overlay
            navOverlay.classList.remove('active');
        });
    });
});

let touchStartX = 0;
let touchEndX = 0;
const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
let currentSectionIndex = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Swipe Left - Next Section
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else if (touchEndX > touchStartX) {
        // Swipe Right - Previous Section
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    // Activate the current section
    const targetSection = document.getElementById(sections[currentSectionIndex]);
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    targetSection.classList.add('active-section');
}