// Main scroll container with scroll-snap behavior
const scrollSnapper = document.querySelector('.scroll-snapper');

// Fixed site header at the top of the page
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
const SCROLL_DELAY = 500; // Minimum time delay (in milliseconds) between scroll actions

scrollSnapper.addEventListener('wheel', (e) => {
  e.preventDefault();

  const now = Date.now();
  // If user scrolls again before delay time is up, ignore the event to prevent rapid-fire scrolling
  if (now - lastScrollTime < SCROLL_DELAY) return;

  const scrollingHeight = window.innerHeight;
  // deltaY > 0 means scrolling down, otherwise up
  const direction = e.deltaY > 0 ? 1 : -1;
  scrollSnapper.scrollTop += direction * scrollingHeight;

  lastScrollTime = now;
}, { passive: false });


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


// Control the encyclopedia animation in all sections (Play or Pause)
const animationBtn_1 = document.getElementById('animation-btn-1');
const animationBtn_2 = document.getElementById('animation-btn-2');
const animationBtn_3 = document.getElementById('animation-btn-3');
const animationBtn_4 = document.getElementById('animation-btn-4');

const animationPlayer_1 = document.getElementById('animation-player-1');
const animationPlayer_2 = document.getElementById('animation-player-2');
const animationPlayer_3 = document.getElementById('animation-player-3');
const animationPlayer_4 = document.getElementById('animation-player-4');

let isPaused = false;

// Toggle all animations in all sections
function ConnectAllAnimations() {
  isPaused = !isPaused;

  let state;
  if (isPaused) {
    state = 'paused';
  } else {
    state = 'running';
  }

  // Set animation play state
  animationPlayer_1.style.animationPlayState = state;
  animationPlayer_2.style.animationPlayState = state;
  animationPlayer_3.style.animationPlayState = state;
  animationPlayer_4.style.animationPlayState = state;

  // Update all buttons together
  const allBtns = [animationBtn_1, animationBtn_2, animationBtn_3, animationBtn_4];
  for (let i = 0; i < allBtns.length; i++) {
    const btn = allBtns[i];
    if (isPaused) {
      btn.classList.remove('pause-btn');
      btn.classList.add('play-btn');
      btn.title = 'Play';
    } else {
      btn.classList.remove('play-btn');
      btn.classList.add('pause-btn');
      btn.title = 'Pause';
    }
  }
}

// Bind the toggle function to all four buttons
animationBtn_1.addEventListener('click', ConnectAllAnimations);
animationBtn_2.addEventListener('click', ConnectAllAnimations);
animationBtn_3.addEventListener('click', ConnectAllAnimations);
animationBtn_4.addEventListener('click', ConnectAllAnimations);

let currentSectionIndex = 0; // Initially in section1 (index 0)

const scrollSections = document.querySelectorAll('.scroll-snapper > section');
const firstSection = scrollSections[0]; // section1
const secondSection = scrollSections[1]; // section2

function setAutoAnimationState(shouldPause) {
  let state;
  if (shouldPause) {
    state = 'paused';
  } else {
    state = 'running';
  }

  const players = [animationPlayer_1, animationPlayer_2, animationPlayer_3, animationPlayer_4];
  const buttons = [animationBtn_1, animationBtn_2, animationBtn_3, animationBtn_4];

  // Set animation state for each player
  for (let i = 0; i < players.length; i++) {
    players[i].style.animationPlayState = state;
  }

  // Update button states and tooltips
  for (let i = 0; i < buttons.length; i++) {
    if (!shouldPause) {
      buttons[i].classList.add('pause-btn');
      buttons[i].classList.remove('play-btn');
      buttons[i].title = 'Pause';
    } else {
      buttons[i].classList.add('play-btn');
      buttons[i].classList.remove('pause-btn');
      buttons[i].title = 'Play';
    }
  }

  isPaused = shouldPause;
}


// Use IntersectionObserver to track current section
const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry.isIntersecting) continue;

    const newIndex = Array.from(scrollSections).indexOf(entry.target);

    // Pause only when transitioning from section1 to section2
    if (currentSectionIndex === 0 && newIndex === 1) {
      setAutoAnimationState(true); // Pause
    }

    // Play only when transitioning from section2 back to section1
    if (currentSectionIndex === 1 && newIndex === 0) {
      setAutoAnimationState(false); // Play
    }

    currentSectionIndex = newIndex; // Update current section index
  }
}, {
  root: scrollSnapper,
  threshold: 0.6
});

// Only observe section1 and section2
observer.observe(firstSection);
observer.observe(secondSection);


function updateHeaderTitleForMobile() {
  const headerTitle = document.querySelector('.header-title');

  // Check whether the head title element exists
  if (!headerTitle) return;

  // If on a small mobile device, shorten the title to "TOTK"
  if (!headerTitle.dataset.originalTitle) {
    headerTitle.dataset.originalTitle = headerTitle.innerText;
  }

  // restore the original full title when the screen width change to desktop
  if (window.innerWidth <= 600) {
    headerTitle.innerText = "TOTK";
  } else {
    headerTitle.innerText = headerTitle.dataset.originalTitle;
  }
}

// Call the function once on initial page load to apply the correct title
updateHeaderTitleForMobile();

// Listen for window resize events and update the header title accordingly in real time
window.addEventListener('resize', updateHeaderTitleForMobile);


// Hide Zonai detail panel and restore layout when scrolling away
scrollSnapper.addEventListener('wheel', (e) => {
  const detailPanel = document.getElementById('zonai-detail');
  if (!detailPanel || detailPanel.classList.contains('hidden')) return;

  // Hide the detail panel
  detailPanel.classList.remove('show');
  detailPanel.classList.add('hidden');

  // Restore the Zonai layout
  const allZonaiContainers = document.querySelectorAll('.single-zonai-container');
  const middleContainers = document.querySelectorAll('.middle-column');

  if (window.innerWidth <= 1024) {
    // On mobile/tablet: restore all containers
    allZonaiContainers.forEach(container => {
      container.classList.remove('hidden');
      container.classList.add('show');
    });
  } else {
    // On desktop: only restore middle column items that are currently hidden
    middleContainers.forEach(container => {
      if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('show');
      }
    });
  }

  // Clear selection state
  window.lastClicked = null;
});


// Hide Weapon detail panel and restore layout when scrolling away
scrollSnapper.addEventListener('wheel', (e) => {
  const detailPanel = document.getElementById('weapon-detail');
  if (!detailPanel || detailPanel.classList.contains('hidden')) return;

  // Hide the detail panel
  detailPanel.classList.remove('show');
  detailPanel.classList.add('hidden');

  // Restore the Weapon layout
  const allWeaponContainers = document.querySelectorAll('.single-weapon-container');
  const middleContainers = document.querySelectorAll('.middle-column');

  if (window.innerWidth <= 1024) {
    // On mobile/tablet: restore all containers
    allWeaponContainers.forEach(container => {
      container.classList.remove('hidden');
      container.classList.add('show');
    });
  } else {
    // On desktop: only restore middle column items that are currently hidden
    middleContainers.forEach(container => {
      if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('show');
      }
    });
  }

  // Clear selection state
  window.lastClicked = null;
});
