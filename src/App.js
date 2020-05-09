import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [todo, setTodo] = useState([
    { id: 0, input: 'dgkjdlkfjg' },
    { id: 1, input: 'gdklgjdlgkj' },
    { id: 2, input: 'fsfösfsşlkfs' },
  ]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    setTodo([...todo, { input, id: todo.length }]);
    setInput('');
  };
  const deleteTodo = (id) => {
    setTodo([...todo.filter((todo) => todo.id !== id)]);
  };
  return (
    <div className="App container">
      <Navbar />
      <div className="row flex-column justify-content-center ">
        <input
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          placeholder="enter to-do"
          value={input}
        ></input>
        <button className="btn btn-primary" onClick={AddTodo}>
          Add Todo
        </button>

        <div className="d-flex flex-wrap">
          {todo.map((todo) => (
            <div className="card">
              <div className="card-header text-center">
                <p>To do {todo.id + 1}</p>
              </div>
              <div className="card-body">
                <p className="todo">{todo.input}</p>
                <i
                  onClick={() => deleteTodo(todo.id)}
                  className="fas fa-trash-alt ml-2"
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
