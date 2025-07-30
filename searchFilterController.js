// SearchFilterController.js - Handles search and filter UI interactions
import { eventManager } from './eventManager.js';

export class SearchFilterController {
    constructor(campsiteManager) {
        this.campsiteManager = campsiteManager;
        this.searchInput = null;
        this.filterButtons = null;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.searchInput = document.getElementById('searchInput');
        this.filterButtons = document.querySelectorAll('.filter-btn');
    }

    bindEvents() {
        // Search input handler
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Filter button handlers
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterChange(e.target.dataset.filter);
            });
        });

        // Listen for external filter changes
        eventManager.on('filter:change', (filterData) => {
            this.updateFilterUI(filterData.filter);
        });
    }

    // Handle search input
    handleSearch(searchTerm) {
        this.campsiteManager.setSearchTerm(searchTerm);
        
        // Emit search event for analytics or other listeners
        eventManager.emit('search:performed', {
            term: searchTerm,
            timestamp: new Date()
        });
    }

    // Handle filter change
    handleFilterChange(filter) {
        this.campsiteManager.setFilter(filter);
        this.updateFilterUI(filter);
        
        // Emit filter event
        eventManager.emit('filter:changed', {
            filter: filter,
            timestamp: new Date()
        });
    }

    // Update filter button UI
    updateFilterUI(activeFilter) {
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeButton = document.querySelector(`[data-filter="${activeFilter}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Clear search
    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
            this.handleSearch('');
        }
    }

    // Reset all filters
    resetFilters() {
        this.clearSearch();
        this.handleFilterChange('all');
    }

    // Get current search value
    getCurrentSearchValue() {
        return this.searchInput ? this.searchInput.value : '';
    }

    // Set search value programmatically
    setSearchValue(value) {
        if (this.searchInput) {
            this.searchInput.value = value;
            this.handleSearch(value);
        }
    }
}