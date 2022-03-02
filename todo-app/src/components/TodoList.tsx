// Functional Component

import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = (props:any) => {
  return (
    <div className="todo_list">
      {props.dataItems.map((todo: any) => (
        <TodoItem 
        key={todo.id} 
        detail={todo.detail} 
        />
      ))}
    </div>
  );
};

export default TodoList;
