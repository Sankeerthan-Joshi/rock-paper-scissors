// As prompt window was covering console, Added empty lines
console.log(`

















`)
// To generate random choice by computer
function computerPlay(){
    let random = Math.floor(Math.random()*3) + 1;
    let choice;
    switch(random) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

// Play a round and return result
function playRound(playerSelection,computerSelection){
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "It's a Tie!"
    }
    if(computerSelection==="rock"){
        if(playerSelection==="paper"){
            return "You Win! Paper beats Rock"
        }else{
            return "You Lose! Rock beats Scissors"
        }
    }

    if(computerSelection==="paper"){
        if(playerSelection==="rock"){
            return "You Lose! Paper beats Rock"
        }else{
            return "You Win! Scissors beats Paper"
        }
    }

    if(computerSelection==="scissors"){
        if(playerSelection==="rock"){
            return "You Win! Rock beats Scissors"
        }else{
            return "You Lose! Scissors beats Paper"
        }
    }
}

// Buttons array
let buttons = document.querySelectorAll("button");

// // To execute playround fn and show the result in div
// function onClick(e){
//     document.querySelector('div').innerText = playRound(this.id, computerPlay());
// }

// To add event listener for each button
buttons.forEach(button => button.addEventListener('click', game));

let win=0;
let loss=0;
let computerSelection;
let roundResult;
document.querySelector('#result').innerText = "player: " + win + "\n"+"computer: "+ loss;

// Function for playing game 5 times
function game(e){

        let playerSelection = this.id;

        // To make playerSelection case-insensitive
        playerSelection = playerSelection.toLowerCase();

        // If player enters anything other than rock, paper, scissors the loop is repeated one more time without playing

        computerSelection = computerPlay();

        roundResult = playRound(playerSelection, computerSelection );

        // Displaying computer selection and the round result
        document.querySelector('div').innerText = "Computer played:"+computerSelection+"\n"+roundResult;

        // Neglect the tied games, then whoever wins more is the winner
        // if(roundResult.includes('Tie')){
        //     games = games - 1;
        // }
        if(roundResult.includes('Win')){
            win = win +1;
        }

        if(roundResult.includes('Lose')){
            loss = loss + 1
        }
        document.querySelector('#result').innerText = "player: " + win + "\n"+"computer: "+ loss;


    // To calculate who won the match
    if(win===5){
        document.querySelector('#round-res').innerText = "You won this round!"
        win = 0;
        loss = 0
    }else if(loss === 5){
        document.querySelector('#round-res').innerText = "You lost! better luck next time"
        loss = 0;
        win = 0;
    }
}