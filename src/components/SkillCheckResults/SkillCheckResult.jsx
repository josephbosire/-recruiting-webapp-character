function SkillCheckResult({ result }) {
  return (
    <li>
      <h3>Character: {result.character_id}</h3>
      <p>
        Skill: {result.selectedSkill} : {result.skillTotal}
      </p>
      <p>You rolled: {result.roll}</p>
      <p>The DC was: {result.dc}</p>
      <p>Result: {result.total >= result.dc ? "Success" : "Failure"}</p>
    </li>
  );
}

export default SkillCheckResult;
