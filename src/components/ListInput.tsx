import { Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, Todos } from '../data/todos';
import ListItem from "./ListItem";


//everything in here will be rerendered
const ListInput = () => {
    const [todos, setTodos] = useState<Todos>([])

    const addItem = async (text: string) => {
        const data = await addTodo(text)
        data && setTodos(state => [...state, { text, _id: data._id }])
    }

    const deleteItem = async (id: string) => {
        const data = await deleteTodo(id)
        setTodos(state => state.filter(item => item._id !== data._id))
    }

    const [input, setInput] = useState('')

    const updateInput = (value: string) => {
        setInput(value)
    }

    const resetInput = () => {
        setInput('')
    }

    const submit = () => {
        addItem(input)
        resetInput()
    }

    useEffect(() => {
        getTodos().then(data => { data && setTodos(data.todos) })
    }, [])

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <TextField label="Text" variant="outlined" onChange={e => updateInput(e.target.value)} value={input}></TextField>
            <Button onClick={submit}>Add</Button>
            <Paper>
                {todos?.map(todo => {
                    return <ListItem key={todo._id} todo={todo} deleteItem={deleteItem} />
                })}
            </Paper>
        </>
    )
}

export default ListInput
