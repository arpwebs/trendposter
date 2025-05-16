// app/javascript/faq-accordion.js

export function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (!faqQuestions.length) return;
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        // Toggle active class on the parent item
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        
        // Toggle the collapse state of the answer
        const targetId = question.getAttribute('data-bs-target');
        const answerElement = document.querySelector(targetId);
        
        if (answerElement) {
          answerElement.classList.toggle('show');
        }
        
        // Update the + to - and vice versa
        const icon = question.querySelector('.faq-icon');
        if (icon) {
          icon.textContent = icon.textContent === '+' ? '−' : '+';
        }
      });
    });
  }