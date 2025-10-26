// Get elements from the HTML
const mouseImage = document.getElementById('mouse-image');
const totalClicksDisplay = document.getElementById('total-clicks');
const lastActionDisplay = document.getElementById('last-action');

let totalClicks = 0;
let actionTimeout;

// Function to reset the image after a short delay
function resetImage() {
    clearTimeout(actionTimeout);
    actionTimeout = setTimeout(() => {
        mouseImage.src = 'mouse-base.png';
    }, 200);
}

// Listen for a mouse click anywhere on the page
document.addEventListener('mousedown', (event) => {
    let buttonClicked;
    let imageSource;

    // Determine which mouse button was clicked
    switch (event.button) {
        case 0:
            buttonClicked = 'Left Click';
            imageSource = 'mouse-left-click.png';
            break;
        case 1:
            buttonClicked = 'Middle Click';
            imageSource = 'mouse-middle-click.png';
            break;
        case 2:
            buttonClicked = 'Right Click';
            imageSource = 'mouse-right-click.png';
            break;
        case 3:
            buttonClicked = 'Side Button One (Back)';
            imageSource = 'mouse-back-click.png';
            break;
        case 4:
            buttonClicked = 'Side Button Two (Forward)';
            imageSource = 'mouse-forward-click.png';
            break;
        default:
            buttonClicked = 'Other';
            imageSource = 'mouse-base.png';
            break;
    }

    // Update the image and text
    mouseImage.src = imageSource;
    lastActionDisplay.textContent = buttonClicked;
    totalClicks++;
    totalClicksDisplay.textContent = totalClicks;

    resetImage();
});

// Listen for the scroll wheel event
document.addEventListener('wheel', (event) => {
    let action;
    let imageSource;

    if (event.deltaY < 0) {
        action = 'Scroll Up';
        imageSource = 'mouse-scroll-up.png';
    } else {
        action = 'Scroll Down';
        imageSource = 'mouse-scroll-down.png';
    }

    // Update the image and text
    mouseImage.src = imageSource;
    lastActionDisplay.textContent = action;

    resetImage();
});

// Prevent the right-click context menu from appearing
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
