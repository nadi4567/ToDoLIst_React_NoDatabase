import React, { useState } from "react";
export default function InputText(props) {
  const [inputText, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        onClick={() => {
          props.onAddItem(inputText);
          setInput(" ");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
