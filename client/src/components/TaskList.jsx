import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskAction }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleDone={() => onTaskAction('toggleDone', task.id)} onEdit={() => onTaskAction('edit', task.id)} onDelete={() => onTaskAction('delete', task.id)} onFavorite={() => onTaskAction('favorite', task.id)} />
      ))}
    </div>
  );
};

export default TaskList;