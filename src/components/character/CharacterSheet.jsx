import Attributes from "../Attributes/Attributes";
import Classes from "../Classes/Classes";
import SkillCheck from "./SkillCheck";
import Skills from "../Skills/Skills";
import { useEffect, useState } from "react";
import ClassRequirement from "../Classes/ClassRequirement";

function CharacterSheet({
  sheet_number,
  character,
  handleUpdateCharacterList,
}) {
  const [showClass, setShowClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [characterModifiers, setCharacterModifiers] = useState({});

  const handOnClickClass = (class_name) => {
    setSelectedClass(class_name);
    setShowClass(true);
    console.log("Setting selected class", class_name);
  };

  const closeClassRequirements = () => {
    setShowClass(false);
  };

  const calcualteModifier = (points) => {
    if (points < 10) {
      return points - 10;
    }
    return Math.floor((points - 10) / 2);
  };

  useEffect(() => {
    const modifiers = Object.entries(character).reduce(
      (acc, [attr, points]) => {
        acc[attr] = calcualteModifier(points);
        return acc;
      },
    );
    setCharacterModifiers(modifiers);
  }, [character]);
  return (
    <div className="container">
      <h3>Character: {sheet_number}</h3>
      <SkillCheck />
      <div className="character-info">
        <Attributes
          character={character}
          character_modifiers={characterModifiers}
          updateCharacter={handleUpdateCharacterList}
        />
        <Classes onClickClass={handOnClickClass} />
        {showClass && (
          <ClassRequirement
            name={selectedClass}
            onClick={closeClassRequirements}
          />
        )}
        <Skills />
      </div>
    </div>
  );
}

export default CharacterSheet;
