//Losowanie komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

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
    return 'nieznany ruch';
}

printMessage('Ruch komputera to: ' + computerMove);

//Wybór gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);

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
    return 'błędny ruch - możesz wybrać tylko liczby: 1-kamień, 2-papier lub 3-nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

//Zasada

function displayResult(computerMove, playerMove){
    if( computerMove == 'kamień' && playerMove == 'papier'){
	    return 'Ja wygrywam!';
    } 
    else if( computerMove == 'kamień' && playerMove == 'kamień'){
	    return 'Remis!';
    } 
    else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	    return 'Komputer wygrywa!';
    } 
    else if( computerMove == 'nożyce' && playerMove == 'papier'){
	    return 'Komputer wygrywa!';
    } 
    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	    return 'Ja wygrywam!';
    } 
    else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	    return 'Remis!';
    } 
    else if( computerMove == 'papier' && playerMove == 'papier'){
	    return 'Remis!';
    } 
    else if( computerMove == 'papier' && playerMove == 'kamień'){
	    return 'Komputer wygrywa!';
    } 
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
	    return 'Ja wygrywam!';
    } 
    else {
        printMessage('Powtórz rozgrywkę!');
    return 'brak';	
    }
}
printMessage('Wynik: ' + displayResult(computerMove, playerMove));





