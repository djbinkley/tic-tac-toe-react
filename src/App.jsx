import { useState } from "react";
import Player from "./components/Player.jsx";

const gameBoard = [null, null, null, null, null, null, null, null, null];

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

const players = {
  X: "Player 1",
  Y: "Player 2",
};

function App() {
  const activePlayer = players.X;

  return (
    <section>
      <div className="board-container">
        <ol className="players">
          <Player symbol="X" isActive={activePlayer} />
          <Player symbol="O" isActive={activePlayer} />
        </ol>
        <div className="game-board">
          {gameBoard.map((value, index) => {
            return (
              <button className="game-button" key={index}>
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
