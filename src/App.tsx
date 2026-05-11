import './App.css'
import { TodoItem, Todolist } from './Todolist'

function App() {

  const TodoListTitle_1 = 'What at read'
  const TodoListTitle_2 = 'What at learn'
  const TodoListTitle_3 = 'What at eat'

  const tasks1: TodoItem[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  const tasks2: TodoItem[] = [
    { id: 1, title: 'Hello world', isDone: true },
    { id: 2, title: 'I am Happy', isDone: false },
    { id: 3, title: 'Yo', isDone: false },
  ]

  const tasks3: TodoItem[] = [

  ]

  return (
      <div className="app">
        <Todolist title={TodoListTitle_1} todos={tasks1}/>
        <Todolist title={TodoListTitle_2} todos={tasks2}/>
        <Todolist title={TodoListTitle_3} todos={tasks3}/>
      </div>
  )
}

export default App
