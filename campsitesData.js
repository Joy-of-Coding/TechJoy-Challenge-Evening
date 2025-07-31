// Campsites Data - Embedded directly for local file access
const campsitesData = [
    {
        "id": 1,
        "name": "Crystal Lake Campground",
        "location": "Rocky Mountain National Park, Colorado",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYfFrZ5j9YlCVQHfDPlg57QSVosbRMzpJGA&s",
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
        "image": "data:image/jpeg;base64,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",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelvPndGNyaIrVnLYmZS-IN-ujcFgCn6gRlw&s",
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
        "image": "data:image/jpeg;base64,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",
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