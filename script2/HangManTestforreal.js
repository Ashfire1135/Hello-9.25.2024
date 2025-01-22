let letterInput = "";  // Tracks the pressed letters
let letterPush = "";   // The current letter pressed
let wrongletter = 0;   // Tracks the number of wrong guesses
let image = document.getElementById('hangman');  // The image element for hangman

// Listen for keydown events
document.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
    letterPush = event.key; // Capture the pressed key
    push(); // Call the push function to append the key to the letterInput string
});

// Function to update the displayed word (letters the player has already used)
function word2() {
    document.getElementById("word").innerText = "Your used letters: " + letterInput;
}

// Function to append the pressed key to letterInput and track wrong guesses
function push() {

    // Update the hangman image based on the number of wrong guesses
    updateHangmanImage();

    // Add the letter to letterInput (with a comma if it's not the first letter)
    if (letterInput === "") {
        letterInput = letterPush; // First key press, no comma
    } else {
        letterInput += ", " + letterPush; // Subsequent key presses, add comma
    }

    word2(); // Update the displayed word (your used letters)
}

// Function to update the hangman image based on the number of incorrect guesses
function updateHangmanImage() {
    // Update the image src based on the number of wrong guesses
    image.src = `/images/${wrongletter}.png`;  // Update the image source based on wrong guesses

    // Check if the image matches the wrong guess count and show a message
    switch (wrongletter) {
        case 0:
            console.log("The current image is Image 0!");
            break;
        case 1:
            console.log("The current image is Image 1!");
            break;
        case 2:
            console.log("The current image is Image 2!");
            break;
        // Add more cases as needed for each wrong guess (3, 4, etc.)
        default:
            console.log("The current image is a higher wrong guess image.");
            break;
    }
}
