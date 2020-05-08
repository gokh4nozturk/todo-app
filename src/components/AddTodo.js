import React, { useState } from 'react';
export default function AddTodo() {
  const [todo, setTodo] = '';
  const onClickEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="AddTodo">
      <div className="form-group">
        <form className="d-flex flex-column">
          <input
            id="add-todo"
            type="text"
            placeholder="Enter todo"
            className="mb-2"
            style={{ textAlign: 'center', fontSize: '20px' }}
          ></input>
          <div className="btn-group bg-warning">
            <button type="reset" className="btn btn-danger mr-1">
              Clear Form
            </button>
            <button
              onClick={onClickEvent}
              type="submit"
              className="btn btn-primary ml-1"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
