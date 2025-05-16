// app/javascript/flash-messages.js

export function initFlashMessages() {
    const flashMessages = document.querySelectorAll('.flash');
    
    if (!flashMessages.length) return;
    
    // Auto-hide flash messages after 5 seconds
    flashMessages.forEach(message => {
      setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease';
        
        // Remove from DOM after fade out
        setTimeout(() => {
          message.remove();
        }, 500);
      }, 5000);
      
      // Add close button
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&times;';
      closeButton.className = 'flash-close';
      closeButton.style.position = 'absolute';
      closeButton.style.right = '10px';
      closeButton.style.top = '10px';
      closeButton.style.background = 'none';
      closeButton.style.border = 'none';
      closeButton.style.fontSize = '1.5rem';
      closeButton.style.cursor = 'pointer';
      closeButton.style.opacity = '0.7';
      
      message.style.position = 'relative';
      message.appendChild(closeButton);
      
      closeButton.addEventListener('click', () => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
          message.remove();
        }, 500);
      });
    });
  }