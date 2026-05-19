import { FiltereValuesType } from "./App"
import { TaskItemType } from "./Todolist"

export const getFilteredTasks = (tasks: TaskItemType[], filter: FiltereValuesType) => {
    switch (filter) {
        case 'active' : return  tasks.filter((t) => !t.isDone);
        case 'complited' : return tasks.filter((t) => t.isDone);
        default : return tasks;
    }
}