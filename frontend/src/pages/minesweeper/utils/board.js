import { ROWS, COLS, MINES, DIRECTIONS } from "../constants/board";

const generateEmptyCells = (difficulty) => {
  const cells = Array.from({ length: ROWS[difficulty] }, (_, r) =>
    Array.from({ length: COLS[difficulty] }, (_, c) => ({
      row: r,
      col: c,
      isMine: false,
      isRevealed: false,
      isFlagged: false,
      aroundMines: 0,
    })),
  );

  return cells;
};

const placeMines = (cells, difficulty) => {
  let minesToPlace = MINES[difficulty];

  while (minesToPlace > 0) {
    const r = Math.floor(Math.random() * ROWS[difficulty]);
    const c = Math.floor(Math.random() * COLS[difficulty]);

    if (!cells[r][c].isMine) {
      cells[r][c].isMine = true;
      minesToPlace--;
    }
  }

  return cells;
};

const countAroundMines = (cells, difficulty) => {
  for (let r = 0; r < ROWS[difficulty]; r++) {
    for (let c = 0; c < COLS[difficulty]; c++) {
      if (cells[r][c].isMine) continue;

      let count = 0;

      DIRECTIONS.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;

        if (cells[nr]?.[nc]?.isMine) {
          count++;
        }
      });

      cells[r][c].aroundMines = count;
    }
  }

  return cells;
};

const generateCells = (difficulty) => {
  const cells = generateEmptyCells(difficulty);
  placeMines(cells, difficulty);
  countAroundMines(cells, difficulty);

  return cells;
};

const getAroundCells = (cell, cells) => {
  const aroundCells = [];

  DIRECTIONS.forEach(([dr, dc]) => {
    const nr = cell.row + dr;
    const nc = cell.col + dc;

    if (cells[nr]?.[nc]) {
      aroundCells.push(cells[nr][nc]);
    }
  });

  return aroundCells;
};

export { generateCells, getAroundCells };
