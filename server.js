const express = require('express');
const cors = require('cors');
const path = require('path');

// Import our data
const campsitesData = require('./data/campsites.js');
const packingListsData = require('./data/packingLists.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes
app.get('/api/campsites', (req, res) => {
    try {
        res.json(campsitesData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch campsites' });
    }
});

app.get('/api/campsites/:id', (req, res) => {
    try {
        const campsite = campsitesData.find(c => c.id === parseInt(req.params.id));
        if (!campsite) {
            return res.status(404).json({ error: 'Campsite not found' });
        }
        res.json(campsite);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch campsite' });
    }
});

app.get('/api/campsites/type/:type', (req, res) => {
    try {
        const filteredCampsites = campsitesData.filter(c => c.type === req.params.type);
        res.json(filteredCampsites);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch campsites by type' });
    }
});

app.get('/api/packing-lists', (req, res) => {
    try {
        res.json(packingListsData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch packing lists' });
    }
});

app.get('/api/packing-lists/:type', (req, res) => {
    try {
        const packingList = packingListsData[req.params.type];
        if (!packingList) {
            return res.status(404).json({ error: 'Packing list not found for this type' });
        }
        res.json(packingList);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch packing list' });
    }
});

// Search endpoint
app.get('/api/search', (req, res) => {
    try {
        const { q: query, type } = req.query;
        let filteredCampsites = campsitesData;

        // Filter by search query
        if (query) {
            const searchTerm = query.toLowerCase();
            filteredCampsites = filteredCampsites.filter(campsite =>
                campsite.name.toLowerCase().includes(searchTerm) ||
                campsite.location.toLowerCase().includes(searchTerm) ||
                campsite.activities.some(activity =>
                    activity.toLowerCase().includes(searchTerm)
                )
            );
        }

        // Filter by type
        if (type && type !== 'all') {
            filteredCampsites = filteredCampsites.filter(campsite =>
                campsite.type === type
            );
        }

        res.json(filteredCampsites);
    } catch (error) {
        res.status(500).json({ error: 'Search failed' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'CampJoy API is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🏕️  CampJoy server running on http://localhost:${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api`);
    console.log(`🌐 Frontend available at http://localhost:${PORT}`);
});

module.exports = app; 