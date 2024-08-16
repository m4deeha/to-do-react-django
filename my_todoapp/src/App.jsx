import api from "./api";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [todoId, setTodoID] = useState(null);

  const newTodo = {
    title: searchValue,
  };

  useEffect(() => {
    api
      .get("todos/")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function createTodo() {
    api
      .post("todos/", newTodo)
      .then((res) => {
        setTodos([...todos, res.data]);
      })

      .catch((err) => console.log(err.message));
  }

  function updateTodo() {
    api.put(`todos/${todoId}/`, newTodo)
    .then(res => {
      setTodos(todos.map(todo => todo.id===todoId ? res.data : todo ))
      setTodoID("")
    })
    .catch((err) => console.log(err.message));
  }


  function deleteTodo(ID){
    api.delete(`todos/${ID}/`)
    .then(res => {
      setTodos(todos.filter(todo => todo.id !== ID))
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div className="container">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        createTodo={createTodo}
        todoId={todoId}
        updateTodo={updateTodo}
      />
      <TodoContainer
        todos={todos}
        setSearchValue={setSearchValue}
        setTodoID={setTodoID}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
