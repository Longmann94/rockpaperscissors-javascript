//array of possible moves for computer to play
const gameMove = ["rock", "paper", "scissors"];

//computer picks a random move
function computerPlay (gameMove) {
  return gameMove[Math.floor(Math.random() * 3)];
}

//win counter for tracking who gets to 5 first
let cwin = 0;
let pwin = 0;

//main game logic to decide who won and return winner each time
function gameLogic(playerPlay){

  let computerMove = computerPlay(gameMove);
  let playerMove = playerPlay;

  console.log("computer plays" + computerMove);
  console.log("player plays" + playerMove);

  if(playerMove == "rock"){
    if(computerMove == "rock"){
      console.log("draw!");
    }
    else if (computerMove == "paper"){
      console.log("computer wins!");
      return cwin++;
    }
    else if(computerMove =="scissors"){
      console.log("player wins!");
      return pwin++;
    }
  }

  if(playerMove == "paper"){
    if(computerMove == "rock"){
      console.log("player wins!");
      return pwin++;
    }
    else if (computerMove == "paper"){
      console.log("draw!");
    }
    else if(computerMove =="scissors"){
      console.log("computer wins!");
      return cwin++;
    }
  }

  if(playerMove == "scissors"){
    if(computerMove == "rock"){
      console.log("computer wins!");
      return cwin++;
    }
    else if (computerMove == "paper"){
      console.log("player wins!");
      return pwin++;
    }
    else if(computerMove =="scissors"){
      console.log("draw!");
    }
  }
}

//loop for player and computer to enter their moves and also checks if any player has got 5 wins.
for (let count = 0; count < 100; count++) {

  let playerPlay = prompt("enter your move").toLowerCase();
  gameLogic(playerPlay);
  console.log(pwin);
  console.log(cwin);
  if (cwin > 4){
    alert("computer won!");
    break;
  }
  else if (pwin > 4){
    alert("player won!");
    break;
  }
}
