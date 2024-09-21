import { createContext, useContext, useState } from "react";
import { DEFAULT_ATTRIBUTE_POINTS } from "../consts";

const CharactersContext = createContext(null);

const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = () => {
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

  const updateCharacters = (updatedCharacter) => {
    setCharacters((prev) =>
      prev.map((char) =>
        char.id === updatedCharacter.id ? updatedCharacter : char,
      ),
    );
  };

  const resetCharacters = () => {
    setCharacters([]);
  };

  const increaseCharacterAttribute = (character_id, attribute) => {
    setCharacters((prev) =>
      prev.map((char) =>
        char.id === character_id
          ? { ...char, [attribute]: ++char[attribute] }
          : char,
      ),
    );
  };
  const decreaseCharacterAttribute = (character_id, attribute) => {
    setCharacters((prev) =>
      prev.map((char) =>
        char.id === character_id
          ? { ...char, [attribute]: --char[attribute] }
          : char,
      ),
    );
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        addCharacter,
        updateCharacters,
        resetCharacters,
        increaseCharacterAttribute,
        decreaseCharacterAttribute,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error(
      "CharactersContext must be used within the CharactersContextProvider",
    );
  }
  return context;
};

export default CharactersContextProvider;
