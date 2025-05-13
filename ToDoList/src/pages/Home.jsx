import { useEffect, useState } from 'react';
import CrossButton from "../components/CrossButton";
import TickButton from "../components/TickButton";
import "../styles/home.css"
import axios from 'axios';

function Home() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        axios.get('/api/tasks/')
            .then(res => setTasks(res.data))
            // .then(res => console.log(res.data))
            .catch(err => console.error('Failed to fetch tasks:', err))
    }, [])

    function addTask() {
        if (!newTask.trim()) {
            setAdding(false);
            return;
        }

        axios.post('/api/tasks/create/', {
            task: newTask,
            completed: false,
        })
        .then(res => {
            setTasks(prev => [res.data, ...prev]);
            setNewTask('');
        })
        .catch(err => console.error('Failed to add task:', err));  
        
        setAdding(false);
    }

    function updateTick(index, currStatus) {
        axios.patch(`/api/tasks/${index}/update/`, {
            completed: !currStatus
        })
        .then(res => {
            setTasks(prev =>
                prev.map(t =>
                    t.id === res.data.id ? res.data : t
                )
            )
        })          
        .catch(err => console.error('Failed to update task:', err));  
    }

    function deleteTask(index) {
        axios.delete(`/api/tasks/${index}/delete/`)
          .then(() => {
                setTasks(prev => 
                    prev.filter(t => 
                        t.id !== index
                    )
                );
          })
          .catch(err => {
            console.error("Failed to delete task:", err);
          });
      }
      

    function changeTask(e) {
        setNewTask(e.target.value);
    }

    return(
        <>
            <div className="home-title">
                Welcome to my To Do List!
            </div>

            <button className="add-task-btn" onClick={() => setAdding(true)}>
                Add Task
            </button>

            <ul className="tasks">
                {adding ? 
                <li className="adding-task">
                    <input 
                        type="text" 
                        placeholder="Eat breakfast" 
                        onChange={changeTask}
                        value={newTask}
                    />
                    <div>
                        <TickButton 
                            onClick={addTask}
                        />
                        <CrossButton />
                    </div>
                </li> 
                : <></>
                }
                {tasks.map(task => (
                <li className="task" key={task.id}>
                    <p className={task.completed ? "task-strike" : ""}>
                        {task.task}
                    </p>
                    <div>
                        <TickButton
                            completed={task.completed}
                            onClick={() => updateTick(task.id, task.completed)}
                        />
                        <CrossButton 
                            onClick={() => deleteTask(task.id)}
                        />
                    </div>
                </li>
                ))}
            </ul>
        </>

    )
}

export default Home