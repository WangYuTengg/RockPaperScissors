function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissors'];
    var computerSelection = array[Math.floor(Math.random() * array.length)];
    console.log(`Computer has chosen ${computerSelection}.`);
    return computerSelection;
} 

function clean(playerSelection) {
    first = playerSelection[0].toUpperCase();
    rest = playerSelection.slice(1,).toLowerCase();
    playerSelection = first + rest;
    console.log(`You have chosen ${playerSelection}.`);
    return playerSelection;
}

function playOneRound(score, playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            console.log("Paper beats Rock! You Lose.");
            score[0]++;
        }
        else if (computerSelection == "Scissors") {
            console.log("Rock beats Scissors! You Win.");
            score[1]++;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            console.log("Scissors beats Paper! You Win.");
            score[1]++;
        }
        else if (computerSelection == "Rock") {
            console.log("Rock beats Scissors! You Lose.");
            score[0]++;
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            console.log("Scissors beats Paper! You Lose.");
            score[0]++;
        }
        else if (computerSelection == "Rock") {
            console.log("Paper beats Rock! You Win.");
            score[1]++;
        }
    }
}

function DisplayWinner(score) {
    if (score[0]==score[1]){
        console.log("DRAW");
    }
    else if (score[0] > score[1]) {
        console.log("LOSE");
    }
    else {
        console.log("WiN");
    }
}

function game() {
    score = [0,0];
    for (var i = 0; i<5; i++) {
        var playerSelection = prompt("Choose rock/paper/scissors: ");
        playerSelection = clean(playerSelection);
        computerSelection = getComputerChoice();
        playOneRound(score, playerSelection, computerSelection);
    }
    console.log(`Final score is Computer: ${score[0]} to Player: ${score[1]}. `)
    DisplayWinner(score);
}

game();