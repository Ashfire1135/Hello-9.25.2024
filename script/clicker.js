function scores() {
    // Get the current value, defaulting to 0 if not a number
    let currentValue = parseInt(document.getElementById("counter").value) || 0;

    // Increment the value and update the input
    document.getElementById("counter").value = currentValue + 1;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cookie').addEventListener('click', scores);
});