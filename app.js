// CampJoy - Main Application
class CampJoyApp {
    constructor() {
        this.campsites = campsitesData;
        this.filteredCampsites = [...this.campsites];
        this.currentFilter = 'all';
        this.searchTerm = '';

        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.renderCampsites();
        this.addLoadingAnimation();
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterCampsites();
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.filter);
            });
        });

        // Back button
        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', () => {
            this.showCampsitesList();
        });
    }

    setActiveFilter(filter) {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.currentFilter = filter;
        this.filterCampsites();
    }

    filterCampsites() {
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

        this.renderCampsites();
    }

    renderCampsites() {
        const grid = document.getElementById('campsitesGrid');

        if (this.filteredCampsites.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                    <h3>No campsites found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredCampsites.map(campsite =>
            this.createCampsiteCard(campsite)
        ).join('');

        // Add click events to cards
        document.querySelectorAll('.campsite-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showCampsiteDetail(this.filteredCampsites[index]);
            });
        });
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

    showCampsiteDetail(campsite) {
        // Hide campsites grid and show detail view
        document.querySelector('.campsites-section').style.display = 'none';
        document.querySelector('.search-section').style.display = 'none';

        const detailSection = document.getElementById('campsiteDetail');
        detailSection.classList.remove('hidden');

        // Populate detail content
        this.populateCampsiteDetail(campsite);

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    populateCampsiteDetail(campsite) {
        // Basic info
        document.getElementById('detailImage').src = campsite.image;
        document.getElementById('detailImage').alt = campsite.name;
        document.getElementById('detailName').textContent = campsite.name;
        document.getElementById('detailLocation').textContent = campsite.location;
        document.getElementById('detailRating').textContent = campsite.rating;
        document.getElementById('detailPrice').textContent = campsite.price;
        document.getElementById('detailCapacity').textContent = campsite.capacity;
        document.getElementById('detailDescription').textContent = campsite.description;

        // Amenities
        const amenitiesList = document.getElementById('detailAmenities');
        amenitiesList.innerHTML = campsite.amenities.map(amenity =>
            `<div class="amenity-item">
                <i class="fas fa-check"></i>
                <span>${amenity}</span>
            </div>`
        ).join('');

        // Activities
        const activitiesList = document.getElementById('detailActivities');
        activitiesList.innerHTML = campsite.activities.map(activity =>
            `<div class="activity-item">
                <i class="fas fa-hiking"></i>
                <span>${activity}</span>
            </div>`
        ).join('');

        // Packing list
        this.generatePackingList(campsite);
    }

    generatePackingList(campsite) {
        const packingList = document.getElementById('detailPackingList');
        const basePackingList = packingListsData[campsite.type] || {};

        let packingHTML = '';

        // Add base packing list by category
        Object.entries(basePackingList).forEach(([category, items]) => {
            const categoryName = category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
            packingHTML += `
                <div class="packing-category">
                    <h4>${categoryName}</h4>
                    ${items.map(item => `
                        <div class="packing-item">
                            <i class="fas fa-suitcase"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        });

        // Add activity-specific suggestions
        const activitySuggestions = this.getActivitySuggestions(campsite.activities);
        if (activitySuggestions.length > 0) {
            packingHTML += `
                <div class="packing-category">
                    <h4>Activity-Specific Items</h4>
                    ${activitySuggestions.map(item => `
                        <div class="packing-item">
                            <i class="fas fa-star"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        packingList.innerHTML = packingHTML;
    }

    getActivitySuggestions(activities) {
        const suggestions = new Set();

        activities.forEach(activity => {
            const activityKey = activity.toLowerCase().replace(/\s+/g, '_');
            if (activityPackingSuggestions[activityKey]) {
                activityPackingSuggestions[activityKey].forEach(item => {
                    suggestions.add(item);
                });
            }
        });

        return Array.from(suggestions).slice(0, 10); // Limit to 10 items
    }

    showCampsitesList() {
        // Show campsites grid and search section
        document.querySelector('.campsites-section').style.display = 'block';
        document.querySelector('.search-section').style.display = 'block';

        // Hide detail view
        document.getElementById('campsiteDetail').classList.add('hidden');

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    addLoadingAnimation() {
        // Add a subtle loading animation when the app first loads
        const grid = document.getElementById('campsitesGrid');
        grid.innerHTML = '<div class="loading">Loading amazing campsites...</div>';

        // Simulate loading time for better UX
        setTimeout(() => {
            this.renderCampsites();
        }, 800);
    }
}

// Add some CSS for the no-results state
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
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CampJoyApp();
});

// Add some delightful micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to activity tags
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

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const detailSection = document.getElementById('campsiteDetail');
            if (!detailSection.classList.contains('hidden')) {
                document.getElementById('backBtn').click();
            }
        }
    });
}); 