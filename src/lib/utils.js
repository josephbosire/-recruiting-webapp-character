import { ATTRIBUTE_LIST, CLASS_LIST } from "../consts";

export const hasClassAttributes = (character, class_name) => {
  return Object.entries(CLASS_LIST[class_name]).every(([attribute, points]) => {
    return character[attribute] >= points;
  });
};

export const calcualteModifier = (points) => {
  if (points < 10) {
    return points - 10;
  }
  return Math.floor((points - 10) / 2);
};

export const getCharacterModifiers = (character) => {
  const modifiers = ATTRIBUTE_LIST.reduce((acc, attr) => {
    acc[attr] = calcualteModifier(character[attr]);
    return acc;
  }, {});

  return modifiers;
};

export const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};
