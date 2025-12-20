import React, { useState } from 'react';
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Learn React', isComplete: 'not completed' },
    { id: 2, todo: 'Build a React app', isComplete: 'not completed' },
    { id: 3, todo: 'Deploy the React app', isComplete: 'not completed' },
  ]);

  const handleComplete = (id) => {
    console.log('handleComplete called with id:', id);
    console.log('Before:', todos);

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        const updated =
          todo.id === id ? { ...todo, isComplete: 'completed' } : todo;
        console.log(`Todo ${todo.id}:`, updated);
        return updated;
      })
    );
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
