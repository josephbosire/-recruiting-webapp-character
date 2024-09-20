import Attributes from "../Attributes/Attributes";
import Classes from "../Classes/Classes";
import SkillCheck from "./SkillCheck";
import Skills from "../Skills/Skills";

function CharacterSheet() {
  return (
    <div className="container">
      <h3>Character: 1</h3>
      <SkillCheck />
      <div className="character-info">
        <Attributes />
        <Classes />
        <Skills />
      </div>
    </div>
  );
}

export default CharacterSheet;
