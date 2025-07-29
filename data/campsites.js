// Campsites Data
const campsitesData = [
    {
        id: 1,
        name: "Crystal Lake Campground",
        location: "Rocky Mountain National Park, Colorado",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.8,
        price: "$25/night",
        capacity: "Up to 6 people",
        description: "Nestled beside the pristine Crystal Lake, this campground offers stunning mountain views and excellent fishing opportunities. The crystal-clear waters reflect the surrounding peaks, creating a picture-perfect camping experience.",
        amenities: [
            "Boat ramp",
            "Fishing dock",
            "Clean restrooms",
            "Picnic tables",
            "Fire rings",
            "Drinking water",
            "Shower facilities"
        ],
        activities: [
            "Fishing",
            "Boating",
            "Swimming",
            "Hiking",
            "Wildlife watching",
            "Photography"
        ],
        type: "lake",
        tags: ["lake", "fishing", "boating", "swimming"]
    },
    {
        id: 2,
        name: "Alpine Peak Base Camp",
        location: "Mount Rainier National Park, Washington",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        rating: 4.9,
        price: "$30/night",
        capacity: "Up to 4 people",
        description: "High-altitude camping at the base of majestic peaks. This campsite offers challenging hiking trails, breathtaking vistas, and the opportunity to experience alpine ecosystems up close.",
        amenities: [
            "Bear-proof storage",
            "Mountain guides available",
            "Emergency shelter",
            "Weather station",
            "Trail maps",
            "First aid station"
        ],
        activities: [
            "Mountain climbing",
            "Rock climbing",
            "Hiking",
            "Wildlife photography",
            "Stargazing",
            "Alpine skiing (winter)"
        ],
        type: "mountain",
        tags: ["mountain", "climbing", "hiking", "alpine"]
    },
    {
        id: 3,
        name: "Whispering Pines Forest Retreat",
        location: "Redwood National Park, California",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        rating: 4.7,
        price: "$20/night",
        capacity: "Up to 8 people",
        description: "Immerse yourself in the ancient redwood forest. Towering trees create a natural cathedral, while the forest floor teems with diverse wildlife and plant life.",
        amenities: [
            "Forest trails",
            "Educational center",
            "Bird watching stations",
            "Campfire areas",
            "Restrooms",
            "Visitor center"
        ],
        activities: [
            "Forest hiking",
            "Bird watching",
            "Nature photography",
            "Mushroom foraging",
            "Meditation",
            "Educational tours"
        ],
        type: "forest",
        tags: ["forest", "hiking", "wildlife", "nature"]
    },
    {
        id: 4,
        name: "Sunset Beach Camp",
        location: "Big Sur, California",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        rating: 4.6,
        price: "$35/night",
        capacity: "Up to 6 people",
        description: "Oceanfront camping with spectacular sunset views. The sound of crashing waves and salty ocean breeze create the perfect beach camping experience.",
        amenities: [
            "Beach access",
            "Shower facilities",
            "Tide pool viewing",
            "Beach volleyball",
            "BBQ grills",
            "Restrooms"
        ],
        activities: [
            "Swimming",
            "Surfing",
            "Beach combing",
            "Tide pool exploration",
            "Sunset watching",
            "Beach games"
        ],
        type: "beach",
        tags: ["beach", "ocean", "swimming", "surfing"]
    },
    {
        id: 5,
        name: "Emerald Lake Vista",
        location: "Glacier National Park, Montana",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.9,
        price: "$28/night",
        capacity: "Up to 5 people",
        description: "Perched above the stunning Emerald Lake, this campsite offers panoramic views of glacier-carved valleys and crystal-clear alpine waters.",
        amenities: [
            "Lake access",
            "Fishing permits",
            "Boat rentals",
            "Mountain views",
            "Clean facilities",
            "Ranger station"
        ],
        activities: [
            "Lake fishing",
            "Kayaking",
            "Mountain biking",
            "Wildlife viewing",
            "Photography",
            "Stargazing"
        ],
        type: "lake",
        tags: ["lake", "mountain", "fishing", "kayaking"]
    },
    {
        id: 6,
        name: "Thunder Ridge Summit",
        location: "Appalachian Trail, Virginia",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        rating: 4.5,
        price: "$15/night",
        capacity: "Up to 3 people",
        description: "High-elevation camping along the famous Appalachian Trail. Experience the thrill of mountain camping with stunning ridge-top views and challenging terrain.",
        amenities: [
            "Trail access",
            "Water sources",
            "Primitive camping",
            "Emergency contacts",
            "Trail register"
        ],
        activities: [
            "Long-distance hiking",
            "Summit bagging",
            "Wildlife tracking",
            "Trail running",
            "Backpacking",
            "Mountain photography"
        ],
        type: "mountain",
        tags: ["mountain", "hiking", "backpacking", "trail"]
    },
    {
        id: 7,
        name: "Mystic Grove Campground",
        location: "Olympic National Park, Washington",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        rating: 4.8,
        price: "$22/night",
        capacity: "Up to 7 people",
        description: "Ancient temperate rainforest camping surrounded by moss-covered trees and fern-covered forest floors. Experience the magic of the Pacific Northwest.",
        amenities: [
            "Rainforest trails",
            "Moss garden",
            "Educational displays",
            "Covered picnic areas",
            "Restrooms",
            "Ranger talks"
        ],
        activities: [
            "Rainforest hiking",
            "Moss photography",
            "Fungus identification",
            "Nature journaling",
            "Forest bathing",
            "Educational walks"
        ],
        type: "forest",
        tags: ["forest", "rainforest", "nature", "hiking"]
    },
    {
        id: 8,
        name: "Coral Cove Beach Camp",
        location: "Florida Keys, Florida",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        rating: 4.4,
        price: "$40/night",
        capacity: "Up to 6 people",
        description: "Tropical beach camping with coral reef access. Crystal clear waters and white sand beaches make this a paradise for water enthusiasts.",
        amenities: [
            "Beachfront access",
            "Snorkeling gear rental",
            "Tiki huts",
            "Beach chairs",
            "Shower facilities",
            "Marine life center"
        ],
        activities: [
            "Snorkeling",
            "Scuba diving",
            "Beach volleyball",
            "Coral reef exploration",
            "Tropical bird watching",
            "Sunset kayaking"
        ],
        type: "beach",
        tags: ["beach", "tropical", "snorkeling", "coral"]
    },
    {
        id: 9,
        name: "Serenity Lake Lodge",
        location: "Adirondack Mountains, New York",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: 4.7,
        price: "$32/night",
        capacity: "Up to 8 people",
        description: "Peaceful lakeside camping in the heart of the Adirondacks. Perfect for families seeking a quiet retreat with excellent fishing and boating opportunities.",
        amenities: [
            "Private lake access",
            "Fishing boat rentals",
            "Family picnic areas",
            "Playground",
            "Camp store",
            "Laundry facilities"
        ],
        activities: [
            "Family fishing",
            "Paddle boating",
            "Nature walks",
            "Campfire stories",
            "Wildlife watching",
            "Family games"
        ],
        type: "lake",
        tags: ["lake", "family", "fishing", "boating"]
    },
    {
        id: 10,
        name: "Eagle's Nest Peak",
        location: "Grand Teton National Park, Wyoming",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        rating: 4.9,
        price: "$35/night",
        capacity: "Up to 4 people",
        description: "High-altitude camping with spectacular views of the Teton Range. Experience the raw beauty of the Rocky Mountains in this pristine alpine setting.",
        amenities: [
            "Mountain views",
            "Alpine meadows",
            "Wildlife viewing areas",
            "Emergency equipment",
            "Weather monitoring",
            "Ranger patrols"
        ],
        activities: [
            "Alpine hiking",
            "Wildlife photography",
            "Mountain climbing",
            "Alpine flower viewing",
            "Stargazing",
            "Backcountry skiing"
        ],
        type: "mountain",
        tags: ["mountain", "alpine", "wildlife", "climbing"]
    }
];

module.exports = campsitesData; 