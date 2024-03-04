import React from 'react';
import './styles.css';

type Task = {
  id: number; 
  text: string;
  description:string;
  completed: boolean 
};

interface TaskProps {
  task: Task;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, handleToggle, handleDelete }) => {
  return (
    <div className="task">
      <span className="task-status" onClick={() => handleDelete(task.id)}></span>
      <div style={{
        display:"flex",
        flexDirection:"column"
      }}>
      <span className="task-name" onClick={() => handleToggle(task.id)}>{task.text}</span> 
      <span  className="task-description">{task.description}</span>
      </div>
      <span className="task-entry"> 

      </span>
    </div>

  );
};

export default Task;
