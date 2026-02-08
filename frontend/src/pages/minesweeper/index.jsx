import { useEffect, useState } from "react";
import Difficulty from "./components/difficulty";
import MinesCounter from "./components/mines-counter";
import GameStatus from "./components/game-status";
import Timer from "./components/timer";
import Board from "./components/board";
import { generateCells } from "./utils/board";

const Minesweeper = () => {
  const [difficulty, setDifficulty] = useState("principiant");
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells(generateCells(difficulty));
  }, [difficulty]);

  return (
    <div className="p-10 flex flex-col gap-5">
      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <div className="flex justify-center gap-5">
        <MinesCounter cells={cells} />
        <GameStatus />
        <Timer />
      </div>
      <Board
        cells={cells}
        setCells={setCells}
      />
    </div>
  );
};

export default Minesweeper;
