import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState('');

  const handleInput = (event) => {
    settask(event.target.value);
  };

  const handleAdd = () => {
    if (task !== '') {
      settodos([...todos, task]);
      settask('');
    }
  };

  const handleDelete = (ind) => {
    const newtodos = [...todos];
    newtodos.splice(ind, 1);
    settodos(newtodos);
  };

  const hadleEdit = (ind) => {
    const newtodos = [...todos];
    const editedTask = prompt('Edit task:', newtodos[ind]);
    if (editedTask !== null) {
      newtodos[ind] = editedTask;
      settodos(newtodos);
    }
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <textarea data-testid="task" value={task} onChange={handleInput} />
      <button className="add-task-btn" data-testid="btn" onClick={handleAdd}>
        Add Task
      </button>
      <ul className="list">
        {todos.map((task, ind) => (
          <li key={ind}>
            {task}
            <button className="edit-btn" onClick={() => hadleEdit(ind)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(ind)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
