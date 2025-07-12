import { useState } from "react";

export default function Player({ symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("Player");

  function handleClick() {
    setIsEditing((prevValue) => {
      return !prevValue;
    });
  }

  function handleChangePlayerName(event) {
    setPlayerName(event.target.value);
  }

  let playerContent = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerContent = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChangePlayerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
