import { useEffect, useMemo, useState } from "react";
import { ATTRIBUTE_LIST, MAX_CHARACTER_ATTRIBUTE_POINTS } from "../../consts";
import { useCharactersContext } from "../../contexts/CharacterContextProvider";
import { getCharacterModifiers } from "../../lib/utils";
import ModifierControls from "../ModifierControls";

function Attributes({ character }) {
  const character_modifiers = useMemo(
    () => getCharacterModifiers(character),
    [character],
  );
  const {
    increaseCharacterAttribute,
    decreaseCharacterAttribute,
    getTotalCharacterAttrPoints,
  } = useCharactersContext();
  const totalCurrentAttrPoints = getTotalCharacterAttrPoints(character.id);
  const [disableIncrement, setDisableIncrement] = useState(false);

  useEffect(() => {
    if (totalCurrentAttrPoints >= MAX_CHARACTER_ATTRIBUTE_POINTS) {
      alert("A character can have up to 70 Delegated Attribute Points");
      setDisableIncrement(true);
    } else {
      setDisableIncrement(false);
    }
  }, [totalCurrentAttrPoints]);

  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {ATTRIBUTE_LIST.map((attr) => (
          <li key={attr}>
            {attr}:{character[attr]} (Modifier: {character_modifiers[attr]})
            <ModifierControls
              disableIncrement={disableIncrement}
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
