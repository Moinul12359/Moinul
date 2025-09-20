// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile Menu Toggle
const toggleBtn = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
