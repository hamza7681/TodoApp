import React, { useState } from "react";
import "./App.css";
import {BsPlus, MdDelete} from 'react-icons/all';

export default function App() {
  const [todos, setTodo] = useState([]);

  const [value, setvalue] = useState("");

  const removetodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodo(newTodos);
  };

  const addtodo = (e) => {
    e.preventDefault();
    setTodo([...todos, value]);
    setvalue("");
  };

  return (
    <div className="App">
      <div className='container' id='main'>
        <h1 style={{paddingTop:'30px'}}>Todo App</h1>
        <form>
        <input className='input_field' value={value} onChange={(e) => setvalue(e.target.value)} />
        <button className="icon" onClick={addtodo}>
          <BsPlus />
        </button>
        </form>
        {todos.map((todo, id) => (
        <div className="items">
          <div className="item" key={id}>
            <span><h4>{todo}</h4>
            <button className="icon1" onClick={() => removetodo(id)}>
              <MdDelete/>
            </button></span>
          </div>
        </div>
      ))}
      <button className="clear" onClick={() => setTodo([""])}>
          Clear All
        </button>
      </div>
     </div>
  );
}
