export default function Log({ turns, players }) {
  return (
    <div className="game-log">
      {turns.map((turn, index) => {
        return (
          <p key={index}>
            {players[turn.player]} has selected square {turn.square + 1}
          </p>
        );
      })}
    </div>
  );
}
