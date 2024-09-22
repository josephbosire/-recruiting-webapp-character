import { CLASS_LIST } from "../../consts";
import { hasClassAttributes } from "../../lib/utils";

function Classes({ character, onClick }) {
  return (
    <div className="container character-info__classes">
      <h3>Classes</h3>
      <ul>
        {Object.keys(CLASS_LIST).map((class_name) => (
          <li
            key={class_name}
            className={`${hasClassAttributes(character, class_name) ? "valid-class" : ""}`}
            onClick={(e) => {
              onClick(class_name);
              e.stopPropagation();
            }}
          >
            {class_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;
