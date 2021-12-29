const container = document.querySelector('#div-container');
const newButton = document.querySelector('#new-button');

//create a 256-div grid (16x16)
for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute("class", "grid-div");
    container.appendChild(gridDiv);
}

//code for drawing
const divs = container.querySelectorAll('div'); //nodelist of all divs (grid squares) within the container div
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});

//code to clear grid when reset button is pressed
newButton.addEventListener("click", () => {
    divs.forEach((div) => {
        div.style.backgroundColor = "white"; //erase the drawing
    });

    let numSquares = prompt("Enter the number of squares per side for the new grid (must be 100 or less)", "16");
    let cancelText;
    if (numSquares == null || numSquares == "") {
        cancelText = "User cancelled the prompt.";
    } else if (numSquares > 100 || numSquares < 0) {
        cancelText = "Invalid number;"
    } else {
        let numFractionsString ="";
        for (let j = 0; j < numSquares; j++) {
            numFractionsString = numFractionsString.concat(" 1fr");
        }
        container.style.gridTemplateColumns = numFractionsString;
        container.style.gridTemplateRows = numFractionsString;
    }

});