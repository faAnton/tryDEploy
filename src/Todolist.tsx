import { FiltereValuesType } from "./App"
import { Button } from "./Button"

export type TaskItemType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    todos: TaskItemType[]
    deleteTask: (taskId: TaskItemType['id'])=> void
    changeTodoListFilter: (filterValue: FiltereValuesType)=> void
}

export function Todolist({title, todos, deleteTask, changeTodoListFilter}: PropsType) {

    const taskList = todos.length === 0 
    ? <span> your tasks list is empty</span> :
    <ul>
        {
            todos.map((el)=> {
                return (
                    <li key={el.id}>
                        <input type="checkbox" key={el.id} defaultChecked={el.isDone} /> 
                        <span style={{marginRight: '15px'}}>{el.title}</span>
                        <Button title="X" onClick={()=> deleteTask(el.id)}/>
                    </li>
                )
            })
        }
    </ul>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <Button title="+"/>
            </div>
            {taskList}
            <div>
                <Button title="All" onClick={()=>changeTodoListFilter('all')}/>
                <Button title="Active" onClick={()=>changeTodoListFilter('active')}/>
                <Button title="Complited" onClick={()=>changeTodoListFilter('complited')}/>
            </div>
        </div>
    )
}


