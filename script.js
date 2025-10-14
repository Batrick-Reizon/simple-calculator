const display = document.getElementById("display")

// Add a character to display
function appendToDisplay(value) {
    display.value += value
}

// Clear a character to display
function clearDisplay() {
    display.value = ""
}

// Deletelast character to display
function deleteLast() {
    display.value = display.value.slice(0, -1)
}

// Evaluate a character to display
function calculate() {
    display.value = eval(display.value)
}