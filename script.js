// Select all elements with the .scroll-down class
document.querySelectorAll('.scroll-down').forEach(el => {
  // Listen for click on the arrow
  el.addEventListener('click', () => {
    // Get the target section selector from the data attribute
    const target = document.querySelector(el.dataset.target);
    if (target) {
      // Smoothly scroll the page to that section
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
