import React from "react";
import { CLASS_LIST } from "../../consts";

function ClassRequirement({ name, onClick }) {
  const attributes = CLASS_LIST[name];
  return (
    <div className="container">
      <h3>{name} Minimum requirements</h3>
      <ul>
        {Object.entries(attributes).map(([attribute, points]) => (
          <li key={attribute}>
            {attribute}:{points}
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Close Requirement View</button>
    </div>
  );
}

export default ClassRequirement;
