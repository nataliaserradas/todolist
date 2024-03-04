import React, { useState } from 'react';
import './styles.css';
import { CalendarBlank, CaretDown, ClockCountdown, EnvelopeSimpleOpen, Flag, X } from '@phosphor-icons/react';

interface TaskFormProps {
  handleAdd: (text: string, description: string) => void;
  handleCancel: (active: boolean) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleAdd, handleCancel }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    handleAdd(text, description);
    setText('');
    setDescription('');
  };

  return (
    <form  className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">

        <input
         type="text"
         id="taskName" 
         className="input-text" 
         value={text}
         onChange={e => setText(e.target.value)}
         placeholder="Nome da tarefa"
         />
    
    <textarea 
    id="taskDescription" 
    className="input-text" 
    value={description}
    onChange={e => setDescription(e.target.value)}
    placeholder="Descrição">  
    </textarea>

    <span>
    <button 
    type="submit" 
    className="submit-button1"> < CalendarBlank
    className="svg"
    /> Hoje <X size={ 12 }/> </button>
    </span>

    <span>
    <button 
    type="submit" 
    className="submit-button2"><Flag
    className="svg"
    /> Prioridade </button>
    </span>

    <span>
    <button 
    type="submit" 
    className="submit-button2"> < ClockCountdown 
    className="svg"
    /> Lembretes
     <span>
      
      <button
      type="submit"
      className="flag"> PRO </button>
    </span>  
    </button> 
    </span>

    <span>
    <button 
    type="submit" 
    className="submit-button2"> ... </button>
    </span>

  </div>
  
  
  
  <div className="form-footer">

  <span>
  <button 
  type="button" 
  className="footer-button" onClick={() => handleCancel(true)}><EnvelopeSimpleOpen /> Entrada < CaretDown /></button>
  </span>

    <span>
    <button 
    type="button" 
    className="footer-button1" onClick={() => handleCancel(true)}>Cancelar</button>
    </span>

    <span>
    <button 
    type="submit" 
    className="submit-button">Adicionar Tarefa</button>
    </span>


  </div>

    </form> 
    );
};

export default TaskForm;
