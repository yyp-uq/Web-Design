
// Get element of zonai devices
const zonaiDetail = document.getElementById('zonai-detail');
const zonaiTitle = document.getElementById('zonai-title');
const zonaiInfo = document.getElementById('zonai-info');

// zonai details and colors
const zonaiDetails = {
    "Zonai Fan": {
      info: `
  The Zonai Fan is a highly adaptable and frequently used device originating from the ancient Zonai civilization. Upon activation, it generates a powerful wind current capable of pushing structures, enabling propulsion, and driving various contraptions forward or upward depending on placement and design.

This fan is especially effective when paired with wings or rafts, making it essential for building flying machines or aquatic vehicles. Players often rely on it to traverse long distances, solve wind-based puzzles, or build advanced transportation systems across Hyrule’s skies and waters.

While operating, the fan gradually drains energy from the Zonai battery, making energy management a key concern in extended use. Its compact size and light weight make it ideal for quick assembly and on-the-go creative experimentation during exploration or combat situations.

With smart positioning and multiple units, players can construct hovercrafts, drones, or self-driving mechanisms. As a core element in engineering builds, the Zonai Fan represents the foundation of player ingenuity and stands out as a must-have tool for inventors in the field.
      `,
      color: "black"
    },
    "Tracking Platform Vehicle": {
      info: `
  The Tracking Platform is a clever combination of a Zonai Sled and a Steering Stick, enabling automatic forward movement without manual control. Once activated, it steadily propels itself forward, offering players an effortless way to transport themselves or objects across the map.

It performs exceptionally well on flat surfaces like grasslands, snowy fields, or shrine interiors, gliding smoothly and maintaining consistent direction. Players commonly use it to deliver materials, cross long distances, or automate repetitive travel tasks in the overworld.

By attaching stabilizers, fans, or additional wheels, this platform can be customized into a fully autonomous vehicle. It becomes a mobile assistant capable of navigating complex paths or maintaining steady transport even over uneven terrain.

Its simplicity, reliability, and ease of deployment make the Tracking Platform a staple for creative automation. Whether for combat logistics or puzzle-solving, it empowers players to explore hands-free and streamline movement-heavy designs.
      `,
      color: "black"
    },
    "Zonai Wing": {
      info: `
  The Zonai Wing is a glider-shaped aerial device designed for long-distance flight. When launched from elevated platforms, sky rails, or launchers, it soars smoothly through the air. Its aerodynamic form allows it to travel great distances without consuming energy, making it ideal for efficient exploration and descent.

By attaching Zonai Fans at the rear, players can gain forward propulsion, while a Steering Stick enables real-time directional control. This combination transforms the Wing into a controllable aircraft, allowing for midair course adjustments and extended travel paths.

The Wing is commonly used for delivering items across regions, performing airborne rescues, or transitioning between sky islands and the surface. With practice, players can guide it accurately toward distant coordinates, unlocking new routes or shortcuts in vertical gameplay.

To function effectively, the Wing requires careful weight balance and timing. Overloading or uneven setups can destabilize flight. Its design rewards creativity and engineering skills, making it one of the most versatile and strategic Zonai tools in sky navigation.
      `,
      color: "black"
    },
    "Zonai Hover Stone": {
      info: `
  The Hover Stone is a levitating platform from the Zonai arsenal that remains suspended mid-air once activated. It does not drift or fall, providing a reliable floating surface that can be used in various vertical constructions. Its ability to defy gravity makes it a core component in multi-layered builds or suspended navigation paths.

Although the Hover Stone cannot move independently, its static nature is ideal for crafting midair platforms, bridges between floating islands, or staging points during sky exploration. Players often use it to create puzzle mechanisms or stopping points in timed challenges.

The device becomes even more versatile when paired with Zonai Fans, Rockets, or Stabilizers. Used as a foundation, it allows the construction of airborne structures that can be customized for transport, defense, or observation. It also works well as a launch pad for Wings or gliders.

Once placed and activated, the Hover Stone requires no further energy to remain aloft. Its zero-maintenance nature makes it perfect for long-term suspended installations. It supports creative sky-based engineering while conserving battery power for other active Zonai devices.
      `,
      color: "black"
    },
    "Zonai Shock Emitter": {
      info: `
  The Shock Emitter is a dragon-head-shaped Zonai device that unleashes continuous electric discharges in a straight line. Once activated, it becomes a formidable offensive and defensive tool, ideal for shocking enemies that approach from a fixed direction. Its striking appearance also adds flair to any build.

It is especially potent against constructs and other mechanical foes, often disabling them with sustained voltage. Players frequently attach it to moving vehicles or automated turrets, allowing for aggressive engagement in both exploration and defense scenarios.

Despite its power, the Shock Emitter consumes energy rapidly. Prolonged activation will quickly drain Zonai battery reserves, so it requires strategic energy management. Timing its use or pairing it with on-demand switches can maximize efficiency without waste.

With its mix of intimidation and raw damage, this device is a favorite among creative builders focused on crowd control or trap systems. Whether on airborne ships or mobile war rigs, it contributes to a bold and electrifying combat experience.
      `,
      color: "black"
    },
    "Zonai Big Wheel": {
      info: `
  The Big Wheel is a robust, high-torque Zonai component designed for transporting large structures across diverse landscapes. Its size and strength allow it to support heavy loads, making it a foundational part of large-scale land vehicles. Whether on rocky terrain or open fields, it maintains steady movement with minimal slippage.

Commonly featured in battle tanks, cargo carriers, or drilling rigs, the Big Wheel excels at providing strong traction and smooth propulsion. Its large diameter allows it to overcome obstacles that smaller wheels might struggle with, ensuring continuous mobility in uneven environments.

When combined with a Steering Stick, players gain full directional control, transforming a static platform into a maneuverable ground vehicle. This pairing allows for precise navigation, whether for exploration, resource transport, or frontline combat situations.

The Big Wheel is essential for builders aiming to create durable and efficient transportation systems. Its stability and raw power make it a go-to choice for grounded mobility, especially when reliability over long distances and heavy loads is a priority.
      `,
      color: "black"
    },
    "Zonai Steering Stick": {
      info: `
  The Steering Stick is a core Zonai device that gives players real-time directional control over their builds. When activated, it translates player input into smooth turning and movement, making it essential for rideable machines such as vehicles, boats, or aircraft that require navigation during motion.

It is most effective when combined with other Zonai devices like wheels, sleds, wings, or fans. Whether you're crafting a land rover, flying glider, or aquatic skiff, the Steering Stick ensures that your build can respond dynamically to your input, providing both precision and flexibility.

For best performance, it is typically placed near the center of the structure to balance control and ensure fluid turning. Its responsiveness allows players to navigate narrow terrain paths, land precise jumps, or make evasive maneuvers during combat.

By converting static blueprints into interactive machines, the Steering Stick is what elevates Zonai constructs from passive tools to piloted vehicles. It is an indispensable part of player-driven creations, unlocking freedom of movement and creativity in open-world navigation.
      `,
      color: "black"
    },
    "Zonai Spring": {
      info: `
  The Zonai Spring is a compact yet powerful device that propels objects upward using a sudden burst of force. When activated, it instantly launches anything placed on its surface into the air, making it highly useful for solving vertical puzzles or accessing elevated areas in creative ways.

Unlike other movement devices, the Zonai Spring operates without draining energy, making it both reliable and sustainable in long-term builds. It is often used in shrines or sky islands where elevation shifts are required without the need for continuous power.

Integrating it into custom structures allows for unique mechanics such as pop-up traps, emergency escape launches, or even mobile platforms that can reach tall ledges. It can also be attached beneath carts or constructs to create bounce-enabled transport.

Thanks to its simplicity and utility, the Zonai Spring is a favorite among builders who enjoy experimentation. Whether you’re designing a vertical elevator or launching a vehicle mid-air, this spring provides consistent, efficient lift for countless creative applications.
      `,
      color: "black"
    },
    "Zonai Stabilizer": {
      info: `
 The Zonai Stabilizer is a compact device that automatically corrects the orientation of any structure it’s attached to. When a build tips over or becomes unbalanced, the Stabilizer activates to restore it to an upright position. It ensures builds remain functional and properly aligned, especially on uneven terrain.

It’s particularly valuable for tall constructs, balloon lifts, or mobile vehicles prone to flipping. Builders often attach one or more Stabilizers to maintain vertical alignment during movement or collision, greatly improving build stability without manual intervention.

Players affectionately nickname it the "roly-poly" due to its habit of rolling structures back into place. This behavior makes it a trusted safety feature in unpredictable environments, from combat zones to steep mountainsides.

Despite its subtle design, the Zonai Stabilizer plays a crucial role in reliable engineering. It doesn’t require energy and activates passively, making it a quiet but essential component in both casual and complex creations.
      `,
      color: "black"
    },
    "Zonai Balloon": {
      info: `
  The Zonai Balloon is a lift-based device that rises when exposed to heat, typically from a Flame Emitter placed below it. This allows for steady, controlled vertical travel, ideal for traversing cliffs, towers, or sky islands in a safe and gentle manner. It’s a reliable tool for vertical ascent without the need for complex machinery.

Often combined with wooden or metal platforms, the balloon can carry both players and objects. It’s commonly used in shrines and puzzle solutions that require elevation or timed lifting. The gentle speed offers time to maneuver or prepare for disembarkation.

Though it cannot steer itself, adding directional components like Steering Sticks or Fans enhances its utility. For instance, attaching a fan at an angle provides minimal directional push while still maintaining vertical lift.

As a passive solution that relies on external heat rather than battery power, the Zonai Balloon is both efficient and easy to use. It shines in situations that require upward motion without the need for aggressive propulsion or quick reactions.
      `,
      color: "black"
    },
    "Zonai Light": {
      info: `
  The Zonai Light is a compact, high-intensity device that emits a focused beam, perfect for navigating pitch-black areas like caves or the Depths. Once activated, it cuts through darkness to reveal terrain, hazards, and hidden materials. Its clear illumination is essential for visibility in underground zones.

It’s commonly mounted on mobile builds such as mining carts or exploration vehicles. Whether you're traversing gloom-covered valleys or spelunking through narrow tunnels, the Zonai Light enhances awareness and reduces the risk of ambush.

The device draws Zonai battery power when active, so energy management is important for long-term use. However, its energy cost is moderate compared to other emitter-based devices, making it practical for prolonged operations.

Lightweight, versatile, and easy to attach, the Zonai Light is a crucial tool for adventurers exploring dark or mysterious environments. It’s a staple for underground expeditions, shrine puzzles, or any build requiring reliable illumination.
      `,
      color: "black"
    }, 
    "Zonai Sled": {
      info: `
  The Zonai Sled is a basic but highly useful component designed for smooth travel across flat surfaces such as grass, sand, and snow. Thanks to its low-friction underside, it glides effortlessly, making it perfect for basic mobility or foundational builds.

It is often paired with Fans, Big Wheels, or other propulsion devices to create land vehicles like hovercrafts or quick carts. Players frequently use it to transport materials or build mobile platforms for exploration and combat.

Lightweight and easy to attach, the Sled is particularly valuable in early gameplay when parts and energy are limited. Its simplicity allows for rapid experimentation and iteration in creative designs.

With no energy cost when sliding passively and wide compatibility with other Zonai devices, the Sled is a go-to choice for efficient, flat-surface travel. It supports a wide range of utility and combat-focused builds.
      `,
      color: "black"
    },
    "Zonai Cart": {
      info: `
  The Zonai Cart is a wheeled platform optimized for movement along rails, flat terrain, or shrine tracks. It rolls smoothly and evenly, making it perfect for guiding objects or players across predefined paths in a controlled manner.

It is frequently seen in shrine puzzles or underground transit systems, where it can be activated using Fans, Springs, or simply gravity. When paired with the Steering Stick or a ramp system, it allows for reliable automation.

Compared to the Sled, the Cart offers greater balance and directional stability, especially when used for item delivery or when transporting Zonai structures. Its wheels reduce friction and allow for consistent speed.

Compact, durable, and versatile, the Cart is essential for puzzle-solving, rail-based builds, and creative transportation. Its adaptability makes it a staple in both combat-free and technical Zonai creations.
      `,
      color: "black"
    },
    "Zonai Rocket": {
      info: `
  The Zonai Rocket delivers a powerful, one-time burst of thrust when activated, propelling anything it’s attached to in a forward or upward direction. This burst makes it ideal for rapid movement or clearing vertical obstacles instantly.

It’s especially effective for launching gliders like Wings, lifting carts over gaps, or triggering puzzle mechanisms that require sudden propulsion. Once used, the Rocket detaches or burns out, so timing is critical.

Many players use it in emergency situations to escape danger or perform mid-air course corrections. It can also be set up in chain reactions with other Zonai devices for high-speed, complex interactions.

Simple, fast, and energy-efficient, the Rocket is perfect for creating high-impact mobility tools, puzzle solutions, or just having fun with creative launch experiments.
      `,
      color: "black"
    },
    "Zonai Small Wheel": {
      info: `
  The Small Wheel is a compact Zonai component that delivers fast and responsive movement across flat terrain. It’s ideal for crafting nimble vehicles that prioritize speed and efficiency over raw power.

Lightweight and low in energy consumption, it’s perfect for early-game builds or small transport tools. Players often use it in racing carts, delivery bots, or indoor puzzle vehicles.

When paired with a Steering Stick and stabilizers, it offers smooth handling and precise control. Its small size allows for better maneuverability in tight or cluttered environments.

Due to its low battery drain and easy integration, the Small Wheel is a go-to part for those designing agile, reliable, and battery-efficient Zonai machines.
      `,
      color: "black"
    },
    "Zonai Cannon": {
      info: `
  The Zonai Cannon is a powerful offensive device that launches explosive blasts in a straight line. It excels at dealing heavy damage to enemies, constructs, and terrain from a safe distance.

Activated with battery energy, it’s commonly mounted on combat vehicles, defense turrets, or mobile traps. Players rely on it for clearing enemy camps or protecting moving platforms.

Its straightforward firing pattern makes it easy to aim and devastating upon impact. When used in groups, Cannons can decimate targets in seconds.

Combining simplicity with sheer power, the Cannon is perfect for players who favor destructive builds and long-range combat strategies.
      `,
      color: "black"
    }
  };
  

// Clicking a zonai image hides the central images and displays the zonai details.
const allZonaiContainers = document.querySelectorAll('.single-zonai-container');
const middleContainers = document.querySelectorAll('.middle-column');
let lastClicked = null;

// Make sure all containers are visible initially
for (let i = 0; i < allZonaiContainers.length; i++) {
  allZonaiContainers[i].classList.remove('hidden');
  allZonaiContainers[i].classList.add('show');
}

// Add click events to each Zonai container
for (let i = 0; i < allZonaiContainers.length; i++) {
  let singleZonaiContainer = allZonaiContainers[i];

  singleZonaiContainer.addEventListener('click', (e) => {
    let nowClicked = singleZonaiContainer;

    if (nowClicked !== lastClicked) {
      if (window.innerWidth <= 1024) {
        // Mobile mode, hide all the images and show description panel when clicking a image
        for (let j = 0; j < allZonaiContainers.length; j++) {
          allZonaiContainers[j].classList.add('hidden');
          allZonaiContainers[j].classList.remove('show');
        }
      } else {
        // Desktop mode, only hide the middle images and show description panel when clicking a image
        for (let j = 0; j < middleContainers.length; j++) {
          middleContainers[j].classList.add('hidden');
          middleContainers[j].classList.remove('show');
        }
      }

      zonaiDetail.classList.remove('hidden');
      zonaiDetail.classList.add('show');

      lastClicked = nowClicked;
    } else {
      // Case 2: Clicked the same image again → Restore central containers
      for (let j = 0; j < middleContainers.length; j++) {
        middleContainers[j].classList.remove('hidden');
        middleContainers[j].classList.add('show');
      }

      zonaiDetail.classList.remove('show');
      zonaiDetail.classList.add('hidden');

      lastClicked = null;
      return;
    }

    // Extract the title and display the corresponding info
    let titleElement = nowClicked.querySelector('h3');
    if (titleElement) {
      let title = titleElement.textContent.replace(/\s+/g, ' ').trim();
      if (zonaiDetails[title]) {
        zonaiTitle.innerText = title;
        zonaiTitle.style.color = zonaiDetails[title].color;
        zonaiInfo.innerText = zonaiDetails[title].info;
        zonaiInfo.style.color = zonaiDetails[title].color;
      } else {
        zonaiTitle.innerText = "";
        zonaiInfo.innerText = "No details available.";
        zonaiInfo.style.color = "black";
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
    for (let i = 0; i < allZonaiContainers.length; i++) {
      allZonaiContainers[i].classList.remove('hidden');
      allZonaiContainers[i].classList.add('show');
    }
  } else {
    // Desktop mode, only hide the middle images and show description panel when clicking back button
    for (let i = 0; i < middleContainers.length; i++) {
      middleContainers[i].classList.remove('hidden');
      middleContainers[i].classList.add('show');
    }
  }

  zonaiDetail.classList.remove('show');
  zonaiDetail.classList.add('hidden');

  lastClicked = null;
});
