import ModifierControls from "../ModifierControls";

function Attributes({ character, character_modifiers, updateCharacter }) {
  const increaseAttribute = (attribute) => {
    const updatedValue = ++character[attribute];
    const updatedCharacter = { ...character, [attribute]: updatedValue };
    updateCharacter(updatedCharacter);
  };
  const decreaseAttribute = (attribute) => {
    const updatedValue = --character[attribute];
    const updatedCharacter = { ...character, [attribute]: updatedValue };
    updateCharacter(updatedCharacter);
  };
  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {Object.entries(character)
          .filter(([k, _]) => k !== "id")
          .map(([attribute, points]) => (
            <li>
              {attribute}:{points} (Modifier: {character_modifiers[attribute]})
              <ModifierControls
                onIncrement={() => increaseAttribute(attribute)}
                onDecrement={() => decreaseAttribute(attribute)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Attributes;
