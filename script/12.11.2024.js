let array1 = [
    "apple", "computer", "bicycle", "guitar", "elephant", "magnet", "wonder", "cloud", 
    "cozy", "mango", "tiger", "yellow", "season", "artist", "plant", "flame", 
    "table", "snow", "puzzle", "bird", "happy", "storm", "ocean", "flower", "jungle"
]
//window.addEventListener('keydown', function (event) {
    //document.getElementById("myText").value = document.getElementById("myText").value + event.key;

//});


function timer() {

    let Time = parseInt(document.getElementById("timer").value);

while(Time > 0) {

document.getElementById("timer").value = Time--;  // Decrement the value by 1 and update the timer input field

//setTimeout(myGreeting, 60000);
}
}
