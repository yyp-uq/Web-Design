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


// Get all the detailed elements of every single enemy
const enemyBlocks = document.querySelectorAll('.single-enemy-container');
const enemyDetail = document.getElementById('enemy-detail');
const enemyTitle = document.getElementById('enemy-title');
const enemyInfo = document.getElementById('enemy-info');
const backButton = document.getElementById('enemy-back-button');

// Enemies and their description
const enemyDetails = {
  'Bokoblin': `Bokoblins are one of the most common monsters in Tears of the Kingdom. They often appear in groups across plains, mountains, forests, and other open areas. They resemble pig-like apes with tusks, large noses, and pointed ears, roughly the same size as Link. Their color and size vary depending on their rank—starting with red, then blue, black, silver, and even special variants like skull-helmeted leaders.

Each type of Bokoblin represents a different combat level and health stat. Red Bokoblins have only 24 HP and weak attacks, suitable for beginners. Blue Bokoblins have 72 HP and attack more aggressively. Black Bokoblins boast 240 HP and use more tactical moves. Silver Bokoblins are high-difficulty enemies with over 720 HP, powerful weapons, and rare material drops. Leader-type Bokoblins are elite enemies capable of commanding others in battle.

Bokoblins are social creatures with basic intelligence. When one spots Link, it will often call others to join the fight, sometimes using a horn to summon reinforcements. They can pick up weapons, shields, or items nearby to aid them in combat, showing signs of simple tactics. At night, Bokoblins become even more active, especially around campsites and remote areas.

At night, Link may encounter “Stalkoblins,” the skeletal version of Bokoblins. These creatures crumble in sunlight and have very low HP but often appear in groups. While weak, they can drop bone-based weapons that are useful in early gameplay or for weapon fusion when resources are scarce.`,

  'Bokoblin.': `Defeating Bokoblins yields a wide variety of materials, including Bokoblin horns, teeth, and guts. These can be used to upgrade armor, craft elixirs, or fuse with arrows for added effects. Higher-tier Bokoblins may drop rare items like rubies, sapphires, or powerful weapons. These drops are essential for crafting specialized gear and survival items throughout the adventure.

Bokoblin attack patterns vary by level. Lower-tier Bokoblins use basic club swings and jump attacks that are easy to predict. Higher-tier ones use thrusts, dodge maneuvers, and flanking tactics, with faster reaction times. Players can dodge (side-hop or backflip) at the right moment to trigger Flurry Rush, which allows for rapid counterattacks—an effective strategy in mid-to-late game combat.

Bokoblins are widely distributed across the Hyrule surface. Red Bokoblins mostly inhabit central plains and low-risk zones like West Hyrule Field. Blue and black ones appear in forests, mountainous areas like Faron and Lanayru. Silver Bokoblins are usually found in the Depths or high-level monster camps. Players seeking to farm resources can repeatedly clear enemy camps for loot and weapon upgrades.

Bokoblins have a clear hierarchy among monsters. They often operate under Moblins or Lizalfos in multi-tiered monster squads. As the story progresses, Link may encounter combinations like Bokoblins riding Stone Taluses or sharing outposts with other monster types. Understanding their social structure helps players develop more effective strategies for dismantling enemy defenses.`,

  'Keese': `Keese are small, bat-like flying monsters that frequently appear in caves, ruins, and at night. They often move in swarms and are known for their glowing eyes and fluttering wings. While individually weak, they can be dangerous in large numbers, especially for unprepared players exploring dark areas or the Depths.

There are several elemental variants of Keese, including Fire, Ice, and Electric Keese. Fire Keese can ignite targets on contact, Ice Keese can freeze Link, and Electric Keese can shock him, causing him to drop equipment. These elemental types are often found in corresponding environments, like volcanic areas or snowy mountains.

Keese usually attack by flying directly into Link or exploding upon contact. They tend to hide in ceilings or darkness, ambushing players as they approach. Using a bow and arrows is the most effective way to eliminate them before they get too close. Explosive or elemental arrows can take out entire swarms quickly.

Defeated Keese drop useful materials like Keese Wings and Keese Eyeballs. These items are essential for fusing with arrows to gain homing, burning, or stunning effects. Despite being low-level enemies, Keese are a valuable resource early in the game, offering both combat utility and crafting benefits.`
,
  'Lizalfos': `Lizalfos are agile, reptilian enemies known for their speed, stealth, and adaptability in combat. They resemble upright lizards with long tails and snouts, often moving in quick bursts and leaping great distances. Lizalfos frequently appear in rocky regions, jungles, and underground environments, usually in small groups that rely on surprise and agility.

There are multiple Lizalfos types, including elemental variants like Fire, Ice, and Electric Lizalfos. Fire Lizalfos breathe fire and are immune to heat; Ice Lizalfos can freeze Link with their breath; Electric Lizalfos shock with their attacks, potentially disarming Link. Each variant is commonly found in corresponding biomes—volcanoes, snowy mountains, or deserts.

In battle, Lizalfos are highly mobile and use quick strikes, evasive rolls, and long jumps to confuse and overwhelm. Some carry boomerangs or bows, while others attack with their claws and tails. Stealthy Black Lizalfos may blend into their surroundings before ambushing Link. Combat strategies include using elemental counterattacks or freezing them mid-motion to break their momentum.

Defeating Lizalfos yields materials like Lizalfos Horns, Talons, and Tails, which can be fused to weapons or used in elixirs. Their horns often have jagged shapes ideal for powerful melee fusions, while tails are used in armor upgrades. Lizalfos are considered mid-tier enemies, providing both a challenge and valuable materials for players throughout the game.

`,
  'Moblins': `Moblins are large, brutish enemies that serve as mid-to-high-tier monsters throughout Hyrule. Towering over Bokoblins and Lizalfos, Moblins have long limbs, hulking bodies, and often carry massive weapons. They move slower than other monsters but compensate with sheer strength and reach, capable of launching Link far with a single hit.

There are various types of Moblins, including elemental and elite variants such as Black Moblins and Silver Moblins. Stronger variants possess higher health, deal massive damage, and may use special attacks like throwing smaller enemies (such as Bokoblins) at Link. Some wield clubs, spears, or even improvised weapons like tree trunks.

In battle, Moblins rely on raw power, performing heavy swings, charges, and powerful ground smashes. While they are slower and more predictable than agile enemies, their hits can break shields or knock Link down easily. Players can exploit their wind-up animations to dodge and trigger Flurry Rush, or use elemental weaknesses—like freezing or shocking—to gain an advantage.

Defeating a Moblin grants materials like Moblin Horns, Fangs, and Guts, used for fusing, crafting elixirs, and upgrading armor. Silver Moblins drop rare items and strong fusion parts. Moblins are commonly found guarding monster outposts, highlands, caves, and especially in tougher regions or Depths, often acting as mini-bosses in the overworld.

`,
  'Horriblins': `Horriblins are terrifying, humanoid monsters that dwell primarily in caves and the Depths. They resemble a twisted version of Moblins—tall and lean with elongated limbs, glowing eyes, and large claws. Unlike other enemies, they often cling to ceilings or walls, moving upside-down like monstrous insects. Their eerie design and sudden attacks make them one of the most unsettling enemies in the game.

These enemies are known for their unique ambush tactics. Horriblins often remain hidden on cave ceilings, then suddenly drop down or leap at Link when he gets close. They may spin through the air like a star or rush toward the player with quick, erratic movements. Their climbing ability and vertical positioning make them difficult to detect and target without ranged weapons.

In combat, Horriblins use heavy swipes, lunges, and slam attacks with their long arms. They are aggressive and can quickly close the distance, often attacking in groups. While not as tanky as Moblins or Hinox, their speed and angle of approach (especially from above) can overwhelm players in tight spaces. Arrows, bombs, or elemental attacks are effective for bringing them down before they close in.

Defeating a Horriblin yields materials like Horriblin Horns and Horriblin Claws. These are valuable for fusing with weapons to increase damage, especially melee damage with reach or stun effects. Horriblins are commonly found in the Depths and cave systems throughout Hyrule, particularly in darker, more vertical spaces where their ceiling-crawling behavior gives them a tactical edge.`
,
  'Like Likes': `Like Likes are bizarre, worm-like monsters with large, round mouths and slimy bodies that cling to walls or ceilings. They resemble giant fungi or leeches and are often found in caves, tunnels, and the Depths. Though stationary, they surprise players by revealing their mouths and attacking when Link gets close.

Several elemental variants exist: Normal, Fire, Ice, and Electric Like Likes. Fire Likes spit flames, Ice Likes blast freezing wind, and Electric Likes release shocks that may disarm Link. Each type fits its habitat, such as volcanoes, cold zones, or thunder-prone areas.

They attack by sucking in Link or unleashing elemental sprays. Their weak spot—a glowing core—appears when they open their mouths. Hitting it with an arrow or bomb will stun them, allowing for a safe counterattack. Close combat is risky without timing and space.

Defeating Like Likes drops Like-Like Stones and elemental materials. These are useful for weapon fusion and armor upgrades. Some Like Likes also hide treasure chests inside, rewarding players who spot and defeat them during exploration.

`,
  'Stone Taluses': `Stone Taluses are massive golem-like creatures made entirely of rock and minerals. They resemble large boulders until they rise from the ground when Link approaches. These towering enemies have a weak spot—a glowing ore deposit—typically located on their back or shoulder, which must be targeted to deal damage.

There are several types of Stone Taluses, including Rare, Igneo (fire), and Luminous variants. Rare Stone Taluses contain precious gems, while Igneo Taluses are found in volcanic areas and are covered in magma, burning anything that touches them. Luminous Taluses glow in the dark and appear in shadowy or deep regions like caves and the Depths.

In battle, Stone Taluses attack by swinging their arms, throwing rocks, or body-slamming the ground. Their movements are slow but powerful, and their size makes close combat risky. Players can climb onto them to reach the weak point, but must avoid being shaken off or crushed. Elemental tactics or arrows fused with bombs can make the fight safer and faster.

Some Stone Taluses appear with Bokoblins riding on top, acting as mobile monster platforms. These Bokoblins throw projectiles or attack from above, creating a multi-layered threat that combines brute strength with ranged pressure. Defeating the rider first—or knocking them off—can make the encounter much more manageable.`
,
  'Stone Taluses.': `Defeating a Stone Talus rewards players with valuable mineral resources. Upon defeat, the Talus collapses into rubble, scattering ores such as Amber, Opal, Topaz, Ruby, Sapphire, and sometimes even Diamond. These gems are used for upgrading armor, crafting elixirs, or selling for rupees.

The type of Talus affects the quality of drops. Rare Stone Taluses tend to yield high-value gems like Ruby, Sapphire, or Diamond. Igneo Taluses, commonly found in volcanic areas, are more likely to drop fire-related gems such as Ruby. Luminous Taluses drop Luminous Stones, which glow in the dark and are used for upgrading specific armor. Standard Taluses usually provide basic materials like Amber or Opal.

In addition to ores, Stone Taluses drop a special material called the "Stone Talus Heart" or "Stone Talus Core". This item can be fused with weapons to significantly boost their attack power and durability, making it a popular choice for melee builds.

Talus drops do not reset immediately but respawn over Blood Moons. Players who want to farm high-value materials should mark Talus locations on the map and return periodically. They are an excellent source of income and upgrade materials, especially in early- to mid-game progression.

`,
  'Flux Constructs': `Flux Constructs are ancient Zonai-built golem-like constructs made of floating stone blocks. These mysterious enemies resemble large humanoid figures formed entirely of rectangular metal or stone blocks suspended in midair. They are often found guarding treasure or Zonai devices, especially on Sky Islands and in certain areas of the Depths.

There are multiple versions of Flux Constructs, such as Flux Construct I, II, and III, each with increasing difficulty. Higher-tier variants move faster, hit harder, and shift into more complex formations. Despite their size, they can rearrange themselves into different shapes—like walls, flying platforms, or cubes—making each phase of the fight feel distinct and dynamic.

In combat, Flux Constructs attack by slamming their arms, launching blocks, or transforming into mobile structures that crush Link. The key to defeating them is to identify and target the glowing green core block, which controls the entire body. Using Recall, arrows, or Ultrahand to pull the core out will temporarily collapse the structure and expose it to damage.

Defeating a Flux Construct grants valuable Zonai materials and sometimes powerful Zonai equipment or treasure chests. The battles often take place in puzzle-like arenas, rewarding both combat skill and strategic thinking. These constructs are some of the most iconic mini-bosses in the game, blending physics, creativity, and combat in a uniquely Zonai way.`,
  'Frox': `Frox are massive, toad-like monsters that dwell deep within the underground region known as the Depths. These grotesque creatures resemble mutated amphibians with glowing ore deposits growing from their backs. They are among the largest overworld bosses in the game, often catching players off guard in the vast, dark landscapes of the Depths.

In battle, Frox are extremely aggressive and attack by leaping into the air and body-slamming the ground, creating shockwaves. They may also charge, bite, or attempt to swallow Link whole. Their weak spot is the glowing crystal on their back, which must be targeted to deal real damage. Players can either climb up to strike it directly or shoot it with arrows when it becomes exposed.

There are several Frox variants, including Obsidian Frox and Blue-White Frox, each stronger and more durable than the standard type. Obsidian Frox, for example, has tougher skin and hits harder, while Blue-White Frox are extremely resilient and appear in high-difficulty areas of the Depths. These variants require more precise tactics and better equipment to defeat safely.

Defeating a Frox rewards players with materials like Frox Fang, Frox Guts, Large Zonaite, and Crystallized Charges. These items are useful for upgrading energy cells, crafting, and fusing. Frox are scattered throughout the Depths and do not respawn until a Blood Moon, making each encounter feel like a mini-boss battle and a valuable resource opportunity.`,
  'Gibdos': `Gibdos are undead, mummy-like monsters that appear in the Gerudo Desert and during certain main quests. With pale, dry skin stretched over their insectoid bodies, they resemble a mix between a zombie and a beetle. They often appear in swarms, surrounding Link with overwhelming numbers, especially in story-driven siege events.

Gibdos have natural resistance to physical attacks and must be weakened with elemental damage before they become vulnerable. Fire, lightning, and sometimes light-based attacks (like Riju’s ability) are key to breaking their hardened shells. Once stunned by elemental damage, their bodies turn purple and become susceptible to swords, arrows, and other weapons.

In battle, Gibdos charge, bite, or lunge at Link in rapid, aggressive motions. Some variants can fly, shoot acid projectiles, or spawn from cocoons. During larger fights, they often appear in waves, requiring crowd-control tactics and careful use of AoE elements like bomb flowers or elemental rods.

Defeating Gibdos drops materials such as Gibdo Bones and Gibdo Wings, which are useful for weapon fusion and elixirs. Their bone weapons deal high damage but break easily, making them ideal for quick burst attacks. Gibdo encounters are most common in desert regions, the Lightning Temple, and major Gerudo quests, often signaling key plot progression or boss battles.`
,
  'Thunder Gleeok': `The Thunder Gleeok is a triple-headed lightning dragon that soars through the skies of Hyrule, often found near stormy mountain peaks or in isolated floating islands. Each head can unleash powerful thunderbolts, creating wide-area electric storms that threaten Link from afar.

This Gleeok is vulnerable only when its heads are individually targeted and stunned. Using arrows, particularly Bomb or Shock Arrows, is critical. When all three heads are staggered, it crashes to the ground, allowing a brief window for melee attacks.

It emits a constant electric field—wearing rubber armor or using shock resistance elixirs is essential. The arena often limits movement due to wind or cliffs, making airborne tactics useful.

Defeating the Thunder Gleeok grants valuable materials like Gleeok Thunder Horns, Gleeok Wings, and Gleeok Guts, which are essential for upgrading shock-based gear and fusing high-damage lightning weapons.`,

  'Frost Talus': `The Frost Talus is a hulking, animated rock giant found in the frozen tundras of Hyrule. Covered in icy boulders and constantly radiating cold, it attacks by slamming its fists and launching chunks of ice at Link.

To defeat it, Link must first thaw its icy body using fire-based attacks—Fire Arrows, Flame Emitters, or Ruby-infused weapons. Once the ice melts, the ore node on its back becomes exposed, allowing for melee strikes.

Climbing the Frost Talus is dangerous due to constant cold damage and its tendency to shake Link off. Using slip-resistant gear and heat resistance helps sustain the assault.

It drops Ice Talus Hearts, Froststones, and ore deposits that include sapphires and diamonds, useful for elemental fusion or upgrading cold-resistant armor.`,

  'Silver Lynel': `The Silver Lynel is among the most powerful enemies in the game, found deep in endgame regions or near corrupted Hyrule landmarks. With silver fur, crimson eyes, and enhanced strength, it is a deadly centaur-like beast wielding massive weapons and elemental breath attacks.

It combines devastating melee combos with fire, ice, and lightning blasts. It can also teleport short distances, making its charges hard to predict. Parrying, flurry rushing, and precise dodging are vital to survive.

Bomb Flowers, Sages' abilities, and Zonai-powered traps can help even the odds. Mounted attacks when it falls briefly stunned are key to shortening the fight.

Silver Lynels drop high-end materials such as Silver Lynel Maces, Savage Lynel Bows, and Lynel Guts. These are used for max-tier fusion and crafting elite gear.`,

  'Molduga': `Molduga is a massive, sand-dwelling predator found exclusively in the Gerudo Desert. It lurks beneath the sand, erupting violently to consume anything that makes noise on the surface.

To bait a Molduga, Link must throw bombs or metallic objects to draw it out. Once it leaps from the sand, its exposed belly becomes vulnerable to arrows or thrown weapons. Bomb arrows and explosives are especially effective.

The battle takes place on shifting terrain with limited cover. Staying mobile and using elevated rocks or structures provides protection and sniping angles.

Defeating Molduga yields Molduga Fins, Molduga Guts, and high-quality monster parts useful for elixirs and fusions. It’s a key boss in Gerudo side quests and hunting contracts.`,

  'Frost Gleeok': `The Frost Gleeok is a chilling three-headed ice dragon that dominates the skies near snowy mountain ranges. Each head exhales frost breath, covering the ground with slippery ice and creating large icicles that rain from above.

Its primary weakness is fire. Fire Arrows, Flame Emitters, and ruby-infused gear can melt its defenses and stagger its heads. When all three heads are stunned simultaneously, the Gleeok falls, giving Link a chance to strike.

The battle requires heat-resistant armor, and positioning is crucial to avoid falling off icy ledges. Updrafts from frost breath can also be exploited for gliding attacks.

It drops Frost Gleeok Horns, Wings, and Guts, valuable for upgrading flame weapons and crafting frost-resistant gear.`,

  'Black Hinox': `Black Hinox is a gigantic, heavily armored cyclops that roams overgrown ruins and forest clearings. Its dark skin and heavy plating make it one of the toughest Hinox variants.

Its weak spot is the glowing eye, which can be targeted with arrows to stagger it. Close-range combat is risky due to powerful slams, body rolls, and tree-throwing attacks.

Link can sneak up and steal weapons or shields strapped to its necklace while it sleeps. Fire and electric damage help strip its armor faster.

Defeated Black Hinox drop Hinox Toenails, Black Hinox Hearts, and large weapons like spiked clubs or rusty swords, used for fusion or monster part trading.`,

  'Stalnox': `Stalnox is a skeletal Hinox variant that only appears at night or in cursed ruins. Its giant frame is held together by dark magic, and it uses bone limbs and twisted energy for its attacks.

Its glowing eye detaches during the battle and must be destroyed when it falls out. While intact, it throws boulders, punches, and even slams its ribcage to shockwave Link.

Weapons do less damage unless infused with light-based elements or fused with radiant materials. Bomb arrows and Light Dragon parts are particularly effective.

Stalnox drops Stalnox Bones, Monster Guts, and sometimes rare cursed items useful in special elixirs or shrine trials.`,

  'Flame Gleeok': `The Flame Gleeok is a fearsome fire-breathing three-headed dragon found in volcanic regions like Death Mountain. Its fiery breath scorches the ground and summons firestorms that persist over time.

The Gleeok’s heads must be staggered individually using ice or water-based attacks. Chuchu jelly, Sapphire Arrows, and Zonai water emitters are effective for this purpose.

Flying too close invites incineration, so high mobility and aerial evasion are crucial. Revali’s Gale or glider-based strategies help reach its heads.

Drops include Flame Gleeok Horns, Wings, and Guts. These materials fuel powerful flame weapons and are key to crafting armor with fire resistance.`  
};

let lastClicked = null;

// Create overlay for normal enemies(little monsters)
const overlay = document.createElement('div');
overlay.className = 'enemy-overlay hidden';
overlay.innerHTML = `
  <div class="overlay-image"></div>
  <div class="overlay-text">
    <h2 id="enemy-title"></h2>
    <p id="enemy-info"></p>
    <a href="#" id="enemy-back-button">Back</a>
  </div>
`;
document.body.appendChild(overlay);

const monsterImage = overlay.querySelector('.overlay-image');
const monsterTitle = overlay.querySelector('#enemy-title');
const monsterInfo = overlay.querySelector('#enemy-info');
const monsterBack = overlay.querySelector('#enemy-back-button');

// Create overlay for boss enemies
const bossOverlay = document.createElement('div');
bossOverlay.className = 'boss-overlay hidden';
bossOverlay.innerHTML = `
  <div class="overlay-image boss-image"></div>
  <div class="overlay-text">
    <h2 id="boss-title"></h2>
    <p id="boss-info"></p>
    <a href="#" id="boss-back-button">Back</a>
  </div>
`;
document.body.appendChild(bossOverlay);

const bossImage = bossOverlay.querySelector('.boss-image');
const bossTitle = bossOverlay.querySelector('#boss-title');
const bossInfo = bossOverlay.querySelector('#boss-info');
const bossBack = bossOverlay.querySelector('#boss-back-button');

// Add click event to each enemy block
for (let i = 0; i < enemyBlocks.length; i++) {
  const block = enemyBlocks[i];
  block.addEventListener('click', () => {
    const nowClicked = block;
    const isBoss = nowClicked.classList.contains('single-boss-container');
    const title = nowClicked.querySelector('.enemy-text').textContent.trim();
    const detail = enemyDetails[title] || 'No details available.';
    const imgSrc = nowClicked.querySelector('img')?.src;

    if (nowClicked !== lastClicked) {
      // Case 1: Clicked a different image → Hide all other blocks
      for (let j = 0; j < enemyBlocks.length; j++) {
        enemyBlocks[j].classList.add('hidden');
      }

      if (isBoss) {
        bossImage.innerHTML = `<img src="${imgSrc}" alt="${title}" />`;
        bossTitle.innerText = title;
        bossInfo.innerText = detail;

        bossOverlay.classList.remove('hidden');
        void bossOverlay.offsetWidth;
        bossOverlay.classList.add('show');
      } else {
        monsterImage.innerHTML = `<img src="${imgSrc}" alt="${title}" />`;
        monsterTitle.innerText = title;
        monsterInfo.innerText = detail;

        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.add('show');
      }

      lastClicked = nowClicked;
    } else {
      // Case 2: Clicked the same image → Restore layout
      for (let j = 0; j < enemyBlocks.length; j++) {
        enemyBlocks[j].classList.remove('hidden');
      }
      overlay.classList.add('hidden');
      bossOverlay.classList.add('hidden');
      lastClicked = null;
    }
  });
}

// Back button for normal enemy
monsterBack.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.remove('show');
  overlay.classList.add('hidden');
  for (let i = 0; i < enemyBlocks.length; i++) {
    enemyBlocks[i].classList.remove('hidden');
  }
  lastClicked = null;
});

// Back button for boss enemy
bossBack.addEventListener('click', (e) => {
  e.preventDefault();
  bossOverlay.classList.remove('show');
  bossOverlay.classList.add('hidden');
  for (let i = 0; i < enemyBlocks.length; i++) {
    enemyBlocks[i].classList.remove('hidden');
  }
  lastClicked = null;
});

// Auto-hide overlays on scroll
scrollContainer.addEventListener('scroll', () => {
  if (!overlay.classList.contains('hidden') || !bossOverlay.classList.contains('hidden')) {
    overlay.classList.remove('show');
    overlay.classList.add('hidden');

    bossOverlay.classList.remove('show');
    bossOverlay.classList.add('hidden');

    for (let i = 0; i < enemyBlocks.length; i++) {
      enemyBlocks[i].classList.remove('hidden');
    }

    lastClicked = null;
  }
});


const enemyVideoLinks = {
  'Thunder Gleeok': 'https://www.youtube.com/embed/_TigpoejbbA',
  'Frost Talus': 'https://www.youtube.com/embed/3PvxTPvIiwo',
  'Silver Lynel': 'https://www.youtube.com/embed/UnwU_glJlSY',
  'Molduga': 'https://www.youtube.com/embed/bd-D4V5ahic',
  'Frost Gleeok': 'https://www.youtube.com/embed/gMxSeOWjE-w',
  'Black Hinox': 'https://www.youtube.com/embed/530uksZcCZA',
  'Stalnox': 'https://www.youtube.com/embed/9sfJacRCzRk',
  'Flame Gleeok': 'https://www.youtube.com/embed/HEmGqW6oYyw'
};



const bossNameElements = document.querySelectorAll('.boss-name');
for (let i = 0; i < bossNameElements.length; i++) {
  const el = bossNameElements[i];
  el.addEventListener('click', (e) => {
    e.stopPropagation();

    // Prevent enemy-overlay from hiding videos
    if (!overlay.classList.contains('hidden')) {
      overlay.classList.remove('show');
      overlay.classList.add('hidden');
      for (let j = 0; j < enemyBlocks.length; j++) {
        enemyBlocks[j].classList.remove('hidden');
      }
      lastClicked = null;
    }

    const bossKey = el.dataset.bossVideo;
    const videoUrl = enemyVideoLinks[bossKey];
    if (!videoUrl) return;

    openVideo(videoUrl);
  });
}


function openVideo(videoUrl) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = 'flex';
  player.src = videoUrl + "?autoplay=1";
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = 'none';
  player.src = "";
}


document.getElementById('videoModal').addEventListener('click', (e) => {
  if (e.target.id === 'videoModal') closeVideo();
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
