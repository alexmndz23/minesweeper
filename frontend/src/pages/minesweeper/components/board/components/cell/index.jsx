import classNames from "classnames";
import { memo } from "react";

const Cell = memo(
  ({ isMine, isRevealed, isFlagged, onClick, onContextMenu }) => {
    const buttonClassname = classNames("w-9 h-9 grid place-items-center", {
      "bg-neutral-500": !isRevealed,
      "bg-neutral-700": isRevealed && !isMine,
      "bg-red-500": isRevealed && isMine,
    });

    return (
      <button
        className={buttonClassname}
        onClick={onClick}
        onContextMenu={onContextMenu}>
        {isFlagged && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ab2b2b"
            viewBox="0 0 256 256">
            <path d="M248,104a8,8,0,0,1-5.37,7.56L64,173.69V216a8,8,0,0,1-16,0V40a8,8,0,0,1,10.63-7.56l184,64A8,8,0,0,1,248,104Z"></path>
          </svg>
        )}
      </button>
    );
  },
  (prev, next) =>
    prev.isRevealed === next.isRevealed && prev.isFlagged === next.isFlagged,
);

export default Cell;
