// CampJoyApp.js - Main application controller that orchestrates all modules
import { EventManager, eventManager } from './eventManager.js';
import { CampsiteManager } from './campsiteManager.js';
import { CampsiteRenderer } from './campsiteRenderer.js';
import { SearchFilterController } from './searchFilterController.js';
import { PackingListGenerator } from './packingListGenerator.js';
import { DetailViewController } from './detailViewController.js';
import { UIInteractions } from './uiInteractions.js';

export class CampJoyApp {
    constructor(campsitesData, packingListsData, activityPackingSuggestions) {
        // Store data
        this.campsitesData = campsitesData;
        this.packingListsData = packingListsData;
        this.activityPackingSuggestions = activityPackingSuggestions;
        
        // Initialize modules
        this.modules = {};
        
        // Bind methods to preserve context
        this.initialize = this.initialize.bind(this);
        this.handleAppReady = this.handleAppReady.bind(this);
        
        // Initialize the app
        this.initialize();
    }

    // Initialize all modules and bind them together
    initialize() {
        try {
            this.initializeModules();
            this.bindModuleEvents();
            this.startApp();
        } catch (error) {
            console.error('Failed to initialize CampJoy app:', error);
            this.handleInitializationError(error);
        }
    }

    // Initialize all application modules
    initializeModules() {
        // Data management
        this.modules.campsiteManager = new CampsiteManager(this.campsitesData);
        
        // Packing list functionality
        this.modules.packingListGenerator = new PackingListGenerator(
            this.packingListsData,
            this.activityPackingSuggestions
        );
        
        // View controllers
        this.modules.campsiteRenderer = new CampsiteRenderer();
        this.modules.detailViewController = new DetailViewController(
            this.modules.packingListGenerator
        );
        
        // Input controllers
        this.modules.searchFilterController = new SearchFilterController(
            this.modules.campsiteManager
        );
        
        // UI enhancements
        this.modules.uiInteractions = new UIInteractions();
    }

    // Bind cross-module events and interactions
    bindModuleEvents() {
        // App lifecycle events
        eventManager.on('app:ready', this.handleAppReady);
        eventManager.on('app:error', this.handleAppError.bind(this));
        
        // Loading events
        eventManager.on('loading:complete', () => {
            this.modules.campsiteManager.applyFilters();
        });
        
        // Analytics events (placeholder for future implementation)
        eventManager.on('search:performed', this.trackSearchEvent.bind(this));
        eventManager.on('filter:changed', this.trackFilterEvent.bind(this));
        eventManager.on('campsite:selected', this.trackCampsiteView.bind(this));
    }

    // Start the application
    startApp() {
        // Initialize UI interactions
        this.modules.uiInteractions.initialize();
        
        // Add loading animation
        this.addInitialLoadingAnimation();
        
        // Add CSS enhancements
        this.addDynamicStyles();
        
        // Emit app ready event
        setTimeout(() => {
            eventManager.emit('app:ready');
        }, 100);
    }

    // Handle app ready state
    handleAppReady() {
        // Show initial loading, then render campsites
        this.modules.campsiteRenderer.showLoading();
        
        // Simulate loading time for better UX
        setTimeout(() => {
            this.modules.campsiteManager.applyFilters();
            eventManager.emit('app:initialized');
        }, 800);
    }

    // Add initial loading animation
    addInitialLoadingAnimation() {
        const grid = document.getElementById('campsitesGrid');
        if (grid) {
            this.modules.uiInteractions.showLoadingWithTimeout(grid, 800);
        }
    }

    // Add dynamic CSS styles
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
                position: relative;
                overflow: hidden;
            }
            
            .campsite-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            
            .activity-tag {
                transition: transform 0.2s ease;
                cursor: pointer;
            }
            
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Error handling
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

    // Handle runtime errors
    handleAppError(error) {
        console.error('Application error:', error);
        // Could implement error reporting here
    }

    // Analytics event handlers (placeholder implementations)
    trackSearchEvent(data) {
        console.log('Search performed:', data.term);
        // Implement analytics tracking here
    }

    trackFilterEvent(data) {
        console.log('Filter changed:', data.filter);
        // Implement analytics tracking here
    }

    trackCampsiteView(campsite) {
        console.log('Campsite viewed:', campsite.name);
        // Implement analytics tracking here
    }

    // Public API methods for external access
    
    // Get current application state
    getState() {
        return {
            currentFilter: this.modules.campsiteManager.getCurrentFilter(),
            searchTerm: this.modules.campsiteManager.getSearchTerm(),
            filteredCampsites: this.modules.campsiteManager.getFilteredCampsites(),
            currentCampsite: this.modules.detailViewController.getCurrentCampsite()
        };
    }

    // Reset application to initial state
    reset() {
        this.modules.searchFilterController.resetFilters();
        this.modules.detailViewController.hideCampsiteDetail();
        eventManager.emit('app:reset');
    }

    // Export functionality
    exportCurrentPackingList() {
        return this.modules.detailViewController.exportPackingList();
    }

    // Cleanup method for proper destruction
    destroy() {
        // Remove event listeners
        Object.values(this.modules).forEach(module => {
            if (module.destroy && typeof module.destroy === 'function') {
                module.destroy();
            }
        });
        
        // Clear modules
        this.modules = {};
        
        eventManager.emit('app:destroyed');
    }

    // Get module for external access (useful for debugging or extensions)
    getModule(moduleName) {
        return this.modules[moduleName];
    }
}