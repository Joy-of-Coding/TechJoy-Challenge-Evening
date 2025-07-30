import { eventManager } from './eventManager.js';

export class ActivityInventoryController {
  
    constructor(activityData, inventoryData) {
        this.activityData = activityData;
        this.inventoryData = inventoryData;
        this.selectedActivities = new Set();
        this.selectedItems = new Set();
        this.initialize();
    }

    initialize() {
        this.renderActivityButtons();
        this.bindActivityEvents();
    }

    renderActivityButtons() {
        const container = document.getElementById('detailActivities');
        container.innerHTML = this.activityData.map(activity => `
            <button class="interactive-button" data-activity="${activity}">
                ${activity}
            </button>
        `).join('');
    }

    bindActivityEvents() {
        document.querySelectorAll('[data-activity]').forEach(button => {
            button.addEventListener('click', () => {
                const activity = button.dataset.activity;
                button.classList.toggle('active');

                if (this.selectedActivities.has(activity)) {
                    this.selectedActivities.delete(activity);
                    this.hideInventory(activity);
                } else {
                    this.selectedActivities.add(activity);
                    this.showInventory(activity);
                }
            });
        });
    }

    showInventory(activity) {
        const items = this.inventoryData[activity.toLowerCase().replace(/\s+/g, '_')] || [];
        const container = document.getElementById('detailPackingList');
        const section = document.createElement('div');
        section.classList.add('inventory-section');
        section.dataset.activity = activity;

        section.innerHTML = `
            <h4>${activity} Gear</h4>
            ${items.map(item => `
                <button class="interactive-button" data-item="${item}">
                    ${item}
                </button>
            `).join('')}
        `;

        container.appendChild(section);
        this.bindInventoryEvents(section);
    }

    hideInventory(activity) {
        const section = document.querySelector(`.inventory-section[data-activity="${activity}"]`);
        if (section) section.remove();
    }

    bindInventoryEvents(section) {
        section.querySelectorAll('[data-item]').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.dataset.item;
                button.classList.toggle('active');

                if (this.selectedItems.has(item)) {
                    this.selectedItems.delete(item);
                } else {
                    this.selectedItems.add(item);
                }

                // Optional: add checkmark
                button.innerHTML = button.classList.contains('active') ? `✅ ${item}` : item;
            });
        });
    }
}
