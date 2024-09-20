import React from "react";

function SkillCheck() {
  return (
    <form>
      <h3>Skill Check</h3>
      <label>Skill:</label>
      <select id="skill">
        <option>Acrobatics</option>
      </select>
      <label htmlFor="dc">DC:</label>
      <input id="dc" />
      <button>Roll</button>
    </form>
  );
}

export default SkillCheck;
