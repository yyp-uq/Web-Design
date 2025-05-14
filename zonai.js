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



// Get element of zonai devices
const zonaiDetail = document.getElementById('zonai-detail');
const zonaiTitle = document.getElementById('zonai-title');
const zonaiInfo = document.getElementById('zonai-info');

// zonai details and colors
const zonaiDetails = {
    "Zonai Fan": {
      info: `
  The Zonai Fan is a versatile and widely-used device from the ancient Zonai civilization. When activated, it produces strong wind to enable propulsion.
  
  It is commonly used for aerial or aquatic movement when combined with wings or rafts. Players often use it to fly, drive, or solve air-based puzzles.
  
  The fan consumes battery power while active, encouraging strategic planning. It is lightweight and easy to incorporate into quick designs.
  
  With multiple fans and careful placement, players can create hovercrafts or automated systems. It is a foundational component in creative builds.
      `,
      color: "black"
    },
    "Tracking Platform Vehicle": {
      info: `
  The Tracking Platform combines a Zonai Sled with a Steering Stick to create automated forward movement.
  
  It works well on grass, snow, or shrine floors, gliding smoothly across terrain. Players often use it to transport items or ride long distances hands-free.
  
  When enhanced with stabilizers or fans, it can function as a self-driving delivery unit or a navigation bot.
  
  It’s simple to set up and reliable, making it a valuable tool for creative automation in open areas.
      `,
      color: "black"
    },
    "Zonai Wing": {
      info: `
  The Zonai Wing is a glider-shaped device that excels at long-distance air travel when launched from rails or high places.
  
  It can be enhanced with Fans for thrust and Steering Sticks for navigation, forming an efficient flying machine.
  
  Players use it to transport items or glide from sky islands to the surface with precision.
  
  Its success depends on weight balance, and it is a key tool for sky navigation.
      `,
      color: "black"
    },
    "Zonai Hover Stone": {
      info: `
  The Hover Stone is a levitating platform that floats in place once activated. It serves as a stable mid-air foundation.
  
  Though it cannot move on its own, it’s excellent for suspended bridges, puzzle solutions, or staging areas.
  
  Often combined with propulsion devices or as a launch base, it adds vertical flexibility to static builds.
  
  With zero power cost after setup, it is ideal for long-term floating structures.
      `,
      color: "black"
    },
    "Zonai Shock Emitter": {
      info: `
  This dragon-head-shaped device emits electric shocks in a fixed direction, making it powerful for defense or crowd control.
  
  Highly effective against mechanical enemies, it can be attached to vehicles or stationary builds for added impact.
  
  It drains battery quickly, so careful energy planning is essential for sustained use.
  
  Aggressive and stylish, the Shock Emitter is favored for dynamic combat builds.
      `,
      color: "black"
    },
    "Zonai Big Wheel": {
      info: `
  The Big Wheel is a large, high-torque component ideal for carrying heavy builds across varied terrain.
  
  Often used in combat or cargo vehicles, it provides strong ground traction and fast movement.
  
  Pairing it with a Steering Stick enables full control for cars or mobile bases.
  
  It’s a key part of durable and efficient ground transport systems.
      `,
      color: "black"
    },
    "Zonai Steering Stick": {
      info: `
  The Steering Stick allows players to steer Zonai builds in real time by translating player input into directional changes.
  
  Essential for rideable vehicles, it pairs with wheels, wings, or sleds to add full navigation control.
  
  It is usually mounted centrally and enables smoother, more responsive handling.
  
  It is the core interface that transforms passive machines into controllable ones.
      `,
      color: "black"
    },
    "Zonai Spring": {
      info: `
  The Zonai Spring launches anything placed on top of it into the air using a quick, forceful burst.
  
  It’s commonly used in puzzles or as part of a build that needs elevation control.
  
  Mounting it on carts or under platforms can enable vertical movement or trap mechanisms.
  
  It is reliable, energy-free, and perfect for vertical problem-solving.
      `,
      color: "black"
    },
    "Zonai Stabilizer": {
      info: `
  The Stabilizer corrects the orientation of a build, standing it upright when tipped or off balance.
  
  Ideal for towers, balloon lifts, or vehicles that fall over easily, it resets their alignment automatically.
  
  It is nicknamed the "roly-poly" for its consistent upright behavior.
  
  Unobtrusive yet essential, it ensures structural reliability in motion.
      `,
      color: "black"
    },
    "Zonai Balloon": {
      info: `
  The Balloon floats upward when heated, usually via Flame Emitters placed at the base.
  
  It enables slow, controlled vertical travel and is used for exploration or puzzle elevation.
  
  Best paired with platforms to lift items or players over obstacles.
  
  It provides a simple, gentle solution to vertical movement problems.
      `,
      color: "black"
    },
    "Zonai Light": {
      info: `
  The Zonai Light emits a strong, focused beam of light to illuminate dark areas like caves and the Depths.
  
  It can be mounted on vehicles or builds and powered via batteries.
  
  Players use it to reveal hidden threats or terrain in pitch-black zones.
  
  Efficient and lightweight, it’s a go-to for safe underground exploration.
      `,
      color: "black"
    },
    "Zonai Sled": {
      info: `
  The Sled glides across grass, sand, or snow due to its low-friction base, making it ideal for land builds.
  
  When powered by fans or wheels, it can form the chassis of rafts, hovercrafts, or quick carts.
  
  It’s simple and easy to use, great for lightweight transport or early-game designs.
  
  Adaptable and battery-friendly, it’s perfect for flat-surface traversal.
      `,
      color: "black"
    },
    "Zonai Cart": {
      info: `
  The Cart is a wheeled platform that rolls smoothly over tracks and even surfaces.
  
  Used in shrine puzzles and transport systems, it’s often powered by fans or momentum.
  
  It’s more stable than a sled and perfect for controlled item delivery.
  
  Reliable and compact, it’s essential in rail-based solutions.
      `,
      color: "black"
    },
    "Zonai Rocket": {
      info: `
  The Rocket gives a one-time burst of thrust when triggered, sending attached objects flying forward or up.
  
  It’s great for quick launches, puzzle lifts, or directional boosts.
  
  Players often use it with Wings or carts for dramatic movement.
  
  Simple to use, it adds fast acceleration to mobile creations.
      `,
      color: "black"
    },
    "Zonai Small Wheel": {
      info: `
  This compact wheel provides fast movement on flat ground, ideal for small, efficient vehicles.
  
  It pairs well with Steering Sticks and stabilizers for agile control.
  
  Players use it in lightweight designs that require quick travel.
  
  Great for tight spaces and low battery consumption.
      `,
      color: "black"
    },
    "Zonai Cannon": {
      info: `
  The Cannon fires explosive blasts in a straight line, dealing high damage to enemies or structures.
  
  Powered by battery energy, it’s used in offense-focused builds or trap mechanisms.
  
  Often mounted on vehicles or bases, it adds ranged power to any design.
  
  Efficient and impactful, it’s the weapon of choice for destructive players.
      `,
      color: "black"
    }
  };
  

// Clicking a zonai image hides the central images and displays the zonai details.
const allZonaiContainers = document.querySelectorAll('.single-zonai-container');
const middleContainers = document.querySelectorAll('.middle-column');
let lastClicked = null;

for (let i = 0; i < allZonaiContainers.length; i++) {
  let singleContainer = allZonaiContainers[i];

  singleContainer.addEventListener('click', function () {
    let titleElement = singleContainer.querySelector('h3');
    let title;

    if (titleElement) {
      title = titleElement.innerText;
    } else {
      title = null;
    }

    let detail = zonaiDetails[title];

    let isSameClick = false;
    if (lastClicked === singleContainer) {
      isSameClick = true;
    }

    if (isSameClick) {
      lastClicked = null;

      for (let j = 0; j < middleContainers.length; j++) {
        middleContainers[j].classList.remove('hidden');
      }

      zonaiDetail.classList.remove('show');
      zonaiDetail.classList.add('hidden');
      return;
    } else {
      lastClicked = singleContainer;
    }

    // Hide the middle column blocks
    for (let j = 0; j < middleContainers.length; j++) {
      middleContainers[j].classList.add('hidden');
    }

    // Set zonai detail content
    zonaiTitle.innerText = title;

    if (detail && detail.info) {
      zonaiInfo.innerText = detail.info;
    } else {
      zonaiInfo.innerText = "No details available.";
    }

    if (detail && detail.color) {
      zonaiTitle.style.color = detail.color;
      zonaiInfo.style.color = detail.color;
    } else {
      zonaiTitle.style.color = "#fff";
      zonaiInfo.style.color = "#fff";
    }

    // Show the detail panel
    zonaiDetail.classList.remove('hidden');
    void zonaiDetail.offsetWidth; 
    zonaiDetail.classList.add('show');
  });
}

const backButton = document.getElementById('back-button');

// Clicking the same image again or pressing the back button restores the central images and hides the details.
backButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Show the middle column blocks
  for (let i = 0; i < middleContainers.length; i++) {
    middleContainers[i].classList.remove('hidden');
  }

  // Hide the detail panel
  zonaiDetail.classList.remove('show');
  zonaiDetail.classList.add('hidden');

  // Reset state
  lastClicked = null;
});

// When the user scrolls the page, hide the zonai detail panel
scrollSnapper.addEventListener('scroll', () => {
  if (!zonaiDetail.classList.contains('hidden')) {
    zonaiDetail.classList.remove('show');
    zonaiDetail.classList.add('hidden');
    for (let i = 0; i < middleContainers.length; i++) {
      middleContainers[i].classList.remove('hidden');
    }
    lastClicked = null;
  }
});


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

