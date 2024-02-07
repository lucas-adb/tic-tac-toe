import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectPlayer(rowIndex, cellIndex) {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === "X" ? "O" : "X";
    });

    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";

      if (gameTurns.length && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedGameTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }

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
      <GameBoard
        onSelectPlayer={handleSelectPlayer}
        turns={gameTurns}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
