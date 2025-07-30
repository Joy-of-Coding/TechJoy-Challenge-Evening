// CampsiteRenderer.js - Handles all DOM rendering for campsites
import { eventManager } from './eventManager.js';

export class CampsiteRenderer {
    constructor() {
        this.gridElement = null;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.gridElement = document.getElementById('campsitesGrid');
    }

    bindEvents() {
        // Listen for campsite data changes
        eventManager.on('campsites:filtered', (data) => {
            this.renderCampsiteGrid(data.campsites, data.hasResults);
        });
    }

    // Render the main campsites grid
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

    // Create individual campsite card HTML
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

    // Bind click events to campsite cards
    bindCardEvents(campsites) {
        document.querySelectorAll('.campsite-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                eventManager.emit('campsite:selected', campsites[index]);
            });
        });
    }

    // Render no results state
    renderNoResults() {
        this.gridElement.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                <h3>No campsites found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    }

    // Show loading state
    showLoading() {
        this.gridElement.innerHTML = '<div class="loading">Loading amazing campsites...</div>';
    }

    // Add hover effects for activity tags
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
}