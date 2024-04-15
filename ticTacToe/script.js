
var turnCount = 0;

function changeImage(boxNumber) {
    var imgElement = document.querySelector('.image-box:nth-child(' + boxNumber + ') img');
    //var imgElement = document.getElementById('box-image' + boxNumber);
    if (turnCount % 2 == 0) {
        imgElement.src = 'x_image.jpeg';
        imgElement.alt = 'x_image';
        changeText();   
    }
    else {
        imgElement.src = 'o_image.jpeg';
        imgElement.alt = 'o_image';
        changeText();
    }
    turnCount++;
    changeBanner();
    updateTurnCount();
}

function changeText() {
    var promptElement = document.getElementById('prompt');
    if (turnCount % 2 != 0) {
        promptElement.innerHTML = "X\'s turn";
    } else {
        promptElement.innerHTML = "O\'s turn";
    }
}

function changeBanner() {
    var promptElement = document.getElementById('banner');
    if (turnCount == 0) {
        promptElement.innerHTML = "Click a box below to start the game";
    } else {
        promptElement.innerHTML = "GAME ON!";
    }
}

function updateTurnCount() {
    var turnCountElement = document.getElementById('turn-count');
    turnCountElement.innerHTML = "Turn Count: " + turnCount;
}