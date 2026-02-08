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
    <div
      className="grid gap-1 place-content-center w-auto"
      style={{
        gridTemplateColumns: `repeat(${COLS[difficulty]}, min-content)`,
        gridTemplateRows: `repeat(${ROWS[difficulty]}, min-content)`,
      }}
      onContextMenu={(e) => e.preventDefault()}>
      {cells.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <Cell
            key={`${rowIndex}-${cellIndex}`}
            isMine={cell.isMine}
            isRevealed={cell.isRevealed}
            isFlagged={cell.isFlagged}
            onClick={() => revealCell(cell)}
            onContextMenu={() => markCell(cell)}
          />
        )),
      )}
    </div>
  );
});

export default Board;
