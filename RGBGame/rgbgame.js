var squares = document.querySelectorAll(".square");
var gameover = true;
var counter = 0;
var eventCounter = [false, false, false, false, false, false];

function mainColor() {
    counter++;
    var rColor = Math.floor(Math.random() * 255);
    var gColor = Math.floor(Math.random() * 255);
    var bColor = Math.floor(Math.random() * 255);
    var randomRGBColor = "(" + rColor + ", " + gColor + ", " + bColor + ")";
    document.getElementById('mainColor').innerHTML = randomRGBColor;
    console.log(randomRGBColor);
    var randomRGBColor2 = "rgb" + randomRGBColor;

    // Correct square
    var correctSquare = Math.floor(Math.random() * 6);
    console.log(correctSquare);
    squares[correctSquare].style.background = randomRGBColor2;


    for (var i = 0; i < squares.length; i++) {
        if (i != correctSquare) {
            var rColor = Math.floor(Math.random() * 255);
            var gColor = Math.floor(Math.random() * 255);
            var bColor = Math.floor(Math.random() * 255);
            var randomRGBColor = "rgb(" + rColor + ", " + gColor + ", " + bColor + ")";
            squares[i].style.background = randomRGBColor;
        }
    }

    for (var i = 0; i < squares.length; i++) {
        if (eventCounter[i] == false) {
            squares[i].addEventListener('click', hide);
            eventCounter[i] = true;
        } else {
            return;
        }
    }

    function hide(e) {
        //window.alert(e.currentTarget);
        if (e.currentTarget === squares[correctSquare]) {
            document.getElementById('outputMessage').innerHTML = "You guessed it right!";
            $('.playModal').show();
            e.currentTarget.removeEventListener('click', hide);
            for (var i = 0; i < squares.length; i++) {
                eventCounter[i] = false;
            }
        } else {
            e.currentTarget.style.visibility = "hidden";
            document.getElementById('outputMessage').innerHTML = "Wrong, pick another tile";
            e.currentTarget.removeEventListener('click', hide);
        }
    }
}

function unhide() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.visibility = "visible";
    }
    document.getElementById('outputMessage').innerHTML = "Pick a tile!";
    $('.playModal').hide();
}