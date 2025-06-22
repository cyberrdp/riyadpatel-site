// 1) HERO TITLE — split into spans with staggered delays
const title = document.getElementById('heroTitle');
title.innerHTML = [...title.textContent].map(
  (char,i) => `<span style="animation-delay:${(i*0.05).toFixed(2)}s">${char}</span>`
).join('');

// 2) INIT SPLIDE SLIDERS
document.addEventListener('DOMContentLoaded', () => {
  new Splide('#videosSplide', { perPage:4, gap:'1rem', rewind:true }).mount();
  new Splide('#portfolioSplide', { perPage:3, gap:'1rem', rewind:true }).mount();
  new Splide('#instaSplide', { perPage:5, gap:'.5rem', rewind:true }).mount();
});

// 3) SCROLL-REVEAL OBSERVER
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// 4) PARALLAX SCROLL FOR #snakeImg
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const img = document.getElementById('snakeImg');
  if (img) {
    img.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  }
});
