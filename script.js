// Game data structure
const games = [
    {
        title: "A Short Hike",
        category: "adventure",
        description: "A peaceful exploration game about climbing a mountain.",
        platforms: ["nintendo", "windows"],
        storeUrl: "https://www.nintendo.com/store/products/a-short-hike-switch/"
    },
    {
        title: "ABZU",
        category: "adventure",
        description: "A beautiful underwater adventure game with stunning visuals.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Animal Crossing",
        category: "life-sim",
        description: "Build and manage your own island paradise.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Baldur's Gate 3",
        category: "adventure",
        description: "An epic RPG with deep storytelling and player choice.",
        platforms: ["windows"]
    },
    {
        title: "Coffee Talk",
        category: "simulation",
        description: "Be a barista and listen to customers' stories.",
        platforms: ["windows"]
    },
    {
        title: "Coral Island",
        category: "farming",
        description: "A tropical farming sim with ocean conservation themes.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Disney Dreamlight Valley",
        category: "life-sim",
        description: "Live alongside Disney characters in this magical life simulation.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Dorfromantik",
        category: "puzzle",
        description: "Build beautiful landscapes in this tile-placement puzzle game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Feather",
        category: "adventure",
        description: "Become a bird and soar through peaceful landscapes.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Garden Galaxy",
        category: "farming",
        description: "Tend to your garden across the cosmos in this space farming game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "House Flipper",
        category: "simulation",
        description: "Renovate and sell houses in this renovation simulator.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Infinity Nikki",
        category: "adventure",
        description: "A fashion-focused adventure game with stunning visuals.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Katamari Damacy",
        category: "puzzle",
        description: "Roll up everything in sight in this quirky puzzle game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Legend of Zelda Series",
        category: "adventure",
        description: "Iconic adventure games filled with exploration and puzzle-solving.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Minecraft",
        category: "adventure",
        description: "A sandbox game where you can build and explore infinite worlds.",
        platforms: ["windows", "playstation", "xbox", "nintendo", "android", "iphone"]
    },
    {
        title: "Moonglow Bay",
        category: "life-sim",
        description: "Run a fishing business in this slice-of-life fishing RPG.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "My Time at Sandrock",
        category: "farming",
        description: "Build a workshop and help develop a desert community.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Outer Wilds",
        category: "adventure",
        description: "Explore a mysterious solar system trapped in a time loop.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Palia",
        category: "life-sim",
        description: "A cozy MMO life simulation game with farming and socializing.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "PowerWash Simulator",
        category: "simulation",
        description: "Find satisfaction in cleaning with a power washer.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Sable",
        category: "adventure",
        description: "A coming-of-age tale in a beautiful desert world.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Spiritfarer",
        category: "adventure",
        description: "A cozy management game about helping spirits cross over.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Stardew Valley",
        category: "farming",
        description: "A peaceful farming simulation game where you inherit your grandfather's old farm plot.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Sticky Business",
        category: "puzzle",
        description: "Run your own sticker shop in this cozy business simulation game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Strange Horticulture",
        category: "puzzle",
        description: "Run a mysterious plant shop in this atmospheric puzzle game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Stray",
        category: "adventure",
        description: "Explore a cybercity as a cat in this atmospheric adventure.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "The Sims 4",
        category: "life-sim",
        description: "Create and control virtual people in this life simulation game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Tiny Glade",
        category: "puzzle",
        description: "A peaceful garden-building puzzle game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Unpacking",
        category: "puzzle",
        description: "Tell a story through unpacking boxes and arranging belongings.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Wylde Flowers",
        category: "life-sim",
        description: "A cozy life sim with witchcraft and farming.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Yonder: The Cloud Catcher Chronicles",
        category: "adventure",
        description: "An open-world adventure game with crafting and exploration.",
        platforms: ["nintendo", "windows"]
    }
];

// Add these games to the games array
const additionalGames = [
    {
        title: "Against the Storm",
        category: "simulation",
        description: "A post-apocalyptic city builder with roguelite elements.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Amber Isle",
        category: "adventure",
        description: "A cozy exploration and crafting adventure.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Botany Manor",
        category: "puzzle",
        description: "A peaceful puzzle game about growing plants and solving botanical mysteries.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Calico",
        category: "life-sim",
        description: "A community sim game about rebuilding a magical town and making animal friends.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Cat Cafe Manager",
        category: "simulation",
        description: "Run your own cat café while helping cats find forever homes.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Chef Life",
        category: "simulation",
        description: "Run your own restaurant in this detailed cooking simulation.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Cozy Grove",
        category: "life-sim",
        description: "A life-sim game about camping on a haunted island and helping ghost bears.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Critter Cafe",
        category: "simulation",
        description: "Manage a café while taking care of adorable critters.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Cult of the Lamb",
        category: "simulation",
        description: "Build and manage your own cult in this dark yet cute game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Dave the Diver",
        category: "simulation",
        description: "Manage an underwater restaurant while exploring the depths.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Dinkum",
        category: "life-sim",
        description: "Build a life in the Australian outback.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Donut County",
        category: "puzzle",
        description: "Play as a hole in the ground and swallow up a town.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "DragonVale",
        category: "simulation",
        description: "Build and manage your own dragon park.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Epic Chef",
        category: "simulation",
        description: "Cook, farm, and duel other chefs in this quirky game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Fields of Mistria",
        category: "farming",
        description: "Farm and explore in a magical world.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Good Pizza, Great Pizza",
        category: "simulation",
        description: "Run your own pizzeria and become the best pizza chef.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Gourdlets",
        category: "puzzle",
        description: "A cute puzzle game featuring adorable gourd creatures.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Graveyard Keeper",
        category: "simulation",
        description: "Manage a medieval cemetery in this dark humor simulation.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Harvest Moon",
        category: "farming",
        description: "The classic farming simulation that started it all.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Hogwarts Legacy",
        category: "adventure",
        description: "Live out your wizarding world dreams in this open-world RPG.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Hokko Life",
        category: "life-sim",
        description: "Build and customize your own cozy community.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Kynseed",
        category: "life-sim",
        description: "A sandbox life sim where your choices affect future generations.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Littlewood",
        category: "life-sim",
        description: "Rebuild the world after saving it in this peaceful town-building game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Luna Island",
        category: "life-sim",
        description: "Build your dream island getaway.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Mineko's Night Market",
        category: "simulation",
        description: "Craft items and run a market stall in this cat-filled adventure.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Portal 2",
        category: "puzzle",
        description: "A beloved puzzle game with mind-bending mechanics.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Roots of Pacha",
        category: "farming",
        description: "Build a stone age community through farming and innovation.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Rune Factory",
        category: "farming",
        description: "Combine farming with fantasy RPG elements.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Skyrim",
        category: "adventure",
        description: "An epic fantasy RPG with endless possibilities.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Slime Rancher",
        category: "simulation",
        description: "Farm cute slimes in this charming first-person game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Snufkin: Melody of Moominvalley",
        category: "adventure",
        description: "A peaceful musical adventure game set in the charming world of the Moomins.",
        platforms: ["nintendo", "windows"],
        storeUrl: "https://store.steampowered.com/app/2361840/Snufkin_Melody_of_Moominvalley/"
    },
    {
        title: "Sun Haven",
        category: "farming",
        description: "A magical farming RPG with multiple realms to explore.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Super Monkey Ball",
        category: "puzzle",
        description: "Guide monkeys in balls through challenging courses.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
        category: "adventure",
        description: "A retro-style beat 'em up with the famous turtles.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Tetris",
        category: "puzzle",
        description: "The classic puzzle game that never gets old.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "The Flame in the Flood",
        category: "adventure",
        description: "Survive a journey down a procedurally generated river.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Touhou Mystia's Izakaya",
        category: "simulation",
        description: "Run a magical Japanese pub in this cooking simulation.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Townscaper",
        category: "simulation",
        description: "Build beautiful towns with no pressure or goals.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Winkeltje",
        category: "simulation",
        description: "Run your own medieval shop in this merchant simulator.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Wingspan",
        category: "puzzle",
        description: "A beautiful digital adaptation of the bird-collecting board game.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Yoshi's Crafted World",
        category: "adventure",
        description: "A crafted adventure in Yoshi's handmade world.",
        platforms: ["nintendo", "windows"]
    },
    {
        title: "Galaxy Burger",
        category: "cooking",
        description: "A stress-free cooking game that lets you relax! Cook up burgers for mecha cats and aliens. Play solo or with up to 7 friends!",
        platforms: ["nintendo", "windows"],
        gameUrl: "#"
    },
    {
        title: "I Was a Teenage Exocolonist",
        category: "life-sim",
        description: "A narrative RPG about growing up on an alien planet, featuring deck-building mechanics and multiple storylines.",
        platforms: ["windows", "playstation", "nintendo"],
        storeUrl: "https://store.steampowered.com/app/1148760/I_Was_a_Teenage_Exocolonist/"
    },
    {
        title: "Minami Lane",
        category: "simulation",
        description: "A cozy Japanese convenience store management game where you run your own konbini, stock shelves, and become part of the community.",
        platforms: ["windows"],
        storeUrl: "https://store.steampowered.com/app/2678990/Minami_Lane/"
    },
    {
        title: "TOEM",
        category: "adventure",
        description: "A hand-drawn adventure game where you take photos and help people in a charming black and white world.",
        platforms: ["nintendo", "playstation", "windows"],
        storeUrl: "https://store.steampowered.com/app/1307580/TOEM/"
    }
];

// Add these games to your existing games array
games.push(...additionalGames);

// Update the categories for open world games
const gamesToUpdate = [
    "Sticky Business",
    "Minecraft",
    "Infinity Nikki",
    "The Sims 4",
    "Stardew Valley",
    "ABZU",
    "Feather",
    "Yonder: The Cloud Catcher Chronicles",
    "Legend of Zelda Series",
    "Animal Crossing",
    "Garden Galaxy"
];

// Update open world categories
games.forEach(game => {
    if (gamesToUpdate.includes(game.title)) {
        game.category = "open-world";
    }
});

// Update the categories for companionship/feeling lonely games
const companionshipGames = [
    "Baldur's Gate 3",
    "Spiritfarer",
    "Outer Wilds",
    "Disney Dreamlight Valley",
    "A Short Hike",
    "My Time at Sandrock",
    "Sable",
    "Palia",
    "Katamari Damacy",
    "Tiny Glade",
    "Dorfromantik",
    "House Flipper",
    "Pixadom",
    "Coral Island",
    "Moonglow Bay",
    "Hogwarts Legacy",
    "Botany Manor"
];

// Update companionship categories
games.forEach(game => {
    if (companionshipGames.includes(game.title)) {
        game.category = "companionship";
    }
});

// Rainy category
const rainyGames = [
    'The Flame in the Flood',
    'Against the Storm',
    'Coffee Talk'
]

// Update rainy category
games.forEach(game => {
    if (rainyGames.includes(game.title)) {
        game.category = "rainy-day";
    }
})
// Cooking Games
const cookingGames = [
    'Touhou Mystia\'s Izakaya',
    'Chef Life',
    'Good Pizza, Great Pizza',
    'Galaxy Burger',
    'Epic Chef'
]

// Update cooking category
games.forEach(game => {
    if (cookingGames.includes(game.title)) {
        game.category = "cooking";
    }
})
// Fan favorite Games
const lovedGames = [
    'Infinity Nikki',
    'Skyrim',
    'I Was a Teenage Exocolonist',
    'Stray',
    'Cult of the Lamb',
    'Fields of Mistria',
    'Strange Horticulture',
    'Coral Island',
    'Wylde Flowers',
    'My Time at Sandrock',
    'Minami Lane'
]

// Update loved category
games.forEach(game => {
    if (lovedGames.includes(game.title)) {
        game.category = "fan-favorites";
    }
})

// Sort the array alphabetically by title
games.sort((a, b) => a.title.localeCompare(b.title));

// Function to create game cards
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.category = game.category;
    
    const platformsHTML = game.platforms ? game.platforms.map(platform => `
        <img 
            src="/assets/console_icons/${platform}.svg" 
            alt="${platform}" 
            class="platform-icon"
            title="${platform.charAt(0).toUpperCase() + platform.slice(1)}"
        >
    `).join('') : '';
    
    card.innerHTML = `
        <a href="${game.storeUrl}" class="game-card-link" target="_blank" rel="noopener noreferrer">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <div class="platform-icons">
                ${platformsHTML}
            </div>
        </a>
    `;
    
    return card;
}

// Function to filter games
function filterGames(category) {
    const gameCards = document.querySelectorAll('.game-card');
    const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
    
    gameCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = category === 'all' || card.dataset.category === category;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create the arrow animation
    gsap.to('.indicator', {
        scrollTrigger: {
            trigger: '.filters',
            start: 'top center',
            end: 'top top',
            scrub: true,
            onEnter: () => gsap.to('.indicator', {
                opacity: 0,
                duration: 0.3
            }),
            onLeaveBack: () => gsap.to('.indicator', {
                opacity: 1,
                duration: 0.3
            })
        }
    });

    // Populate game grid
    const gameGrid = document.querySelector('.game-grid');
    games.forEach(game => {
        gameGrid.appendChild(createGameCard(game));
    });

    // Set up search functionality
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', () => {
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        filterGames(activeCategory);
    });

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter games
            filterGames(button.dataset.category);
        });
    });

    // Set up FAQ toggles
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Add click handlers for dropdown category links
    const categoryLinks = document.querySelectorAll('.dropdown-content a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            
            // Remove active class from all filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to matching filter button
            const matchingButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
            if (matchingButton) {
                matchingButton.classList.add('active');
            }
            
            // Filter the games
            filterGames(category);
        });
    });
}); 

// Example platform assignments for some games
const platformAssignments = {
    "Animal Crossing": ["nintendo"],
    "Baldur's Gate 3": ["windows", "playstation"],
    "Minecraft": ["windows", "playstation", "xbox", "nintendo", "android", "iphone"],
    "Stardew Valley": ["windows", "playstation", "xbox", "nintendo", "android", "iphone"],
    "The Sims 4": ["windows", "playstation", "xbox"],
    "Legend of Zelda Series": ["nintendo"],
    "Hogwarts Legacy": ["windows", "playstation", "xbox", "nintendo"],
    // Add more games...
};

// Update the games array with platform information
games.forEach(game => {
    if (platformAssignments[game.title]) {
        game.platforms = platformAssignments[game.title];
    }
}); 

// Example store URLs for games (prioritizing Steam)
const storeUrls = {
    // Nintendo-exclusive games
    "Animal Crossing": "https://www.nintendo.com/store/products/animal-crossing-new-horizons-switch/",
    "Legend of Zelda Series": "https://www.nintendo.com/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
    "Yoshi's Crafted World": "https://www.nintendo.com/store/products/yoshis-crafted-world-switch/",
    
    // Steam games
    "A Short Hike": "https://store.steampowered.com/app/1055540/A_Short_Hike/",
    "ABZU": "https://store.steampowered.com/app/384190/ABZU/",
    "Against the Storm": "https://store.steampowered.com/app/1336490/Against_the_Storm/",
    "Baldur's Gate 3": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "Botany Manor": "https://store.steampowered.com/app/1425300/Botany_Manor/",
    "Calico": "https://store.steampowered.com/app/1112890/Calico/",
    "Cat Cafe Manager": "https://store.steampowered.com/app/1800250/Cat_Cafe_Manager/",
    "Coffee Talk": "https://store.steampowered.com/app/914800/Coffee_Talk/",
    "Coral Island": "https://store.steampowered.com/app/1158160/Coral_Island/",
    "Cozy Grove": "https://store.steampowered.com/app/1458100/Cozy_Grove/",
    "Cult of the Lamb": "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/",
    "Dave the Diver": "https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/",
    "Disney Dreamlight Valley": "https://store.steampowered.com/app/1401590/Disney_Dreamlight_Valley/",
    "Dinkum": "https://store.steampowered.com/app/1062520/Dinkum/",
    "Donut County": "https://store.steampowered.com/app/702670/Donut_County/",
    "Dorfromantik": "https://store.steampowered.com/app/1455840/Dorfromantik/",
    "Epic Chef": "https://store.steampowered.com/app/1312960/Epic_Chef/",
    "Feather": "https://store.steampowered.com/app/545040/Feather/",
    "Garden Galaxy": "https://store.steampowered.com/app/1970460/Garden_Galaxy/",
    "Good Pizza, Great Pizza": "https://store.steampowered.com/app/759470/Good_Pizza_Great_Pizza/",
    "Graveyard Keeper": "https://store.steampowered.com/app/599140/Graveyard_Keeper/",
    "Hogwarts Legacy": "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    "Hokko Life": "https://store.steampowered.com/app/824000/Hokko_Life/",
    "House Flipper": "https://store.steampowered.com/app/613100/House_Flipper/",
    "I Was a Teenage Exocolonist": "https://store.steampowered.com/app/1435760/I_Was_a_Teenage_Exocolonist/",
    "Katamari Damacy": "https://store.steampowered.com/app/848350/Katamari_Damacy_REROLL/",
    "Kynseed": "https://store.steampowered.com/app/758870/Kynseed/",
    "Littlewood": "https://store.steampowered.com/app/894940/Littlewood/",
    "Moonglow Bay": "https://store.steampowered.com/app/1361400/Moonglow_Bay/",
    "My Time at Sandrock": "https://store.steampowered.com/app/1084600/My_Time_at_Sandrock/",
    "Outer Wilds": "https://store.steampowered.com/app/753640/Outer_Wilds/",
    "Palia": "https://store.steampowered.com/app/1666730/Palia/",
    "Portal 2": "https://store.steampowered.com/app/620/Portal_2/",
    "PowerWash Simulator": "https://store.steampowered.com/app/1290000/PowerWash_Simulator/",
    "Roots of Pacha": "https://store.steampowered.com/app/1245560/Roots_of_Pacha/",
    "Sable": "https://store.steampowered.com/app/757310/Sable/",
    "Skyrim": "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
    "Slime Rancher": "https://store.steampowered.com/app/433340/Slime_Rancher/",
    "Spiritfarer": "https://store.steampowered.com/app/972660/Spiritfarer_Farewell_Edition/",
    "Stardew Valley": "https://store.steampowered.com/app/413150/Stardew_Valley/",
    "Sticky Business": "https://store.steampowered.com/app/2580150/Sticky_Business/",
    "Strange Horticulture": "https://store.steampowered.com/app/1574580/Strange_Horticulture/",
    "Stray": "https://store.steampowered.com/app/1332010/Stray/",
    "Sun Haven": "https://store.steampowered.com/app/1432860/Sun_Haven/",
    "The Flame in the Flood": "https://store.steampowered.com/app/318600/The_Flame_in_the_Flood/",
    "The Sims 4": "https://store.steampowered.com/app/1222670/The_Sims_4/",
    "Tiny Glade": "https://store.steampowered.com/app/2198150/Tiny_Glade/",
    "Touhou Mystia's Izakaya": "https://store.steampowered.com/app/2280250/Touhou_Mystias_Izakaya/",
    "Townscaper": "https://store.steampowered.com/app/1291340/Townscaper/",
    "Unpacking": "https://store.steampowered.com/app/1135690/Unpacking/",
    "Wingspan": "https://store.steampowered.com/app/1054490/Wingspan/",
    
    // Other platform-specific games
    "Minecraft": "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc",
    "Minami Lane": "https://store.steampowered.com/app/2678990/Minami_Lane/",
    "TOEM": "https://store.steampowered.com/app/1307580/TOEM/"
};

// Update the games array with store URLs
games.forEach(game => {
    if (storeUrls[game.title]) {
        game.storeUrl = storeUrls[game.title];
    } else {
        // Default to a search if no specific URL is provided
        game.storeUrl = `https://www.google.com/search?q=buy+${encodeURIComponent(game.title)}+game`;
    }
}); 

// Add autism-friendly category
const autismFriendlyGames = [
    'Donut County',
    'Katamari Damacy',
    'PowerWash Simulator',
    'Unpacking',
    "Yoshi's Crafted World",
    'Gourdlets',
    'Townscaper',
    'Minecraft',
    'Legend of Zelda Series',
    'Tetris',
    'Garden Galaxy',
    'Super Monkey Ball',
    'Snufkin: Melody of Moominvalley'
];

// Update autism-friendly category
games.forEach(game => {
    if (autismFriendlyGames.includes(game.title)) {
        game.category = "autism-friendly";
    }
}); 

// Add beginner-friendly category
const beginnerFriendlyGames = [
    'Wylde Flowers',
    'The Sims 4',
    'Roots of Pacha',
    'Animal Crossing',
    'Yonder: The Cloud Catcher Chronicles',
    'Rune Factory',
    'Graveyard Keeper',
    'Luna Island',
    'Dave the Diver',
    'Coral Island',
    'Dinkum',
    'Farmville',
    'Wingspan',
    'DragonVale'
];

// Update beginner-friendly category
games.forEach(game => {
    if (beginnerFriendlyGames.includes(game.title)) {
        game.category = "beginner-friendly";
    }
}); 

// Add non-farming category
const nonFarmingGames = [
    'Calico',
    'Critter Cafe',
    'Kynseed',
    'Cat Cafe Manager',
    'Amber Isle',
    'Sticky Business',
    'Chef Life',
    'Winkeltje',
    'A Short Hike'
];

// Update non-farming category
games.forEach(game => {
    if (nonFarmingGames.includes(game.title)) {
        game.category = "non-farming";
    }
}); 

// Add animal-crossing-like category
const animalCrossingLikeGames = [
    'Sun Haven',
    'Kynseed',
    'Cozy Grove',
    'Slime Rancher',
    'Wylde Flowers',
    'Palia',
    'Harvest Moon',
    'Littlewood',
    'Luna Island',
    'Hokko Life',
    'Rune Factory',
    'Tiny Glade'
];

// Update animal-crossing-like category
games.forEach(game => {
    if (animalCrossingLikeGames.includes(game.title)) {
        game.category = "animal-crossing-like";
    }
}); 

// Add must-play category
const mustPlayGames = [
    'Spiritfarer',
    'TOEM'
];

// Update must-play category
games.forEach(game => {
    if (mustPlayGames.includes(game.title)) {
        game.category = "must-play";
    }
}); 