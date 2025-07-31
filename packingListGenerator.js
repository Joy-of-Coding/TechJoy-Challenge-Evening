// PackingListGenerator.js - Generates packing lists based on campsite data
export class PackingListGenerator {
    constructor(packingListsData, activityPackingSuggestions) {
        this.packingListsData = packingListsData;
        this.activityPackingSuggestions = activityPackingSuggestions;
    }

    // Generate complete packing list for a campsite
    generatePackingList(campsite) {
        const basePackingList = this.packingListsData[campsite.type] || {};
        const activitySuggestions = this.getActivitySuggestions(campsite.activities);

        return {
            baseItems: basePackingList,
            activityItems: activitySuggestions,
            campsite: campsite
        };
    }

    // Get activity-specific packing suggestions
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

        return Array.from(suggestions).slice(0, 10); // Limit to 10 items
    }

    // Render packing list HTML
    renderPackingListHTML(packingData) {
        let packingHTML = '';

        // Add base packing list by category
        Object.entries(packingData.baseItems).forEach(([category, items]) => {
            const categoryName = this.formatCategoryName(category);
            packingHTML += this.createCategorySection(categoryName, items, 'suitcase');
        });

        // Add activity-specific suggestions
        if (packingData.activityItems.length > 0) {
            packingHTML += this.createCategorySection(
                'Activity-Specific Items', 
                packingData.activityItems, 
                'star'
            );
        }

        return packingHTML;
    }

    // Format category name from snake_case to Title Case
    formatCategoryName(category) {
        return category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    // Create HTML for a packing category section
  createCategorySection(categoryName, items, iconClass) {
      console.log('Creating category section:', categoryName);
        return `
            <div class="packing-category">
                <h4>${categoryName}</h4>
                ${items.map(item => {
                  console.log('Creating button for item:', item);
                  // `<div class="packing-item">
                  //       <i class="fas fa-hiking"></i>
                  //       <span>${item}</span>
                  //   </div>'

return `<button class="interactive-button activity-button" data-activity="${item}">
                        <i class="fas fa-hiking"></i>
                        ${activity}
                    </button>`

  }).join('')}
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

    // Merge multiple packing lists (useful for multi-activity trips)
    mergePackingLists(activities, campsiteType) {
        const baseList = this.getBasePackingList(campsiteType);
        const activityItems = this.getActivitySuggestions(activities);

        return {
            baseItems: baseList,
            activityItems: activityItems,
            allItems: this.flattenPackingList(baseList).concat(activityItems)
        };
    }

    // Flatten nested packing list structure
    flattenPackingList(packingList) {
        const flattened = [];
        Object.values(packingList).forEach(categoryItems => {
            if (Array.isArray(categoryItems)) {
                flattened.push(...categoryItems);
            }
        });
        return flattened;
    }

    // Export packing list as plain text
    exportAsText(packingData) {
        let text = `Packing List for ${packingData.campsite.name}\n`;
        text += `Location: ${packingData.campsite.location}\n\n`;

        Object.entries(packingData.baseItems).forEach(([category, items]) => {
            text += `${this.formatCategoryName(category)}:\n`;
            items.forEach(item => {
                text += `  - ${item}\n`;
            });
            text += '\n';
        });

        if (packingData.activityItems.length > 0) {
            text += 'Activity-Specific Items:\n';
            packingData.activityItems.forEach(item => {
                text += `  - ${item}\n`;
            });
        }

        return text;
    }
}