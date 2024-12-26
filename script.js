// REST API Whiteboard Calculator
const display = document.getElementById('display');
const result = document.getElementById('result');

// Update result dynamically using Math.js API
display.addEventListener('input', async () => {
    const expression = display.value;

    // Skip empty or invalid input
    if (!expression.trim()) {
        result.textContent = "= 0";
        return;
    }

    try {
        // Use Math.js REST API for calculation
        const response = await fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`);
        if (response.ok) {
            const evalResult = await response.text();
            result.textContent = `= ${evalResult}`;
        } else {
            throw new Error("Invalid response from API");
        }
    } catch (error) {
        result.textContent = "= Error";
    }
});
