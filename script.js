
// Fade-in Animation on Scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(f => observer.observe(f));

// Hero Parallax Effect
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const speed = hero.dataset.speed;
  const yPos = -(window.scrollY * speed);
  hero.style.backgroundPosition = `center ${yPos}px`;
});

// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu on link click (mobile UX)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
