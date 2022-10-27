let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * (4 - 1)) + 1
    let choices = {
        1: "rock",
        2: "paper",
        3: "scissors"
    }
    return choices[randomNum];
}

let playRound = (player, comp) => {
    if (player === comp) {
        tieCounter++;
        return "TIE";
    }
    if ((player === 'rock' && comp === 'paper') || (player === 'paper' && comp === 'scissors') || (player === 'scissors' && comp === 'rock')) {
        lossCounter++; 
        return "YOU LOSE"
    }
    if ((player === 'rock' && comp === 'scissors') || (player ==='paper' && comp === 'rock') || (player === 'scissors' && comp === 'paper')) {
        winCounter++;
        return "YOU WIN";
    }
    else return 'pick valid option';
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, Paper, or Scissors").toLowerCase();
        console.log(`player picked: ${playerChoice.toUpperCase()}`)
        console.log(`computer picked: ${computerChoice.toUpperCase()}`)
        console.log(playRound(playerChoice, computerChoice));
        console.log(`Win-Tie-Loss: ${winCounter} - ${tieCounter} - ${lossCounter}`);
        console.log('------------------------------')
    }
}

game();