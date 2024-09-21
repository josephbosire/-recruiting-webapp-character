import { CLASS_LIST } from "../consts";

export const hasClassAttributes = (character, class_name) => {
  return Object.entries(CLASS_LIST[class_name]).every(([attribute, points]) => {
    return character[attribute] >= points;
  });
};
