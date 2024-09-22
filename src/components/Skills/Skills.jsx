import { useMemo } from "react";
import { AVAILABLE_SKILL_POINTS } from "../../consts";
import { useCharactersContext } from "../../contexts/CharacterContextProvider";
import { getCharacterModifiers } from "../../lib/utils";
import ModifierControls from "../ModifierControls";

function Skills({ character }) {
  const character_modifiers = useMemo(
    () => getCharacterModifiers(character),
    [character],
  );
  const { incrementSkill, decrementSkill, getCharacterCurrentSkillPoints } =
    useCharactersContext();
  const intelligence_modifier = character_modifiers.Intelligence || 0;
  const availablePoints = AVAILABLE_SKILL_POINTS + 4 * intelligence_modifier;
  const totalCurrentSkillPoints = getCharacterCurrentSkillPoints(character.id);

  return (
    <div className="container character-info__skills">
      <h3>Skills</h3>
      <span>Total skill points available: {availablePoints}</span>
      <ul>
        {character.skills.map((skill) => (
          <li key={`${character.id} - ${skill.name}`}>
            <span>
              {skill.name}:{skill.points}
            </span>
            <span>
              (Modifier: {skill.attributeModifier}):{" "}
              {character_modifiers[skill.attributeModifier]}
            </span>
            <ModifierControls
              disableIncrement={totalCurrentSkillPoints >= availablePoints}
              onIncrement={() => incrementSkill(character.id, skill.name)}
              onDecrement={() => decrementSkill(character.id, skill.name)}
            />
            <span>
              total:{" "}
              {skill.points + character_modifiers[skill.attributeModifier]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;
