// CampsiteManager.js - Handles all campsite data operations
import { eventManager } from './eventManager.js';

export class CampsiteManager {
    constructor(campsitesData) {
        this.campsites = campsitesData;
        this.filteredCampsites = [...this.campsites];
        this.currentFilter = 'all';
        this.searchTerm = '';
    }

    // Get all campsites
    getAllCampsites() {
        return this.campsites;
    }

    // Get filtered campsites
    getFilteredCampsites() {
        return this.filteredCampsites;
    }

    // Get campsite by ID
    getCampsiteById(id) {
        return this.campsites.find(campsite => campsite.id === id);
    }

    // Set search term and filter
    setSearchTerm(term) {
        this.searchTerm = term.toLowerCase();
        this.applyFilters();
    }

    // Set filter type
    setFilter(filter) {
        this.currentFilter = filter;
        this.applyFilters();
    }

    // Apply current filters and search
    applyFilters() {
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

        // Emit event when data changes
        eventManager.emit('campsites:filtered', {
            campsites: this.filteredCampsites,
            hasResults: this.filteredCampsites.length > 0
        });
    }

    // Get current filter state
    getCurrentFilter() {
        return this.currentFilter;
    }

    // Get current search term
    getSearchTerm() {
        return this.searchTerm;
    }
}