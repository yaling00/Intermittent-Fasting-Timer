document.addEventListener('DOMContentLoaded', () => {
    const firstMealInput = document.getElementById('firstMeal');
    const secondMealElement = document.getElementById('secondMeal');
    const lastMealElement = document.getElementById('lastMeal');

    function calculateMealTimes(firstMealTime) {
        // Parse input time
        const [hours, minutes] = firstMealTime.split(':').map(Number);
        
        // Create first meal date object
        const firstMeal = new Date();
        firstMeal.setHours(hours, minutes, 0);

        // Calculate suggested second meal time (middle of eating window, 4 hours after first meal)
        const secondMeal = new Date(firstMeal);
        secondMeal.setHours(secondMeal.getHours() + 4);

        // Calculate last meal deadline (8 hours after first meal)
        const lastMeal = new Date(firstMeal);
        lastMeal.setHours(lastMeal.getHours() + 8);

        return {
            secondMeal,
            lastMeal
        };
    }

    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    firstMealInput.addEventListener('input', () => {
        if (firstMealInput.value) {
            const { secondMeal, lastMeal } = calculateMealTimes(firstMealInput.value);
            
            // Update display
            secondMealElement.textContent = formatTime(secondMeal);
            lastMealElement.textContent = formatTime(lastMeal);
        } else {
            // Show default values if no input
            secondMealElement.textContent = '--:--';
            lastMealElement.textContent = '--:--';
        }
    });
}); 