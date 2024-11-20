function scores() {
    let counterElement = document.getElementById("counter");  // Get the counter input element

    let currentValue = parseInt(counterElement.value);  // Get the current value of the counter as an integer

    if (isNaN(currentValue)) {  // If the value is not a number (e.g., empty), set it to 0
        currentValue = 0;
    }

    // Increment the value
    let newValue = currentValue + 1;

    // Update the value of the counter input element
    counterElement.value = newValue;  // Set the new value to the input
}