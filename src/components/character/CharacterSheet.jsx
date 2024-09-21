import Attributes from "../Attributes/Attributes";
import Classes from "../Classes/Classes";
import SkillCheck from "./SkillCheck";
import Skills from "../Skills/Skills";
import { useState } from "react";
import ClassRequirement from "../Classes/ClassRequirement";

function CharacterSheet({ sheet_number, character }) {
  const [showClass, setShowClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handOnClickClass = (class_name) => {
    setSelectedClass(class_name);
    setShowClass(true);
  };

  const closeClassRequirements = () => {
    setShowClass(false);
  };

  return (
    <div className="container">
      <h3>Character: {sheet_number}</h3>
      <SkillCheck />
      <div className="character-info">
        <Attributes character={character} />
        <Classes onClickClass={handOnClickClass} />
        {showClass && (
          <ClassRequirement
            name={selectedClass}
            onClick={closeClassRequirements}
          />
        )}
        <Skills character={character} />
      </div>
    </div>
  );
}

export default CharacterSheet;
