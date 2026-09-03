import {useState} from "react";

export default function Taskform(addTask) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    const handlesubmit = (e) => {
        e.preventDefault();
        addTask.Task({text:task, priority, category, completed: false})
        //Reset
        setTask("");
        setPriority("Medium");
        setCategory("General");
    }
    return (
        <form onSubmit={handlesubmit} className = "task-form">
            <br></br>
            <div id='inp'>
                <input type='text' placeholder='Enter a Task'  value={task} onChange={(e) => setTask(e.target.value)} />
                <span><button type='submit'>Add Task</button></span>
                <h2>{task} {priority} {category}</h2>
            </div>

            <div id='btns'>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="general">General</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
            </select>


            </div>
        </form>
    )
}