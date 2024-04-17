
var turnCount = 0;
var scoreArray = [null, null, null, null, null, null, null, null, null]

function changeImage(boxNumber) {
    var imgElement = document.querySelector('.image-box:nth-child(' + boxNumber + ') img');
    if (turnCount % 2 == 0) {
        imgElement.src = 'x_image.jpeg';
        imgElement.alt = 'x_image';
        scoreArray[ boxNumber - 1] = 'X';
        changeText();
        //winner();
    } else {
        imgElement.src = 'o_image.jpeg';
        imgElement.alt = 'o_image';
        scoreArray[ boxNumber - 1] = 'O';
        changeText();
        //winner();
    }
    turnCount++;
    updateTurnCount();
    updateScoreArray();
    changeBanner();
    changeText();
    winner();
}

function changeBanner() {
    var promptElement = document.getElementById('banner');
    if (didXwin() || didOwin() || turnCount == 9) {
        promptElement.innerHTML = "GAME OVER!";
    } else if (turnCount == 0) {
        promptElement.innerHTML = "Click a box below to start the game";
    } else {
        promptElement.innerHTML = "GAME ON!";
    }
}

function changeText() {
    var promptElement = document.getElementById('prompt');
    if (didXwin() || didOwin() || turnCount == 9) {
        promptElement.innerHTML = "";
    }
    else if (turnCount % 2 != 0) {
        promptElement.innerHTML = "X\'s turn";
    } else {
        promptElement.innerHTML = "O\'s turn";
    }
}

function didOwin() {
    if ((scoreArray[0] == 'O' && scoreArray[1] == 'O' && scoreArray[2] == 'O') ||
        (scoreArray[0] == 'O' && scoreArray[4] == 'O' && scoreArray[8] == 'O') ||
        (scoreArray[0] == 'O' && scoreArray[3] == 'O' && scoreArray[6] == 'O') ||
        (scoreArray[1] == 'O' && scoreArray[4] == 'O' && scoreArray[7] == 'O') ||
        (scoreArray[2] == 'O' && scoreArray[5] == 'O' && scoreArray[8] == 'O') ||
        (scoreArray[3] == 'O' && scoreArray[4] == 'O' && scoreArray[5] == 'O') ||
        (scoreArray[6] == 'O' && scoreArray[7] == 'O' && scoreArray[8] == 'O') ||
        (scoreArray[2] == 'O' && scoreArray[4] == 'O' && scoreArray[6] == 'O')) {
        return true;
    } else {
        return false;
    }
}

function didXwin() {
    if ((scoreArray[0] == 'X' && scoreArray[1] == 'X' && scoreArray[2] == 'X') ||
        (scoreArray[0] == 'X' && scoreArray[4] == 'X' && scoreArray[8] == 'X') ||
        (scoreArray[0] == 'X' && scoreArray[3] == 'X' && scoreArray[6] == 'X') ||
        (scoreArray[1] == 'X' && scoreArray[4] == 'X' && scoreArray[7] == 'X') ||
        (scoreArray[2] == 'X' && scoreArray[5] == 'X' && scoreArray[8] == 'X') ||
        (scoreArray[3] == 'X' && scoreArray[4] == 'X' && scoreArray[5] == 'X') ||
        (scoreArray[6] == 'X' && scoreArray[7] == 'X' && scoreArray[8] == 'X') ||
        (scoreArray[2] == 'X' && scoreArray[4] == 'X' && scoreArray[6] == 'X')) {
        return true;
    } else {
        return false;
    }

}

function updateTurnCount() {
    var turnCountElement = document.getElementById('turn-count');
    turnCountElement.innerHTML = "Turn Count: " + turnCount;
}

function updateScoreArray(boxNumber) {
    var scoreArrayElement = document.getElementById('score-array');
    scoreArrayElement.innerHTML = "Score Array: " + scoreArray;
}

function winner() {
    var winnerElement = document.getElementById('winner');
    if (didXwin()) {
        winnerElement.innerHTML = "X wins!!!";
    } else if (didOwin()) {
        winnerElement.innerHTML = "O wins!!!";
    } else if (turnCount == 9) {
        winnerElement.innerHTML = "Cats Game :(";
    } else {
        winnerElement.innerHTML = "Nobody has won yet...";}
}
