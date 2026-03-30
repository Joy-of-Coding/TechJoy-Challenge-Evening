// Campsites Data - Embedded directly for local file access
const campsitesData = [
    {
        "id": 1,
        "name": "Crystal Lake Campground",
        "location": "Rocky Mountain National Park, Colorado",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "25/night",
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
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "30/night",
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
        "price": "20/night",
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
        "price": "35/night",
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
        "price": "28/night",
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
        "price": "15/night",
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
        "price": "22/night",
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
        "price": "40/night",
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
        "price": "32/night",
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
        "price": "35/night",
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
    },
    {
        "id": 11,
        "name": "Yosemite Valley Campground",
        "location": "Yosemite National Park, California",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "26/night",
        "capacity": "Up to 6 people",
        "description": "Iconic camping in the heart of Yosemite Valley with stunning views of El Capitan and Half Dome. Experience world-class rock climbing, hiking, and breathtaking waterfalls.",
        "amenities": [
            "Shuttle service",
            "Visitor center",
            "Camp store",
            "Laundry facilities",
            "Shower buildings",
            "Bear-proof lockers"
        ],
        "activities": [
            "Rock climbing",
            "Hiking",
            "Waterfall viewing",
            "Wildlife photography",
            "Stargazing",
            "Ranger programs"
        ],
        "type": "mountain",
        "tags": ["mountain", "climbing", "hiking", "yosemite"]
    },
    {
        "id": 12,
        "name": "Acadia National Park Campground",
        "location": "Acadia National Park, Maine",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "22/night",
        "capacity": "Up to 6 people",
        "description": "Coastal camping on Mount Desert Island with dramatic ocean views, granite peaks, and pristine lakes. Perfect for exploring the rugged Maine coastline.",
        "amenities": [
            "Ocean views",
            "Hiking trails",
            "Bike paths",
            "Camp store",
            "Restrooms",
            "Fire rings"
        ],
        "activities": [
            "Coastal hiking",
            "Biking",
            "Kayaking",
            "Lobster fishing",
            "Wildlife watching",
            "Sunrise viewing"
        ],
        "type": "beach",
        "tags": ["beach", "coastal", "hiking", "maine"]
    },
    {
        "id": 13,
        "name": "Great Smoky Mountains Campground",
        "location": "Great Smoky Mountains National Park, Tennessee",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "17/night",
        "capacity": "Up to 6 people",
        "description": "Misty mountain camping in America's most visited national park. Experience the rich biodiversity, historic cabins, and stunning fall colors.",
        "amenities": [
            "Mountain streams",
            "Historic sites",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas"
        ],
        "activities": [
            "Mountain hiking",
            "Wildlife viewing",
            "Historic tours",
            "Waterfall hunting",
            "Fall foliage viewing",
            "Fishing"
        ],
        "type": "mountain",
        "tags": ["mountain", "hiking", "wildlife", "tennessee"]
    },
    {
        "id": 14,
        "name": "Lake Tahoe Campground",
        "location": "Lake Tahoe, Nevada",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "35/night",
        "capacity": "Up to 8 people",
        "description": "Crystal clear alpine lake camping with stunning mountain views. Enjoy water sports, hiking, and year-round outdoor activities in this pristine setting.",
        "amenities": [
            "Lake access",
            "Boat rentals",
            "Beach area",
            "Shower facilities",
            "Camp store",
            "WiFi access"
        ],
        "activities": [
            "Swimming",
            "Boating",
            "Fishing",
            "Hiking",
            "Mountain biking",
            "Skiing (winter)"
        ],
        "type": "lake",
        "tags": ["lake", "alpine", "swimming", "nevada"]
    },
    {
        "id": 15,
        "name": "Shenandoah National Park Campground",
        "location": "Shenandoah National Park, Virginia",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.5,
        "price": "20/night",
        "capacity": "Up to 6 people",
        "description": "Blue Ridge Mountains camping with panoramic views and abundant wildlife. Experience the famous Skyline Drive and cascading waterfalls.",
        "amenities": [
            "Mountain views",
            "Hiking trails",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Fire pits"
        ],
        "activities": [
            "Mountain hiking",
            "Wildlife watching",
            "Waterfall viewing",
            "Scenic driving",
            "Bird watching",
            "Photography"
        ],
        "type": "mountain",
        "tags": ["mountain", "hiking", "wildlife", "virginia"]
    },
    {
        "id": 16,
        "name": "Crater Lake Campground",
        "location": "Crater Lake National Park, Oregon",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "21/night",
        "capacity": "Up to 6 people",
        "description": "Camping beside the deepest lake in America with its stunning blue waters. Experience volcanic landscapes and pristine wilderness.",
        "amenities": [
            "Lake views",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Lake viewing",
            "Hiking",
            "Boat tours",
            "Wildlife watching",
            "Stargazing",
            "Photography"
        ],
        "type": "lake",
        "tags": ["lake", "volcanic", "hiking", "oregon"]
    },
    {
        "id": 17,
        "name": "Everglades National Park Campground",
        "location": "Everglades National Park, Florida",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.4,
        "price": "16/night",
        "capacity": "Up to 6 people",
        "description": "Unique wetland camping in America's largest subtropical wilderness. Experience alligators, exotic birds, and the mysterious River of Grass.",
        "amenities": [
            "Wetland access",
            "Visitor center",
            "Boat launch",
            "Restrooms",
            "Picnic areas",
            "Ranger station"
        ],
        "activities": [
            "Wildlife watching",
            "Airboat tours",
            "Fishing",
            "Bird watching",
            "Canoeing",
            "Photography"
        ],
        "type": "forest",
        "tags": ["forest", "wetland", "wildlife", "florida"]
    },
    {
        "id": 18,
        "name": "Zion National Park Campground",
        "location": "Zion National Park, Utah",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "20/night",
        "capacity": "Up to 6 people",
        "description": "Dramatic red rock canyon camping with towering sandstone cliffs. Experience world-famous hiking trails and stunning desert landscapes.",
        "amenities": [
            "Canyon views",
            "Shuttle service",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Fire rings"
        ],
        "activities": [
            "Canyon hiking",
            "Rock climbing",
            "Photography",
            "Stargazing",
            "Wildlife viewing",
            "Ranger programs"
        ],
        "type": "mountain",
        "tags": ["mountain", "canyon", "hiking", "utah"]
    },
    {
        "id": 19,
        "name": "Glacier National Park Campground",
        "location": "Glacier National Park, Montana",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "23/night",
        "capacity": "Up to 6 people",
        "description": "Alpine camping in the Crown of the Continent with pristine lakes, glaciers, and abundant wildlife including grizzly bears.",
        "amenities": [
            "Alpine lakes",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Bear-proof storage",
            "Ranger programs"
        ],
        "activities": [
            "Alpine hiking",
            "Wildlife watching",
            "Lake fishing",
            "Photography",
            "Stargazing",
            "Glacier viewing"
        ],
        "type": "mountain",
        "tags": ["mountain", "alpine", "wildlife", "montana"]
    },
    {
        "id": 20,
        "name": "Cape Cod National Seashore Campground",
        "location": "Cape Cod National Seashore, Massachusetts",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "28/night",
        "capacity": "Up to 6 people",
        "description": "Coastal camping on the historic Cape Cod peninsula with sandy beaches, dunes, and charming New England atmosphere.",
        "amenities": [
            "Beach access",
            "Shower facilities",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Bike trails"
        ],
        "activities": [
            "Beach swimming",
            "Whale watching",
            "Biking",
            "Fishing",
            "Lighthouse tours",
            "Seafood dining"
        ],
        "type": "beach",
        "tags": ["beach", "coastal", "swimming", "massachusetts"]
    },
    {
        "id": 21,
        "name": "Denali National Park Campground",
        "location": "Denali National Park, Alaska",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "27/night",
        "capacity": "Up to 6 people",
        "description": "Wilderness camping in the shadow of North America's highest peak. Experience the vast Alaskan wilderness and abundant wildlife.",
        "amenities": [
            "Wilderness access",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Bear-proof storage",
            "Ranger programs"
        ],
        "activities": [
            "Wildlife viewing",
            "Mountain hiking",
            "Photography",
            "Aurora viewing",
            "Fishing",
            "Ranger tours"
        ],
        "type": "mountain",
        "tags": ["mountain", "wilderness", "wildlife", "alaska"]
    },
    {
        "id": 22,
        "name": "Hawaii Volcanoes National Park Campground",
        "location": "Hawaii Volcanoes National Park, Hawaii",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.5,
        "price": "15/night",
        "capacity": "Up to 6 people",
        "description": "Unique volcanic camping experience with active lava flows, steam vents, and dramatic landscapes shaped by volcanic activity.",
        "amenities": [
            "Volcanic views",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Volcano viewing",
            "Lava hiking",
            "Photography",
            "Stargazing",
            "Bird watching",
            "Cultural tours"
        ],
        "type": "mountain",
        "tags": ["mountain", "volcanic", "hiking", "hawaii"]
    },
    {
        "id": 23,
        "name": "Boundary Waters Canoe Area Campground",
        "location": "Boundary Waters Canoe Area, Minnesota",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "18/night",
        "capacity": "Up to 4 people",
        "description": "Remote wilderness camping in a pristine lake district with over 1,000 lakes and streams. Perfect for canoeing and fishing adventures.",
        "amenities": [
            "Lake access",
            "Canoe rentals",
            "Camp store",
            "Restrooms",
            "Bear-proof storage",
            "Ranger station"
        ],
        "activities": [
            "Canoeing",
            "Fishing",
            "Wildlife watching",
            "Hiking",
            "Swimming",
            "Photography"
        ],
        "type": "lake",
        "tags": ["lake", "wilderness", "canoeing", "minnesota"]
    },
    {
        "id": 24,
        "name": "Big Bend National Park Campground",
        "location": "Big Bend National Park, Texas",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "16/night",
        "capacity": "Up to 6 people",
        "description": "Desert camping in the remote Chihuahuan Desert with dramatic canyons, the Rio Grande River, and stunning night skies.",
        "amenities": [
            "Desert views",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Desert hiking",
            "River rafting",
            "Stargazing",
            "Wildlife viewing",
            "Photography",
            "Hot springs"
        ],
        "type": "mountain",
        "tags": ["mountain", "desert", "hiking", "texas"]
    },
    {
        "id": 25,
        "name": "Olympic National Park Beach Campground",
        "location": "Olympic National Park, Washington",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "20/night",
        "capacity": "Up to 6 people",
        "description": "Wild Pacific coast camping with dramatic sea stacks, tide pools, and pristine beaches. Experience the rugged Washington coastline.",
        "amenities": [
            "Beach access",
            "Tide pools",
            "Visitor center",
            "Restrooms",
            "Picnic areas",
            "Ranger station"
        ],
        "activities": [
            "Beach combing",
            "Tide pool exploration",
            "Whale watching",
            "Photography",
            "Hiking",
            "Wildlife viewing"
        ],
        "type": "beach",
        "tags": ["beach", "pacific", "wildlife", "washington"]
    },
    {
        "id": 26,
        "name": "Adirondack High Peaks Campground",
        "location": "Adirondack Park, New York",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.5,
        "price": "22/night",
        "capacity": "Up to 6 people",
        "description": "Mountain camping in the largest protected area in the contiguous United States. Experience 46 high peaks and pristine wilderness.",
        "amenities": [
            "Mountain access",
            "Hiking trails",
            "Camp store",
            "Restrooms",
            "Bear-proof storage",
            "Ranger station"
        ],
        "activities": [
            "Mountain hiking",
            "Wildlife watching",
            "Fishing",
            "Photography",
            "Stargazing",
            "Fall foliage"
        ],
        "type": "mountain",
        "tags": ["mountain", "hiking", "wildlife", "newyork"]
    },
    {
        "id": 27,
        "name": "Michigan Upper Peninsula Campground",
        "location": "Pictured Rocks National Lakeshore, Michigan",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "20/night",
        "capacity": "Up to 6 people",
        "description": "Great Lakes camping with stunning sandstone cliffs, waterfalls, and crystal clear waters. Experience the beauty of Lake Superior.",
        "amenities": [
            "Lake access",
            "Hiking trails",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Boat launch"
        ],
        "activities": [
            "Lake swimming",
            "Hiking",
            "Boat tours",
            "Fishing",
            "Photography",
            "Waterfall viewing"
        ],
        "type": "lake",
        "tags": ["lake", "greatlakes", "hiking", "michigan"]
    },
    {
        "id": 28,
        "name": "Redwood National and State Parks Campground",
        "location": "Redwood National and State Parks, California",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "rating": 4.8,
        "price": "35/night",
        "capacity": "Up to 8 people",
        "description": "Ancient redwood forest camping with the world's tallest trees. Experience the magic of the coastal redwood ecosystem.",
        "amenities": [
            "Redwood forest",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Forest hiking",
            "Wildlife watching",
            "Photography",
            "Beach access",
            "Bird watching",
            "Educational tours"
        ],
        "type": "forest",
        "tags": ["forest", "redwoods", "hiking", "california"]
    },
    {
        "id": 29,
        "name": "Maine Acadia Coastal Campground",
        "location": "Acadia National Park, Maine",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "25/night",
        "capacity": "Up to 6 people",
        "description": "Rocky coast camping with dramatic ocean views and granite peaks. Experience the rugged beauty of the Maine coastline.",
        "amenities": [
            "Ocean views",
            "Hiking trails",
            "Camp store",
            "Restrooms",
            "Fire rings",
            "Bike paths"
        ],
        "activities": [
            "Coastal hiking",
            "Whale watching",
            "Biking",
            "Lobster fishing",
            "Photography",
            "Sunrise viewing"
        ],
        "type": "beach",
        "tags": ["beach", "coastal", "hiking", "maine"]
    },
    {
        "id": 30,
        "name": "Colorado Rocky Mountain Campground",
        "location": "Rocky Mountain National Park, Colorado",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.9,
        "price": "26/night",
        "capacity": "Up to 6 people",
        "description": "Alpine camping in the heart of the Rockies with pristine lakes, wildflowers, and abundant wildlife including elk and moose.",
        "amenities": [
            "Alpine lakes",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Bear-proof storage",
            "Ranger programs"
        ],
        "activities": [
            "Alpine hiking",
            "Wildlife viewing",
            "Lake fishing",
            "Photography",
            "Stargazing",
            "Wildflower viewing"
        ],
        "type": "mountain",
        "tags": ["mountain", "alpine", "wildlife", "colorado"]
    },
    {
        "id": 31,
        "name": "Florida Keys Beach Campground",
        "location": "Bahia Honda State Park, Florida",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.5,
        "price": "36/night",
        "capacity": "Up to 6 people",
        "description": "Tropical island camping with crystal clear waters, coral reefs, and white sand beaches. Experience the laid-back Keys lifestyle.",
        "amenities": [
            "Beach access",
            "Snorkeling gear",
            "Camp store",
            "Restrooms",
            "Shower facilities",
            "Boat launch"
        ],
        "activities": [
            "Snorkeling",
            "Swimming",
            "Fishing",
            "Boat tours",
            "Wildlife watching",
            "Sunset viewing"
        ],
        "type": "beach",
        "tags": ["beach", "tropical", "snorkeling", "florida"]
    },
    {
        "id": 32,
        "name": "Arizona Desert Campground",
        "location": "Saguaro National Park, Arizona",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.4,
        "price": "20/night",
        "capacity": "Up to 6 people",
        "description": "Sonoran Desert camping surrounded by iconic saguaro cacti. Experience the unique desert ecosystem and stunning sunsets.",
        "amenities": [
            "Desert views",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Desert hiking",
            "Wildlife viewing",
            "Photography",
            "Stargazing",
            "Bird watching",
            "Sunset viewing"
        ],
        "type": "forest",
        "tags": ["forest", "desert", "hiking", "arizona"]
    },
    {
        "id": 33,
        "name": "New Mexico High Desert Campground",
        "location": "Carlsbad Caverns National Park, New Mexico",
        "image": "https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop",
        "rating": 4.6,
        "price": "15/night",
        "capacity": "Up to 6 people",
        "description": "High desert camping with spectacular cave systems and dramatic landscapes. Experience the mysterious underground world.",
        "amenities": [
            "Cave access",
            "Visitor center",
            "Camp store",
            "Restrooms",
            "Picnic areas",
            "Ranger programs"
        ],
        "activities": [
            "Cave exploring",
            "Desert hiking",
            "Wildlife viewing",
            "Photography",
            "Stargazing",
            "Bat watching"
        ],
        "type": "mountain",
        "tags": ["mountain", "desert", "caves", "newmexico"]
    },
    {
        "id": 34,
        "name": "Wisconsin Northwoods Campground",
        "location": "Chequamegon-Nicolet National Forest, Wisconsin",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "rating": 4.5,
        "price": "18/night",
        "capacity": "Up to 6 people",
        "description": "Northwoods camping with pristine lakes, dense forests, and abundant wildlife. Experience the peaceful beauty of northern Wisconsin.",
        "amenities": [
            "Lake access",
            "Hiking trails",
            "Camp store",
            "Restrooms",
            "Boat launch",
            "Fishing pier"
        ],
        "activities": [
            "Fishing",
            "Boating",
            "Hiking",
            "Wildlife watching",
            "Swimming",
            "Photography"
        ],
        "type": "lake",
        "tags": ["lake", "forest", "fishing", "wisconsin"]
    },
    {
        "id": 35,
        "name": "Oregon Coast Campground",
        "location": "Cape Perpetua Scenic Area, Oregon",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
        "rating": 4.7,
        "price": "24/night",
        "capacity": "Up to 6 people",
        "description": "Pacific coast camping with dramatic sea cliffs, tide pools, and old-growth forests. Experience the wild Oregon coastline.",
        "amenities": [
            "Ocean views",
            "Tide pools",
            "Visitor center",
            "Restrooms",
            "Picnic areas",
            "Hiking trails"
        ],
        "activities": [
            "Tide pool exploration",
            "Coastal hiking",
            "Whale watching",
            "Photography",
            "Beach combing",
            "Forest hiking"
        ],
        "type": "beach",
        "tags": ["beach", "pacific", "hiking", "oregon"]
    }
];