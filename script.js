document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Format the mailto link with the form data
            const mailtoLink = `mailto:definite.egret.wcbn@letterguard.net?subject=Contact Form Submission&body=From: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
            
            // Update the form action
            contactForm.action = mailtoLink;
        });
    }

    // Update copyright year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.querySelector('button[onclick="toggleMenu()"]');
            
            if (mobileMenu && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
} 