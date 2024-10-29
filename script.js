// script.js

// Function to continuously animate the div boxes
function animateDivBoxes() {
    // Get the animated containers
    const personalDetails = document.querySelector('.personal-details');
    const aboutMe = document.querySelector('.about-me');
    const profileSection = document.querySelector('.profile-section');

    // Set initial positions
    let position1 = 0;
    let position2 = -200; // Adjust this value based on your design
    let position3 = -400; // Adjust this value based on your design

    // Function to update positions and apply animation
    function updatePositions() {
        // Update positions
        position1 = (position1 + 1) % 200; // Adjust the divisor based on your animation speed
        position2 = (position2 + 1) % 200; // Adjust the divisor based on your animation speed
        position3 = (position3 + 1) % 200; // Adjust the divisor based on your animation speed

        // Apply translation to create the sliding effect
        personalDetails.style.transform = `translateX(${position1}px)`;
        aboutMe.style.transform = `translateX(${position2}px)`;
        profileSection.style.transform = `translateX(${position3}px)`;

        // Request the next animation frame
        requestAnimationFrame(updatePositions);
    }

    // Start the animation loop
    updatePositions();
}

// Call the animation function when the page loads
window.onload = function () {
    animateDivBoxes();
};
