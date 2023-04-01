//randomly choose PC play
function getComputerChoice(){
    let comp = Math.random();
    let compThrow;
    if(comp < .3333333333){
        compThrow="Scissors";
    }else if(comp > .6666666666){
        compThrow = "Rock";
    }else{
        compThrow = "Paper";
    }
    return compThrow;
}

//take player choice input and compare player choice to PC to determine winner
function playRPS(playerSelection = prompt("Chose your throw"), computerSelection = getComputerChoice()){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelection=="Rock"&&computerSelection == "Paper") || (playerSelection == "Paper"&& computerSelection == "Scissors") || (playerSelection == "Scissors"&&computerSelection == "Rock")){
        return "You Lose! "+computerSelection+ " beats "+playerSelection+".";
    } else if ((playerSelection == "Rock"&&computerSelection == "Scissors") || (playerSelection == "Paper"&& computerSelection == "Rock") || (playerSelection == "Scissors"&&computerSelection == "Paper")){
        return "You Win! "+playerSelection+ " beats "+computerSelection+".";
    } else {
        return "It's a tie!";
    } 
}

//play 5 rounds, display result
function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let i=0; i<5; i++){
        let result = playRPS();
        if (result.slice(0,6)=="You Wi"){
            wins++;
        } else if (result.slice(0,6)=="You Lo"){
            losses++;
        } else {
            ties++;
        }
        console.log(result);
    }
    console.log("Wins: "+wins+", Losses: "+losses+", Ties: "+ties);
    if(wins > losses){
        console.log("You win!");
    }else if (losses > wins){
        console.log("You lose!");
    }else {
        console.log("It's a tie!");
    }
}