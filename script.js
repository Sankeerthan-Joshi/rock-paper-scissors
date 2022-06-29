//To generate random choice by computer
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
    let playerSelection = window.prompt("Rock, Paper or Scissors?")
    playerSelection = playerSelection.toLocaleLowerCase();

//Play a round and return result
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
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

game = function(){
    let games = 5;
    let computerSelection;
    let roundResult;
    let win=0;
    for(let i = 0; i<5; i++){
        let playerSelection = window.prompt("Rock,Paper or Scissors?")+'';
        playerSelection = playerSelection.toLocaleLowerCase();
        if(!["rock","paper","scissors"].includes(playerSelection)){
            i = i-1;
            continue;
        }
        computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection );
        console.log("Computer played:"+computerSelection+"\n"+roundResult);
        if(roundResult.includes('Tie')){
            games = games - 1;
        }
        if(roundResult.includes('Win')){
            win = win +1;
        }

    }
    if(win>games/2){
        console.log("You won this round")
    }else if(win==games){
        console.log("It's a tie")
    }else{
        console.log("You lost! better luck next time")
    }
}

game();