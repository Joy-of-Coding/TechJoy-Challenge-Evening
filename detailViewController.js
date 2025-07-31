(() => {
    // This will run as soon as the file loads
    document.body.style.border = '10px solid purple';
})();



// DetailViewController.js - Manages campsite detail view
import { eventManager } from './eventManager.js';

export class DetailViewController {
  // In the same file, update the constructor
constructor(packingListGenerator) {
    document.body.style.border = '5px solid blue';
    document.body.insertAdjacentHTML('afterbegin', '<div style="background:green;color:white;padding:10px;position:fixed;top:40px;left:0;z-index:9999">Constructor Running!</div>');
    
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
      console.log('DEBUG: bindEvents called');
      eventManager.on('campsite:selected', (campsite) => {
          console.log('DEBUG: campsite:selected event received', campsite);
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
    console.log('DEBUG: showCampsiteDetail called with:', campsite);
        this.currentCampsite = campsite;
        
        // Hide main sections
        this.hideMainSections();
        
        // Show detail section
        this.detailSection.classList.remove('hidden');
        
    // Populate content
    console.log('DEBUG: About to call populateDetailContent');
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
    console.log('DEBUG: populateDetailContent called with:', campsite);
    
    // Add try-catch blocks to each populate method
    try {
        this.populateBasicInfo(campsite);
        console.log('DEBUG: Basic info populated');
        
        this.populateAmenities(campsite);
        console.log('DEBUG: Amenities populated');
        
        this.populateActivities(campsite);
        console.log('DEBUG: Activities populated');
        
        this.populatePackingList(campsite);
        console.log('DEBUG: Packing list populated');
    } catch (error) {
        console.error('Error in populateDetailContent:', error);
    }
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
// ...existing code...
populatePackingList(campsite) {
    console.log('DEBUG: Starting populatePackingList');
    const packingListElement = document.getElementById('detailPackingList');
    
    if (!packingListElement) {
        console.error('DEBUG: Packing list element not found');
        return;
    }
    
    try {
        console.log('DEBUG: Generating packing list');
        const packingData = this.packingListGenerator.generatePackingList(campsite);
        const packingHTML = this.packingListGenerator.renderPackingListHTML(packingData);
        
        console.log('DEBUG: Setting innerHTML');
        packingListElement.innerHTML = packingHTML;
        
        // Direct button binding
        const buttons = packingListElement.getElementsByTagName('button');
        console.log('DEBUG: Found buttons:', buttons.length);
        
        Array.from(buttons).forEach(button => {
            console.log('DEBUG: Adding click handler to button:', button.textContent);
            button.addEventListener('click', function(e) {
                console.log('DEBUG: Button clicked:', this.textContent);
                e.preventDefault();
                e.stopPropagation();
                
                this.classList.toggle('selected');
                if (this.classList.contains('selected')) {
                    const originalText = this.textContent.trim();
                    this.setAttribute('data-original-html', this.innerHTML);
                    this.innerHTML = `✅ ${originalText}`;
                    this.style.backgroundColor = '#48bb78';
                    this.style.color = 'white';
                } else {
                    const originalHtml = this.getAttribute('data-original-html');
                    this.innerHTML = originalHtml;
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }
            });
        });

    } catch (error) {
        console.error('DEBUG: Error in populatePackingList:', error);
        console.error(error.stack);
    }
}
// ...existing code...

// bindPackingListButtonEvents(container) {
//     console.log('Starting to bind events to container:', container);
//     const buttons = container.querySelectorAll('.inventory-item');
//     console.log('Found buttons:', buttons.length);
    
//     buttons.forEach(button => {
//         console.log('Binding to button:', button.textContent);
//         button.addEventListener('click', (e) => {
//             console.log('Button clicked:', button.textContent);
//             e.preventDefault();
            
//             const item = button.dataset.activity || button.dataset.item || button.textContent.trim();
//             console.log('Item text:', item);
            
//             button.classList.toggle('selected');
//             if (button.classList.contains('selected')) {
//                 const originalHtml = button.innerHTML;
//                 button.setAttribute('data-original-html', originalHtml);
//                 button.innerHTML = `✅ ${item}`;
//                 button.style.backgroundColor = '#48bb78';
//                 button.style.color = 'white';
//             } else {
//                 const originalHtml = button.getAttribute('data-original-html');
//                 button.innerHTML = originalHtml;
//                 button.style.backgroundColor = '';
//                 button.style.color = '';
//             }
//         });
//     });
// }
  
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