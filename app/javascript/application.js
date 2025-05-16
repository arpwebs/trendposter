// app/javascript/application.js
// Rails 8 uses ESM for JavaScript modules by default

// Import modules
import { initMobileMenu } from "./mobile-menu.js";
import { initDemoCarousel } from "./demo-carousel.js";
import { initFaqAccordion } from "./faq-accordion.js";
import { initFlashMessages } from "./flash-messages.js";
import { initFormValidation } from "./form-validation.js";

// Import Turbo
import * as Turbo from "@hotwired/turbo";

// When the DOM is loaded, initialize all interactive elements
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initDemoCarousel();
  initFaqAccordion();
  initFlashMessages();
  initFormValidation();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});