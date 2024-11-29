
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

// Swipe functionality for mobile
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
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else if (touchEndX > touchStartX) {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    const targetSection = document.getElementById(sections[currentSectionIndex]);
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
    });
    targetSection.classList.add('active-section');
}

// Hire Me Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const hireButtons = document.querySelectorAll('.hire-me');
    
    hireButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const contactSection = document.getElementById('contact');
            const contactLink = document.querySelector('.nav a[href="#contact"]');
            
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });
            
            document.querySelectorAll('.nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            contactSection.classList.add('active-section');
            contactLink.classList.add('active');
        });
    });
});

// Download CV Button Logic
// document.addEventListener('DOMContentLoaded', () => {
//     const downloadCVButton = document.querySelector('.btn[href="#"]');
    
//     if (downloadCVButton) {
//         downloadCVButton.addEventListener('click', (e) => {
//             e.preventDefault();
            
//             const link = document.createElement('a');
//             link.href = '/data/NoamanElAllaouiResume.pdf';
//             link.download = 'NoumanElallaouiResume.pdf';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         });
//     }
// });