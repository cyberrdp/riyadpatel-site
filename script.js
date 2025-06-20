// Smooth scroll for any element with class .scroll-down
document.querySelectorAll('.scroll-down').forEach(el => {
  // On click, scroll to the section in data-target
  el.addEventListener('click', () => {
    const target = document.querySelector(el.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
