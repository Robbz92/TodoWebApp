import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todo List App</h1>
      
      <li>
        <input type="text" placeholder="Add Todo" size="50"/>
        <button>Add</button>
        <TodoList />
      </li>
    </div>
  );
}

export default App;
