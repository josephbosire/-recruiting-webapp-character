import { ATTRIBUTE_LIST, DEFAULT_ATTRIBUTE_POINTS } from "../../consts";
import ModifierControls from "../ModifierControls";

function Attributes() {
  return (
    <div className="container character-info__attributes">
      <h3>Attributes</h3>
      <ul>
        {ATTRIBUTE_LIST.map((attribute) => (
          <Attribute key={attribute} attribute={attribute} />
        ))}
      </ul>
    </div>
  );
}

function Attribute({ attribute }) {
  return (
    <li>
      {attribute}:{DEFAULT_ATTRIBUTE_POINTS} (Modifier: {})<ModifierControls />
    </li>
  );
}

export default Attributes;
