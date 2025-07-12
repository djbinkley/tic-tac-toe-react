import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("Player");

  function handleClick() {
    setIsEditing((prevValue) => {
      return !prevValue;
    });
    if (isEditing) {
      // Lift player name state up to parent for game board update
      onChangeName(symbol, playerName);
    }
  }

  function handleChangePlayerName(event) {
    setPlayerName(event.target.value);
  }

  // Conditionally rendering either player name or input to change name
  let playerContent = <span className="player-name">{initialName}</span>;

  if (isEditing) {
    playerContent = (
      <input
        type="text"
        required
        value={initialName}
        onChange={handleChangePlayerName}
      />
    );
  }

  return (
    // Highlight the active player
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
