const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;
const cardsPerView = 2; // Number of cards to show at a time

// Function to update the slider position
function updateSlider() {
    // Prevent overflow by looping within the card range
    if (currentIndex > totalCards - cardsPerView) {
        currentIndex = 0; // Reset to the start if we reach the end
    } else if (currentIndex < 0) {
        currentIndex = totalCards - cardsPerView; // Go to the last full view if we go back from the start
    }

    const offset = -currentIndex * (100 / cardsPerView);
    slider.style.transform = `translateX(${offset}%)`;
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentIndex += cardsPerView;
    updateSlider();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    currentIndex -= cardsPerView;
    updateSlider();
});

// Initial position of the slider
updateSlider();
