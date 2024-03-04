import React from 'react';
import Task from '../Task';

interface TaskListProps {
  tasks: { id: number; text: string; description: string;completed: boolean }[];
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleToggle, handleDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
