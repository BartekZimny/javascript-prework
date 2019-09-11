//Losowanie komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);
/*let computerMove = 'nieznany ruch';*/
let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}*/

function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    }
    if(randomNumber == 2){
        return 'papier';
    }
    if(randomNumber == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
}
console.log('Wylosowana liczba to: ' + randomNumber);

printMessage('Ruch komputera to: ' + computerMove);

//Wybór gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
/*let playerMove = 'nieznany ruch1';*/
let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} else {
     playerMove = 'Zły wybór - tylko liczby: 1-kamień, 2-papier, 3-nożyce';
}*/

function getMoveName(playerInput){
    if(playerInput == 1){
      return 'kamień';
    }
    if(playerInput == 2){
        return 'papier';
    }
    if(playerInput == 3){
        return 'nożyce';
    }
    printMessage('Liczba ' + playerInput + ' to zły wybór - możesz wybrać tylko liczby: 1-kamień, 2-papier lub 3-nożyce');
    return 'błędny ruch';
}

printMessage('Twój ruch to: ' + playerMove);

console.log('1Wybór gracza to: ' + playerMove);
console.log('1Wybór komputera to: ' + computerMove);

//Wynik rozgrywki

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa');
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
} else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
} else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else {
    printMessage('Powtórz rozgrywkę!'); 
}*/

let argComputerMove = displayResult(computerMove);
let argPlayerMove = displayResult(playerInput);
console.log('move3:', argComputerMove, argPlayerMove);
function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Powtórz rozgrywkę!'); 
    }
}

console.log('move4:', argComputerMove, argPlayerMove);