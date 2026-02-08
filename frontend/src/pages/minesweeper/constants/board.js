const ROWS = {
  principiant: 9,
  intermediate: 16,
  advanced: 16,
  expert: 24,
};

const COLS = {
  principiant: 9,
  intermediate: 16,
  advanced: 30,
  expert: 30,
};

const MINES = {
  principiant: 10,
  intermediate: 40,
  advanced: 99,
  expert: 180,
};

const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export { ROWS, COLS, MINES, DIRECTIONS };
