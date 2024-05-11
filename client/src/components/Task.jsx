import React from 'react';

const Task = ({ task, onToggleDone, onEdit, onDelete, onFavorite }) => {
  return (
    <div className={`task ${task.isDone ? 'done' : ''} ${task.isFavorite ? 'favorite' : ''}`}>
      <span onClick={onToggleDone}>{task.description}</span>
      <button onClick={onEdit}>Alterar</button>
      <button onClick={onDelete}>Excluir</button>
      <button onClick={onFavorite}>Favoritar</button>
    </div>
  );
};

export default Task;