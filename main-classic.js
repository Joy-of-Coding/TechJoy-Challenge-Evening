// main-classic.js - Non-module version that works with regular script tags
// This version doesn't use import/export and can be loaded with regular <script> tags

// All classes will be attached to window object for global access
(function() {
    'use strict';

    // EventManager - Centralized event handling
    class EventManager {
        constructor() {
            this.listeners = {};
        }

        on(event, callback) {
            if (!this.listeners[event]) {
                this.listeners[event] = [];
            }
            this.listeners[event].push(callback);
        }

        off(event, callback) {
            if (!this.listeners[event]) return;
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        }

        emit(event, data) {
            if (!this.listeners[event]) return;
            this.listeners[event].forEach(callback => callback(data));
        }

        once(event, callback) {
            const onceCallback = (data) => {
                callback(data);
                this.off(event, onceCallback);
            };
            this.on(event, onceCallback);
        }
    }

    // Create singleton instance
    const eventManager = new EventManager();

    // CampsiteManager - Data operations
    class CampsiteManager {
        constructor(campsitesData) {
            this.campsites = campsitesData;
            this.filteredCampsites = [...this.campsites];
            this.currentFilter = 'all';
            this.searchTerm = '';
        }

        getAllCampsites() {
            return this.campsites;
        }

        getFilteredCampsites() {
            return this.filteredCampsites;
        }

        getCampsiteById(id) {
            return this.campsites.find(campsite => campsite.id === id);
        }

        setSearchTerm(term) {
            this.searchTerm = term.toLowerCase();
            this.applyFilters();
        }

        setFilter(filter) {
            this.currentFilter = filter;
            this.applyFilters();
        }

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

            eventManager.emit('campsites:filtered', {
                campsites: this.filteredCampsites,
                hasResults: this.filteredCampsites.length > 0
            });
        }

        getCurrentFilter() {
            return this.currentFilter;
        }

        getSearchTerm() {
            return this.searchTerm;
        }
    }

    // CampsiteRenderer - View rendering
    class CampsiteRenderer {
        constructor() {
            this.gridElement = null;
            this.initializeElements();
            this.bindEvents();
        }

        initializeElements() {
            this.gridElement = document.getElementById('campsitesGrid');
        }

        bindEvents() {
            eventManager.on('campsites:filtered', (data) => {
                this.renderCampsiteGrid(data.campsites, data.hasResults);
            });
        }

        renderCampsiteGrid(campsites, hasResults = true) {
            if (!hasResults) {
                this.renderNoResults();
                return;
            }

            this.gridElement.innerHTML = campsites.map(campsite =>
                this.createCampsiteCard(campsite)
            ).join('');

            this.bindCardEvents(campsites);
        }

        createCampsiteCard(campsite) {
            const activities = campsite.activities.slice(0, 3).map(activity =>
                `<span class="activity-tag">${activity}</span>`
            ).join('');

            return `
                <div class="campsite-card" data-id="${campsite.id}">
                    <img src="${campsite.image}" alt="${campsite.name}" class="campsite-image">
                    <div class="campsite-content">
                        <h3 class="campsite-name">${campsite.name}</h3>
                        <p class="campsite-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${campsite.location}
                        </p>
                        <div class="campsites-stats">
                            <span class="stat">
                                <i class="fas fa-star"></i>
                                ${campsite.rating}
                            </span>
                            <span class="stat">
                                <i class="fas fa-dollar-sign"></i>
                                ${campsite.price}
                            </span>
                            <span class="stat">
                                <i class="fas fa-users"></i>
                                ${campsite.capacity}
                            </span>
                        </div>
                        <div class="campsite-activities">
                            ${activities}
                            ${campsite.activities.length > 3 ?
                                `<span class="activity-tag">+${campsite.activities.length - 3} more</span>` :
                                ''
                            }
                        </div>
                    </div>
                </div>
            `;
        }

        bindCardEvents(campsites) {
            document.querySelectorAll('.campsite-card').forEach((card, index) => {
                card.addEventListener('click', () => {
                    eventManager.emit('campsite:selected', campsites[index]);
                });
            });
        }

        renderNoResults() {
            this.gridElement.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                    <h3>No campsites found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
        }

        showLoading() {
            this.gridElement.innerHTML = '<div class="loading">Loading amazing campsites...</div>';
        }
    }

    // PackingListGenerator - Packing list logic
    class PackingListGenerator {
        constructor(packingListsData, activityPackingSuggestions) {
            this.packingListsData = packingListsData;
            this.activityPackingSuggestions = activityPackingSuggestions;
        }

        generatePackingList(campsite) {
            const basePackingList = this.packingListsData[campsite.type] || {};
            const activitySuggestions = this.getActivitySuggestions(campsite.activities);

            return {
                baseItems: basePackingList,
                activityItems: activitySuggestions,
                campsite: campsite
            };
        }

        getActivitySuggestions(activities) {
            const suggestions = new Set();

            activities.forEach(activity => {
                const activityKey = activity.toLowerCase().replace(/\s+/g, '_');
                if (this.activityPackingSuggestions[activityKey]) {
                    this.activityPackingSuggestions[activityKey].forEach(item => {
                        suggestions.add(item);
                    });
                }
            });

            return Array.from(suggestions).slice(0, 10);
        }

        renderPackingListHTML(packingData) {
            let packingHTML = '';

            Object.entries(packingData.baseItems).forEach(([category, items]) => {
                const categoryName = this.formatCategoryName(category);
                packingHTML += this.createCategorySection(categoryName, items, 'suitcase');
            });

            if (packingData.activityItems.length > 0) {
                packingHTML += this.createCategorySection(
                    'Activity-Specific Items', 
                    packingData.activityItems, 
                    'star'
                );
            }

            return packingHTML;
        }

        formatCategoryName(category) {
            return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        createCategorySection(categoryName, items, iconClass) {
            return `
                <div class="packing-category">
                    <h4>${categoryName}</h4>
                    ${items.map(item => `
                        <div class="packing-item">
                            <i class="fas fa-${iconClass}"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    // SearchFilterController - Search and filter UI
    class SearchFilterController {
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
            if (this.searchInput) {
                this.searchInput.addEventListener('input', (e) => {
                    this.handleSearch(e.target.value);
                });
            }

            this.filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    this.handleFilterChange(e.target.dataset.filter);
                });
            });
        }

        handleSearch(searchTerm) {
            this.campsiteManager.setSearchTerm(searchTerm);
        }

        handleFilterChange(filter) {
            this.campsiteManager.setFilter(filter);
            this.updateFilterUI(filter);
        }

        updateFilterUI(activeFilter) {
            this.filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            const activeButton = document.querySelector(`[data-filter="${activeFilter}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
    }

    // DetailViewController - Detail view management
    class DetailViewController {
        constructor(packingListGenerator) {
            this.packingListGenerator = packingListGenerator;
            this.currentCampsite = null;
            this.detailSection = null;
            this.backButton = null;
            this.initializeElements();
            this.bindEvents();
        }

        initializeElements() {
            this.detailSection = document.getElementById('campsiteDetail');
            this.backButton = document.getElementById('backBtn');
        }

        bindEvents() {
            eventManager.on('campsite:selected', (campsite) => {
                this.showCampsiteDetail(campsite);
            });

            if (this.backButton) {
                this.backButton.addEventListener('click', () => {
                    this.hideCampsiteDetail();
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isDetailViewVisible()) {
                    this.hideCampsiteDetail();
                }
            });
        }

        showCampsiteDetail(campsite) {
            this.currentCampsite = campsite;
            this.hideMainSections();
            this.detailSection.classList.remove('hidden');
            this.populateDetailContent(campsite);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        hideCampsiteDetail() {
            this.showMainSections();
            this.detailSection.classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentCampsite = null;
        }

        populateDetailContent(campsite) {
            this.populateBasicInfo(campsite);
            this.populateAmenities(campsite);
            this.populateActivities(campsite);
            this.populatePackingList(campsite);
        }

        populateBasicInfo(campsite) {
            this.setElementContent('detailImage', campsite.image, 'src');
            this.setElementContent('detailImage', campsite.name, 'alt');
            this.setElementContent('detailName', campsite.name);
            this.setElementContent('detailLocation', campsite.location);
            this.setElementContent('detailRating', campsite.rating);
            this.setElementContent('detailPrice', campsite.price);
            this.setElementContent('detailCapacity', campsite.capacity);
        }

        populateAmenities(campsite) {
            const amenitiesList = document.getElementById('detailAmenities');
            if (amenitiesList && campsite.amenities) {
                amenitiesList.innerHTML = campsite.amenities.map(amenity =>
                    `<div class="amenity-item">
                        <i class="fas fa-check"></i>
                        <span>${amenity}</span>
                    </div>`
                ).join('');
            }
        }

        populateActivities(campsite) {
            const activitiesList = document.getElementById('detailActivities');
            if (activitiesList && campsite.activities) {
                activitiesList.innerHTML = campsite.activities.map(activity =>
                    `<div class="activity-item">
                        <i class="fas fa-hiking"></i>
                        <span>${activity}</span>
                    </div>`
                ).join('');
            }
        }

        populatePackingList(campsite) {
            const packingListElement = document.getElementById('detailPackingList');
            if (packingListElement && this.packingListGenerator) {
                const packingData = this.packingListGenerator.generatePackingList(campsite);
                const packingHTML = this.packingListGenerator.renderPackingListHTML(packingData);
                packingListElement.innerHTML = packingHTML;
            }
        }

        setElementContent(elementId, content, attribute = 'textContent') {
            const element = document.getElementById(elementId);
            if (element) {
                if (attribute === 'textContent') {
                    element.textContent = content;
                } else {
                    element.setAttribute(attribute, content);
                }
            }
        }

        hideMainSections() {
            const campsitesSection = document.querySelector('.campsites-section');
            const searchSection = document.querySelector('.search-section');
            
            if (campsitesSection) campsitesSection.style.display = 'none';
            if (searchSection) searchSection.style.display = 'none';
        }

        showMainSections() {
            const campsitesSection = document.querySelector('.campsites-section');
            const searchSection = document.querySelector('.search-section');
            
            if (campsitesSection) campsitesSection.style.display = 'block';
            if (searchSection) searchSection.style.display = 'block';
        }

        isDetailViewVisible() {
            return this.detailSection && !this.detailSection.classList.contains('hidden');
        }
    }

    // Main CampJoyApp - Application controller
    class CampJoyApp {
        constructor(campsitesData, packingListsData, activityPackingSuggestions) {
            this.campsitesData = campsitesData;
            this.packingListsData = packingListsData;
            this.activityPackingSuggestions = activityPackingSuggestions;
            this.modules = {};
            this.initialize();
        }

        initialize() {
            try {
                this.initializeModules();
                this.startApp();
            } catch (error) {
                console.error('Failed to initialize CampJoy app:', error);
                this.handleInitializationError(error);
            }
        }

        initializeModules() {
            this.modules.campsiteManager = new CampsiteManager(this.campsitesData);
            this.modules.packingListGenerator = new PackingListGenerator(
                this.packingListsData,
                this.activityPackingSuggestions
            );
            this.modules.campsiteRenderer = new CampsiteRenderer();
            this.modules.detailViewController = new DetailViewController(
                this.modules.packingListGenerator
            );
            this.modules.searchFilterController = new SearchFilterController(
                this.modules.campsiteManager
            );
        }

        startApp() {
            this.addDynamicStyles();
            this.addMicroInteractions();
            
            // Show loading, then render campsites
            this.modules.campsiteRenderer.showLoading();
            setTimeout(() => {
                this.modules.campsiteManager.applyFilters();
            }, 800);
        }

        addDynamicStyles() {
            const style = document.createElement('style');
            style.textContent = `
                .no-results {
                    text-align: center;
                    padding: 3rem;
                    color: #718096;
                    grid-column: 1 / -1;
                }
                
                .no-results h3 {
                    margin-bottom: 0.5rem;
                    color: #4a5568;
                }
                
                .no-results p {
                    font-size: 0.9rem;
                }
                
                .loading {
                    text-align: center;
                    padding: 3rem;
                    color: #4299e1;
                    font-size: 1.2rem;
                    grid-column: 1 / -1;
                }
                
                .campsite-card {
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .campsite-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                }
                
                .activity-tag {
                    transition: transform 0.2s ease;
                }
            `;
            document.head.appendChild(style);
        }

        addMicroInteractions() {
            document.addEventListener('mouseover', (e) => {
                if (e.target.classList.contains('activity-tag')) {
                    e.target.style.transform = 'scale(1.05)';
                }
            });

            document.addEventListener('mouseout', (e) => {
                if (e.target.classList.contains('activity-tag')) {
                    e.target.style.transform = 'scale(1)';
                }
            });
        }

        handleInitializationError(error) {
            const grid = document.getElementById('campsitesGrid');
            if (grid) {
                grid.innerHTML = `
                    <div class="error-state">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e53e3e; margin-bottom: 1rem;"></i>
                        <h3>Oops! Something went wrong</h3>
                        <p>We're having trouble loading the campsites. Please refresh the page.</p>
                        <button onclick="window.location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #4299e1; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Refresh Page
                        </button>
                    </div>
                `;
            }
        }
    }

    // Initialize the application when DOM is ready
    function initializeApp() {
        try {
            if (typeof campsitesData === 'undefined' || 
                typeof packingListsData === 'undefined' || 
                typeof activityPackingSuggestions === 'undefined') {
                throw new Error('Required data not loaded. Make sure data files are included before main.js');
            }

            const campJoyApp = new CampJoyApp(
                campsitesData,
                packingListsData,
                activityPackingSuggestions
            );

            window.campJoyApp = campJoyApp;
            console.log('🏕️ CampJoy application initialized successfully!');

        } catch (error) {
            console.error('Failed to initialize CampJoy application:', error);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

})();