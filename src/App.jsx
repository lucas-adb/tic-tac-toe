import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function getCurrentPlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getCurrentPlayer(gameTurns);

  function handleSelectPlayer(rowIndex, cellIndex) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = getCurrentPlayer(prevGameTurns);

      const updatedGameTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }

  // console.log(gameTurns);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
      </div>
      <GameBoard onSelectPlayer={handleSelectPlayer} turns={gameTurns} />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
