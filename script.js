// INTERSECTION OBSERVER: scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add visible class to trigger CSS transition
      entry.target.classList.add('visible');
      // Once revealed, stop observing
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // 10% of element in view

// Observe every element with .anim-item
document.querySelectorAll('.anim-item').forEach(el => {
  observer.observe(el);
});

// No extra JS is needed for hover-tilt—pure CSS handles it above
