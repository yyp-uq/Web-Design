const scrollSnapper = document.querySelector('.scroll-snapper');
const mainHeader = document.querySelector('.main-header');

// Hide or show the header
scrollSnapper.addEventListener('scroll', () => {
  const scrollTop = scrollSnapper.scrollTop;
  const clientHeight = scrollSnapper.clientHeight;
  if (scrollTop >= clientHeight * 0.5) {
    mainHeader.style.opacity = '0';
    mainHeader.style.transform = 'translateY(-100%)';
    mainHeader.style.pointerEvents = 'none';
  } else {
    mainHeader.style.opacity = '1';
    mainHeader.style.transform = 'translateY(0)';
    mainHeader.style.pointerEvents = 'auto'; 
  }
});


// Enables smooth scroll snapping and prevents multiple triggers from a single scroll gesture
let lastScrollTime = 0;
const SCROLL_DELAY = 500; // ms

scrollSnapper.addEventListener('wheel', (e) => {
  e.preventDefault();

  const now = Date.now();
  if (now - lastScrollTime < SCROLL_DELAY) return;

  const scrollingHeight = window.innerHeight;
  const direction = e.deltaY > 0 ? 1 : -1;
  scrollSnapper.scrollTop += direction * scrollingHeight;

  lastScrollTime = now;
}, { passive: false });


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

