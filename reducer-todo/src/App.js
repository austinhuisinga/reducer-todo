import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, itemReducer } from './reducers/itemReducer';


function App() {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <div className="App">
      <h1>Reduce This.</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
