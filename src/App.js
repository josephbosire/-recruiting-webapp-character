import { useState } from "react";
import "./App.css";
import ActionButtons from "./components/ActionButtons";
import CharacterSheet from "./components/character/CharacterSheet";
import SkillCheckResults from "./components/SkillCheckResults";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

function App() {
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
        <CharacterSheet />
      </section>
    </div>
  );
}

export default App;
