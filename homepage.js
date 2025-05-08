// Smooth scroll snapping like character.js
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

// Control smooth wheel scrolling by snapping one full screen at a time
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

// Toggle the side menu
function toggleMenu(side) {
  const leftMenu = document.getElementById('left-options');
  const rightMenu = document.getElementById('right-options');
  const leftBtn = document.getElementById('left-menu-btn');
  const rightBtn = document.getElementById('right-menu-btn');

  if (side === 'left') {
    leftMenu.classList.toggle('show');
    leftBtn.classList.toggle('rotated');
  } else {
    rightMenu.classList.toggle('show');
    rightBtn.classList.toggle('rotated');
  }
}

// Open and close the video popup modal
function openVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = 'flex';
  player.src = "https://www.youtube.com/embed/ZdVO_fYoF5g?autoplay=1";
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = 'none';
  player.src = "";
}

// Bind the video play button click event
document.getElementById('playVideoBtn').addEventListener('click', openVideo);
