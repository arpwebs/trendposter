// app/javascript/demo-carousel.js

export function initDemoCarousel() {
    const demoCarousel = document.getElementById('demo-carousel');
    const demoControls = document.querySelectorAll('.demo-control');
    
    if (!demoCarousel || !demoControls.length) return;
    
    // Add active class to controls
    const setActiveSlide = (index) => {
      // Hide all slides
      const slides = demoCarousel.querySelectorAll('.demo-slide');
      slides.forEach(slide => slide.classList.remove('active'));
      
      // Show the selected slide
      if (slides[index]) {
        slides[index].classList.add('active');
      }
      
      // Update controls
      demoControls.forEach(control => control.classList.remove('active'));
      demoControls[index].classList.add('active');
    };
    
    // Add click handlers to control buttons
    demoControls.forEach((control, index) => {
      control.addEventListener('click', () => {
        setActiveSlide(index);
      });
      
      // Set first control as active
      if (index === 0) {
        control.classList.add('active');
      }
    });
    
    // Auto-rotate every 5 seconds
    let currentSlide = 0;
    const slideCount = demoCarousel.querySelectorAll('.demo-slide').length;
    
    const autoRotate = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      setActiveSlide(currentSlide);
    }, 5000);
    
    // Stop auto-rotation when user interacts with controls
    demoControls.forEach(control => {
      control.addEventListener('click', () => {
        clearInterval(autoRotate);
      });
    });
  }