import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card w-50 stacked-pages p-3 mb-5 bg-white">
        <div className="card-body">
          <h1 className="card-title text-center">Todos</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button className="btn btn-sm" style={{ background: 'none', border: 'none' }} onClick={() => handleDeleteTask(index)}>
                  <i className="fas fa-trash" style={{ color: '#555' }}></i>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-center">
            {tasks.length} left to do
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
