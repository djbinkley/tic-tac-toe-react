export default function Log({ turns, players }) {
  return (
    <div className="game-log">
      {turns.map((turn) => {
        return (
          <p key={turn.square}>
            {players[turn.player]} has marked square {turn.square + 1} with{" "}
            {turn.player}
          </p>
        );
      })}
    </div>
  );
}
