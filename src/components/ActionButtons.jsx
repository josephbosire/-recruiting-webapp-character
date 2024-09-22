import { useCharactersContext } from "../contexts/CharacterContextProvider";

function ActionButtons() {
  const { addCharacter, resetCharacters, saveAllCharacters } =
    useCharactersContext();
  return (
    <div>
      <button onClick={() => addCharacter()}>Add New Character</button>
      <button onClick={() => resetCharacters()}>Reset All Characters</button>
      <button onClick={() => saveAllCharacters()}>Save All Characters</button>
    </div>
  );
}

export default ActionButtons;
