import { Grid } from '@mui/material';
import { Todo } from '../data/todos';
import { styles } from '../styles/style';
import TodoItem from './TodoItem';

interface TodoItemsProps {
    todos: Todo[]
    deleteItem: (id: string) => void
}

const TodosList = ({ todos, deleteItem }: TodoItemsProps) => {
    return (
        <Grid container>
            {todos.map(todo => (
                <Grid item xs={12} sx={styles.listItem}>
                    <TodoItem key={todo._id} todo={todo} deleteItem={deleteItem} />
                </Grid>
            ))}
        </Grid>
    )
}
export default TodosList