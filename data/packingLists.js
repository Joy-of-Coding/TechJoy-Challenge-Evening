// Packing Lists Data - Organized by campsite type and activities
const packingListsData = {
    lake: {
        essentials: [
            "Tent with rainfly",
            "Sleeping bags",
            "Sleeping pads",
            "Camping chairs",
            "Headlamps/flashlights",
            "First aid kit",
            "Bug spray",
            "Sunscreen (SPF 30+)",
            "Water bottles",
            "Cooler with ice"
        ],
        water_activities: [
            "Swimsuits",
            "Towels",
            "Water shoes",
            "Life jackets",
            "Fishing gear (rods, tackle, bait)",
            "Boat/kayak (if bringing your own)",
            "Paddles",
            "Waterproof bags",
            "Fishing license",
            "Fish cleaning supplies"
        ],
        clothing: [
            "Quick-dry clothing",
            "Waterproof jacket",
            "Hat for sun protection",
            "Comfortable hiking shoes",
            "Extra socks",
            "Warm layers for evenings",
            "Rain gear"
        ],
        cooking: [
            "Portable stove",
            "Fuel",
            "Cooking utensils",
            "Pots and pans",
            "Plates and cups",
            "Food storage containers",
            "Matches/lighter",
            "Campfire cooking grate"
        ]
    },

    mountain: {
        essentials: [
            "4-season tent",
            "Cold-weather sleeping bags",
            "Insulated sleeping pads",
            "Trekking poles",
            "Headlamps with extra batteries",
            "Comprehensive first aid kit",
            "Emergency shelter",
            "Water purification system",
            "High-calorie food",
            "Bear canister (if required)"
        ],
        hiking_climbing: [
            "Hiking boots with ankle support",
            "Climbing gear (if applicable)",
            "Helmet",
            "Harness and ropes",
            "Carabiners",
            "Map and compass",
            "GPS device",
            "Emergency beacon",
            "Multi-tool",
            "Duct tape"
        ],
        clothing: [
            "Moisture-wicking base layers",
            "Insulating mid-layers",
            "Waterproof outer shell",
            "Warm hat and gloves",
            "Hiking socks (multiple pairs)",
            "Gaiters",
            "Sunglasses with UV protection",
            "Buff or neck gaiter"
        ],
        safety: [
            "Weather radio",
            "Emergency blanket",
            "Fire starter",
            "Whistle",
            "Signal mirror",
            "Extra batteries",
            "Emergency contact information",
            "Altitude sickness medication"
        ]
    },

    forest: {
        essentials: [
            "Tent with good ventilation",
            "Sleeping bags appropriate for season",
            "Sleeping pads",
            "Camping chairs",
            "Headlamps/flashlights",
            "First aid kit",
            "Insect repellent",
            "Sunscreen",
            "Water bottles",
            "Food storage (bear-proof if needed)"
        ],
        nature_exploration: [
            "Binoculars",
            "Field guides (birds, plants, mushrooms)",
            "Nature journal",
            "Camera with extra batteries",
            "Magnifying glass",
            "Plant identification app",
            "Trail maps",
            "Compass"
        ],
        clothing: [
            "Long pants and long sleeves (for bug protection)",
            "Hiking boots or sturdy shoes",
            "Rain gear",
            "Hat for sun protection",
            "Extra layers for temperature changes",
            "Comfortable walking shoes",
            "Socks (multiple pairs)"
        ],
        comfort: [
            "Hammock",
            "Portable speaker (for nature sounds)",
            "Books or e-reader",
            "Journal and pen",
            "Meditation cushion",
            "Portable chair",
            "Camping table"
        ]
    },

    beach: {
        essentials: [
            "Beach tent or canopy",
            "Sleeping bags",
            "Sleeping pads",
            "Camping chairs",
            "Headlamps/flashlights",
            "First aid kit",
            "Sunscreen (waterproof, SPF 50+)",
            "Water bottles",
            "Cooler with ice",
            "Beach towels"
        ],
        water_sports: [
            "Swimsuits (multiple)",
            "Rash guards",
            "Water shoes",
            "Snorkeling gear",
            "Surfboard (if surfing)",
            "Beach umbrella",
            "Beach chairs",
            "Boogie boards",
            "Waterproof phone case",
            "Beach games"
        ],
        beach_activities: [
            "Beach volleyball",
            "Frisbee",
            "Beach ball",
            "Sandcastle building tools",
            "Beach blanket",
            "Portable speaker",
            "Beach umbrella",
            "Beach cart"
        ],
        sun_protection: [
            "Wide-brimmed hat",
            "Sunglasses with UV protection",
            "UPF clothing",
            "Aloe vera gel",
            "Lip balm with SPF",
            "Shade structure",
            "Beach umbrella",
            "Cooling towels"
        ]
    }
};

// Activity-specific packing suggestions
const activityPackingSuggestions = {
    fishing: [
        "Fishing rods and reels",
        "Tackle box with various lures",
        "Fishing line",
        "Bait (live or artificial)",
        "Fishing license",
        "Fish cleaning knife",
        "Fish measuring device",
        "Fishing gloves",
        "Polarized sunglasses",
        "Fishing vest or tackle bag"
    ],

    hiking: [
        "Hiking boots with good traction",
        "Trekking poles",
        "Day pack",
        "Trail maps",
        "Compass or GPS",
        "Extra water",
        "High-energy snacks",
        "Emergency whistle",
        "Multi-tool",
        "Lightweight rain jacket"
    ],

    swimming: [
        "Swimsuits",
        "Quick-dry towels",
        "Water shoes",
        "Goggles",
        "Swim cap (if needed)",
        "Waterproof sunscreen",
        "Beach umbrella",
        "Floatation devices",
        "Waterproof bag for valuables",
        "Change of clothes"
    ],

    boating: [
        "Life jackets for everyone",
        "Paddles or oars",
        "Boat safety kit",
        "Boat registration (if required)",
        "Anchor and rope",
        "Bilge pump",
        "Emergency flares",
        "Weather radio",
        "Marine GPS",
        "Boat cleaning supplies"
    ],

    wildlife_watching: [
        "Binoculars",
        "Camera with zoom lens",
        "Field guides",
        "Notebook and pen",
        "Quiet clothing (earth tones)",
        "Patience and time",
        "Wildlife identification app",
        "Spotting scope (optional)",
        "Blind or camouflage netting",
        "Respectful distance"
    ],

    photography: [
        "Camera with extra batteries",
        "Multiple memory cards",
        "Tripod",
        "Lens cleaning kit",
        "Polarizing filter",
        "Neutral density filters",
        "Remote shutter release",
        "Camera bag",
        "Laptop for editing",
        "Portable hard drive"
    ],

    stargazing: [
        "Telescope or binoculars",
        "Star charts or astronomy app",
        "Red flashlight",
        "Warm clothing",
        "Comfortable chair",
        "Hot drinks",
        "Star photography equipment",
        "Planisphere",
        "Astronomy guidebook",
        "Patience for clear nights"
    ]
}; 