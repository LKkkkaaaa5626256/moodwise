// Garden state
const gardenState = {
    flowers: [],
    flowerCount: 0
};

// Flower types with their properties
const flowerTypes = {
    daisy: {
        emoji: '🌼',
        growthRate: 1,
        happiness: 1
    },
    rose: {
        emoji: '🌹',
        growthRate: 1.2,
        happiness: 1.2
    },
    tulip: {
        emoji: '🌷',
        growthRate: 1.1,
        happiness: 1.1
    },
    sunflower: {
        emoji: '🌻',
        growthRate: 1.3,
        happiness: 1.3
    },
    lotus: {
        emoji: '💮',
        growthRate: 1.4,
        happiness: 1.4
    }
};

// Initialize the garden
function initGarden() {
    // Load saved garden state
    const savedState = localStorage.getItem('gardenState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        gardenState.flowers = parsed.flowers || [];
        gardenState.flowerCount = parsed.flowerCount || 0;
    }

    // Set up event listeners
    setupEventListeners();
    
    // Update garden display
    updateGardenDisplay();
    updateStats();
}

// Set up event listeners
function setupEventListeners() {
    // Flower selection
    document.querySelectorAll('.flower-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const flowerType = btn.dataset.flower;
            plantFlower(flowerType);
        });
    });

    // Garden plot click
    document.querySelector('.garden-plot').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if click is within garden bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const flowerType = getSelectedFlowerType();
            if (flowerType) {
                plantFlower(flowerType, x, y);
            }
        }
    });
}

// Get currently selected flower type
function getSelectedFlowerType() {
    const selectedBtn = document.querySelector('.flower-btn.selected');
    return selectedBtn ? selectedBtn.dataset.flower : null;
}

// Plant a flower
function plantFlower(type, x, y) {
    const flower = {
        type,
        x: x || Math.random() * 80 + 10, // Random position if not specified
        y: y || Math.random() * 80 + 10,
        growth: 0,
        plantedAt: Date.now()
    };

    gardenState.flowers.push(flower);
    gardenState.flowerCount++;
    
    // Save state
    saveGardenState();
    
    // Update display
    updateGardenDisplay();
    updateStats();
    
    // Show planting effect
    showPlantingEffect(x, y);
}

// Update garden display
function updateGardenDisplay() {
    const gardenPlot = document.querySelector('.garden-plot');
    gardenPlot.innerHTML = '';
    
    gardenState.flowers.forEach(flower => {
        const flowerElement = createFlowerElement(flower);
        gardenPlot.appendChild(flowerElement);
    });
}

// Create flower element
function createFlowerElement(flower) {
    const div = document.createElement('div');
    div.className = 'flower';
    div.style.left = `${flower.x}%`;
    div.style.top = `${flower.y}%`;
    div.style.transform = `scale(${flower.growth})`;
    div.innerHTML = flowerTypes[flower.type].emoji;
    
    // Add hover effect
    div.addEventListener('mouseover', () => {
        div.style.transform = `scale(${flower.growth * 1.2})`;
    });
    
    div.addEventListener('mouseout', () => {
        div.style.transform = `scale(${flower.growth})`;
    });
    
    return div;
}

// Show planting effect
function showPlantingEffect(x, y) {
    const effect = document.createElement('div');
    effect.className = 'planting-effect';
    effect.style.left = `${x}%`;
    effect.style.top = `${y}%`;
    
    document.querySelector('.garden-plot').appendChild(effect);
    
    // Remove effect after animation
    setTimeout(() => effect.remove(), 1000);
}

// Update stats display
function updateStats() {
    document.getElementById('flowerCount').textContent = gardenState.flowerCount;
}

// Save garden state
function saveGardenState() {
    localStorage.setItem('gardenState', JSON.stringify(gardenState));
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGarden); 