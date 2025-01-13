// Array of GIF URLs
const gifs = [
    'gifs/1.gif',
	'gifs/2.gif',
    'gifs/3.gif',
    'gifs/4.gif',
    'gifs/5.gif',

];


// Get the image and text container elements
const gifImage = document.getElementById('gifImage');
const textContainer = document.getElementById('textContainer');

// Index to keep track of the current GIF
let currentGifIndex = 0;

// Timer for click handling
let clickTimer = null;

// Function to change the GIF
function changeGif() {
    // Increment the index and wrap around if necessary
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    
    // Change the src attribute of the image
    gifImage.src = gifs[currentGifIndex];
}

// Function to toggle the visibility of the text
function toggleText() {
    if (textContainer.style.display === 'none') {
        textContainer.style.display = 'block';
    } else {
        textContainer.style.display = 'none';
    }
}

// Function to handle click events
function handleClick(event) {
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        return; // Double click detected; prevent single click action
    }

    // Set timer for single click
    clickTimer = setTimeout(() => {
        changeGif();
        clickTimer = null;
    }, 200); // Adjust delay to distinguish single click (200ms is a common choice)
}

// Add click event listener to the image
gifImage.addEventListener('click', handleClick);

// Add double-click event listener to the image for showing/hiding text
gifImage.addEventListener('dblclick', toggleText);