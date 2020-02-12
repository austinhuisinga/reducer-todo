import React, { useState } from 'react'

const TodoForm = ({ dispatch }) => {
  const [newItemText, setNewItemText] = useState('');
    
  const handleChanges = e => {
    setNewItemText(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ item: 'ADD_TODO', payload: newItemText});
    setNewItemText('');
  };

  const handleClear = e => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        name='item'
        type='text'
        id='item'
        placeholder='...todo'
        value={newItemText}
        onChange={handleChanges}
      />
      <button type='submit'>Add Todo</button>

      <button 
      className='clear' 
      onClick={handleClear}
    >
      Clear Completed
    </button>
    </form>
  );
}

export default TodoForm;