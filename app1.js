document.addEventListener('DOMContentLoaded', () => {
  const searchSection = document.querySelector('.search-section');
  const campsitesSection = document.querySelector('.campsites-section');
  const campsiteDetailSection = document.getElementById('campsiteDetail');
  const backButton = document.getElementById('back-button');
  
  displayCampsites(campsitesData);

    // Card Detail Back Button
  backButton.addEventListener('click', () => {
    searchSection.classList.remove('hidden');
    campsitesSection.classList.remove('hidden');
    campsiteDetailSection.classList.add('hidden');

    // Optional: clear detail content if needed
    campsiteDetailSection.querySelector('.detail-content')?.remove();
  });

  // Filter and Sort Event Listeners
  document.getElementById('searchInput').addEventListener('input', performSearch);
  document.getElementById('typeFilter').addEventListener('change', performSearch);
  document.getElementById('tagFilter').addEventListener('change', performSearch);
  document.getElementById('sortBy').addEventListener('change', performSearch);
  document.getElementById('clearFilters').addEventListener('click', () => {
    document.getElementById('typeFilter').value = '';
    document.getElementById('tagFilter').value = '';
    document.getElementById('sortBy').value = '';
    document.getElementById('searchInput').value = '';
    performSearch();
  });

  // Display Campsites Function
  function displayCampsites(sites) {
    // const campsitesSection = document.querySelector('.campsites-section');
    const campsitesGrid = document.createElement('div');
    campsitesGrid.id = 'campsitesGrid';
    campsitesGrid.className = 'campsites-grid';
      
    sites.forEach(site => {
      const card = createCampsiteCard(site);
      campsitesGrid.appendChild(card);
    });
      
    campsitesSection.appendChild(campsitesGrid);
  }

  // Create Campsite Card Function
  function createCampsiteCard(site) {
    const card = document.createElement('div');
    card.className = 'campsite-card';
    card.dataset.name = site.name;
    card.dataset.type = site.type;
    card.dataset.tags = site.tags.join(',');
    card.dataset.rating = site.rating;
    card.dataset.price = site.price;
    card.dataset.capacity = site.capacity;
    card.dataset.location = site.location;

    card.innerHTML = `
      <div class="card-image">
        <img src="${site.image}" alt="${site.name}">
      </div>
      <div class="card-content">
        <h3 class="card-title ${site.type}-title">${site.name}</h3>
        <p class="card-location">${site.location}</p>
        <div class="card-stats">
          <div class="stat">
            <span class="stat-label">Rating</span>
            <span class="stat-value">
              <i class="fas fa-star"></i>
              ${site.rating}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Price</span>
            <span class="stat-value">
              <i class="fas fa-dollar-sign"></i>
              ${site.price}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Capacity</span>
            <span class="stat-value">
              <i class="fas fa-users"></i>
              ${site.capacity}
            </span>
          </div>
        </div>
        <p class="card-description">${site.description}</p>
      </div>
    `;
    
    // Add click event to show details
    card.addEventListener('click', () => {
      searchSection.classList.add('hidden');
      campsitesSection.classList.add('hidden');
      campsiteDetailSection.classList.remove('hidden');

      loadCampsiteDetail(site); // We'll define this next
    });

    return card;
  }

  // Clear Filters Button
  document.getElementById('clearFilters').addEventListener('click', () => {
    document.getElementById('typeFilter').value = '';
    document.getElementById('tagFilter').value = '';
    document.getElementById('sortBy').value = '';

    // Optionally trigger a search refresh or re-render
    performSearch(); // Replace with your actual search function
  });

  // Filter and Sort Functionality
  function getFilterValues() {
    return {
      searchText: document.getElementById('searchInput').value.trim().toLowerCase(),
      type: document.getElementById('typeFilter').value,
      tag: document.getElementById('tagFilter').value,
      sortBy: document.getElementById('sortBy').value
    };
  }

  function filterCampsites(data, filters) {
    return data.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(filters.searchText);
      const matchesType = !filters.type || site.type === filters.type;
      const matchesTag = !filters.tag || site.tags.includes(filters.tag);
      return matchesSearch && matchesType && matchesTag;
    });
  }

  function sortCampsites(data, sortBy) {
    if (!sortBy) return data;

    const [key, direction] = sortBy.split('-');

    return [...data].sort((a, b) => {
      if (key === 'name') {
        return direction === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return direction === 'asc'
          ? a[key] - b[key]
          : b[key] - a[key];
      }
    });
  }

  function performSearch() {
    const filters = getFilterValues();
    let filtered = filterCampsites(campsitesData, filters);
    filtered = sortCampsites(filtered, filters.sortBy);

    const campsitesSection = document.querySelector('.campsites-section');
    const existingGrid = document.getElementById('campsitesGrid');
    if (existingGrid) {
      campsitesSection.removeChild(existingGrid);
    }

    displayCampsites(filtered);
  }

  // Load Campsite Detail Function
  function loadCampsiteDetail(site) {
    // Clear previous content
    campsiteDetailSection.querySelector('.detail-content')?.remove();

    const detail = document.createElement('div');
    detail.className = 'detail-content';

    detail.innerHTML = `
      <h2>${site.name}</h2>
      <img src="${site.image}" alt="${site.name}" class="detail-image">
      <p><strong>Location:</strong> ${site.location}</p>
      <p><strong>Type:</strong> ${site.type}</p>
      <p><strong>Tags:</strong> ${site.tags.join(', ')}</p>
      <p><strong>Rating:</strong> ${site.rating}</p>
      <p><strong>Price:</strong> $${site.price}</p>
      <p><strong>Capacity:</strong> ${site.capacity} people</p>
      <p>${site.description}</p>
    `;

    campsiteDetailSection.appendChild(detail);
  }

});