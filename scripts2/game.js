let game = {
  currentGame: [],
  playerMoves: [],
  score: 0,
  turnNumber: 0,
  choices: ["button1", "button2", "button3", "button4"],
};
function newGame() {
  game.currentGame = [];
  game.playerMoves = [];
  game.score = 0;
  showScore();
  addTurn();
}
function addTurn() {
  let mix = Math.floor(Math.random() * 4);
  game.playerMoves = [];
  game.currentGame.push(game.choices[mix]);
  showTurns();
}

function lightsOn(circ) {
  document.getElementById(circ).classList.add(circ +"light");
  setTimeout(() => {
    document.getElementById(circ).classList.remove(circ + "light");
  }, 400);
}


function showTurns() {
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
    }
  }, 800);
}

function showScore() {
  document.getElementById("score").innerText = game.score;
}

/**
 * export all the functions to be tested
 */
module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };
