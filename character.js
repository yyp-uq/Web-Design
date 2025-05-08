const scrollContainer = document.querySelector('.scroll-snapper');
const header = document.querySelector('.main-header');

scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const windowHeight = window.innerHeight;

  if (scrollTop >= windowHeight * 0.5) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});

// Smooth scroll control
let isScrolling = false;

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  const scrollAmount = window.innerHeight;
  const direction = event.deltaY > 0 ? 1 : -1;

  if (!isScrolling) {
    if (direction > 0) {
      scrollContainer.scrollTop += scrollAmount;
    } else {
      scrollContainer.scrollTop -= scrollAmount;
    }
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
}, { passive: false });
