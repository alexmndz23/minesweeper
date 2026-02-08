import { useState } from "react";
import Difficulty from "./components/difficulty";
import Timer from "./components/timer";
import Board from "./components/board";

const Minesweeper = () => {
  const [difficulty, setDifficulty] = useState("principiant");

  return (
    <div>
      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <Timer />
      <Board />
    </div>
  );
};

export default Minesweeper;
