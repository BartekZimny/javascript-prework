const stone = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let computerMove, playerMove, randomNumber;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = getMoveName(argButtonName);
    console.log('Ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);
    console.log('Ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    console.log('Argument w getMoveName: ' + argMoveId);
    if (argMoveId == 1) {
        return stone;
    } else if (argMoveId == 2) {
        return paper;
    } else if (argMoveId == 3) {
        return scissors;
    } else {
        printMessage('Błędny ruch ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return stone;
    }
}

//Zasada

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == paper && argComputerMove == stone) {
        printMessage('Brawo -wygrywasz!');
    } else if (argPlayerMove == stone && argComputerMove == scissors) {
        printMessage('Brawo -wygrywasz!');
    } else if (argPlayerMove == scissors && argComputerMove ==paper) {
        printMessage('Brawo -wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przykro mi - przegrywasz');
    }
    printMessage('Ruch komputera to: ' + argComputerMove + ', Twój ruch to: ' + argPlayerMove);
}

buttonRock.addEventListener('click', function () {
    buttonClicked(1);
});
buttonPaper.addEventListener('click', function () {
    buttonClicked(2);
});
buttonScissors.addEventListener('click', function () {
    buttonClicked(3);
});