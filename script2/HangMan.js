let letterInput = ""; // Declare the letterInput variable outside
let letterPush = "";
let wrongletter = 0; // Counter for wrong guesses
let image = document.getElementById('hangman');

// Simulating a simple word (you can replace this with your own word)
let word = "Word" // Example word, to simulate game behavior
let correctLetters = []; // Track correct guesses

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    letterPush = event.key; // Capture the pressed key

    // Check if the letter is part of the word
    if (word.includes(letterPush) && !correctLetters.includes(letterPush)) {
        correctLetters.push(letterPush); // Store correct guesses
    } else {
        wrongletter++; // Increment wrong guess count if letter is incorrect
    }

    push(); // Call push function to display letters
    updateHangmanImage(); // Update hangman image based on wrong guesses
});

// Function to update the displayed word
function word2() {
    document.getElementById("word").innerText = "Your used letters: " + letterInput; // Update the element with ID "word"
}

// Function to append the pressed key to letterInput
function push() {
    if (letterInput === "") {
        letterInput = letterPush; // First key press, no comma
    } else {
        letterInput += ", " + letterPush; // Subsequent key presses, add comma
    }
    document.getElementById("word").innerText = "Your used letters: " + letterInput; // Update the element with ID "word"
}

// Function to update the hangman image based on wrong guesses
function updateHangmanImage() {
    if (wrongletter === 0) {
      image.src = '/images/0.png';  // No wrong guesses yet
    } else if (wrongletter === 1) {
      image.src = '/images/1.png';  // One wrong guess
    } else if (wrongletter === 2) {
      image.src = '/images/2.png';  // Two wrong guesses
    } else if (wrongletter === 3) {
      image.src = '/images/3.png';  // Three wrong guesses
    } else if (wrongletter === 4) {
      image.src = '/images/4.png';  // Four wrong guesses
    } else if (wrongletter === 5) {
      image.src = '/images/5.png';  // Five wrong guesses
    } else if (wrongletter === 6) {
      image.src = '/images/6.png';  // Six wrong guesses (final image)
    } else {
      alert("Game Over");
    }
    console.log("Hangman image updated to:", image.src); // For debugging
}

//switch (true) {
//    case image.src = '/images/0.png' && worngletter === 0:
//      image.src = '/images/0.png';
//      break;
//    case image.src = '/images/0.png' && wrongletter === 1:
//        image.src = '/images/1.png';
//  }

//switch (true) {
//    case image.includes('0.png') && wrong === 0:
//      alert("The current image is Image 0!");
//      break;
//    case image.includes('1.png') && wrong === 1:
//      alert("The current image is Image 1!");
//      break;
//    default:
//      alert("The current image is neither Image 1 nor Image 2.");
//      break;
//  }