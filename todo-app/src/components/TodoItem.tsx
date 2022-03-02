// Stateful Functional Component

import React, { useState } from "react";

import "./TodoItem.css";

function TodoItem(props: any) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div className="todo_item">
      <label
        className="todo_detail"
        style={{ color: isChecked ? "gray" : "black" }}
      >
        {props.detail}
      </label>
      <div>
        <input
          type="checkbox"
          className="todo_checkbox"
          onChange={checkboxHandler}
          value="{isCompleted}"
        />
      </div>
    </div>
  );
}

export default TodoItem;
