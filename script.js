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
let computer = computerPlay()
console.log("Computer played:"+computer+"\n"+playRound(playerSelection, computer))
;