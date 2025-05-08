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

const toggleBtn = document.getElementById('toggle-animation-btn');
const scrollingContainer = document.querySelector('.encyclopedia-animation-player');

let isPaused = false;

toggleBtn.addEventListener('click', () => {
  isPaused = !isPaused;

  if (isPaused) {
    scrollingContainer.style.animationPlayState = 'paused';
    toggleBtn.classList.remove('pause-btn');
    toggleBtn.classList.add('play-btn');
    toggleBtn.title = "Play";
  } else {
    scrollingContainer.style.animationPlayState = 'running';
    toggleBtn.classList.remove('play-btn');
    toggleBtn.classList.add('pause-btn');
    toggleBtn.title = "Pause";
  }
});


// Get element of weapons
const weaponBlocks = document.querySelectorAll('.single-weapon-container');
const weaponDetail = document.getElementById('weapon-detail');
const weaponTitle = document.getElementById('weapon-title');
const weaponInfo = document.getElementById('weapon-info');

// Weapon details and colors
const weaponDetails = {
  "Naydra's Horn Weapon": {
    info: `
Naydra's Horn Weapon is created by fusing a weapon with the horn of Naydra, the sacred Ice Dragon that soars above the frozen Lanayru Mountain Range. Naydra represents purification and rebirth, having once been corrupted by malice until Link restored its true form.

The horn contains pure ice energy. When fused with a weapon, it grants powerful frost attacks that freeze enemies instantly, offering excellent crowd control and making it especially effective against fiery foes.

Wielding this weapon is not just a show of strength, but a symbol of the hero’s will to protect Hyrule. According to legend, Naydra’s icy breath sealed away corruption, preserving the land’s purity.

Obtaining Naydra’s horn requires tracking the dragon through freezing skies and striking its horn mid-flight—a challenge demanding precision and resilience. As a result, the weapon is rare and highly valued, both for its elemental power and its deep connection to the spiritual lore of Hyrule.
    `,
    color: "black"
  },
  "Farosh's Horn Weapon": {
    info: `
Farosh's Horn Weapon is forged by combining a weapon with the horn of Farosh, the mighty Thunder Dragon who roams the skies above the Faron region and Gerudo Highlands. Farosh represents raw energy, unpredictability, and the natural force of electricity. When fused into a weapon, its horn channels high-voltage power capable of stunning and paralyzing enemies on impact.

This electrified weapon is especially effective in disabling groups of foes or mechanical enemies, giving the wielder control over chaotic encounters. The crackling energy is not just powerful—it embodies the wild and untamed spirit of Farosh itself.

According to legend, Farosh was once a guardian of ancient shrines, feared and revered by all who witnessed its lightning trails across the heavens. Obtaining the horn requires navigating thunderstorms and gliding close to strike the airborne dragon—a feat of both timing and courage.

Because of its electrifying effects and sacred origin, Farosh’s Horn Weapon is considered a treasured tool for warriors who seek not only strength, but dominion over the forces of nature.


    `,
    color: "black"
  },
  "Dinraal's Horn Weapon": {
    info: `
Dinraal's Horn Weapon is crafted by fusing a weapon with the blazing horn of Dinraal, the Fire Dragon who glides through the canyons of Eldin and the northern sky. Representing destruction, transformation, and passion, Dinraal wields the ancient flame of Hyrule. Weapons infused with its horn unleash searing fire attacks that ignite enemies and burn obstacles instantly.

This fire-enhanced weapon excels in clearing out swarms, melting ice barriers, or applying constant damage to tough opponents. Its sheer heat makes it one of the most aggressive elemental weapons available.

Legend holds that Dinraal’s flames once sealed away ancient evils deep beneath Death Mountain. To earn this horn, players must brave intense heat, high winds, and precisely strike Dinraal while it soars in open skies—requiring skill, patience, and protective gear.

The weapon symbolizes relentless strength and the power of rebirth through fire. Dinraal’s Horn Weapon is a true emblem of destruction wielded for righteous purpose, favored by warriors unafraid to scorch a path through chaos.


    `,
    color: "black"
  },
  "Light Dragon's Horn Weapon": {
    info: `
Light Dragon's Horn Weapon is a sacred fusion of a weapon and the horn of the Light Dragon, the divine serpent who glides across the skies of all Hyrule. Unlike other dragons, the Light Dragon embodies restoration, purity, and the spirit of courage itself—bearing deep ties to Zelda’s transformation in the events of Tears of the Kingdom.

The horn grants a radiant energy effect. While it lacks elemental damage, it boosts weapon durability, restores lost strength, and emits a holy aura that glows with celestial light. It’s a support-oriented weapon, ideal for long battles where endurance and blessings outweigh raw offense.

Legends say the Light Dragon was born from sacrifice and duty, chosen to guide and protect the land silently from above. Acquiring its horn requires patience, timing, and reverence—striking it mid-flight as it travels gracefully through the sky.

Light Dragon’s Horn Weapon is rare and revered. Though not the most powerful in direct combat, it holds unmatched symbolic value and is a beacon of divine grace for any true hero of Hyrule.


    `,
    color: "black"
  },
  "Silver Lynel Horn": {
  info: `
The Silver Lynel Horn is a formidable weapon component dropped by the most elite and dangerous variant of the Lynel — the Silver Lynel. Renowned for their raw power, cunning tactics, and relentless aggression, Silver Lynels are feared across Hyrule as apex predators.

When fused with a weapon, the horn significantly boosts its physical attack power. Unlike elemental weapons, the Silver Lynel Horn relies on brute force and sheer impact, making it ideal for close-quarters combat and breaking through enemy defenses.

Legend holds that only the bravest warriors can survive an encounter with a Silver Lynel. Their horns are not just powerful — they’re trophies symbolizing supreme courage, precision, and combat mastery. Each strike from this weapon echoes the ferocity of its original bearer.

Because of its rarity and devastating effect, the Silver Lynel Horn Weapon is favored by battle-hardened heroes who embrace risk in exchange for unrivaled offensive strength.
  `,
  color: "black"
},
"Broken Silver Lynel Horn": {
  info: `
The Broken Silver Lynel Horn is a fractured remnant of a once-mighty beast — a piece chipped from the horn of a Silver Lynel during an intense battle. Though not as powerful as a full horn, it retains traces of the beast’s fearsome might.

Fusing this shard with a weapon grants a moderate attack boost, along with slightly increased knockback. It serves as an accessible version of the full Silver Lynel Horn Weapon, ideal for earlier encounters or quick-hit builds.

Legends suggest that even a broken piece of a Silver Lynel’s horn holds enough rage to rattle lesser foes. Warriors who carry such shards are often those who survived a Lynel fight, bearing not just the fragment — but the scars of battle.

While not as rare or strong, the Broken Silver Lynel Horn is a reminder that even fragments of greatness can still shape the tide of battle.
  `,
  color: "black"
},
"Black Boss Bokoblin Horn" : {
  info: `
The Black Boss Bokoblin Horn is a valuable reward obtained after defeating a powerful enemy. These monsters usually appear deep underground or in high-level monster camps, often protected by regular Bokoblins. With a massive build and high attack power, the Black Boss Bokoblin commands surrounding minions and coordinates attacks during battle.

It is recommended to eliminate the smaller Bokoblins with ranged attacks first, then approach from behind with a powerful melee weapon for high-damage combos. When the boss is knocked down, deliver rapid strikes to accumulate damage quickly. The dropped jagged horn significantly enhances melee damage when fused and is ideal for greatsword-type weapons.

This horn delivers a heavy, crushing impact and adds immense pressure to each attack. As a drop from a commander-type enemy, it symbolizes not just strength, but tactical victory over organized foes. Its fusion effect excels in advanced combat, perfect for breaking through defenses or disrupting enemy lines. It is an ideal heavy component for melee warriors.
  `,
  color: "black"
},
"Black Lizalfos Horn": {
  info: `
The Black Lizalfos is one of the most aggressive lizard-type enemies, often found in dangerous areas such as the Gerudo Highlands or Hebra Mountains. These enemies are masters of stealth and surprise attacks, often hiding in rocky walls or building shadows. Upon detecting the player, they launch rapid claw combos and leaping strikes.

Use detection arrows or bomb arrows to reveal them, then switch to melee for close combat. The horn they drop is long and curved like a blade, greatly boosting attack speed and slice damage when fused. It's perfect for short-range duels and can inflict bleeding or armor break effects. This horn symbolizes speed, lethality, and precision — the essence of agile combat.
    `,
  color: "black"
},
"Blue Boss Bokoblin Horn": {
  info: `
While not as rare as horns from higher-tier enemies, the Blue Boss Bokoblin Horn remains a reliable fusion material. These enemies are commonly found in monster camps across plains and hills, such as in Hateno or Akkala. They're ideal for practicing combat tactics.

During battle, use bomb flowers or ice arrows to disrupt their rhythm and create damage openings. When defeated, they drop a curved horn that provides steady physical output when fused. It’s a cost-effective mid-tier material, making it a great choice for progressing adventurers. It balances power and accessibility, ideal for mid-game weapon builds.
      `,
  color: "black"
},
"Blue-Maned Lynel Saber Horn": {
  info: `
Blue-Maned Lynels are among the most powerful enemies, and their saber-like horns are the source of their brutal charges and slashes. This sharply bladed horn is a testament to strength and skill. Defeating a Blue-Maned Lynel is a mark of true bravery.

Found in remote regions such as the Eldin Highlands or Tabantha Snowfield, these Lynels have high HP and multi-phase attacks. Use headshots and perfect guards to interrupt their flow. Fused with a weapon, the saber horn boosts damage output and grants sharp, precise strike patterns — ideal for high-level melee warriors seeking elite weaponry.
        `,
  color: "black"
},
"Silver Boss Bokoblin Horn": {
  info: `
The Silver Boss Bokoblin Horn represents overwhelming power, dropped by the strongest form of Bokoblin leaders. Massive in stature and wrapped in ancient runes, these bosses exude a mystical aura.

They appear after Blood Moons or in deep underground zones like Central Depths or Gloom’s Lair. With high organization and suppression capabilities, they require clearing minions and burst damage tactics. This horn grants massive attack bonuses when fused, perfect for heavy weapons like greatswords and warhammers.
          `,
  color: "black"
},
"Silver Lizalfos Horn" : {
  info: `
Silver Lizalfos are agile elites skilled in leap attacks and breath-based assaults. They dwell in deep Hebra mountain ranges, Gerudo Desert fringes, and underground cave systems. Use ranged ice weapons to limit their mobility, and take advantage of terrain elevation.

Their scythe-shaped horn increases attack speed and offers sweeping melee effects when fused. It suits dual-wielders or short sword users aiming to overwhelm enemies with rapid strikes. Excellent for fast-paced combat and group disruption.
            `,
  color: "black"
},
"Soldier Construct III Horn": {
  info: `
This high-grade horn is dropped by Soldier Construct III units — relics of Zonai civilization. These blade-shaped horns reflect mechanical precision and efficiency.

Found in labyrinths, underground labs, or Zonai ruins, they patrol with AI-like awareness. Use lightning-based weapons to disable their circuits, then unleash charged strikes. When fused, this horn grants high-damage and combo-friendly properties, perfect for players favoring technical and rapid-strike combat builds.
`         ,
  color: "black"
},
"Frost-Breath Lizalfos Horn": {
  info: `
Frost-Breath Lizalfos appear in cold regions like the Hebra Mountains and Lanayru Snowfields. They breathe icy mist that can freeze the player. Wear cold-resistance gear and counter with fire arrows. Beware of their leaping ambush attacks.

The ice horn grants frost attributes when fused, enabling freeze effects on enemies. It is excellent for crowd control and halting enemy advances. Also useful for extinguishing flames or navigating hot zones.
  `         ,
  color: "black"
},
"Silver Bokoblin Horn": {
  info: `
Dropped by elite Silver Bokoblins, this horn is sharp and highly penetrative. With a solid outer layer and sharp tip, it provides strong base attack boosts when fused.

Though it lacks elemental effects, it excels in raw power. Ideal for players who favor brute-force tactics. Obtaining it shows mastery over enemies with advanced tactics, and it turns basic weapons into high-output tools.
    `         ,
  color: "black"
},
"Stalnox Horn": {
  info: `
Stalnox are undead giant bosses found in dark caves or appearing only at night. Their single eye is a weakness — aim with precision arrows to stun them. Their attacks include bone throws and ground pounds, requiring agile movement to avoid.

When defeated, they drop a horn with bone fragments and eerie energy. Fusing it grants strong impact and intimidation. Best suited for hammers or weapons with high knockback. Symbolizes victory over the undead and triumph through the shadows.
    `         ,
  color: "black"
}

};


// Get elements
const middleBlocks = document.querySelectorAll('.middle-column');
const backButton = document.getElementById('back-button');

let lastClicked = null;

// Click event for weapon blocks
weaponBlocks.forEach(block => {
  block.addEventListener('click', () => {
    const title = block.querySelector('h3')?.innerText;
    const detail = weaponDetails[title];

    const isSameClick = (lastClicked === block);
    lastClicked = isSameClick ? null : block;

    if (isSameClick) {
      middleBlocks.forEach(mid => mid.classList.remove('hidden'));
      weaponDetail.classList.remove('show');
      weaponDetail.classList.add('hidden');
      return;
    }

    // Hide the middle column blocks
    middleBlocks.forEach(mid => mid.classList.add('hidden'));

    // Set weapon detail content
    weaponTitle.innerText = title;
    weaponInfo.innerText = detail?.info || "No details available.";
    weaponTitle.style.color = detail?.color || "#fff";
    weaponInfo.style.color = detail?.color || "#fff";

    // Show the detail panel
    weaponDetail.classList.remove('hidden');
    void weaponDetail.offsetWidth; // Force DOM reflow
    weaponDetail.classList.add('show');
  });
});

// Back button event
backButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Show the middle column blocks
  middleBlocks.forEach(mid => mid.classList.remove('hidden'));

  // Hide the detail panel
  weaponDetail.classList.remove('show');
  weaponDetail.classList.add('hidden');

  // Reset state
  lastClicked = null;
});

// Auto-hide detail panel when scrolling the scroll-snapper container
const scrollSnapper = document.querySelector('.scroll-snapper');

scrollSnapper.addEventListener('scroll', () => {
  if (!weaponDetail.classList.contains('hidden')) {
    weaponDetail.classList.remove('show');
    weaponDetail.classList.add('hidden');
    middleBlocks.forEach(mid => mid.classList.remove('hidden'));
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

// Get section toggle buttons and animation containers
const toggleSection2Btn = document.getElementById('toggle-section2-btn');
const toggleSection3Btn = document.getElementById('toggle-section3-btn');
const toggleSection4Btn = document.getElementById('toggle-section4-btn');
const section2Scroll = document.getElementById('scrolling-section2');
const section3Scroll = document.getElementById('scrolling-section3');
const section4Scroll = document.getElementById('scrolling-section4');

let isPausedShared = false;

// Toggle all animations in all sections
function toggleAllAnimations() {
  isPausedShared = !isPausedShared;
  const state = isPausedShared ? 'paused' : 'running';

  section2Scroll.style.animationPlayState = state;
  section3Scroll.style.animationPlayState = state;
  section4Scroll.style.animationPlayState = state;

  [toggleSection2Btn, toggleSection3Btn, toggleSection4Btn].forEach(btn => {
    btn.classList.toggle('pause-btn', !isPausedShared);
    btn.classList.toggle('play-btn', isPausedShared);
    btn.title = isPausedShared ? 'Play' : 'Pause';
  });
}

// Bind the toggle function to all three section buttons
toggleSection2Btn.addEventListener('click', toggleAllAnimations);
toggleSection3Btn.addEventListener('click', toggleAllAnimations);
toggleSection4Btn.addEventListener('click', toggleAllAnimations);
