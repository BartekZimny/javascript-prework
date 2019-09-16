function playGame(playerInput){

    clearMessages();
    //Losowanie komputera

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let argComputerMove = getMoveName(randomNumber);

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

    printMessage('Ruch komputera to: ' + argComputerMove);

    //Wybór gracza

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let argPlayerMove = getMoveName(playerInput);

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

    printMessage('Twój ruch to: ' + argPlayerMove);

    //Zasada

    function displayResult(argComputerMove, argPlayerMove){

        console.log('moves:', argComputerMove, argPlayerMove);

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Ja wygrywam!';
        } 
        else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            return 'Remis!';
        } 
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            return 'Komputer wygrywa!';
        } 
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            return 'Komputer wygrywa!';
        } 
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Ja wygrywam!';
        } 
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            return 'Remis!';
        } 
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            return 'Remis!';
        } 
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            return 'Komputer wygrywa!';
        } 
        else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Ja wygrywam!';
        } 
        else {
            printMessage('Powtórz rozgrywkę!');
        return 'brak';	
        }
    }
    printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));

}


  
  //let testButton1 = document.getElementById('play-rock');
  //testButton1.addEventListener('click', playGame);

  //let testButton2 = document.getElementById('play-paper');
  //testButton2.addEventListener('click', playGame);

  //let testButton3 = document.getElementById('play-scissors');
  //testButton3.addEventListener('click', playGame);



  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });



 