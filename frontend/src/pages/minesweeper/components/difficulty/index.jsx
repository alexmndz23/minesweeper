import { memo } from "react";
import DifficultyRadio from "./components/difficulty-radio";

const difficulties = [
  { label: "Principiant", value: "principiant" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
  { label: "Expert", value: "expert" },
];

const Difficulty = memo(
  ({ difficulty, setDifficulty }) => {
    return (
      <div>
        {difficulties.map((d) => (
          <DifficultyRadio
            key={d.value}
            label={d.label}
            value={d.value}
            onChange={() => setDifficulty(d.value)}
            checked={d.value === difficulty}
          />
        ))}
      </div>
    );
  },
  (prev, next) => prev.difficulty === next.difficulty,
);

export default Difficulty;
