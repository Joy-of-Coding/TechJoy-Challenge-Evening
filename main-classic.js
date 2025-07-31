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

        // Get packing checklist for specific activity
        getActivityPackingList(activity) {
            const activityKey = activity.toLowerCase().replace(/\s+/g, '_');
            return this.activityPackingSuggestions[activityKey] || [];
        }

        // Get base packing list for campsite type
        getBasePackingList(campsiteType) {
            return this.packingListsData[campsiteType] || {};
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
            this.selectedItems = new Set(); // Track selected items
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
            // Clear selected items when showing a new campsite
            this.selectedItems.clear();
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
            // Clear selected items when hiding detail view
            this.selectedItems.clear();
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
                // Render interactive activity buttons instead of static items
                activitiesList.innerHTML = campsite.activities.map(activity =>
                    `<button class="interactive-button activity-button" data-activity="${activity}">
                        <i class="fas fa-hiking"></i>
                        ${activity}
                    </button>`
                ).join('');
                
                // Bind click events to activity buttons
                this.bindActivityButtonEvents(campsite);
            }
        }

        bindActivityButtonEvents(campsite) {
            document.querySelectorAll('.activity-button').forEach(button => {
                button.addEventListener('click', () => {
                    const activity = button.dataset.activity;
                    button.classList.toggle('active');
                    
                    if (button.classList.contains('active')) {
                        this.showActivityInventory(activity);
                        button.innerHTML = `<i class="fas fa-check"></i> ${activity}`;
                    } else {
                        this.hideActivityInventory(activity);
                        button.innerHTML = `<i class="fas fa-hiking"></i> ${activity}`;
                    }
                });
            });
        }

        showActivityInventory(activity) {
            // Get inventory items for this activity
            const activityKey = activity.toLowerCase().replace(/\s+/g, '_');
            console.log('Looking for activity:', activity, 'with key:', activityKey);
            
            const items = this.packingListGenerator.getActivityPackingList(activity);
            console.log('Found items:', items);
            
            // If no specific items found, create some generic ones for testing
            let itemsToShow = items;
            if (items.length === 0) {
                // Fallback items for testing
                itemsToShow = [
                    `${activity} Equipment`,
                    `${activity} Safety Gear`,
                    `${activity} Accessories`
                ];
                console.log('Using fallback items:', itemsToShow);
            }
            
            // Find or create inventory container
            let inventoryContainer = document.getElementById('activityInventory');
            if (!inventoryContainer) {
                inventoryContainer = document.createElement('div');
                inventoryContainer.id = 'activityInventory';
                inventoryContainer.innerHTML = `
                    <h4>Selected Activity Gear</h4>
                    <button id="printButton" class="print-button" style="display: none;">
                        <i class="fas fa-print"></i>
                        PRINT THIS LIST
                    </button>
                `;
                
                // Insert after activities section - find the right parent
                const activitiesSection = document.getElementById('detailActivities');
                if (activitiesSection && activitiesSection.parentNode) {
                    activitiesSection.parentNode.insertBefore(inventoryContainer, activitiesSection.nextSibling);
                } else {
                    // Fallback: append to detail section
                    const detailSection = document.getElementById('campsiteDetail');
                    if (detailSection) {
                        detailSection.appendChild(inventoryContainer);
                    }
                }
                console.log('Created inventory container');
                
                // Bind print button event
                this.bindPrintButtonEvent();
            }
            
            // Make sure container is visible
            inventoryContainer.style.display = 'block';
            
            // Create section for this activity's items
            const section = document.createElement('div');
            section.classList.add('inventory-section');
            section.dataset.activity = activity;
            
            section.innerHTML = `
                <h5>${activity} Gear</h5>
                <div class="inventory-items">
                    ${itemsToShow.map(item => `
                        <button class="interactive-button inventory-item" data-item="${item}" data-activity="${activity}">
                            ${item}
                        </button>
                    `).join('')}
                </div>
            `;
            
            inventoryContainer.appendChild(section);
            console.log('Added section for:', activity);
            this.bindInventoryItemEvents(section);
        }

        hideActivityInventory(activity) {
            const section = document.querySelector(`.inventory-section[data-activity="${activity}"]`);
            if (section) {
                section.remove();
                
                // If no more sections, hide the container
                const inventoryContainer = document.getElementById('activityInventory');
                if (inventoryContainer && inventoryContainer.querySelectorAll('.inventory-section').length === 0) {
                    inventoryContainer.style.display = 'none';
                }
            }
        }

        bindInventoryItemEvents(section) {
            console.log('Binding events for inventory section');
            section.querySelectorAll('.inventory-item').forEach(button => {
                console.log('Binding click event for:', button.dataset.item);
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const item = button.dataset.item;
                    console.log('Inventory item clicked:', item);
                    
                    button.classList.toggle('selected');
                    
                    // Track selected items
                    if (button.classList.contains('selected')) {
                        this.selectedItems.add(item);
                        button.innerHTML = `✅ ${item}`;
                        button.style.backgroundColor = '#48bb78';
                        button.style.color = 'white';
                        console.log('Item selected:', item);
                    } else {
                        this.selectedItems.delete(item);
                        button.innerHTML = item;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                        console.log('Item deselected:', item);
                    }
                    
                    // Show/hide print button based on selection
                    this.updatePrintButtonVisibility();
                });
            });
        }

        updatePrintButtonVisibility() {
            const printButton = document.getElementById('printButton');
            if (printButton) {
                if (this.selectedItems.size > 0) {
                    printButton.style.display = 'inline-flex';
                } else {
                    printButton.style.display = 'none';
                }
            }
        }

        bindPrintButtonEvent() {
            const printButton = document.getElementById('printButton');
            if (printButton) {
                printButton.addEventListener('click', () => {
                    this.printSelectedItems();
                });
            }
        }

        printSelectedItems() {
            if (this.selectedItems.size === 0) {
                alert('No items selected to print.');
                return;
            }

            // Create print window content
            const printContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>CampJoy - Selected Activity Gear</title>
                    <style>
                        body {
                            font-family: 'Inter', sans-serif;
                            margin: 40px;
                            line-height: 1.6;
                        }
                        .print-header {
                            text-align: center;
                            border-bottom: 2px solid #4299e1;
                            padding-bottom: 20px;
                            margin-bottom: 30px;
                        }
                        .print-header h1 {
                            color: #2d3748;
                            margin: 0;
                        }
                        .print-header p {
                            color: #718096;
                            margin: 10px 0 0 0;
                        }
                        .items-list {
                            margin-top: 30px;
                        }
                        .item {
                            padding: 10px 0;
                            border-bottom: 1px solid #e2e8f0;
                            display: flex;
                            align-items: center;
                        }
                        .item:before {
                            content: "✓";
                            color: #48bb78;
                            font-weight: bold;
                            margin-right: 15px;
                            font-size: 18px;
                        }
                        .print-footer {
                            margin-top: 40px;
                            text-align: center;
                            color: #718096;
                            font-size: 14px;
                        }
                        @media print {
                            body { margin: 20px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="print-header">
                        <h1>CampJoy - Selected Activity Gear</h1>
                        <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                        ${this.currentCampsite ? `<p><strong>Campsite:</strong> ${this.currentCampsite.name}</p>` : ''}
                    </div>
                    
                    <div class="items-list">
                        <h2>Selected Items (${this.selectedItems.size})</h2>
                        ${Array.from(this.selectedItems).map(item => `
                            <div class="item">${item}</div>
                        `).join('')}
                    </div>
                    
                    <div class="print-footer">
                        <p>Happy camping! 🏕️</p>
                        <p>Generated by CampJoy</p>
                    </div>
                </body>
                </html>
            `;

            // Open print window
            const printWindow = window.open('', '_blank');
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.focus();
            
            // Wait for content to load then print
            printWindow.onload = function() {
                printWindow.print();
                printWindow.close();
            };
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
                
                .interactive-button {
                    background: #e2e8f0;
                    border: 2px solid #cbd5e0;
                    border-radius: 8px;
                    padding: 0.75rem 1rem;
                    margin: 0.25rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .interactive-button:hover {
                    background: #cbd5e0;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                
                .interactive-button.active {
                    background: #4299e1;
                    color: white;
                    border-color: #3182ce;
                }
                
                .interactive-button.selected {
                    background: #48bb78 !important;
                    color: white !important;
                    border-color: #38a169;
                }
                
                .inventory-section {
                    margin: 1rem 0;
                    padding: 1rem;
                    background: #f7fafc;
                    border-radius: 8px;
                    border-left: 4px solid #4299e1;
                }
                
                .inventory-section h5 {
                    margin: 0 0 0.75rem 0;
                    color: #2d3748;
                    font-size: 1rem;
                }
                
                .inventory-items {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                #activityInventory {
                    margin-top: 2rem;
                    padding: 1rem;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                
                #activityInventory h4 {
                    margin: 0 0 1rem 0;
                    color: #2d3748;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 0.5rem;
                }
                
                .print-button {
                    background: #4299e1;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.75rem 1.5rem;
                    margin-top: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    box-shadow: 0 2px 8px rgba(66, 153, 225, 0.3);
                }
                
                .print-button:hover {
                    background: #3182ce;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.4);
                }
                
                .print-button:active {
                    transform: translateY(0);
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