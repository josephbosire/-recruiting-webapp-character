import Attributes from "./attributes/Attributes";
import Classes from "./Classes";
import SkillCheck from "./SkillCheck";
import Skills from "./skills/Skills";

function CharacterSheet() {
  return (
    <div>
      <h3>Character: 1</h3>
      <SkillCheck />
      <Attributes />
      <Classes />
      <Skills />
    </div>
  );
}

export default CharacterSheet;
