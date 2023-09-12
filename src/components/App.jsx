import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItems from "./ToDoItem";
import InputText from "./InputText";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(input) {
    setItems((preValue) => {
      return [...preValue, input];
    });
  }
  function deleItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputText onAddItem={handleAddItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItems
              text={item}
              putDelItem={deleItem}
              key={uuidv4()}
              value={item}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
