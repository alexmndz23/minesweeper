import { memo } from "react";
import Cell from "./components/cell";

const Board = memo(({ cells, setCells }) => {
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
    <div className="flex flex-col">
      {cells.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center">
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              isMine={cell.isMine}
              isRevealed={cell.isRevealed}
              isFlagged={cell.isFlagged}
              aroundMines={cell.aroundMines}
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
