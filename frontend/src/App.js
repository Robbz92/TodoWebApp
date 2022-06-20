import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Todo List App</h1>
      
      <li>
        <TodoList />
      </li>
    </div>
  );
}

export default App;
