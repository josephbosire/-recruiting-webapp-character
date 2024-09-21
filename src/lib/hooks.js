import { useEffect, useState } from "react";
import { AVAILABLE_SKILL_POINTS, SKILL_LIST } from "../consts";

export const useCharacterModifiers = (character) => {
  const [characterModifiers, setCharacterModifiers] = useState({});

  const calcualteModifier = (points) => {
    if (points < 10) {
      return points - 10;
    }
    return Math.floor((points - 10) / 2);
  };

  useEffect(() => {
    const modifiers = Object.entries(character).reduce(
      (acc, [attr, points]) => {
        acc[attr] = calcualteModifier(points);
        return acc;
      },
    );
    setCharacterModifiers(modifiers);
  }, [character]);
  return characterModifiers;
};

export const useCalcualteAvailableSkillPoints = (character_modifiers) => {
  const [availablePoints, setAvailablePoints] = useState(
    AVAILABLE_SKILL_POINTS,
  );
  useEffect(() => {
    const intelligence_modifier = character_modifiers.Intelligence || 0;
    const newSkillPoints = AVAILABLE_SKILL_POINTS + 4 * intelligence_modifier;
    setAvailablePoints(newSkillPoints);
  }, [character_modifiers]);
  return availablePoints;
};

export const useSkills = () => {
  const [skills, setSkills] = useState(() =>
    SKILL_LIST.map((skill) => ({ ...skill, points: 0 })),
  );

  const totalCurrentSkillPoints = skills.reduce(
    (acc, skill) => (acc += skill.points),
    0,
  );

  const incrementSkill = (name) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.name === name ? { ...skill, points: skill.points++ } : skill,
      ),
    );
  };

  const decrementSkill = (name) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.name === name ? { ...skill, points: skill.points-- } : skill,
      ),
    );
  };
  return { skills, totalCurrentSkillPoints, incrementSkill, decrementSkill };
};
