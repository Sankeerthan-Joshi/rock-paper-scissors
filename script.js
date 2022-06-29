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

console.log(computerPlay());