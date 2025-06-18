// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
}

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
});

// Trigger fade-in on load (if in view)
window.dispatchEvent(new Event('scroll'));
  