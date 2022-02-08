import { Button, Typography } from '@mui/material';
import { Todo } from '../data/todos';

interface Props {
    todo: Todo
    deleteItem: (id: string) => void
}

const ListItem = ({ todo, deleteItem }: Props) => {
    let { _id, text } = todo

    const onClick = () => {
        deleteItem(_id)
    }

    return (
        <>
            <Button onClick={onClick}>Delete</Button>
            <Typography>{text}</Typography>
        </>
    )
}

export default ListItem