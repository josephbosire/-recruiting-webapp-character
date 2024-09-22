import { useCharactersContext } from "../../contexts/CharacterContextProvider";
import SkillCheckResult from "./SkillCheckResult";

function SkillCheckResults() {
  const { skillCheckResults } = useCharactersContext();
  return (
    <div>
      <h2>Skill Check Results</h2>
      <ul>
        {skillCheckResults.map((result) => (
          <SkillCheckResult
            key={`result-${result.character_id}`}
            result={result}
          />
        ))}
      </ul>
    </div>
  );
}

export default SkillCheckResults;
