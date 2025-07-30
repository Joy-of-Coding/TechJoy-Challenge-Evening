// DetailViewController.js - Manages campsite detail view
import { eventManager } from './eventManager.js';

export class DetailViewController {
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
        // Listen for campsite selection
        eventManager.on('campsite:selected', (campsite) => {
            this.showCampsiteDetail(campsite);
        });

        // Back button handler
        if (this.backButton) {
            this.backButton.addEventListener('click', () => {
                this.hideCampsiteDetail();
            });
        }

        // Keyboard navigation (ESC key)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isDetailViewVisible()) {
                this.hideCampsiteDetail();
            }
        });
    }

    // Show campsite detail view
    showCampsiteDetail(campsite) {
        this.currentCampsite = campsite;
        
        // Hide main sections
        this.hideMainSections();
        
        // Show detail section
        this.detailSection.classList.remove('hidden');
        
        // Populate content
        this.populateDetailContent(campsite);
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Emit event
        eventManager.emit('detail:shown', { campsite });
    }

    // Hide campsite detail view
    hideCampsiteDetail() {
        // Show main sections
        this.showMainSections();
        
        // Hide detail section
        this.detailSection.classList.add('hidden');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Emit event
        eventManager.emit('detail:hidden', { campsite: this.currentCampsite });
        
        this.currentCampsite = null;
    }

    // Populate detail content
    populateDetailContent(campsite) {
        this.populateBasicInfo(campsite);
        this.populateAmenities(campsite);
        this.populateActivities(campsite);
        this.populatePackingList(campsite);
    }

    // Populate basic campsite information
    populateBasicInfo(campsite) {
        this.setElementContent('detailImage', campsite.image, 'src');
        this.setElementContent('detailImage', campsite.name, 'alt');
        this.setElementContent('detailName', campsite.name);
        this.setElementContent('detailLocation', campsite.location);
        this.setElementContent('detailRating', campsite.rating);
        this.setElementContent('detailPrice', campsite.price);
        this.setElementContent('detailCapacity', campsite.capacity);
    }

    // Populate amenities list
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

    // Populate activities list
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

    // Populate packing list
    populatePackingList(campsite) {
        const packingListElement = document.getElementById('detailPackingList');
        if (packingListElement && this.packingListGenerator) {
            const packingData = this.packingListGenerator.generatePackingList(campsite);
            const packingHTML = this.packingListGenerator.renderPackingListHTML(packingData);
            packingListElement.innerHTML = packingHTML;
        }
    }

    // Helper method to set element content
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

    // Hide main sections
    hideMainSections() {
        const campsitesSection = document.querySelector('.campsites-section');
        const searchSection = document.querySelector('.search-section');
        
        if (campsitesSection) campsitesSection.style.display = 'none';
        if (searchSection) searchSection.style.display = 'none';
    }

    // Show main sections
    showMainSections() {
        const campsitesSection = document.querySelector('.campsites-section');
        const searchSection = document.querySelector('.search-section');
        
        if (campsitesSection) campsitesSection.style.display = 'block';
        if (searchSection) searchSection.style.display = 'block';
    }

    // Check if detail view is currently visible
    isDetailViewVisible() {
        return this.detailSection && !this.detailSection.classList.contains('hidden');
    }

    // Get current campsite
    getCurrentCampsite() {
        return this.currentCampsite;
    }

    // Export current campsite packing list
    exportPackingList() {
        if (this.currentCampsite && this.packingListGenerator) {
            const packingData = this.packingListGenerator.generatePackingList(this.currentCampsite);
            return this.packingListGenerator.exportAsText(packingData);
        }
        return null;
    }
}