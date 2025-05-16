// app/javascript/mobile-menu.js

export function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (!mobileMenuToggle || !navbar) return;
    
    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('mobile-menu-open');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (navbar.classList.contains('mobile-menu-open') && 
          !navbar.contains(event.target)) {
        navbar.classList.remove('mobile-menu-open');
      }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('mobile-menu-open');
      });
    });
  }