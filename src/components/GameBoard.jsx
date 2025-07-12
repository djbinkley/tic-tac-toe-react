export default function GameBoard({ gameBoard, onSelectSquare }) {
  return (
    <div className="game-board">
      {gameBoard.map((value, index) => {
        return (
          <button
            className="game-button"
            key={index}
            onClick={() => onSelectSquare(index)}
            disabled={value !== null}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
