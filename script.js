// Smooth scroll behavior for any element with .scroll-down
document.querySelectorAll('.scroll-down').forEach(el => {
  el.addEventListener('click', () => {
    // Get selector of the target section from data attribute
    const targetSelector = el.dataset.target;
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      // Scroll smoothly to that section
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
