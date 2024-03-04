
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; description:string; completed: boolean }[]>([]);
  const [activeForm, setActiveForm] = useState<boolean>(false)

  const handleAdd = (text: string, description: string) => {
    const newTask = { id: Date.now(), text, description, completed: false };
    setActiveForm(false)
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCancel = (active: boolean) => {
    setActiveForm(!active);
  };

  return (
    <div className="todo-container">
        <div className="todo-header">
        <h2>Hoje</h2>
        <span className="task-count">{tasks.length} tarefas</span>
        
        <TaskList
            tasks={tasks}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
       
        {activeForm && <TaskForm handleAdd={handleAdd}  handleCancel={handleCancel}/>}

        {!activeForm && 
          <button className="plus_add_button" onClick={() => setActiveForm(true)}>
            
            <span className="icon_add" aria-hidden="true">
              <svg width="13" height="13">
                <path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
                </span>Adicionar tarefa
          </button>
        }
    </div>
    </div>
  );
};

export default App;
