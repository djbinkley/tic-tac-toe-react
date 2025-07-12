export default function GameOver({ winner, onRestart }) {
  return (
    <div className="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} has won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
