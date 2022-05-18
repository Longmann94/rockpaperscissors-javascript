//array of possible moves for computer to play
const gameMove = ["rock", "paper", "scissors"];

//computer picks a random move
function computerPlay (gameMove) {
  return gameMove[Math.floor(Math.random() * 3)];
}

let pwin = 0;
let cwin = 0;


//main game logic to decide who won and return winner each time
function gameLogic(e){

  let computerMove = computerPlay(gameMove);
  let playerMove = e.target.id;

  const playerResult = document.querySelector(".player-move");
  const npcResult = document.querySelector(".npc-move");
  const winner = document.querySelector(".winner");
  const playerScore = document.querySelector(".player-score");
  const npcScore = document.querySelector(".npc-score");

  playerResult.innerHTML = "You Play" + " " + playerMove;
  npcResult.innerHTML = "Npc Play" + " " + computerMove;
  playerScore.innerHTML = "Player Score:" + " " + pwin;
  npcScore.innerHTML = "Npc Score:" + " " + cwin;

  if(playerMove == "rock"){
    if(computerMove == "rock"){
      winner.innerHTML = "Draw!";
    }
    else if (computerMove == "paper"){
      winner.innerHTML = "Npc Wins!";
      return cwin++;
    }
    else if(computerMove =="scissors"){
      winner.innerHTML = "You win!";
      return pwin++;
    }
  }

  if(playerMove == "paper"){
    if(computerMove == "rock"){
      winner.innerHTML = "You win!";
      return pwin++;
    }
    else if (computerMove == "paper"){
      winner.innerHTML = "draw!";
    }
    else if(computerMove =="scissors"){
      winner.innerHTML = "Npc Wins!";
      return cwin++;
    }
  }

  if(playerMove == "scissors"){
    if(computerMove == "rock"){
      winner.innerHTML = "Npc Wins!";
      return cwin++;
    }
    else if (computerMove == "paper"){
      winner.innerHTML = "You win!";
      return pwin++;
    }
    else if(computerMove =="scissors"){
      winner.innerHTML = "draw!";
    }
  }

//win counter for tracking who gets to 5 first
  if(cwin > 4){
    playerResult.innerHTML = " ";
    npcResult.innerHTML = " ";
    winner.innerHTML = "NPC won 5 games!";
    window.removeEventListener("click", gameLogic);
  }else if(pwin > 4){
    playerResult.innerHTML = " ";
    npcResult.innerHTML = " ";
    winner.innerHTML = "You won 5 games!";
    window.removeEventListener("click", gameLogic);
  }

}



window.addEventListener("click", gameLogic); //listen to any click made inside the window and play that move.
