import React, { useState } from 'react'

const TodoForm = ({ dispatch }) => {
  const [newItemText, setNewItemText] = useState('');

  const handleChanges = e => {
    setNewItemText(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newItemText});
    setNewItemText('');
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newItemText}
          onChange={handleChanges}
        />
        <div className="buttons">
          <button className="submit-btn" type="submit">
            Add Todo
          </button>
          <button className="clear-btn" onClick={handleClear}>
            Clear Completed
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;