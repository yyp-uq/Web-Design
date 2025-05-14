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


// Dropdown menu toggle
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});


// Auto-close dropdown menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});


// Control the volume of background animation(muted or unmuted)
const video = document.getElementById('main-theme');
const unmutedBtn = document.getElementById('unmuted-btn1');
const mutedBtn = document.getElementById('muted-btn1');
mutedBtn.style.display = 'none';

unmutedBtn.addEventListener('click', function () {
  video.muted = false;
  video.volume = 0.5;
  video.play();
  unmutedBtn.style.display = 'none';
  mutedBtn.style.display = 'inline-block';
});

mutedBtn.addEventListener('click', function () {
  video.muted = true;
  video.volume = 0.5;
  video.play();
  mutedBtn.style.display = 'none';
  unmutedBtn.style.display = 'inline-block';
});

