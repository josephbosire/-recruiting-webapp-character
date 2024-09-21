function ActionButtons({ onAddCharacter, onResetCharacters }) {
  return (
    <div>
      <button onClick={() => onAddCharacter()}>Add New Character</button>
      <button onClick={() => onResetCharacters()}>Reset All Characters</button>
      <button>Save All Characters</button>
    </div>
  );
}

export default ActionButtons;
