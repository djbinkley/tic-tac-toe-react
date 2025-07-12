import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

// Declare global vars
const GAME_BOARD = [null, null, null, null, null, null, null, null, null];

const winLines = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left col
  [1, 4, 7], // center col
  [2, 5, 8], // right col
  [0, 4, 8], // ↘ diag
  [2, 4, 6], // ↙ diag
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Global functions meant to derive state
function findActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function findGameBoard(gameTurns) {
  let gameBoard = [...GAME_BOARD];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    gameBoard[square] = player;
  }

  return gameBoard;
}

function App() {
  // Keep track of players and turns
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  // Local vars to hold derived state
  const activePlayer = findActivePlayer(gameTurns);
  const gameBoard = findGameBoard(gameTurns);

  // Push latest player turn onto the player turns
  function handleSelectSquare(index) {
    setGameTurns((prevTurns) => {
      return [
        {
          player: findActivePlayer(prevTurns),
          square: index,
        },
        ...prevTurns,
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  // Send to Player component to collect name changes
  function handleChangeName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  let turnCount = 0;

  return (
    <section>
      <div className="board-container">
        <ol className="players">
          <Player
            symbol="X"
            initialName={players.X}
            isActive={activePlayer === "X"}
            onChangeName={handleChangeName}
          />
          <Player
            symbol="O"
            initialName={players.O}
            isActive={activePlayer === "O"}
            onChangeName={handleChangeName}
          />
        </ol>
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} players={players} />
    </section>
  );
}

export default App;
