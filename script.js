// Create falling numbers in the background
function createFallingNumbers() {
    for (let i = 0; i < 100; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = Math.floor(Math.random() * 10);
        number.style.left = `${Math.random() * 100}vw`;
        number.style.animationDuration = `${Math.random() * 3 + 5}s`;
        number.style.fontSize = `${Math.random() * 1.5 + 0.5}em`; // Randomize font size
        document.querySelector('.background').appendChild(number);
    }
}

// Calculate the golden ratio
function calculateGoldenRatio() {
    const totalLength = parseFloat(document.getElementById('total-length').value);
    const largerPart = parseFloat(document.getElementById('larger-part').value);
    const goldenRatio = 1.618;
    const resultBox = document.querySelector('.result');
    const goldenLight = document.querySelector('.golden-light');

    if (totalLength && largerPart) {
        const calculatedRatio = totalLength / largerPart;
        if (Math.abs(calculatedRatio - goldenRatio) < 0.01) {
            resultBox.innerHTML = "أنت من التناسب الذهبي!";
            resultBox.classList.remove('red-effect');
            resultBox.classList.add('golden-effect');
            activateGoldenLight();
        } else {
            resultBox.innerHTML = `النسبة: ${calculatedRatio.toFixed(2)}`;
            resultBox.classList.remove('golden-effect');
            resultBox.classList.add('red-effect');
        }
    }
}

// Activate golden light effect
function activateGoldenLight() {
    const goldenLight = document.querySelector('.golden-light');
    goldenLight.classList.add('active-light');

    // Remove effect after animation ends
    setTimeout(() => {
        goldenLight.classList.remove('active-light');
    }, 1000);
}

// Show legend effect
function showLegendEffect() {
    const legendEffect = document.querySelector('.legend-effect');
    legendEffect.style.transform = 'translate(-50%, -50%) scale(3)';
    legendEffect.style.opacity = '1';
    setTimeout(() => {
        legendEffect.style.transform = 'translate(-50%, -50%) scale(0)';
        legendEffect.style.opacity = '0';
    }, 1000);
}

// Initialize background effect
createFallingNumbers();
