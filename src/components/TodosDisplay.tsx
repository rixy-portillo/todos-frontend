import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, Todos } from '../data/todos';
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";

const TodosDisplay = () => {
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

    return (
        <Grid container spacing={12} justifyContent={"center"}>
            <Grid item xs={12}>
                <Box sx={{ height: "100%", width: "100%" }}>
                    <TodosInput input={input} updateInput={updateInput} submit={submit} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ height: "100%", width: "100%" }}>
                    <TodosList todos={todos} deleteItem={deleteItem} />
                </Box>
            </Grid >
        </Grid >

    )
}

export default TodosDisplay