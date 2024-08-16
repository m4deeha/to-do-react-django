import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = ({ todos, setSearchValue, setTodoID, deleteTodo }) => {
  return (
    <ul className="list-group todos mx-auto text-light delete">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setSearchValue={setSearchValue}
          setTodoID={setTodoID}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoContainer;
