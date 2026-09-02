import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progressstracker from './Components/Progressstracker'
export default function App() {
    return (
        <div>
            <h1>TaskMan</h1>
            <p><i>Friendly Taskmanager</i></p>
            <Taskform />
            <Tasklist />
            <Progressstracker />
        </div>
    )
}


