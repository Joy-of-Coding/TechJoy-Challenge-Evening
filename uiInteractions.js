// UIInteractions.js - Handles UI animations and micro-interactions
import { eventManager } from './eventManager.js';

export class UIInteractions {
    constructor() {
        this.initialized = false;
        this.loadingTimeout = null;
    }

    // Initialize all UI interactions
    initialize() {
        if (this.initialized) return;
        
        this.addHoverEffects();
        this.addKeyboardNavigation();
        this.addLoadingStates();
        this.addScrollEffects();
        this.bindEvents();
        
        this.initialized = true;
    }

    // Bind to application events
    bindEvents() {
        eventManager.on('campsites:filtered', () => {
            this.addCardAnimations();
        });

        eventManager.on('detail:shown', () => {
            this.addDetailAnimations();
        });
    }

    // Add hover effects for interactive elements
    addHoverEffects() {
        // Activity tag hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('activity-tag')) {
                this.scaleElement(e.target, 1.05);
            }
            
            if (e.target.classList.contains('campsite-card')) {
                this.addCardHoverEffect(e.target);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('activity-tag')) {
                this.scaleElement(e.target, 1);
            }
            
            if (e.target.classList.contains('campsite-card')) {
                this.removeCardHoverEffect(e.target);
            }
        });
    }

    // Add keyboard navigation support
    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC key handling is already in DetailViewController
            
            // Add support for arrow key navigation on cards
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                this.handleCardNavigation(e);
            }
            
            // Enter key on focused cards
            if (e.key === 'Enter') {
                const focused = document.activeElement;
                if (focused && focused.classList.contains('campsite-card')) {
                    focused.click();
                }
            }
        });
    }

    // Add loading states and animations
    addLoadingStates() {
        // Listen for search/filter events to show subtle loading
        eventManager.on('search:performed', () => {
            this.showSearchLoading();
        });

        eventManager.on('filter:changed', () => {
            this.showFilterLoading();
        });
    }

    // Add scroll-triggered animations
    addScrollEffects() {
        // Smooth scroll behavior for internal links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Fade in effect for cards on scroll
        this.addScrollFadeIn();
    }

    // Scale element with transition
    scaleElement(element, scale) {
        element.style.transition = 'transform 0.2s ease';
        element.style.transform = `scale(${scale})`;
    }

    // Add card hover effect
    addCardHoverEffect(card) {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    }

    // Remove card hover effect
    removeCardHoverEffect(card) {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
    }

    // Handle keyboard navigation on cards
    handleCardNavigation(e) {
        const cards = Array.from(document.querySelectorAll('.campsite-card'));
        const currentIndex = cards.indexOf(document.activeElement);
        let nextIndex;

        if (e.key === 'ArrowDown') {
            nextIndex = Math.min(currentIndex + 1, cards.length - 1);
        } else {
            nextIndex = Math.max(currentIndex - 1, 0);
        }

        if (cards[nextIndex]) {
            cards[nextIndex].focus();
            e.preventDefault();
        }
    }

    // Show search loading indicator
    showSearchLoading() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.style.opacity = '0.7';
            setTimeout(() => {
                searchInput.style.opacity = '1';
            }, 200);
        }
    }

    // Show filter loading indicator
    showFilterLoading() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.style.opacity = '0.7';
            setTimeout(() => {
                btn.style.opacity = '1';
            }, 200);
        });
    }

    // Add card entrance animations
    addCardAnimations() {
        const cards = document.querySelectorAll('.campsite-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50); // Stagger animation
        });
    }

    // Add detail view animations
    addDetailAnimations() {
        const detailSection = document.getElementById('campsiteDetail');
        if (detailSection) {
            detailSection.style.opacity = '0';
            detailSection.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                detailSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                detailSection.style.opacity = '1';
                detailSection.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    // Add scroll-triggered fade in effects
    addScrollFadeIn() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should fade in
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Add loading animation with timeout
    showLoadingWithTimeout(element, duration = 800) {
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }

        element.innerHTML = '<div class="loading">Loading amazing campsites...</div>';
        
        this.loadingTimeout = setTimeout(() => {
            eventManager.emit('loading:complete');
        }, duration);
    }

    // Pulse animation for buttons
    pulseElement(element) {
        element.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 600);
    }

    // Shake animation for validation errors
    shakeElement(element) {
        element.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

    // Add focus ring for accessibility
    addFocusRings() {
        const style = document.createElement('style');
        style.textContent = `
            .campsite-card:focus {
                outline: 2px solid #4299e1;
                outline-offset: 2px;
            }
            
            .filter-btn:focus {
                outline: 2px solid #4299e1;
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }

    // Cleanup method
    destroy() {
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        this.initialized = false;
    }
}
                