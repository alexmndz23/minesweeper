const Difficulty = ({ difficulty, setDifficulty }) => {
  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div>
      <label>
        Principiant
        <input
          type="radio"
          name="difficulty"
          value="principiant"
          onChange={handleChange}
          checked={difficulty === "principiant"}
        />
      </label>
      <label>
        Intermediate
        <input
          type="radio"
          name="difficulty"
          value="intermediate"
          onChange={handleChange}
          checked={difficulty === "intermediate"}
        />
      </label>
      <label>
        Advanced
        <input
          type="radio"
          name="difficulty"
          value="advanced"
          onChange={handleChange}
          checked={difficulty === "advanced"}
        />
      </label>
      <label>
        Expert
        <input
          type="radio"
          name="difficulty"
          value="expert"
          onChange={handleChange}
          checked={difficulty === "insane"}
        />
      </label>
    </div>
  );
};

export default Difficulty;
