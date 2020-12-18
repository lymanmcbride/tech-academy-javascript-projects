let activePlayer = "X"; // whose turn is it?
let selectedSquares = [] //moves

function placeXorO (squareNumber) {
    // ensures that a square hasn't been clicked on already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber); //retrieves the clicked html element
        // Checks whose turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage='url("images/x.png")'; //puts the image in that spot
        }
        else {
            select.style.backgroundImage='url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated and added to array
        selectedSquares.push(squareNumber+activePlayer);
        checkWinConditions();
        // Checks for a win
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }
        else {
            activePlayer = 'X';
        }

        // placement sounds
        audio('./media/place.mp3');
        // checks for computer's turn
        if (activePlayer==='O') {
            disableClick();
            setTimeout(function() {computersTurn(); }, 1000);
        }
        return true; //needed for the computersTurn() function to work
    }

    //random square selection
    function computersTurn () {
        let success=false;
        let pickaSquare;
        while (!success) {
            pickaSquare=String(Math.floor(Math.random()*9)); //picks a random number between 0 and 8
            if (placeXorO(pickaSquare)) {
                placeXorO(pickaSquare); //calls the function
                success=true; // turns success to true to end the while loop
            }
        }
    }
}

// Checks to see if someone has won
function checkWinConditions() {
    // X horizontal
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508);}
    // X vertical
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558);}
    // X Diagonals
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520);}

    // O horizontal
    if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508);}
    // O vertical
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558);}
    // O Diagonals
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520);}

    //Check for Tie
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }

    // checks the array for 3 strings. Checks for win conditoins

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a=== true && b === true && c === true) {return true; }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';  // makes the body unclickable
    setTimeout(function() {body.style.pointerEvents='auto';}, 1000);  //makes it clickable again after 1 second
}

function audio(audioURL) {  //You set the path of audioURL earlier
    let audio=new Audio(audioURL);
    audio.play()  //this method plays the sound. Not sure what the audio object is. did I define that?
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //accesses the canvas element
    const canvas = document.getElementById('win-lines');
    // access methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //indicates where the start and ends are
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,  //these two variables are for temporarily storing data when we update the animation loop
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing); //creates the loop for when the game ends
        c.clearRect(0,0,608,608); //clears the content from the last loop
        c.beginPath();
        c.moveTo(x1,y1); //starting point of the line
        c.lineTo(x,y); //endpoint of the line
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 225, 33, .8)';
        c.stroke(); //actually draws the above line
        //checks if we have reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10;}
            if (y < y2) {y+=10;}
            if (x>=x2 && y>=y2) {cancelAnimationFrame(animationLoop);}
        }
        //the following condition is similar to the one above, but was necessary for the 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x<x2) {x+=10;}
            if (y>y2) {y-=10;}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }

    //clears the canvas after line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop); //stops the animation loop
    }
    
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares=[];
}