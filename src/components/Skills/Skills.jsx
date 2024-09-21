import React from "react";
import { AVAILABLE_SKILL_POINTS, SKILL_LIST } from "../../consts";
import ModifierControls from "../ModifierControls";

function Skills() {
  return (
    <div className="container character-info__skills">
      <h3>Skills</h3>
      <span>Total skill points available: {AVAILABLE_SKILL_POINTS}</span>
      <ul>
        {SKILL_LIST.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
function Skill({ skill }) {
  return (
    <li>
      <span>{skill.name}:0</span>
      <span>(Modifier: {skill.attributeModifier}): 0</span>
      <ModifierControls />
      <span>total: 0</span>
    </li>
  );
}
export default Skills;
