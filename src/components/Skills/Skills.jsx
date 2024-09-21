import React, { useEffect, useState } from "react";
import { AVAILABLE_SKILL_POINTS, SKILL_LIST } from "../../consts";
import ModifierControls from "../ModifierControls";

function Skills({ character, character_modifiers }) {
  const [availablePoints, setAvailablePoints] = useState(
    AVAILABLE_SKILL_POINTS,
  );

  const [skills, setSkills] = useState(() =>
    SKILL_LIST.map((skill) => ({ ...skill, points: 0 })),
  );

  const incrementSkill = (name) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.name === name ? { ...skill, points: ++skill.points } : skill,
      ),
    );
  };

  const decrementSkill = (name) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.name === name ? { ...skill, points: --skill.points } : skill,
      ),
    );
  };

  useEffect(() => {
    const intelligence_modifier = character_modifiers.Intelligence || 0;
    const newSkillPoints = AVAILABLE_SKILL_POINTS + 4 * intelligence_modifier;
    setAvailablePoints(newSkillPoints);
  }, [character_modifiers]);
  return (
    <div className="container character-info__skills">
      <h3>Skills</h3>
      <span>Total skill points available: {availablePoints}</span>
      <ul>
        {skills.map((skill) => (
          <Skill
            key={skill.name}
            skill={skill}
            character_modifiers={character_modifiers}
            incrementSkill={incrementSkill}
            decrementSkill={decrementSkill}
          />
        ))}
      </ul>
    </div>
  );
}
function Skill({ skill, character_modifiers, incrementSkill, decrementSkill }) {
  return (
    <li>
      <span>
        {skill.name}:{skill.points}
      </span>
      <span>
        (Modifier: {skill.attributeModifier}):{" "}
        {character_modifiers[skill.attributeModifier]}
      </span>
      <ModifierControls
        onIncrement={() => incrementSkill(skill.name)}
        onDecrement={() => decrementSkill(skill.name)}
      />
      <span>total: 0</span>
    </li>
  );
}
export default Skills;
