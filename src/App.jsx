import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progressstracker from './Components/Progressstracker'
import { useEffect, useState } from 'react'
export default function App() {
    const[tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    return (
        <div>
            <h1>TaskMan</h1>
            <p><i>Friendly Taskmanager</i></p>
            <Taskform addTask ={addTask}/>
            <Tasklist />
            <Progressstracker />
        </div>
    )
}


