// Smooth scroll snapping 
const scrollContainer = document.querySelector('.scroll-snapper');
const header = document.querySelector('.main-header');

// Control the header show/hide based on scroll position
scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const windowHeight = window.innerHeight;

  if (scrollTop >= windowHeight * 0.5) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});

// Menu toggle logic for showing and hiding
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Show the menu when clicking menu button
menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');  
});

// Auto-close dropdown menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

// Prevent multiple scrolls at once and enable full-page snap scrolling with mouse wheel
let isScrolling = false;

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();   
  if (isScrolling) return; 

  const sections = document.querySelectorAll('.section');
  const currentScroll = scrollContainer.scrollTop;
  const viewportHeight = window.innerHeight;

  // Determine which section is currently in view and scroll direction
  let currentIndex = Math.round(currentScroll / viewportHeight);
  const direction = event.deltaY > 0 ? 1 : -1; 
  let nextIndex = currentIndex + direction;

  // Clamp to valid range of section indices
  nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));
  const nextScroll = nextIndex * viewportHeight;

  // Smooth scroll to the target section
  isScrolling = true;
  scrollContainer.scrollTo({
    top: nextScroll,
    behavior: 'smooth'
  });

  // Reset scroll lock after a delay to allow smooth scrolling
  setTimeout(() => {
    isScrolling = false;
  }, 500);
}, { passive: false });

