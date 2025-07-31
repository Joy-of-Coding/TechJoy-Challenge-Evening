// Campsites Data - Embedded directly for local file access
// Campsites Data - Embedded directly for local file access
const campsitesData = [
    {
        "id": 1,
        "name": "Crystal Lake Campground",
        "location": "Rocky Mountain National Park, Colorado",
        "image": "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?w=800&h=600&fit=crop",
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
        "image": "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/aramark-parent/yosemite-national-park/site-images/climber-with-helmet-and-gear-ascends-a-steep-rock-face-yosemite-national-park-lodging-and-activities-california-united-states.jpg?cropY=534&cropW=4000&cropH=1460&width=800&height=292",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphMsUoQXJ87ToS2xtNiOFea-c-Cl_-Hz5vg&s",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFjM0l816ooxrcB97NcsvsUSaXOL7mTc0Sg&s",
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
        "image": "https://images.unsplash.com/photo-1562524029-acca99f1a6b1?w=800&h=600&fit=crop",
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
        "image": "data:image/jpeg;base64,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",
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
        "image": "https://images.unsplash.com/photo-1531001200934-80a87c8da844?w=800&h=600&fit=crop",
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
        "image": "https://cdn.securem2.com/commonimages/pages/2025/6/peaceful-activities-adirondacks-paddle.jpg",
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
        "image": "https://images.unsplash.com/photo-1445712525433-eba07da78bd2?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1565588496723-63494874b143?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1596662214814-b4a60ea1a1f8?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1568112505330-f5fa78411f1d?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1628118426430-b5bafc5ed491?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1693340909044-9524fc427b1b?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7Ut2WM039eQ1H9iRc8k1vsVlSLHcANsz0g&s",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsyIYx7GkO9ER-zJpWLvMxS0aMw0CNwuybA&s",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGiiA9bNTbBQmnL9jd0kc5jMKVNsF4-ADkg&s",
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
        "image": "https://images.unsplash.com/photo-1509838174235-432f709c7bfd?w=800&h=600&fit=crop",
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
        "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop",
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