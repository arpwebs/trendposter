// app/javascript/form-validation.js

export function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    if (!forms.length) return;
    
    forms.forEach(form => {
      form.addEventListener('submit', (event) => {
        let valid = true;
        
        // Validate email fields
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
          if (!validateEmail(field.value)) {
            valid = false;
            highlightInvalidField(field);
          } else {
            removeInvalidHighlight(field);
          }
        });
        
        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            valid = false;
            highlightInvalidField(field);
          } else {
            removeInvalidHighlight(field);
          }
        });
        
        if (!valid) {
          event.preventDefault();
          showFormError(form, 'Please fill out all required fields correctly.');
        }
      });
    });
    
    // Helper functions
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    function highlightInvalidField(field) {
      field.classList.add('is-invalid');
      field.style.borderColor = '#dc3545';
      
      // Add error message if it doesn't exist
      if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#dc3545';
        errorMessage.style.fontSize = '0.875rem';
        errorMessage.style.marginTop = '0.25rem';
        
        if (field.type === 'email') {
          errorMessage.textContent = 'Please enter a valid email address.';
        } else {
          errorMessage.textContent = 'This field is required.';
        }
        
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
      }
    }
    
    function removeInvalidHighlight(field) {
      field.classList.remove('is-invalid');
      field.style.borderColor = '';
      
      // Remove error message if it exists
      if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
        field.nextElementSibling.remove();
      }
    }
    
    function showFormError(form, message) {
      // Check if error message already exists
      let errorContainer = form.querySelector('.form-error');
      
      if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'form-error';
        errorContainer.style.color = '#dc3545';
        errorContainer.style.marginTop = '1rem';
        errorContainer.style.padding = '0.5rem';
        errorContainer.style.backgroundColor = '#fee2e2';
        errorContainer.style.borderRadius = '4px';
        errorContainer.style.textAlign = 'center';
        
        form.appendChild(errorContainer);
      }
      
      errorContainer.textContent = message;
      
      // Scroll to error message
      errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }