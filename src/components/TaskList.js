import React, { useContext } from 'react';
import { Mycontext } from "../context/Mycontext";

const TaskList = () => {
  const { tasks, handleClick, handleEditClick } = useContext(Mycontext);

  return (
    <>
      <h3 className='taskhead'>Tasklar</h3>
      <div className='taskherodiv'>
        {tasks.map(task => (
          <div key={task.id} className='taskitem'>
            <p>{task.title}</p>
            <p>{task.desc}</p>
            <div className='buttontaskdiv'>
              <button className='removebtn' onClick={() => handleClick(task.id)}>Sil</button>
              <button className='editbtn' onClick={() => handleEditClick(task.id)}>Düzəlt</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
