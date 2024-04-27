import React from 'react'
import Swal from 'sweetalert2';

const TaskList = ({tasks,setTasks}) => {
  const handleClick =(id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedtasks =tasks.filter(task=>task.id!==id)
        setTasks(updatedtasks);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const handleEditClick = (id) => {
    /*Secilen taskin hemen task oldugunu tap */
    const taskToEdit = tasks.find(task => task.id === id);
    // taskin title ve desc degerlerini al
    const { title: initialTitle, desc: initialDesc } = taskToEdit;
    //istifadeciden title ve desc almasi ucun goruntu yarat swal firela
    Swal.fire({
      title: 'Edit Task',
      html: `
        <input id="editTitle" class="swal2-input" value="${initialTitle}" placeholder="Task Title">
        <textarea id="editDesc" class="swal2-textarea" placeholder="Task Description">${initialDesc}</textarea>
      `,
      showCancelButton: true,
      confirmButtonText: 'Tamam',
      cancelButtonText: 'İptal',
      preConfirm: () => {
        // Istifadecinin girdiyi yeni title ve desc degerlerini al
        const newTitle = document.getElementById('editTitle').value;
        const newDesc = document.getElementById('editDesc').value;
        // Yeni deyerleri update ele
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return { ...task, title: newTitle, desc: newDesc };
          }
          return task;
        });
        // Update olmus settasks stateni guncelle
        setTasks(updatedTasks);
        Swal.fire({
          title: 'Success!',
          text: 'Your task has been updated.',
          icon: 'success'
        });
      }
    });
  };
  
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
  )
}

export default TaskList
