import React, { useContext } from 'react';
import { Mycontext } from "../context/Mycontext";
import { nanoid } from 'nanoid';

const Taskcreate = () => {
  const { tasks, setTasks, title, setTitle, desc, setDesc } = useContext(Mycontext);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleTaskChange = (e) => {
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
    </>
  )
}

export default Taskcreate;

