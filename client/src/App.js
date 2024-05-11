import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleTaskAction = (action, taskId) => {
    // TODO
    // Update task state based on action
    // Send API request to update backend
  };

  return (
    <div className="app">
      <h1>ReacTask</h1>
      <TaskList tasks={tasks} onTaskAction={handleTaskAction} />
    </div>
  );
};

export default App;