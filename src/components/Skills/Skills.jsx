import {
  useCalcualteAvailableSkillPoints,
  useCharacterModifiers,
  useSkills,
} from "../../lib/hooks";
import ModifierControls from "../ModifierControls";

function Skills({ character }) {
  const character_modifiers = useCharacterModifiers(character);
  const availablePoints = useCalcualteAvailableSkillPoints(character_modifiers);
  const { skills, totalCurrentSkillPoints, incrementSkill, decrementSkill } =
    useSkills();
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
            disableIncrement={totalCurrentSkillPoints >= availablePoints}
          />
        ))}
      </ul>
    </div>
  );
}
function Skill({
  skill,
  character_modifiers,
  incrementSkill,
  decrementSkill,
  disableIncrement,
}) {
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
        disableIncrement={disableIncrement}
        onIncrement={() => incrementSkill(skill.name)}
        onDecrement={() => decrementSkill(skill.name)}
      />
      <span>total: 0</span>
    </li>
  );
}
export default Skills;
