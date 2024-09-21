import { useCharactersContext } from "../../contexts/CharacterContextProvider";
import { useCharacterModifiers } from "../../lib/hooks";
import ModifierControls from "../ModifierControls";

function Attributes({ character }) {
  const character_modifiers = useCharacterModifiers(character);
  const { increaseCharacterAttribute, decreaseCharacterAttribute } =
    useCharactersContext();
  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {Object.entries(character)
          .filter(([k, _]) => k !== "id")
          .map(([attribute, points]) => (
            <li key={attribute}>
              {attribute}:{points} (Modifier: {character_modifiers[attribute]})
              <ModifierControls
                onIncrement={() =>
                  increaseCharacterAttribute(character.id, attribute)
                }
                onDecrement={() =>
                  decreaseCharacterAttribute(character.id, attribute)
                }
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Attributes;
