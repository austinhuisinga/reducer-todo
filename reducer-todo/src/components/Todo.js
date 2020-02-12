import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.id})}
    >
      <p>{props.item}</p>
    </div>
  );
};

export default Todo;