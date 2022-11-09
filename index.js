let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

const body = document.querySelector('body');
const buttons = Array.from(document.querySelectorAll('button[class="btnPlay"'));
const reset = document.querySelector('button[class="btnReset"]');

const compPick = document.querySelector('p[id="compPick"]');
const wins = document.querySelector('p[id="wins"]');
const losses = document.querySelector('p[id="losses"]');
const ties = document.querySelector('p[id="ties"]');

let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * (4 - 1)) + 1
    let choices = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSORS"
    }
    return choices[randomNum];
}

let playRound = (player) => {
    let comp = getComputerChoice();
    compPick.textContent = `Computer Picks: ${comp}`;

    if (player === comp) {
        tieCounter++;
        ties.textContent = `Ties: ${tieCounter}`;
        return "TIE";
    }
    if ((player === 'ROCK' && comp === 'PAPER') || (player === 'PAPER' && comp === 'SCISSORS') || (player === 'SCISSORS' && comp === 'ROCK')) {
        lossCounter++;
        losses.textContent = `Losses ${lossCounter}`;
        return "YOU LOSE"
    }
    if ((player === 'ROCK' && comp === 'SCISSORS') || (player ==='PAPER' && comp === 'ROCK') || (player === 'SCISSORS' && comp === 'PAPER')) {
        winCounter++;
        wins.textContent = `Wins: ${winCounter}`;
        return "YOU WIN";
    }
    else return 'pick valid option';
}

buttons.forEach(button => button.addEventListener("click", () => {
    playRound(button.id);
    if (winCounter === 5) {
        const winner = document.createElement('p');
        winner.textContent = "YOU ARE THE WINNER!!!";
        body.append(winner);
        buttons.forEach(btn => btn.disabled = true);
    }
    if (lossCounter === 5) {
        const loser = document.createElement('p');
        loser.textContent = "YOU LOST TO A BOT HAHA";
        body.append(loser);
        buttons.forEach(btn => btn.disabled = true);
    }
}));