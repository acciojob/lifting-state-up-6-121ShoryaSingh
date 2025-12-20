import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        <h2>Child Component</h2>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            {!todo.isComplete && (
              <button
                key={todo.id}
                onClick={() => {
                  handleComplete(todo.id);
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
