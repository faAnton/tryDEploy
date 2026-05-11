import { Button } from "./Button"

export type TodoItem = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    todos: TodoItem[]
}

export function Todolist(props: PropsType) {

    const taskList = props.todos.length === 0 
    ? <span> your tasks list is empty</span> :
    <ul>
        {
            props.todos.map((el)=> {
                return (
                    <li>
                        <input type="checkbox" key={el.id} checked={el.isDone} /> <span>{el.title}</span>
                    </li>
                )
            })
        }
    </ul>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <Button title="+"/>
            </div>
            {taskList}
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Complited"/>
            </div>
        </div>
    )
}


