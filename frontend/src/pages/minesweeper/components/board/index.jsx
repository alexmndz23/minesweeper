import { memo, useEffect, useState } from "react";
import Cell from "./components/cell";

const COLS = {
  principiant: 9,
  intermediate: 16,
  advanced: 30,
  expert: 30,
};

const ROWS = {
  principiant: 9,
  intermediate: 16,
  advanced: 16,
  expert: 24,
};

const MINES = {
  principiant: 10,
  intermediate: 40,
  advanced: 99,
  expert: 180,
};

const generateCells = (difficulty) => {
  const cells = Array.from({ length: ROWS[difficulty] }, (_, r) =>
    Array.from({ length: COLS[difficulty] }, (_, c) => ({
      row: r,
      col: c,
      isMine: Math.random() < 0.1,
      isRevealed: false,
      isFlagged: false,
    })),
  );

  return cells;
};

const Board = memo(({ difficulty }) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells(generateCells(difficulty));
  }, [difficulty]);

  const revealCell = (cell) => {
    setCells((prevCells) => {
      const c = prevCells[cell.row][cell.col];

      if (c.isRevealed || c.isFlagged) return prevCells;

      return prevCells.map((r) =>
        r.map((c) =>
          c.row === cell.row && c.col === cell.col
            ? { ...c, isRevealed: true }
            : c,
        ),
      );
    });
  };

  const markCell = (cell) => {
    setCells((prevCells) => {
      const c = prevCells[cell.row][cell.col];

      if (c.isRevealed) return prevCells;

      return prevCells.map((r) =>
        r.map((c) =>
          c.row === cell.row && c.col === cell.col
            ? { ...c, isFlagged: !c.isFlagged }
            : c,
        ),
      );
    });
  };

  return (
    <div className="flex flex-col gap-1">
      {cells.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-1">
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              isMine={cell.isMine}
              isRevealed={cell.isRevealed}
              isFlagged={cell.isFlagged}
              onClick={() => revealCell(cell)}
              onContextMenu={(e) => {
                e.preventDefault();
                markCell(cell);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

export default Board;
