import "./App.css";
import ActionButtons from "./components/ActionButtons";
import CharacterSheet from "./components/Character/CharacterSheet";
import SkillCheckResults from "./components/SkillCheckResults/SkillCheckResults";
import { useCharactersContext } from "./contexts/CharacterContextProvider";

function App() {
  const { characters } = useCharactersContext();
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Joseph Bosire</h1>
      </header>
      <section className="App-section">
        {/* Add Action Buttons Component Here */}
        <ActionButtons />
        {/* Add Skill Check Results Component Here */}
        <SkillCheckResults />
        {/* Add Character Sheet Component Here */}
        {Object.entries(characters).map(([id, character]) => (
          <CharacterSheet
            key={`character-${id}`}
            sheet_number={id}
            character={character}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
