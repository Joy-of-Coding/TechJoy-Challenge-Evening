# Changelog

All notable changes to Joy of Camping are documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-03-29

### Added

- **Desert filter category**: New "Desert" filter button with sun icon, enabling users to browse desert campsites
- **Wetland filter category**: New "Wetland" filter button with frog icon, enabling users to browse wetland campsites
- **Desert packing list**: Curated packing suggestions covering sun/heat protection, desert exploration gear, and hydration essentials
- **Wetland packing list**: Curated packing suggestions covering water gear, wildlife exploration equipment, and insect protection

### Fixed

- **Campsite type corrections**: Arizona Desert Campground, New Mexico High Desert Campground, and Big Bend National Park Campground were miscategorized as "forest" or "mountain" — corrected to "desert"
- **Campsite type correction**: Everglades National Park Campground was miscategorized as "forest" — corrected to "wetland"
- **Mismatched tags**: Removed incorrect tags (e.g. "forest", "mountain") from desert and wetland campsites so tags align with their actual type
- **Broken image**: Alpine Peak Base Camp had a broken image URL — replaced with a working photo
- **Base64 image bloat**: Three campsites (Mystic Grove, Denali National Park, Big Bend National Park) had images embedded as base64 data URIs, inflating `campsitesData.js` — replaced with standard Unsplash URLs
- **Duplicate images**: Five campsites shared only two image URLs — replaced duplicates so Olympic National Park Beach, Oregon Coast, and Colorado Rocky Mountain each have a unique photo
- **Pagination visibility**: Previous/Next buttons remained visible (disabled) when all results fit on a single page — the entire pagination bar now hides when there is only one page of results
- **Copyright date**: Updated footer copyright from 2025 to 2026

## [1.0.0] - Initial Release

### Features

- 35 campsite cards with search by name, location, or activity
- Filter by campsite type (Lake, Mountain, Forest, Beach)
- Detailed campsite views with amenities, activities, and ratings
- Smart packing list generator based on campsite type and activities
- Responsive design for desktop, tablet, and mobile
- Paginated grid with configurable cards per page (3, 6, 9)
