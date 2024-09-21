import ModifierControls from "../ModifierControls";

function Attributes({ character }) {
  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {Object.entries(character).map(([attribute, points]) => (
          <Attribute key={attribute} attribute={attribute} points={points} />
        ))}
      </ul>
    </div>
  );
}

function Attribute({ attribute, points }) {
  return (
    <li>
      {attribute}:{points} (Modifier: {})<ModifierControls />
    </li>
  );
}

export default Attributes;
