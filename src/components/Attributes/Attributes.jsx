import { useMemo } from "react";
import { ATTRIBUTE_LIST } from "../../consts";
import { useCharactersContext } from "../../contexts/CharacterContextProvider";
import { getCharacterModifiers } from "../../lib/utils";
import ModifierControls from "../ModifierControls";

function Attributes({ character }) {
  const character_modifiers = useMemo(
    () => getCharacterModifiers(character),
    [character],
  );
  const { increaseCharacterAttribute, decreaseCharacterAttribute } =
    useCharactersContext();
  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {ATTRIBUTE_LIST.map((attr) => (
          <li key={attr}>
            {attr}:{character[attr]} (Modifier: {character_modifiers[attr]})
            <ModifierControls
              onIncrement={() => increaseCharacterAttribute(character.id, attr)}
              onDecrement={() => decreaseCharacterAttribute(character.id, attr)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attributes;
