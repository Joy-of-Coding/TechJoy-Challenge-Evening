# CampJoy - TechJoy Challenge Evening

A beautiful, functional camping app built with Vanilla JavaScript following SLC (Simple, Lovable, Complete) principles.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Run the Project
```bash
# 1. Clone the repository
git clone <repository-url>
cd TechJoy-Challenge-Evening

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# Navigate to: http://localhost:3000
```

### Available Commands
- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm test` - Run tests (when implemented)

---

## 🌟 Features

- **Search & Filter**: Find campsites by name, location, or activity type
- **Detailed Views**: Comprehensive information about each campsite
- **Smart Packing Lists**: Automatically generated packing suggestions based on campsite type and activities
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful UI**: Modern, delightful interface with smooth animations

## 🏕️ Campsite Types

- **Lake**: Fishing, boating, swimming activities
- **Mountain**: Hiking, climbing, alpine adventures
- **Forest**: Nature exploration, wildlife watching
- **Beach**: Water sports, beach activities, sun protection

## 🎒 Packing Lists

The app intelligently suggests items to bring based on:
- **Campsite Type**: Different environments require different gear
- **Available Activities**: Activity-specific equipment recommendations
- **Categorized Items**: Essentials, clothing, activities, safety gear



## 🛠️ Technical Details

- **Backend**: Node.js with Express.js
- **Frontend**: Pure Vanilla JavaScript (no frameworks)
- **API**: RESTful endpoints for campsites and packing lists
- **Data**: Local JSON data served through API
- **Responsive CSS Grid**: Modern layout system
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Performance**: Optimized for fast loading and smooth interactions
- **Development**: Hot reload with nodemon

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Beautiful, responsive styling
├── client.js          # Frontend application logic
├── server.js          # Express server and API endpoints
├── package.json       # Node.js dependencies and scripts
├── data/
│   ├── campsites.js   # Campsite data (exported for Node.js)
│   └── packingLists.js # Packing suggestions (exported for Node.js)
└── README.md          # This file
```

## 🔧 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

**Node modules not found:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**API not responding:**
- Check if server is running: `curl http://localhost:3000/api/health`
- Check browser console for errors (F12)
- Ensure you're on the correct branch: `git branch`

## 📡 API Endpoints

The app provides RESTful API endpoints:

- `GET /api/health` - Health check
- `GET /api/campsites` - Get all campsites
- `GET /api/campsites/:id` - Get specific campsite
- `GET /api/campsites/type/:type` - Filter by type (lake, mountain, forest, beach)
- `GET /api/packing-lists` - Get all packing lists
- `GET /api/packing-lists/:type` - Get packing list by type
- `GET /api/search?q=query&type=type` - Search campsites

## 🎯 SLC Principles Applied

- **Simple**: Clean, intuitive interface with clear functionality
- **Lovable**: Beautiful design with delightful user experience and smooth animations
- **Complete**: Fully functional with all features working perfectly from day one

## Team Members:

- Raul (1digitalnomad)
- Anna Rankin (anna902)
- Doug (Level3EyedRaven)
- Glenn Byers (Glenn_B)

---

*Built with ❤️ for outdoor enthusiasts*