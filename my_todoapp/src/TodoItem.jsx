import { FaRegPenToSquare } from "react-icons/fa6"
import { BsTrash3Fill } from "react-icons/bs"
import { useState } from "react"
import api from "./api"

const TodoItem = ({todo, setSearchValue, setTodoID, deleteTodo}) => {

    const [isCompleted, setIsCompleted] = useState(todo.completed)

    const todoID = {
        "todo_id": todo.id
    }

    function handleCompletTodo(){
        api.post("complete_todo/", todoID)
        .then(res => {
            setIsCompleted(curr => !curr)
        })
        .catch(err => console.log(err.message))
    }

    function handleClick(){
      setSearchValue(todo.title)
      setTodoID(todo.id)
    }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <input type="checkbox" onChange={handleCompletTodo} checked={isCompleted} />
                  <span className={isCompleted ? "line-through" : ""}>{todo.title}</span>
                </div>
                
                <div>
                <FaRegPenToSquare onClick={handleClick} />
                <BsTrash3Fill onClick={() => deleteTodo(todo.id)} />
                </div>
                
              </li>
  )
}

export default TodoItem