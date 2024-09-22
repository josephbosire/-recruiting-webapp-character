import { createContext, useContext, useEffect, useState } from "react";
import {
  ATTRIBUTE_LIST,
  DEFAULT_ATTRIBUTE_POINTS,
  MAX_CHARACTER_ATTRIBUTE_POINTS,
  SKILL_LIST,
} from "../consts";
import { getCharacterModifiers, getRandomInt } from "../lib/utils";

const API_URL =
  "https://recruiting.verylongdomaintotestwith.ca/api/{josephbosire}/character";
const CharactersContext = createContext(null);

const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState({});
  const [skillCheckResults, setSkillCheckResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        if (json.body) {
          setCharacters(json.body);
        }
      } catch (error) {
        console.log("An Error occured fetching from the server", error);
      }
    };
    fetchData();
  }, []);

  const saveAllCharacters = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(characters),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Response:", json);
    } catch (error) {
      console.log("An Error occured fetching from the server", error);
    }
  };
  const addCharacter = () => {
    const newId = new Date().getTime();
    setCharacters((prev) => ({
      ...prev,
      [newId]: {
        id: newId, // Temporary way to quickly get a unique id. Not safe for production
        Strength: DEFAULT_ATTRIBUTE_POINTS,
        Dexterity: DEFAULT_ATTRIBUTE_POINTS,
        Constitution: DEFAULT_ATTRIBUTE_POINTS,
        Intelligence: DEFAULT_ATTRIBUTE_POINTS,
        Wisdom: DEFAULT_ATTRIBUTE_POINTS,
        Charisma: DEFAULT_ATTRIBUTE_POINTS,
        skills: SKILL_LIST.map((skill) => ({ ...skill, points: 0 })),
      },
    }));
  };

  const resetCharacters = () => {
    setCharacters({});
    setSkillCheckResults([]);
  };
  const getTotalCharacterAttrPoints = (id) => {
    const character = characters[id];
    if (!character) {
      alert(`No character with Id: ${id} found`);
      return;
    }

    const totalAttributePoints = ATTRIBUTE_LIST.reduce((acc, attr) => {
      acc += character[attr];
      return acc;
    }, 0);
    return totalAttributePoints;
  };
  const increaseCharacterAttribute = (id, attribute) => {
    if (getTotalCharacterAttrPoints(id) >= MAX_CHARACTER_ATTRIBUTE_POINTS) {
      alert("A character can have up to 70 Delegated Attribute Points");
      return;
    }
    const chr = characters[id];
    const updatedChar = { ...chr, [attribute]: ++chr[attribute] };
    setCharacters((prev) => ({ ...prev, [id]: updatedChar }));
  };
  const decreaseCharacterAttribute = (id, attribute) => {
    const chr = characters[id];
    const updatedChar = { ...chr, [attribute]: ++chr[attribute] };
    setCharacters((prev) => ({ ...prev, [id]: updatedChar }));
  };

  const getCharacterCurrentSkillPoints = (id) => {
    const totalCurrentSkillPoints = characters[id].skills.reduce(
      (acc, skill) => (acc += skill.points),
      0,
    );
    return totalCurrentSkillPoints;
  };
  const incrementSkill = (id, name) => {
    const chr = { ...characters[id] };
    chr.skills = chr.skills.map((skill) =>
      skill.name === name ? { ...skill, points: ++skill.points } : skill,
    );
    setCharacters((prev) => ({ ...prev, [id]: chr }));
  };

  const decrementSkill = (id, name) => {
    const chr = { ...characters[id] };
    chr.skills = chr.skills.map((skill) =>
      skill.name === name ? { ...skill, points: --skill.points } : skill,
    );
    setCharacters((prev) => ({ ...prev, [id]: chr }));
  };

  const rollDice = (id, selectedSkill, dc) => {
    const rand = getRandomInt(1, 20);
    const skill = characters[id].skills.find(
      (skill) => skill.name === selectedSkill,
    );
    const modifiers = getCharacterModifiers(characters[id]);
    const skillModifierValue = modifiers[skill.attributeModifier];
    const total = skill.points + rand + skillModifierValue;
    const newResult = {
      character_id: id,
      roll: rand,
      dc: dc,
      total: total,
      selectedSkill,
      selectedSkillPoints: skill.points,
    };
    setSkillCheckResults((prev) => [
      ...prev.filter((result) => result.character_id !== id),
      newResult,
    ]);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        addCharacter,
        resetCharacters,
        increaseCharacterAttribute,
        decreaseCharacterAttribute,
        getCharacterCurrentSkillPoints,
        incrementSkill,
        decrementSkill,
        rollDice,
        skillCheckResults,
        saveAllCharacters,
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
