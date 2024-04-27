import React, { useState } from 'react'
import TaskList from './TaskList'
import { nanoid } from 'nanoid';

const Taskcreate = () => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [tasks,setTasks]=useState([]);
  const handleInputChange = (e) =>{
    setTitle(e.target.value);
  }
  const handleTaskChange =(e) => {
    setDesc(e.target.value)
  }
  const handleButton = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setTasks([...tasks, { id: nanoid(), title: title, desc: desc }]);
  }
  return (
    <>
    <h3 className='taskhead'>Xahiş olunur taskınız varsa əlavə edin</h3>
    <form className='taskform'>
        <label className="taskTitle">Task Başlığı</label>
        <input value={title} className='taskinput' onChange={handleInputChange}/>
        <label className="taskTitle">Taskınızı daxil edin</label>
        <textarea value={desc} className='taskinput' onChange={handleTaskChange} cols={10} rows={7}></textarea>
        <button className='task-button' onClick={handleButton}>Yarat</button>
    </form>
     <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default Taskcreate
