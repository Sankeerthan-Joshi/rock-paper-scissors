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


// Function for playing game 5 times
game = function(){
    let games = 5;
    let computerSelection;
    let roundResult;
    let win=0;
    for(let i = 0; i<5; i++){
        let playerSelection = window.prompt("Rock,Paper or Scissors?")+'';

        // To make playerSelection case-insensitive
        playerSelection = playerSelection.toLowerCase();

        // If player enters anything other than rock, paper, scissors the loop is repeated one more time without playing
        if(!["rock","paper","scissors"].includes(playerSelection)){
            i = i-1;
            continue;
        }

        computerSelection = computerPlay();

        roundResult = playRound(playerSelection, computerSelection );

        // Displaying computer selection and the round result
        console.log("Computer played:"+computerSelection+"\n"+roundResult);

        // Neglect the tied games, then whoever wins more is the winner
        if(roundResult.includes('Tie')){
            games = games - 1;
        }
        if(roundResult.includes('Win')){
            win = win +1;
        }

    }

    // To calculate who won the match
    if(win>games/2){
        console.log("You won this round")
    }else if(win==games){
        console.log("Tie")
    }else{
        console.log("You lost! better luck next time")
    }
}

game();