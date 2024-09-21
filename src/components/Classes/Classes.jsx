import { CLASS_LIST } from "../../consts";

function Classes({ onClickClass }) {
  return (
    <div className="container character-info__classes">
      <h3>Classes</h3>
      <ul>
        {Object.keys(CLASS_LIST).map((class_name) => (
          <Class
            key={class_name}
            onClick={onClickClass}
            class_name={class_name}
          />
        ))}
      </ul>
    </div>
  );
}

function Class({ class_name, onClick }) {
  return (
    <li
      onClick={(e) => {
        onClick(class_name);
        e.stopPropagation();
      }}
    >
      {class_name}
    </li>
  );
}

export default Classes;
