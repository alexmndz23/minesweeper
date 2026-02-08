import { useState } from "react";
import Difficulty from "./components/difficulty";
import MinesCounter from "./components/mines-counter";
import GameStatus from "./components/game-status";
import Timer from "./components/timer";
import Board from "./components/board";

const Minesweeper = () => {
  const [difficulty, setDifficulty] = useState("principiant");

  return (
    <div className="p-10 flex flex-col gap-5">
      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <div className="flex justify-center gap-5">
        <MinesCounter />
        <GameStatus />
        <Timer />
      </div>
      <Board difficulty={difficulty} />
    </div>
  );
};

export default Minesweeper;
