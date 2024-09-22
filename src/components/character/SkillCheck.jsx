import React, { useState } from "react";
import { SKILL_LIST } from "../../consts";
import { useCharactersContext } from "../../contexts/CharacterContextProvider";

function SkillCheck({ character }) {
  const [dc, setDc] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("Acrobatics");
  const skill_options = SKILL_LIST.map((skill) => skill.name);
  const { rollDice } = useCharactersContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    rollDice(character.id, selectedSkill, dc);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Skill Check</h3>
      <label>Skill:</label>
      <select
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e.target.value)}
      >
        {skill_options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="dc">DC:</label>
      <input
        type="number"
        id="dc"
        value={dc}
        required
        onChange={(e) => setDc(++e.target.value)}
      />
      <button>Roll</button>
    </form>
  );
}

export default SkillCheck;
