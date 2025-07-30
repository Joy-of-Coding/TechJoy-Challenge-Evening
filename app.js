// Campsites Data - Embedded directly for local file access
const campsitesData = [
    {
        "id": 1,
        "name": "Crystal Lake Campground",
        "location": "Rocky Mountain National Park, Colorado",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "$25/night",
        "capacity": "Up to 6 people",
        "description": "Nestled beside the pristine Crystal Lake, this campground offers stunning mountain views and excellent fishing opportunities. The crystal-clear waters reflect the surrounding peaks, creating a picture-perfect camping experience.",
        "amenities": [
            "Boat ramp",
            "Fishing dock",
            "Clean restrooms",
            "Picnic tables",
            "Fire rings",
            "Drinking water",
            "Shower facilities"
        ],
        "activities": [
            "Fishing",
            "Boating",
            "Swimming",
            "Hiking",
            "Wildlife watching",
            "Photography"
        ],
        "type": "lake",
        "tags": ["lake", "fishing", "boating", "swimming"]
    },
    {
        "id": 2,
        "name": "Alpine Peak Base Camp",
        "location": "Mount Rainier National Park, Washington",
        "image": "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/aramark-parent/yosemite-national-park/site-images/climber-with-helmet-and-gear-ascends-a-steep-rock-face-yosemite-national-park-lodging-and-activities-california-united-states.jpg?cropY=534&cropW=4000&cropH=1460&width=800&height=292",
        "rating": 4.9,
        "price": "$30/night",
        "capacity": "Up to 4 people",
        "description": "High-altitude camping at the base of majestic peaks. This campsite offers challenging hiking trails, breathtaking vistas, and the opportunity to experience alpine ecosystems up close.",
        "amenities": [
            "Bear-proof storage",
            "Mountain guides available",
            "Emergency shelter",
            "Weather station",
            "Trail maps",
            "First aid station"
        ],
        "activities": [
            "Mountain climbing",
            "Rock climbing",
            "Hiking",
            "Wildlife photography",
            "Stargazing",
            "Alpine skiing (winter)"
        ],
        "type": "mountain",
        "tags": ["mountain", "climbing", "hiking", "alpine"]
    },
    {
        "id": 3,
        "name": "Whispering Pines Forest Retreat",
        "location": "Redwood National Park, California",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "$20/night",
        "capacity": "Up to 8 people",
        "description": "Immerse yourself in the ancient redwood forest. Towering trees create a natural cathedral, while the forest floor teems with diverse wildlife and plant life.",
        "amenities": [
            "Forest trails",
            "Educational center",
            "Bird watching stations",
            "Campfire areas",
            "Restrooms",
            "Visitor center"
        ],
        "activities": [
            "Forest hiking",
            "Bird watching",
            "Nature photography",
            "Mushroom foraging",
            "Meditation",
            "Educational tours"
        ],
        "type": "forest",
        "tags": ["forest", "hiking", "wildlife", "nature"]
    },
    {
        "id": 4,
        "name": "Sunset Beach Camp",
        "location": "Big Sur, California",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "$35/night",
        "capacity": "Up to 6 people",
        "description": "Oceanfront camping with spectacular sunset views. The sound of crashing waves and salty ocean breeze create the perfect beach camping experience.",
        "amenities": [
            "Beach access",
            "Shower facilities",
            "Tide pool viewing",
            "Beach volleyball",
            "BBQ grills",
            "Restrooms"
        ],
        "activities": [
            "Swimming",
            "Surfing",
            "Beach combing",
            "Tide pool exploration",
            "Sunset watching",
            "Beach games"
        ],
        "type": "beach",
        "tags": ["beach", "ocean", "swimming", "surfing"]
    },
    {
        "id": 5,
        "name": "Emerald Lake Vista",
        "location": "Glacier National Park, Montana",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "$28/night",
        "capacity": "Up to 5 people",
        "description": "Perched above the stunning Emerald Lake, this campsite offers panoramic views of glacier-carved valleys and crystal-clear alpine waters.",
        "amenities": [
            "Lake access",
            "Fishing permits",
            "Boat rentals",
            "Mountain views",
            "Clean facilities",
            "Ranger station"
        ],
        "activities": [
            "Lake fishing",
            "Kayaking",
            "Mountain biking",
            "Wildlife viewing",
            "Photography",
            "Stargazing"
        ],
        "type": "lake",
        "tags": ["lake", "mountain", "fishing", "kayaking"]
    },
    {
        "id": 6,
        "name": "Thunder Ridge Summit",
        "location": "Appalachian Trail, Virginia",
        "image": "https://www.simplyawesometrips.com/wp-content/uploads/2024/12/wildflowers-upper-hawksbill-trail-shenandoah-national-park1.jpg",
        "rating": 4.5,
        "price": "$15/night",
        "capacity": "Up to 3 people",
        "description": "High-elevation camping along the famous Appalachian Trail. Experience the thrill of mountain camping with stunning ridge-top views and challenging terrain.",
        "amenities": [
            "Trail access",
            "Water sources",
            "Primitive camping",
            "Emergency contacts",
            "Trail register"
        ],
        "activities": [
            "Long-distance hiking",
            "Summit bagging",
            "Wildlife tracking",
            "Trail running",
            "Backpacking",
            "Mountain photography"
        ],
        "type": "mountain",
        "tags": ["mountain", "hiking", "backpacking", "trail"]
    },
    {
        "id": 7,
        "name": "Mystic Grove Campground",
        "location": "Olympic National Park, Washington",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "$22/night",
        "capacity": "Up to 7 people",
        "description": "Ancient temperate rainforest camping surrounded by moss-covered trees and fern-covered forest floors. Experience the magic of the Pacific Northwest.",
        "amenities": [
            "Rainforest trails",
            "Moss garden",
            "Educational displays",
            "Covered picnic areas",
            "Restrooms",
            "Ranger talks"
        ],
        "activities": [
            "Rainforest hiking",
            "Moss photography",
            "Fungus identification",
            "Nature journaling",
            "Forest bathing",
            "Educational walks"
        ],
        "type": "forest",
        "tags": ["forest", "rainforest", "nature", "hiking"]
    },
    {
        "id": 8,
        "name": "Coral Cove Beach Camp",
        "location": "Florida Keys, Florida",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.4,
        "price": "$40/night",
        "capacity": "Up to 6 people",
        "description": "Tropical beach camping with coral reef access. Crystal clear waters and white sand beaches make this a paradise for water enthusiasts.",
        "amenities": [
            "Beachfront access",
            "Snorkeling gear rental",
            "Tiki huts",
            "Beach chairs",
            "Shower facilities",
            "Marine life center"
        ],
        "activities": [
            "Snorkeling",
            "Scuba diving",
            "Beach volleyball",
            "Coral reef exploration",
            "Tropical bird watching",
            "Sunset kayaking"
        ],
        "type": "beach",
        "tags": ["beach", "tropical", "snorkeling", "coral"]
    },
    {
        "id": 9,
        "name": "Serenity Lake Lodge",
        "location": "Adirondack Mountains, New York",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "$32/night",
        "capacity": "Up to 8 people",
        "description": "Peaceful lakeside camping in the heart of the Adirondacks. Perfect for families seeking a quiet retreat with excellent fishing and boating opportunities.",
        "amenities": [
            "Private lake access",
            "Fishing boat rentals",
            "Family picnic areas",
            "Playground",
            "Camp store",
            "Laundry facilities"
        ],
        "activities": [
            "Family fishing",
            "Paddle boating",
            "Nature walks",
            "Campfire stories",
            "Wildlife watching",
            "Family games"
        ],
        "type": "lake",
        "tags": ["lake", "family", "fishing", "boating"]
    },
    {
        "id": 10,
        "name": "Eagle's Nest Peak",
        "location": "Grand Teton National Park, Wyoming",
        "image": "https://images.squarespace-cdn.com/content/v1/61eb640f60360a71b6ced4e7/a8c60ae8-71ac-407d-b89a-8f78995a539a/IMG_4977.jpg",
        "rating": 4.9,
        "price": "$35/night",
        "capacity": "Up to 4 people",
        "description": "High-altitude camping with spectacular views of the Teton Range. Experience the raw beauty of the Rocky Mountains in this pristine alpine setting.",
        "amenities": [
            "Mountain views",
            "Alpine meadows",
            "Wildlife viewing areas",
            "Emergency equipment",
            "Weather monitoring",
            "Ranger patrols"
        ],
        "activities": [
            "Alpine hiking",
            "Wildlife photography",
            "Mountain climbing",
            "Alpine flower viewing",
            "Stargazing",
            "Backcountry skiing"
        ],
        "type": "mountain",
        "tags": ["mountain", "alpine", "wildlife", "climbing"]
    }
];

// Packing Lists Data - Embedded directly for local file access
const packingListsData = {
    "lake": {
        "essentials": [
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
        "water_activities": [
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
        "clothing": [
            "Quick-dry clothing",
            "Waterproof jacket",
            "Hat for sun protection",
            "Comfortable hiking shoes",
            "Extra socks",
            "Warm layers for evenings",
            "Rain gear"
        ],
        "cooking": [
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
    "mountain": {
        "essentials": [
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
        "hiking_climbing": [
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
        "clothing": [
            "Moisture-wicking base layers",
            "Insulating mid-layers",
            "Waterproof outer shell",
            "Warm hat and gloves",
            "Hiking socks (multiple pairs)",
            "Gaiters",
            "Sunglasses with UV protection",
            "Buff or neck gaiter"
        ],
        "safety": [
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
    "forest": {
        "essentials": [
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
        "nature_exploration": [
            "Binoculars",
            "Field guides (birds, plants, mushrooms)",
            "Nature journal",
            "Camera with extra batteries",
            "Magnifying glass",
            "Plant identification app",
            "Trail maps",
            "Compass"
        ],
        "clothing": [
            "Long pants and long sleeves (for bug protection)",
            "Hiking boots or sturdy shoes",
            "Rain gear",
            "Hat for sun protection",
            "Extra layers for temperature changes",
            "Comfortable walking shoes",
            "Socks (multiple pairs)"
        ],
        "comfort": [
            "Hammock",
            "Portable speaker (for nature sounds)",
            "Books or e-reader",
            "Journal and pen",
            "Meditation cushion",
            "Portable chair",
            "Camping table"
        ]
    },
    "beach": {
        "essentials": [
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
        "water_sports": [
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
        "beach_activities": [
            "Beach volleyball",
            "Frisbee",
            "Beach ball",
            "Sandcastle building tools",
            "Beach blanket",
            "Portable speaker",
            "Beach umbrella",
            "Beach cart"
        ],
        "sun_protection": [
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

const activityPackingSuggestions = {
    "fishing": [
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
    "hiking": [
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
    "swimming": [
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
    "boating": [
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
    "wildlife_watching": [
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
    "photography": [
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
    "stargazing": [
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

// CampJoy - Main Application
class CampJoyApp {
    constructor() {
        this.campsites = campsitesData;
        this.filteredCampsites = [...this.campsites];
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.packingListsData = packingListsData;
        this.activityPackingSuggestions = activityPackingSuggestions;

        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.renderCampsites();
        this.addLoadingAnimation();
    }



    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterCampsites();
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.filter);
            });
        });

        // Back button
        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', () => {
            this.showCampsitesList();
        });
    }

    setActiveFilter(filter) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.currentFilter = filter;
        this.filterCampsites();
    }

    filterCampsites() {
        this.filteredCampsites = this.campsites.filter(campsite => {
            const matchesSearch = this.searchTerm === '' ||
                campsite.name.toLowerCase().includes(this.searchTerm) ||
                campsite.location.toLowerCase().includes(this.searchTerm) ||
                campsite.activities.some(activity =>
                    activity.toLowerCase().includes(this.searchTerm)
                );

            const matchesFilter = this.currentFilter === 'all' ||
                campsite.type === this.currentFilter;

            return matchesSearch && matchesFilter;
        });

        this.renderCampsites();
    }

    renderCampsites() {
        const grid = document.getElementById('campsitesGrid');

        if (this.filteredCampsites.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                    <h3>No campsites found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredCampsites.map(campsite =>
            this.createCampsiteCard(campsite)
        ).join('');

        // Add click events to cards
        document.querySelectorAll('.campsite-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showCampsiteDetail(this.filteredCampsites[index]);
            });
        });
    }

    createCampsiteCard(campsite) {
        const activities = campsite.activities.slice(0, 3).map(activity =>
            `<span class="activity-tag">${activity}</span>`
        ).join('');

        return `
            <div class="campsite-card" data-id="${campsite.id}">
                <img src="${campsite.image}" alt="${campsite.name}" class="campsite-image">
                <div class="campsite-content">
                    <h3 class="campsite-name">${campsite.name}</h3>
                    <p class="campsite-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${campsite.location}
                    </p>
                    <div class="campsites-stats">
                        <span class="stat">
                            <i class="fas fa-star"></i>
                            ${campsite.rating}
                        </span>
                        <span class="stat">
                            <i class="fas fa-dollar-sign"></i>
                            ${campsite.price}
                        </span>
                        <span class="stat">
                            <i class="fas fa-users"></i>
                            ${campsite.capacity}
                        </span>
                    </div>
                    <div class="campsite-activities">
                        ${activities}
                        ${campsite.activities.length > 3 ?
                `<span class="activity-tag">+${campsite.activities.length - 3} more</span>` :
                ''
            }
                    </div>
                </div>
            </div>
        `;
    }

    showCampsiteDetail(campsite) {
        // Hide campsites grid and show detail view
        document.querySelector('.campsites-section').style.display = 'none';
        document.querySelector('.search-section').style.display = 'none';

        const detailSection = document.getElementById('campsiteDetail');
        detailSection.classList.remove('hidden');

        // Populate detail content
        this.populateCampsiteDetail(campsite);

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    populateCampsiteDetail(campsite) {
        // Basic info
        document.getElementById('detailImage').src = campsite.image;
        document.getElementById('detailImage').alt = campsite.name;
        document.getElementById('detailName').textContent = campsite.name;
        document.getElementById('detailLocation').textContent = campsite.location;
        document.getElementById('detailRating').textContent = campsite.rating;
        document.getElementById('detailPrice').textContent = campsite.price;
        document.getElementById('detailCapacity').textContent = campsite.capacity;
        document.getElementById('detailDescription').textContent = campsite.description;

        // Amenities
        const amenitiesList = document.getElementById('detailAmenities');
        amenitiesList.innerHTML = campsite.amenities.map(amenity =>
            `<div class="amenity-item">
                <i class="fas fa-check"></i>
                <span>${amenity}</span>
            </div>`
        ).join('');

        // Activities
        const activitiesList = document.getElementById('detailActivities');
        activitiesList.innerHTML = campsite.activities.map(activity =>
            `<div class="activity-item">
                <i class="fas fa-hiking"></i>
                <span>${activity}</span>
            </div>`
        ).join('');

        // Packing list
        this.generatePackingList(campsite);
    }

    generatePackingList(campsite) {
        const packingList = document.getElementById('detailPackingList');
        const basePackingList = this.packingListsData[campsite.type] || {};

        let packingHTML = '';

        // Add base packing list by category
        Object.entries(basePackingList).forEach(([category, items]) => {
            const categoryName = category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
            packingHTML += `
                <div class="packing-category">
                    <h4>${categoryName}</h4>
                    ${items.map(item => `
                        <div class="packing-item">
                            <i class="fas fa-suitcase"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        });

        // Add activity-specific suggestions
        const activitySuggestions = this.getActivitySuggestions(campsite.activities);
        if (activitySuggestions.length > 0) {
            packingHTML += `
                <div class="packing-category">
                    <h4>Activity-Specific Items</h4>
                    ${activitySuggestions.map(item => `
                        <div class="packing-item">
                            <i class="fas fa-star"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        packingList.innerHTML = packingHTML;
    }

    getActivitySuggestions(activities) {
        const suggestions = new Set();

        activities.forEach(activity => {
            const activityKey = activity.toLowerCase().replace(/\s+/g, '_');
            if (this.activityPackingSuggestions[activityKey]) {
                this.activityPackingSuggestions[activityKey].forEach(item => {
                    suggestions.add(item);
                });
            }
        });

        return Array.from(suggestions).slice(0, 10); // Limit to 10 items
    }

    showCampsitesList() {
        // Show campsites grid and search section
        document.querySelector('.campsites-section').style.display = 'block';
        document.querySelector('.search-section').style.display = 'block';

        // Hide detail view
        document.getElementById('campsiteDetail').classList.add('hidden');

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    addLoadingAnimation() {
        // Add a subtle loading animation when the app first loads
        const grid = document.getElementById('campsitesGrid');
        grid.innerHTML = '<div class="loading">Loading amazing campsites...</div>';

        // Simulate loading time for better UX
        setTimeout(() => {
            this.renderCampsites();
        }, 800);
    }
}

// Add some CSS for the no-results state
const style = document.createElement('style');
style.textContent = `
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #718096;
        grid-column: 1 / -1;
    }
    
    .no-results h3 {
        margin-bottom: 0.5rem;
        color: #4a5568;
    }
    
    .no-results p {
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CampJoyApp();
});

// Add some delightful micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to activity tags
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('activity-tag')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('activity-tag')) {
            e.target.style.transform = 'scale(1)';
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const detailSection = document.getElementById('campsiteDetail');
            if (!detailSection.classList.contains('hidden')) {
                document.getElementById('backBtn').click();
            }
        }
    });
}); 