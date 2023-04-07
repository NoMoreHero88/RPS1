const results = document.querySelector('#results');
const score = document.querySelector('#score');
const finalResult = document.querySelector('#finalResult');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button)=> {
    button.addEventListener('click', (e) => {
        let choice = e.target.id;
        playRPS(choice);
    });
});
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

let wins = 0;
let losses = 0;
let ties = 0;
//take player choice input and compare player choice to PC to determine winner

function playRPS(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (wins == 5 || losses == 5){
        wins = 0;
        losses = 0;
        ties = 0;
        results.textContent="";
        showScore();
        finalResult.textContent = "";
    }
        if ((playerSelection=="Rock"&&computerSelection == "Paper") || (playerSelection == "Paper"&& computerSelection == "Scissors") || (playerSelection == "Scissors"&&computerSelection == "Rock")){
            results.textContent = "You Lose! "+computerSelection+ " beats "+playerSelection+".";
            losses++;
            showScore();
            if(losses == 5){
                finalResult.textContent = "You Lose!"}
                return;
        } else if ((playerSelection == "Rock"&&computerSelection == "Scissors") || (playerSelection == "Paper"&& computerSelection == "Rock") || (playerSelection == "Scissors"&&computerSelection == "Paper")){
            results.textContent = "You Win! "+playerSelection+ " beats "+computerSelection+".";
            wins++;
            showScore();
            if(wins==5){
                finalResult.textContent = "You Win!";}
                return;
        } else {
            results.textContent = "It's a tie!";
            ties++;
            showScore();
        } 
    }
    

function showScore(){score.textContent = "Wins: "+wins+ " Losses: "+
  losses+ " Ties: "+ties;}