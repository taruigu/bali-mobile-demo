// Mobile-specific interactions
document.addEventListener('DOMContentLoaded', function() {
  // Handle touch events for better mobile feedback
  const buttons = document.querySelectorAll('button, .btn, a[href*="#"]');
  
  buttons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
      this.style.opacity = '0.8';
    });
    
    btn.addEventListener('touchend', function() {
      this.style.opacity = '1';
    });
  });
  
  // Prevent double-tap zoom on buttons
  let lastTouchEnd = 0;
  buttons.forEach(btn => {
    btn.addEventListener('touchend', function(e) {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  });
});
