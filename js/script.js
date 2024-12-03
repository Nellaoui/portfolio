document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navLinks = document.querySelectorAll('.aside .nav li a');
    const sections = document.querySelectorAll('section');
    const hireButtons = document.querySelectorAll('.hire-me');

    // Navigation toggler functionality
    navToggler.addEventListener('click', function() {
        this.classList.toggle('active');
        aside.classList.toggle('open');
    });

    // Close navigation when clicking outside
    document.addEventListener('click', function(event) {
        if (!aside.contains(event.target) && !navToggler.contains(event.target)) {
            navToggler.classList.remove('active');
            aside.classList.remove('open');
        }
    });

    // Section activation function
    function activateSection(targetLink) {
        // Remove active classes from all nav links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Remove active and enter classes from all sections
        sections.forEach(section => {
            section.classList.remove('active-section');
            section.classList.remove('section-enter');
        });
        targetLink.classList.add('active');

        const targetId = targetLink.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add('active-section');
            targetSection.classList.add('section-enter');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            activateSection(e.currentTarget);
            
            navToggler.classList.remove('active');
            aside.classList.remove('open');
        });
    });

    hireButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const contactLink = document.querySelector('.nav a[href="#contact"]');
            if (contactLink) {
                activateSection(contactLink);
            }
        });
    });

    const homeLink = document.querySelector('.nav a[href="#home"]');
    if (homeLink) {
        activateSection(homeLink);
    }

    const dayNight = document.querySelector('.day-night');
    dayNight.addEventListener('click', () => {
        dayNight.querySelector('i').classList.toggle('fa-sun');
        dayNight.querySelector('i').classList.toggle('fa-moon');
        document.body.classList.toggle('dark');
    });

    // Typed.js initialization
    new Typed('.typing', {
        strings: ["an Aspiring software engineer", "a Web Developer", "a Student at 1337"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});


function sendEmail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("portflio", "template_cs81eyc", params).then(function (res) {
        alert("Your message sent successfully" + res.status);
    })
    }