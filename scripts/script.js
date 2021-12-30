const container = document.querySelector('#div-container');

//create a 256-div grid (16x16)
function createGrid(numSquares) {
    let totalNumSquares = Math.pow(numSquares, 2);
    for (let i = 0; i < totalNumSquares; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute("class", "grid-div");
        container.appendChild(gridDiv);
    }
}


//code to clear grid when reset button is pressed
function resetNewGrid() {

    let numSquares = prompt("Enter the number of squares per side for the new grid (must be 100 or less)", "16");
    let cancelText;
    if (numSquares == null || numSquares == "") {
        cancelText = "User cancelled the prompt.";
    } else if (numSquares > 100 || numSquares < 0) {
        cancelText = "Invalid number;"
    } else {
        createGrid(numSquares);
        let numFractionsString ="";
        for (let j = 0; j < numSquares; j++) {
            numFractionsString = numFractionsString.concat(" 1fr");
        }
        container.style.gridTemplateColumns = numFractionsString;
        container.style.gridTemplateRows = numFractionsString;

        let divs = container.querySelectorAll('div'); //nodelist of all divs (grid squares) within the container div

        divs.forEach((div) => {
            div.style.backgroundColor = "white"; //erase the drawing
        });

        draw(divs);

    }
}

function draw(divs) {
        //drawing
        divs.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
        });
}

//main (on load)
resetNewGrid();