import React from "react";
function TodoItems(props) {
  return (
    <div className="delBox">
      <input
        type="checkbox"
        onChange={() => {
          return props.putDelItem(props.id);
        }}
        value={props.val}
      />
      <li>{props.text}</li>
    </div>
  );
}
export default TodoItems;
