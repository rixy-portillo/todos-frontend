import { Button, Grid, Typography } from "@mui/material"
import { Todo } from "../data/todos"

interface ListItemProps {
    todo: Todo
    deleteItem: (id: string) => void
}

const TodoItem = ({ todo, deleteItem }: ListItemProps) => {
    let { _id, text } = todo

    const onClick = () => {
        deleteItem(_id)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography textAlign="center">{text}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" onClick={onClick}>Delete</Button>
            </Grid>
        </Grid>
    )
}

export default TodoItem