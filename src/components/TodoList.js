import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            {todo.isComplete ? (
              <></>
            ) : (
              <button
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
