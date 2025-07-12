import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

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
  Y: "Player 2",
};

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
    console.log("PLAYER:: ", player);
    console.log("SQUARE:: ", square);
    gameBoard[square] = player;
  }
  console.log("RUNNING findGameBoard");
  console.log("GAME BOARD:: ", gameBoard);

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = findActivePlayer(gameTurns);
  const gameBoard = findGameBoard(gameTurns);

  function handleSelectSquare(index) {
    setGameTurns((prevTurns) => {
      const currentPlayer = findActivePlayer(prevTurns);

      return [
        {
          player: findActivePlayer(prevTurns),
          square: index,
        },
        ...prevTurns,
      ];
    });
  }

  return (
    <section>
      <div className="board-container">
        <ol className="players">
          <Player symbol="X" isActive={activePlayer} />
          <Player symbol="O" isActive={activePlayer} />
        </ol>
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
    </section>
  );
}

export default App;
