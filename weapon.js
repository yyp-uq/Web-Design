// Get element of weapons
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

Light Dragon’s Horn Weapon is rare and revered. 


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
This formidable horn is dropped by powerful Black Boss Bokoblins, elite enemies that typically appear deep underground or in high-level monster camps. These fearsome foes are known for their massive build, commanding presence, and ability to coordinate attacks with surrounding Bokoblin minions.

To effectively defeat them, it's recommended to first eliminate the smaller Bokoblins using ranged attacks to reduce pressure, then close in from behind with a powerful melee weapon to unleash high-damage combos. When the boss is knocked down, capitalize on the opening with rapid strikes.

The jagged horn they drop greatly enhances melee attack power when fused to a weapon, especially greatswords. It delivers a crushing impact with each swing and excels at breaking through enemy defenses. As a drop from a commander-class opponent, this horn represents not only physical strength but also strategic triumph over organized foes. 

It is a prized component for warriors who favor brute force and tactical dominance in advanced combat scenarios.  `,
  color: "black"
},
"Black Lizalfos Horn": {
  info: `
The Black Lizalfos is one of the most aggressive and elusive enemies in Hyrule. Found in regions like the Gerudo Highlands or Hebra Mountains, they use rough terrain to remain hidden, striking when players least expect it.

These lizard-like foes specialize in ambush. They cling to rocky walls or blend into shadows, waiting to leap out with swift claw combos and acrobatic strikes. Their speed and unpredictability make them dangerous opponents in any encounter.

To counter them, use bomb arrows or detection tools to expose their location before engaging. Once revealed, close in quickly with fast melee attacks to prevent them from retreating or launching counterstrikes.

The blade-shaped horn they drop enhances weapon speed and slicing range when fused. It suits fast attackers who rely on mobility and precision, offering a chance to inflict bleeding or shatter enemy defenses. `,
  color: "black"
},
"Blue Boss Bokoblin Horn": {
  info: `
Blue Boss Bokoblins are mid-level enemies found in monster camps across regions like Hateno and Akkala. Though less threatening than higher-tier foes, they offer a solid challenge and are useful for honing combat skills in early to mid-game progression.

They lead small Bokoblin squads and rely on brute strength. Players can weaken their defenses by eliminating minions first, then using bomb flowers, ice arrows, or ambush tactics to create openings for melee strikes.

When defeated, they drop a curved horn that increases physical attack power when fused. While not as potent as rare drops, it delivers dependable performance and is well-suited for balanced combat situations.

The horn is a practical upgrade for adventurers seeking efficiency without sacrificing power. It’s ideal for mid-game builds, providing a cost-effective way to boost offensive capability without needing rare or hard-to-obtain materials.    `,
  color: "black"
},
"Blue-Maned Lynel Saber Horn": {
  info: `
Blue-Maned Lynels are among the most powerful creatures in Hyrule, known for their relentless aggression and immense strength. Their saber-like horns reflect the deadly precision behind their high-speed charges and brutal melee attacks.

These beasts roam remote regions such as the Eldin Highlands and Tabantha Snowfield. With high HP and multiple combat phases, they demand patience, quick reflexes, and mastery of defensive techniques to overcome.

Using perfect guards, well-timed dodges, and accurate headshots can interrupt their assault patterns. Once defeated, they drop a finely sharpened horn ideal for fusing into melee weapons that prioritize slicing strength and reach.

The saber horn boosts both raw attack power and strike accuracy. It is a top-tier component valued by skilled warriors who seek refined, fast-paced combat tools capable of tearing through enemies with deadly precision. `,
  color: "black"
},
"Silver Boss Bokoblin Horn": {
  info: `
Silver Boss Bokoblins are elite leaders towering above their kin, often marked with ancient runes that glow faintly. Their presence signals a high-threat encounter, combining brute force with dark, coordinated tactics that overwhelm unprepared adventurers.

They appear in deep areas like the Central Depths or after Blood Moons. Surrounded by loyal minions, they lead structured attacks with strong suppression, requiring players to use precision and crowd control to break through their defenses.

The best strategy is to clear the surrounding enemies first, then focus on the boss using charged attacks or burst-damage weapons. Their durability and strength demand an aggressive yet calculated approach to secure victory.

Once defeated, they drop a jagged horn that grants a major attack boost when fused. It excels on greatswords and hammers, delivering crushing blows that pierce through armor and push back even the toughest foes.     `,
  color: "black"
},
"Silver Lizalfos Horn" : {
  info: `
Silver Lizalfos are elite reptilian enemies that specialize in speed, agility, and unpredictable attacks. They are commonly found in dangerous locations like the Hebra Mountains, Gerudo Desert outskirts, and vast underground cave systems filled with hazards.

These agile foes combine fast leap strikes with ranged frost breath, making them difficult to counter at close range. Use elemental weapons or fire-based tools to reduce their mobility, and take advantage of higher terrain to control the battle.

When defeated, they drop a distinctive scythe-shaped horn that greatly enhances speed-focused melee weapons. Fused to light blades or dual swords, it provides sweeping attack arcs that excel in fast-paced encounters.

This horn rewards players who favor agility, timing, and pressure-based tactics. It’s ideal for those who enjoy darting between enemies, delivering rapid blows, and disrupting groups before opponents can regroup.
           `,
  color: "black"
},
"Soldier Construct III Horn": {
  info: `
This horn is dropped by Soldier Construct III units—advanced mechanical guardians built by the ancient Zonai. Shaped like a sharpened blade, it embodies the precision, discipline, and efficiency of their creators' technological mastery.

These constructs patrol ruins, underground labs, and labyrinths with near-sentient awareness. Their movements are calculated and reactive, requiring players to use smart tactics and quick reflexes to avoid taking heavy damage in prolonged fights.

Lightning-based weapons are highly effective for short-circuiting their systems. Once stunned, follow up with charged or combo attacks to bring them down before they re-enter an active combat state.

The dropped horn enhances both power and combo execution when fused. It suits fast, tactical fighters who prefer multi-hit chains, tight timing, and refined combat flow over brute force.
`         ,
  color: "black"
},
"Frost-Breath Lizalfos Horn": {
  info: `
Frost-Breath Lizalfos dwell in icy regions such as the Hebra Mountains and Lanayru Snowfields. These cold-adapted enemies unleash freezing mist that can immobilize players, making them particularly dangerous in open or uneven terrain.

They often use surprise tactics, leaping from high ground or cliffs to ambush unsuspecting targets. To survive, equip cold-resistant armor and use fire arrows or flame weapons to counter their elemental advantage effectively.

Once defeated, they drop an ice-element horn that grants freeze properties when fused. It’s ideal for locking down groups of enemies, buying time, or controlling the battlefield through elemental pressure.

Beyond combat, the horn's frost attribute can help extinguish fire traps or cool hot environments. It’s a versatile tool for explorers who travel between harsh biomes or face fire-based hazards in complex regions.
  `         ,
  color: "black"
},
"Silver Bokoblin Horn": {
  info: `
Dropped by elite Silver Bokoblins, this horn features a hardened exterior and piercing tip. These enemies appear in late-game regions and often act as frontline units in advanced monster camps, requiring skill and strength to defeat.

Silver Bokoblins rely on coordinated attacks and overwhelming force. Players must respond with evasive movement, strong melee counters, or elemental tools to reduce the threat before it escalates.

The horn offers no elemental bonuses but delivers excellent base attack boosts when fused. It enhances raw damage output, making even simple weapons capable of delivering devastating blows in close quarters.

Perfect for those who prioritize brute force over finesse, this horn transforms basic melee gear into powerful tools. It’s a symbol of overcoming high-tier combat challenges through resilience and strength.
    `         ,
  color: "black"
},
"Stalnox Horn": {
  info: `
Stalnox are undead giants that rise in darkness, often lurking in deep caves or emerging only during nightfall. Their large, skeletal forms are slow but powerful, making them intimidating foes in tight or low-visibility environments.

Their key weakness is the glowing single eye. Well-placed arrows can stun them, creating brief openings. Watch for their bone-throwing attacks and seismic ground pounds, which demand constant movement and awareness to dodge effectively.

Upon defeat, they drop a horn embedded with bone shards and dark energy. Fused to weapons, it grants heavy impact force, often staggering enemies or sending them flying with strong knockback effects.

Ideal for hammers or heavy blades, this horn excels in disrupting groups or breaking through defenses. It represents domination over death itself—a symbol of victory earned in the depths and forged in darkness.
    `         ,
  color: "black"
}

};

// Clicking a weapon image hides the central images and displays the weapon details.
const allWeaponContainers = document.querySelectorAll('.single-weapon-container');
const middleContainers = document.querySelectorAll('.middle-column');
let lastClicked = null;

// Make sure all containers are visible initially
for (let i = 0; i < allWeaponContainers.length; i++) {
  allWeaponContainers[i].classList.remove('hidden');
  allWeaponContainers[i].classList.add('show');
}

// Add click events to each Weapon container
for (let i = 0; i < allWeaponContainers.length; i++) {
  let singleWeaponContainer = allWeaponContainers[i];

  singleWeaponContainer.addEventListener('click', (e) => {
    let nowClicked = singleWeaponContainer;

    if (nowClicked !== lastClicked) {
      if (window.innerWidth <= 1024) {
    // Mobile mode, hide all the images and show description panel when clicking a image
    for (let j = 0; j < allWeaponContainers.length; j++) {
      allWeaponContainers[j].classList.add('hidden');
      allWeaponContainers[j].classList.remove('show');
    }
  } else {
    // Desktop mode, only hide the middle images and show description panel when clicking a image
    for (let j = 0; j < middleContainers.length; j++) {
      middleContainers[j].classList.add('hidden');
      middleContainers[j].classList.remove('show');
    }
  }

  weaponDetail.classList.remove('hidden');
  weaponDetail.classList.add('show');

  lastClicked = nowClicked;
    } else {
      // Case 2: Clicked the same image again → Restore central containers
      for (let j = 0; j < middleContainers.length; j++) {
        middleContainers[j].classList.remove('hidden');
        middleContainers[j].classList.add('show');
      }

      weaponDetail.classList.remove('show');
      weaponDetail.classList.add('hidden');

      lastClicked = null;
      return;
    }

    // Extract the title and display the corresponding info
    let titleElement = nowClicked.querySelector('h3');
    if (titleElement) {
      let title = titleElement.textContent.replace(/\s+/g, ' ').trim();
      if (weaponDetails[title]) {
        weaponTitle.innerText = title;
        weaponTitle.style.color = weaponDetails[title].color;
        weaponInfo.innerText = weaponDetails[title].info;
        weaponInfo.style.color = weaponDetails[title].color;
      } else {
        weaponTitle.innerText = "";
        weaponInfo.innerText = "No details available.";
        weaponInfo.style.color = "black";
      }
    }
  });
}

// Back button
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (window.innerWidth <= 1024) {
    // Mobile mode, hide all the images and show description panel when clicking back button
    for (let i = 0; i < allWeaponContainers.length; i++) {
      allWeaponContainers[i].classList.remove('hidden');
      allWeaponContainers[i].classList.add('show');
    }
  } else {
    // Desktop mode, only hide the middle images and show description panel when clicking back button
    for (let i = 0; i < middleContainers.length; i++) {
      middleContainers[i].classList.remove('hidden');
      middleContainers[i].classList.add('show');
    }
  }

  weaponDetail.classList.remove('show');
  weaponDetail.classList.add('hidden');

  lastClicked = null;
});
