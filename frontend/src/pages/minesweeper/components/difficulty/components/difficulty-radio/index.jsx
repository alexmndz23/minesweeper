import { memo } from "react";
import classnames from "classnames";

const DifficultyRadio = memo(
  ({ label, value, onChange, checked }) => {
    const labelClassname = classnames(
      "px-3 py-1 rounded-md text-white transition-colors duration-200",
      {
        "bg-neutral-700": checked,
        "bg-neutral-500": !checked,
      },
    );

    return (
      <label className={labelClassname}>
        <input
          className="hidden"
          type="radio"
          name="difficulty"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    );
  },
  (prev, next) => prev.checked === next.checked,
);

export default DifficultyRadio;
