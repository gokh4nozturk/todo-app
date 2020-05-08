import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App container">
      <div className="row justify-content-center align-content-center">
        <div className="col-8">
          <Navbar />
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
