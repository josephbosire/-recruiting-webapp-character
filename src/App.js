import { useState } from "react";
import "./App.css";
import ActionButtons from "./components/ActionButtons";
import CharacterSheet from "./components/Character/CharacterSheet";
import SkillCheckResults from "./components/SkillCheckResults/SkillCheckResults";
import {
  ATTRIBUTE_LIST,
  CLASS_LIST,
  DEFAULT_ATTRIBUTE_POINTS,
  SKILL_LIST,
} from "./consts.js";

function App() {
  const [characters, setCharacters] = useState([]);

  const handleAddCharacter = () => {
    setCharacters((prev) => [
      ...prev,
      {
        id: new Date().getTime(), // Temporary way to quickly get a unique id. Not safe for production
        Strength: DEFAULT_ATTRIBUTE_POINTS,
        Dexeterity: DEFAULT_ATTRIBUTE_POINTS,
        Constitution: DEFAULT_ATTRIBUTE_POINTS,
        Intelligence: DEFAULT_ATTRIBUTE_POINTS,
        Wisdom: DEFAULT_ATTRIBUTE_POINTS,
        Charisma: DEFAULT_ATTRIBUTE_POINTS,
      },
    ]);
  };

  const handleUpdateCharacterList = (updatedCharacter) => {
    setCharacters((prev) =>
      prev.map((char) =>
        char.id === updatedCharacter.id ? updatedCharacter : char,
      ),
    );
  };

  const handleResetCharacters = () => {
    setCharacters([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Joseph Bosire</h1>
      </header>
      <section className="App-section">
        {/* Add Action Buttons Component Here */}
        <ActionButtons
          onAddCharacter={handleAddCharacter}
          onResetCharacters={handleResetCharacters}
        />
        {/* Add Skill Check Results Component Here */}
        <SkillCheckResults />
        {/* Add Character Sheet Component Here */}
        {characters.map((character, idx) => (
          <CharacterSheet
            key={`character-${idx}`}
            sheet_number={idx + 1}
            character={character}
            handleUpdateCharacterList={handleUpdateCharacterList}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
