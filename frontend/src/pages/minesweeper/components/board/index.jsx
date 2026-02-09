import { memo } from "react";
import Cell from "./components/cell";
import { getAroundCells } from "../../utils/board";

const Board = memo(
  ({ firstMineRevealed, setFirstMineRevealed, cells, setCells }) => {
    const revealCell = (cell) => {
      if (cell.isRevealed || cell.isFlagged) return;

      if (cell.isMine) {
        if (!firstMineRevealed) {
          setFirstMineRevealed(cell);
        }

        setCells((prevCells) =>
          prevCells.map((r) =>
            r.map((c) => (c.isMine ? { ...c, isRevealed: true } : c)),
          ),
        );

        return;
      }

      setCells((prevCells) => {
        const nextCells = prevCells.map((r) => r.map((c) => ({ ...c })));
        const queue = [cell];

        while (queue.length) {
          const current = queue.shift();
          const c = nextCells[current.row][current.col];

          c.isRevealed = true;

          if (c.aroundMines === 0) {
            getAroundCells(c, nextCells).forEach((n) => {
              if (!n.isRevealed && !n.isMine) {
                queue.push(n);
              }
            });
          }
        }

        return nextCells;
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
            set6
            className="flex justify-center">
            {row.map((cell, cellIndex) => (
              <Cell
                key={cellIndex}
                isMine={cell.isMine}
                isRevealed={cell.isRevealed}
                isFlagged={cell.isFlagged}
                isFirstMineRevealed={
                  cell.row === firstMineRevealed?.row &&
                  cell.col === firstMineRevealed?.col
                }
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
  },
);

export default Board;
