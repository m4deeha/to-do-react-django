import React from 'react'
import { FaPlus } from "react-icons/fa";

const Header = ({searchValue, setSearchValue, createTodo, todoId, updateTodo}) => {

    function handleSubmit(e){
        e.preventDefault()
        if(searchValue.length < 3) return;

        if(todoId){
            updateTodo()
        }
        else{
            createTodo()
        }
        
        setSearchValue("")
    }

  return (
    <header className="text-center text-light my-2">
            <h1 className="mb-4">Todo List</h1>
            <form className="search" onSubmit={handleSubmit}>
              <input
                className="form-control m-auto"
                type="text"
                name="search"
                placeholder="add todos"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
      
              <button><FaPlus /></button>
            </form>
          </header>
  )
}

export default Header