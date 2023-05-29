import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        timestamp: new Date().toLocaleString(),
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo-list">
      <h2 className=" todo">Todo List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter a todo"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
          >
            <span>{task.text}</span>
            <span className="timestamp">{task.timestamp}</span>
            
            <button
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
    return (
      <div className = "App">
        <TodoList />
      </div>
    );
  };
  
  export default App;
  
