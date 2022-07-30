function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissors'];
    var computerChoice = array[Math.floor(Math.random() * array.length)];
    console.log(computerChoice);
} 
getComputerChoice();