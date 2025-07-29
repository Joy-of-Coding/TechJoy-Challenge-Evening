# CampJoy - TechJoy Challenge Evening

A beautiful, functional camping app built with Vanilla JavaScript following SLC (Simple, Lovable, Complete) principles.

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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TechJoy-Challenge-Evening
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Production
To run in production mode:
```bash
npm start
```

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