// Array of colors
// TODO 1: Add three more colors to the array
const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow","black","brown","aqua"];

// Get elements
const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
const colorLabel = document.getElementById("color-label");
const resetBtn = document.getElementById("resetBtn");

// Event listener for button click
changeColorBtn.addEventListener("click", () => {
    // Pick a random color from the array
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the box
    colorBox.style.backgroundColor = randomColor;

    // TODO 2: Change the background color of the button
    changeColorBtn.style.backgroundColor = randomColor;

    // Random width & height between 50px - 200px
    let randomWidth = Math.floor(Math.random() * 150) + 50;
    let randomHeight = Math.floor(Math.random() * 150) + 50;

    // TODO 3: Add text label for the random color selected

    colorLabel.innerHTML = randomColor;

    // TODO 4: Change the width of the colorBox to randomWidth
    colorBox.style.width = randomWidth + "px"
    
    // TODO 5: Change the height of the colorBox to randomHeight
    colorBox.style.height = randomHeight + "px"

    // TODO 6: Bonus - Reset to default values colorBox background color to lightgray, width to 150px, height to 150px

    resetBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = "lightgray";
        colorBox.style.width = 150 + "px";
        colorBox.style.height = 150 + "px";
        // changeColorBtn.style.backgroundColor = "lightgray";
        colorLabel.innerHTML = "lightgray";

    });
});
