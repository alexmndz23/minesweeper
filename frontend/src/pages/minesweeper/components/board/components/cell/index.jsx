import { memo } from "react";
import classNames from "classnames";

const Cell = memo(
  ({ isMine, isRevealed, isFlagged, aroundMines, onClick, onContextMenu }) => {
    const buttonClassname = classNames(
      "w-9 h-9 grid place-items-center border-3",
      {
        "bg-neutral-500 border-t-neutral-400 border-l-neutral-400 border-b-neutral-600 border-r-neutral-600":
          !isRevealed,
        "bg-neutral-600 border-t-neutral-700 border-l-neutral-700 border-b-neutral-500 border-r-neutral-500":
          isRevealed,
      },
    );

    return (
      <button
        className={buttonClassname}
        onClick={onClick}
        onContextMenu={onContextMenu}>
        {isFlagged && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ab2b2b"
            viewBox="0 0 256 256">
            <path d="M248,104a8,8,0,0,1-5.37,7.56L64,173.69V216a8,8,0,0,1-16,0V40a8,8,0,0,1,10.63-7.56l184,64A8,8,0,0,1,248,104Z"></path>
          </svg>
        )}
        {isRevealed &&
          (isMine ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M248,32h0a8,8,0,0,0-8,8,52.66,52.66,0,0,1-3.57,17.39C232.38,67.22,225.7,72,216,72c-11.06,0-18.85-9.76-29.49-24.65C176,32.66,164.12,16,144,16c-16.39,0-29,8.89-35.43,25a66.07,66.07,0,0,0-3.9,15H88A16,16,0,0,0,72,72v9.59A88,88,0,0,0,112,248h1.59A88,88,0,0,0,152,81.59V72a16,16,0,0,0-16-16H120.88a46.76,46.76,0,0,1,2.69-9.37C127.62,36.78,134.3,32,144,32c11.06,0,18.85,9.76,29.49,24.65C184,71.34,195.88,88,216,88c16.39,0,29-8.89,35.43-25A68.69,68.69,0,0,0,256,40,8,8,0,0,0,248,32ZM111.89,209.32A8,8,0,0,1,104,216a8.52,8.52,0,0,1-1.33-.11,57.5,57.5,0,0,1-46.57-46.57,8,8,0,1,1,15.78-2.64,41.29,41.29,0,0,0,33.43,33.43A8,8,0,0,1,111.89,209.32Z"></path>
            </svg>
          ) : (
            aroundMines
          ))}
      </button>
    );
  },
  (prev, next) =>
    prev.isRevealed === next.isRevealed && prev.isFlagged === next.isFlagged,
);

export default Cell;
