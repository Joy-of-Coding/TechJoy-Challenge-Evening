// main-classic.js - Non-module version that works with regular script tags
// This version doesn't use import/export and can be loaded with regular <script> tags

// All classes will be attached to window object for global access
(function () {
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
            this.currentPage = 1;
            this.cardsPerPage = 9;
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
            this.currentPage = 1; // Reset to first page when searching
            this.applyFilters();
        }

        setFilter(filter) {
            this.currentFilter = filter;
            this.currentPage = 1; // Reset to first page when changing filters
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
                campsites: this.getPaginatedCampsites(),
                allCampsites: this.filteredCampsites,
                hasResults: this.filteredCampsites.length > 0,
                currentPage: this.currentPage,
                totalPages: this.getTotalPages(),
                totalCampsites: this.getTotalCampsites(),
                cardsPerPage: this.cardsPerPage
            });
        }

        getCurrentFilter() {
            return this.currentFilter;
        }

        getSearchTerm() {
            return this.searchTerm;
        }

        setCardsPerPage(cardsPerPage) {
            this.cardsPerPage = parseInt(cardsPerPage);
            this.currentPage = 1; // Reset to first page when changing cards per page
            this.applyFilters();
        }

        setCurrentPage(page) {
            this.currentPage = page;
            this.applyFilters();
        }

        getCurrentPage() {
            return this.currentPage;
        }

        getCardsPerPage() {
            return this.cardsPerPage;
        }

        getTotalPages() {
            return Math.ceil(this.filteredCampsites.length / this.cardsPerPage);
        }

        getPaginatedCampsites() {
            const startIndex = (this.currentPage - 1) * this.cardsPerPage;
            const endIndex = startIndex + this.cardsPerPage;
            return this.filteredCampsites.slice(startIndex, endIndex);
        }

        getTotalCampsites() {
            return this.filteredCampsites.length;
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
                const paginationData = {
                    totalCampsites: data.totalCampsites,
                    totalPages: data.totalPages,
                    currentPage: data.currentPage,
                    cardsPerPage: data.cardsPerPage
                };
                this.renderCampsiteGrid(data.campsites, data.hasResults, paginationData);
            });
        }

        renderCampsiteGrid(campsites, hasResults = true, paginationData = null) {
            if (!hasResults) {
                this.renderNoResults();
                this.updateResultsInfo(0, 0);
                this.renderPagination(0, 1);
                return;
            }

            // Update grid class based on cards per page (default to 9)
            this.updateGridLayout(paginationData?.cardsPerPage || 9);

            this.gridElement.innerHTML = campsites.map(campsite =>
                this.createCampsiteCard(campsite)
            ).join('');

            this.bindCardEvents(campsites);

            if (paginationData) {
                this.updateResultsInfo(paginationData.totalCampsites, campsites.length);
                this.renderPagination(paginationData.totalPages, paginationData.currentPage);
            }
        }

        updateGridLayout(cardsPerPage) {
            // Remove existing grid classes
            this.gridElement.classList.remove('grid-6', 'grid-9', 'grid-15');

            // Add appropriate grid class
            if (cardsPerPage === 6) {
                this.gridElement.classList.add('grid-6');
            } else if (cardsPerPage === 9) {
                this.gridElement.classList.add('grid-9');
            } else if (cardsPerPage === 15) {
                this.gridElement.classList.add('grid-15');
            }
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
                        </div>
                        ${campsite.activities.length > 3 ?
                    `<div class="campsite-more-activities">
                        <span class="activity-tag">+${campsite.activities.length - 3} more</span>
                    </div>` :
                    ''
                }
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

        updateResultsInfo(totalCampsites, currentCount) {
            const resultsElement = document.getElementById('resultsCount');
            if (resultsElement) {
                resultsElement.textContent = `Showing ${currentCount} of ${totalCampsites} campsites`;
            }
        }

        renderPagination(totalPages, currentPage) {
            const paginationContainer = document.getElementById('pageNumbers');
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            if (!paginationContainer || totalPages <= 1) {
                if (paginationContainer) {
                    paginationContainer.innerHTML = '';
                }
                if (prevBtn) prevBtn.disabled = true;
                if (nextBtn) nextBtn.disabled = true;
                return;
            }

            // Update previous/next buttons
            if (prevBtn) prevBtn.disabled = currentPage <= 1;
            if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

            // Generate page numbers
            let pageNumbersHTML = '';
            const maxVisiblePages = 5;

            if (totalPages <= maxVisiblePages) {
                // Show all pages if total is small
                for (let i = 1; i <= totalPages; i++) {
                    pageNumbersHTML += this.createPageNumber(i, i === currentPage);
                }
            } else {
                // Show smart pagination with ellipsis
                if (currentPage <= 3) {
                    // Show first 3 pages + ellipsis + last page
                    for (let i = 1; i <= 3; i++) {
                        pageNumbersHTML += this.createPageNumber(i, i === currentPage);
                    }
                    pageNumbersHTML += this.createEllipsis();
                    pageNumbersHTML += this.createPageNumber(totalPages, false);
                } else if (currentPage >= totalPages - 2) {
                    // Show first page + ellipsis + last 3 pages
                    pageNumbersHTML += this.createPageNumber(1, false);
                    pageNumbersHTML += this.createEllipsis();
                    for (let i = totalPages - 2; i <= totalPages; i++) {
                        pageNumbersHTML += this.createPageNumber(i, i === currentPage);
                    }
                } else {
                    // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
                    pageNumbersHTML += this.createPageNumber(1, false);
                    pageNumbersHTML += this.createEllipsis();
                    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                        pageNumbersHTML += this.createPageNumber(i, i === currentPage);
                    }
                    pageNumbersHTML += this.createEllipsis();
                    pageNumbersHTML += this.createPageNumber(totalPages, false);
                }
            }

            paginationContainer.innerHTML = pageNumbersHTML;
            this.bindPaginationEvents();
        }

        createPageNumber(pageNum, isActive) {
            return `<button class="page-number ${isActive ? 'active' : ''}" data-page="${pageNum}">${pageNum}</button>`;
        }

        createEllipsis() {
            return `<span class="page-number ellipsis">...</span>`;
        }

        bindPaginationEvents() {
            // Bind page number clicks
            document.querySelectorAll('.page-number:not(.ellipsis)').forEach(button => {
                button.addEventListener('click', () => {
                    const page = parseInt(button.dataset.page);
                    eventManager.emit('pagination:pageChange', page);
                });
            });

            // Bind previous/next button clicks
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            if (prevBtn) {
                prevBtn.onclick = () => {
                    eventManager.emit('pagination:pageChange', 'prev');
                };
            }

            if (nextBtn) {
                nextBtn.onclick = () => {
                    eventManager.emit('pagination:pageChange', 'next');
                };
            }
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
                        <div class="packing-item" data-item="${item}" data-category="${categoryName}">
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

    // PaginationController - Handle display controls and pagination
    class PaginationController {
        constructor(campsiteManager) {
            this.campsiteManager = campsiteManager;
            this.initializeElements();
            this.bindEvents();
        }

        initializeElements() {
            this.cardOptions = document.querySelectorAll('.card-option');
        }

        bindEvents() {
            // Cards per page change
            this.cardOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    const value = e.target.dataset.value;
                    this.handleCardsPerPageChange(value);
                    this.updateActiveOption(value);
                });
            });

            // Pagination events
            eventManager.on('pagination:pageChange', (page) => {
                this.handlePageChange(page);
            });
        }

        updateActiveOption(selectedValue) {
            this.cardOptions.forEach(option => {
                option.classList.remove('active');
                if (option.dataset.value === selectedValue) {
                    option.classList.add('active');
                }
            });
        }

        handleCardsPerPageChange(cardsPerPage) {
            this.campsiteManager.setCardsPerPage(cardsPerPage);
        }

        handlePageChange(page) {
            if (page === 'prev') {
                const currentPage = this.campsiteManager.getCurrentPage();
                if (currentPage > 1) {
                    this.campsiteManager.setCurrentPage(currentPage - 1);
                }
            } else if (page === 'next') {
                const currentPage = this.campsiteManager.getCurrentPage();
                const totalPages = this.campsiteManager.getTotalPages();
                if (currentPage < totalPages) {
                    this.campsiteManager.setCurrentPage(currentPage + 1);
                }
            } else {
                this.campsiteManager.setCurrentPage(page);
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
            this.selectedItems = new Set(); // Track selected activity items
            this.selectedPackingItems = new Set(); // Track selected packing items
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

            // Make header content clickable to return to home page
            const headerContent = document.querySelector('.header .header-content');
            if (headerContent) {
                headerContent.addEventListener('click', () => {
                    this.returnToHomePage();
                });

                // Add keyboard accessibility
                headerContent.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.returnToHomePage();
                    }
                });

                // Set tabindex for keyboard navigation
                headerContent.setAttribute('tabindex', '0');
                headerContent.setAttribute('role', 'button');
                headerContent.setAttribute('aria-label', 'Return to home page');
            }
        }

        showCampsiteDetail(campsite) {
            this.currentCampsite = campsite;
            // Clear selected items when showing a new campsite
            this.selectedItems.clear();
            this.selectedPackingItems.clear();
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
            this.selectedPackingItems.clear();
        }

        populateDetailContent(campsite) {
            this.populateBasicInfo(campsite);
            this.populateAmenities(campsite);
            this.populateActivities(campsite);
            this.populatePackingList(campsite);

            // Initialize collapsible sections with a small delay to ensure DOM is ready
            setTimeout(() => {
                this.initializeCollapsibleSections();
            }, 100);
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
            const amenitiesList = document.getElementById('detailAmenitiesList');

            if (amenitiesList && campsite.amenities && campsite.amenities.length > 0) {
                // Render simple amenity tags
                amenitiesList.innerHTML = campsite.amenities.map(amenity =>
                    `<span class="amenity-tag">${amenity}</span>`
                ).join('');
            } else if (amenitiesList) {
                amenitiesList.innerHTML = '<span class="no-amenities">No amenities listed</span>';
            }
        }

        populateActivities(campsite) {
            const activitiesList = document.getElementById('detailActivitiesList');

            if (activitiesList && campsite.activities && campsite.activities.length > 0) {
                // Render simple activity tags
                activitiesList.innerHTML = campsite.activities.map(activity =>
                    `<span class="activity-tag">${activity}</span>`
                ).join('');
            } else if (activitiesList) {
                activitiesList.innerHTML = '<span class="no-activities">No activities listed</span>';
            }
        }









        bindPackingItemEvents() {
            const packingItems = document.querySelectorAll('.packing-item');
            packingItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const itemText = item.dataset.item;
                    const category = item.dataset.category;
                    console.log('Packing item clicked:', itemText, 'from category:', category);

                    item.classList.toggle('selected');

                    // Track selected packing items
                    if (item.classList.contains('selected')) {
                        this.selectedPackingItems.add(itemText);
                        // Add checkmark
                        const span = item.querySelector('span');
                        if (span) {
                            span.innerHTML = `✓ ${itemText}`;
                        }
                        item.style.backgroundColor = '#48bb78';
                        item.style.color = 'white';
                        console.log('Packing item selected:', itemText);
                    } else {
                        this.selectedPackingItems.delete(itemText);
                        // Remove checkmark
                        const span = item.querySelector('span');
                        if (span) {
                            span.innerHTML = itemText;
                        }
                        item.style.backgroundColor = '';
                        item.style.color = '';
                        console.log('Packing item deselected:', itemText);
                    }
                });
            });
        }

        formatCategoryName(category) {
            return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        printCampsiteWithSelectedItems() {
            if (!this.currentCampsite) {
                alert('No campsite selected to print.');
                return;
            }

            // Group selected items by category
            const itemsByCategory = {};
            const packingItems = document.querySelectorAll('.packing-item.selected');

            packingItems.forEach(item => {
                const category = item.dataset.category;
                const itemText = item.dataset.item;
                if (!itemsByCategory[category]) {
                    itemsByCategory[category] = [];
                }
                itemsByCategory[category].push(itemText);
            });

            // Calculate estimated heights and organize categories for pagination
            const categories = Object.entries(itemsByCategory);
            const firstPageCategories = [];
            const secondPageCategories = [];

            // Estimate that each category takes about 60px + (items * 30px)
            // Ultra-aggressive first page filling - prioritize first page over second page
            let firstPageHeight = 0;
            const estimatedCampsiteSectionHeight = 200; // campsite info section
            const estimatedFooterHeight = 60; // further reduced footer height
            const maxFirstPageHeight = 750; // increased maximum height
            const minFirstPageFill = maxFirstPageHeight * 0.85; // increased minimum to 85%

            // Sort categories by size (largest first) to fill first page more efficiently
            categories.sort((a, b) => b[1].length - a[1].length);

            // First pass: fill first page as much as possible (up to 98% capacity)
            for (const [category, items] of categories) {
                const categoryHeight = 60 + (items.length * 30); // header + items

                // Ultra-aggressive filling - use up to 98% of available space
                if (firstPageHeight + categoryHeight <= maxFirstPageHeight * 0.98) {
                    firstPageCategories.push([category, items]);
                    firstPageHeight += categoryHeight;
                } else {
                    secondPageCategories.push([category, items]);
                }
            }

            // Second pass: ensure minimum 85% fill by moving categories from second page
            if (firstPageHeight < minFirstPageFill && secondPageCategories.length > 0) {
                // Move categories from second page to first page until we reach 85% fill
                while (firstPageHeight < minFirstPageFill && secondPageCategories.length > 0) {
                    // Find the smallest category that could fit
                    const smallestCategory = secondPageCategories.reduce((smallest, current) => {
                        const currentHeight = 60 + (current[1].length * 30);
                        const smallestHeight = 60 + (smallest[1].length * 30);
                        return currentHeight < smallestHeight ? current : smallest;
                    });

                    const smallestHeight = 60 + (smallestCategory[1].length * 30);
                    const remainingSpace = maxFirstPageHeight * 0.98 - firstPageHeight;

                    if (smallestHeight <= remainingSpace) {
                        // Move it to first page
                        secondPageCategories = secondPageCategories.filter(cat => cat !== smallestCategory);
                        firstPageCategories.push(smallestCategory);
                        firstPageHeight += smallestHeight;
                    } else {
                        // If even the smallest category doesn't fit, break to avoid infinite loop
                        break;
                    }
                }
            }

            // Third pass: if second page is too small, move more categories to first page
            if (secondPageCategories.length > 0 && secondPageCategories.length < 3) {
                // Try to fit more categories on first page even if it gets very full
                const remainingSpace = maxFirstPageHeight * 0.98 - firstPageHeight;
                if (remainingSpace > 80) { // If we have at least 80px remaining
                    // Move up to 2 more categories if they fit
                    const categoriesToMove = Math.min(2, secondPageCategories.length);
                    for (let i = 0; i < categoriesToMove; i++) {
                        const smallestCategory = secondPageCategories.reduce((smallest, current) => {
                            const currentHeight = 60 + (current[1].length * 30);
                            const smallestHeight = 60 + (smallest[1].length * 30);
                            return currentHeight < smallestHeight ? current : smallest;
                        });

                        const smallestHeight = 60 + (smallestCategory[1].length * 30);
                        if (smallestHeight <= remainingSpace) {
                            secondPageCategories = secondPageCategories.filter(cat => cat !== smallestCategory);
                            firstPageCategories.push(smallestCategory);
                            firstPageHeight += smallestHeight;
                        }
                    }
                }
            }

            // Create print window content
            const printContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Joy of Camping - ${this.currentCampsite.name}</title>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                        
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        
                        body {
                            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            line-height: 1.4;
                            color: #2d3748;
                            background: #ffffff;
                            padding: 25px;
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        
                        .campsite-section {
                            display: flex;
                            gap: 25px;
                            margin-bottom: 30px;
                            align-items: flex-start;
                            page-break-inside: avoid;
                        }
                        
                        .campsite-image {
                            flex: 0 0 180px;
                            height: 135px;
                            border-radius: 10px;
                            overflow: hidden;
                            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                        }
                        
                        .campsite-image img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        
                        .campsite-details {
                            flex: 1;
                        }
                        
                        .campsite-name {
                            font-size: 1.6rem;
                            font-weight: 600;
                            color: #2d3748;
                            margin-bottom: 6px;
                        }
                        
                        .campsite-location {
                            font-size: 1rem;
                            color: #718096;
                            margin-bottom: 15px;
                            font-weight: 500;
                        }
                        
                        .campsite-stats {
                            display: flex;
                            gap: 15px;
                            flex-wrap: wrap;
                        }
                        
                        .stat {
                            display: flex;
                            align-items: center;
                            gap: 6px;
                            font-size: 0.9rem;
                            color: #4a5568;
                            font-weight: 500;
                        }
                        
                        .stat i {
                            color: #38a169;
                            font-size: 1rem;
                        }
                        
                        .packing-section {
                            margin-top: 15px;
                        }
                        
                        .page-break {
                            page-break-before: always;
                            margin-top: 0;
                        }
                        
                        .packing-title {
                            font-size: 1.3rem;
                            font-weight: 600;
                            color: #2d3748;
                            margin-bottom: 12px;
                            padding-bottom: 6px;
                            border-bottom: 2px solid #e2e8f0;
                        }
                        
                        .category-section {
                            margin-bottom: 15px;
                            page-break-inside: auto;
                        }
                        
                        .category-title {
                            font-size: 1rem;
                            font-weight: 600;
                            color: #4a5568;
                            margin-bottom: 8px;
                            padding: 6px 10px;
                            background: #f7fafc;
                            border-left: 4px solid #38a169;
                            border-radius: 0 6px 6px 0;
                        }
                        
                        .packing-items {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                            gap: 6px;
                            margin-left: 12px;
                        }
                        
                        .packing-item {
                            padding: 6px 10px;
                            background: #f7fafc;
                            border: 1px solid #e2e8f0;
                            border-radius: 6px;
                            font-size: 0.9rem;
                            color: #4a5568;
                            font-weight: 500;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        }
                        
                        .packing-item:before {
                            content: "✓";
                            color: #38a169;
                            font-weight: bold;
                            font-size: 1rem;
                        }
                        
                        .no-items {
                            text-align: center;
                            padding: 30px;
                            color: #718096;
                            font-style: italic;
                            background: #f7fafc;
                            border-radius: 8px;
                            border: 2px dashed #e2e8f0;
                        }
                        
                        .print-footer {
                            margin-top: 30px;
                            text-align: center;
                            padding-top: 20px;
                            border-top: 1px solid #e2e8f0;
                            color: #718096;
                            font-size: 0.85rem;
                        }
                        
                        .print-footer p {
                            margin-bottom: 4px;
                        }
                        
                        @media print {
                            body {
                                padding: 12px;
                            }
                            
                            .campsite-section {
                                page-break-inside: avoid;
                            }
                            
                            .category-section {
                                page-break-inside: auto;
                                page-break-before: auto;
                            }
                            
                            .packing-section {
                                page-break-inside: auto;
                            }
                            
                            .packing-items {
                                page-break-inside: auto;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="campsite-section">
                        <div class="campsite-image">
                            <img src="${this.currentCampsite.image}" alt="${this.currentCampsite.name}" />
                        </div>
                        <div class="campsite-details">
                            <h2 class="campsite-name">${this.currentCampsite.name}</h2>
                            <p class="campsite-location">📍 ${this.currentCampsite.location}</p>
                            <div class="campsite-stats">
                                <div class="stat">
                                    <i class="fas fa-star"></i>
                                    <span>${this.currentCampsite.rating}</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-dollar-sign"></i>
                                    <span>${this.currentCampsite.price}</span>
                                </div>
                                <div class="stat">
                                    <i class="fas fa-users"></i>
                                    <span>${this.currentCampsite.capacity}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                                        <div class="packing-section">
                        <h3 class="packing-title">📦 Selected Packing Items</h3>
                        ${firstPageCategories.length > 0 ?
                    firstPageCategories.map(([category, items]) => `
                                <div class="category-section">
                                    <h4 class="category-title">${this.formatCategoryName(category)}</h4>
                                    <div class="packing-items">
                                        ${items.map(item => `
                                            <div class="packing-item">${item}</div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')
                    : `
                            <div class="no-items">
                                <p>No items selected for this trip.</p>
                                <p>Click on items in the "What to Bring" section to select them.</p>
                            </div>
                        `}
                    </div>
                    
                    ${secondPageCategories.length > 0 ? `
                        <div class="packing-section page-break">
                            <h3 class="packing-title">📦 Selected Packing Items (continued)</h3>
                            ${secondPageCategories.map(([category, items]) => `
                                <div class="category-section">
                                    <h4 class="category-title">${this.formatCategoryName(category)}</h4>
                                    <div class="packing-items">
                                        ${items.map(item => `
                                            <div class="packing-item">${item}</div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                            
                            <div class="print-footer">
                                <p><strong>Generated on:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                                <p>Happy camping! 🏕️ Generated by Joy of Camping</p>
                            </div>
                        </div>
                    ` : `
                        <div class="print-footer">
                            <p><strong>Generated on:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                            <p>Happy camping! 🏕️ Generated by Joy of Camping</p>
                        </div>
                    `}
                </body>
                </html>
            `;

            // Open print window
            const printWindow = window.open('', '_blank');
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.focus();

            // Wait for content to load then print
            printWindow.onload = function () {
                printWindow.print();
                printWindow.close();
            };
        }





        populatePackingList(campsite) {
            const packingListElement = document.getElementById('detailPackingList');
            const packingCount = document.getElementById('packingCount');

            if (packingListElement && this.packingListGenerator) {
                const packingData = this.packingListGenerator.generatePackingList(campsite);
                const packingHTML = this.packingListGenerator.renderPackingListHTML(packingData);
                packingListElement.innerHTML = packingHTML;

                // Calculate total items across all categories
                let totalItems = 0;
                if (packingData && typeof packingData === 'object') {
                    Object.values(packingData).forEach(category => {
                        if (Array.isArray(category)) {
                            totalItems += category.length;
                        }
                    });
                }

                // Update count
                if (packingCount) {
                    packingCount.textContent = totalItems;
                }

                // Bind events to packing items
                this.bindPackingItemEvents();
            } else if (packingCount) {
                packingCount.textContent = '0';
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

        returnToHomePage() {
            // If we're on a campsite detail page, hide it to return to home
            if (this.isDetailViewVisible()) {
                this.hideCampsiteDetail();
            }

            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Clear any search or filters to show all campsites
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = '';
                // Trigger search event to reset results
                searchInput.dispatchEvent(new Event('input'));
            }

            // Reset filter to "All Sites"
            const allSitesFilter = document.querySelector('.filter-btn[data-filter="all"]');
            if (allSitesFilter) {
                allSitesFilter.click();
            }
        }

        initializeCollapsibleSections() {
            console.log('Initializing collapsible sections...');
            const sectionHeaders = document.querySelectorAll('.section-header');
            console.log('Found section headers:', sectionHeaders.length);

            sectionHeaders.forEach((header, index) => {
                console.log(`Setting up header ${index}:`, header);

                // Remove any existing event listeners to prevent duplicates
                const newHeader = header.cloneNode(true);
                header.parentNode.replaceChild(newHeader, header);

                newHeader.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Section header clicked:', newHeader);
                    this.toggleSection(newHeader);
                });

                // Add keyboard accessibility
                newHeader.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Section header key pressed:', newHeader);
                        this.toggleSection(newHeader);
                    }
                });

                // Set tabindex for keyboard navigation
                newHeader.setAttribute('tabindex', '0');

                // Ensure content is initially collapsed
                const targetId = newHeader.getAttribute('data-target');
                const content = document.getElementById(targetId);
                if (content) {
                    content.style.maxHeight = '0';
                    content.style.overflow = 'hidden';
                    console.log(`Initialized content for ${targetId}`);
                }
            });

            console.log('Collapsible sections initialization complete');
        }

        toggleSection(header) {
            const targetId = header.getAttribute('data-target');
            const content = document.getElementById(targetId);

            console.log('Toggling section:', targetId);
            console.log('Content element:', content);

            if (!content) {
                console.error('Content element not found for target:', targetId);
                return;
            }

            const isExpanded = header.classList.contains('expanded');
            console.log('Is expanded:', isExpanded);

            if (isExpanded) {
                // Collapse the section
                console.log('Collapsing section:', targetId);
                header.classList.remove('expanded');
                content.classList.remove('expanded');

                // Add a small delay to ensure smooth animation
                setTimeout(() => {
                    content.style.maxHeight = '0';
                    content.style.overflow = 'hidden';
                    console.log('Section collapsed:', targetId);
                }, 10);
            } else {
                // Expand the section
                console.log('Expanding section:', targetId);
                header.classList.add('expanded');
                content.classList.add('expanded');

                // Calculate the actual height for smooth animation
                const scrollHeight = content.scrollHeight;
                console.log('Content scroll height:', scrollHeight);
                content.style.maxHeight = scrollHeight + 'px';
                content.style.overflow = 'visible';

                // Reset max-height after animation completes
                setTimeout(() => {
                    if (content.classList.contains('expanded')) {
                        content.style.maxHeight = 'none';
                        console.log('Section fully expanded:', targetId);
                    }
                }, 400);
            }
        }
    }

    // Main JoyOfCampingApp - Application controller
    class JoyOfCampingApp {
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
                console.error('Failed to initialize Joy of Camping app:', error);
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
            this.modules.paginationController = new PaginationController(
                this.modules.campsiteManager
            );
        }

        startApp() {
            this.addDynamicStyles();
            this.addMicroInteractions();

            // Set initial grid layout to 9 cards per page
            this.modules.campsiteRenderer.updateGridLayout(9);

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
                
                .packing-item {
                    cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0.5rem;
                    border-radius: 6px;
                    margin: 0.25rem 0;
                }
                
                .packing-item:hover {
                    background-color: #e2e8f0;
                    transform: translateX(5px);
                }
                
                .packing-item {
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 12px 16px;
                    margin: 4px 0;
                    background: #ffffff;
                    color: #4a5568;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .packing-item:hover {
                    background-color: #f7fafc;
                    border-color: #cbd5e0;
                    transform: translateY(-1px);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                
                .packing-item.selected {
                    background-color: #48bb78 !important;
                    color: white !important;
                    border-color: #38a169 !important;
                    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3) !important;
                }
                
                /* Ensure collapsible content works properly */
                .collapsible-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .collapsible-content.expanded {
                    max-height: 2000px;
                    overflow: visible;
                }
                
                /* Ensure section headers are clickable */
                .section-header {
                    cursor: pointer;
                    user-select: none;
                }
                
                .section-header:hover {
                    background-color: rgba(66, 153, 225, 0.05);
                }
                
                /* Make header content clickable */
                .header .header-content {
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-radius: 8px;
                    padding: 0.5rem;
                }
                
                .header .header-content:hover {
                    background-color: rgba(56, 161, 105, 0.05);
                    transform: translateY(-2px);
                }
                
                .header .header-content:active {
                    transform: translateY(0);
                }
                
                .header .header-content:focus {
                    outline: 2px solid #38a169;
                    outline-offset: 2px;
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

            const joyOfCampingApp = new JoyOfCampingApp(
                campsitesData,
                packingListsData,
                activityPackingSuggestions
            );

            window.joyOfCampingApp = joyOfCampingApp;
            console.log('🏕️ Joy of Camping application initialized successfully!');

        } catch (error) {
            console.error('Failed to initialize Joy of Camping application:', error);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

})();