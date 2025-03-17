// Function to change text content
function changeText() {
    document.getElementById("text").textContent = "Text has been changed Successfuly!";
}

// Function to change the background color of a box
function changeColor() {
    const box = document.getElementById("box");
    const colors = ["red", "blue", "green", "purple", "orange"];
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Function to toggle an element's visibility
function toggleElement() {
    const element = document.getElementById("toggleText");
    element.classList.toggle("hidden");
}
