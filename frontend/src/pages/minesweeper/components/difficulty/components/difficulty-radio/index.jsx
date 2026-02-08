import { memo } from "react";

const DifficultyRadio = memo(
  ({ label, value, onChange, checked }) => {
    return (
      <label>
        <input
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
