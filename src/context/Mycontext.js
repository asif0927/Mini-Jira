import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';

const Mycontext = createContext();

function Provider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleClick = (id) => {
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
                const updatedtasks = tasks.filter(task => task.id !== id)
                setTasks(updatedtasks);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const handleEditClick = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        const { title: initialTitle, desc: initialDesc } = taskToEdit;

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
                const newTitle = document.getElementById('editTitle').value;
                const newDesc = document.getElementById('editDesc').value;

                const updatedTasks = tasks.map(task => {
                    if (task.id === id) {
                        return { ...task, title: newTitle, desc: newDesc };
                    }
                    return task;
                });

                setTasks(updatedTasks);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your task has been updated.',
                    icon: 'success'
                });
            }
        });
    };

    const sharedValuesandMethods = {
        tasks,
        setTasks,
        title,
        setTitle,
        desc,
        setDesc,
        handleClick,
        handleEditClick
    };

    return (
        <Mycontext.Provider value={sharedValuesandMethods}>
            {children}
        </Mycontext.Provider>
    );
}

export { Provider, Mycontext };
