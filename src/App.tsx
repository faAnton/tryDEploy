import { useState } from 'react'
import './App.css'
import { TaskItemType, Todolist } from './Todolist'
import { getFilteredTasks } from './utils'

export type FiltereValuesType = 'all' | 'active' | 'complited'

function App() {

  const TodoListTitle = 'What at read'

  const [tasks, setTasks] = useState<TaskItemType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ])

  const deteteTask = (taskId: TaskItemType['id']) => {
    const nextStateOfData: TaskItemType[] = tasks.filter(t => t.id !== taskId)
    setTasks(nextStateOfData)
  }

  const [filter, setFilter] = useState<FiltereValuesType>('all')
  const changeTodoListFilter = (filterValue: FiltereValuesType) => {
    setFilter(filterValue)
  }
  

  return (
    <div className="app">
      <Todolist
        title={TodoListTitle}
        todos={getFilteredTasks(tasks, filter)}
        deleteTask={deteteTask}
        changeTodoListFilter={changeTodoListFilter}
      />
    </div>
  )
}

export default App
