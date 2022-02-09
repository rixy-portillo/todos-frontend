import { Button, Grid, TextField } from "@mui/material"

interface Props {
    input: string
    updateInput: any
    submit: any
}

const TodosInput = ({ input, updateInput, submit }: Props) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={8} >
                <TextField fullWidth variant="outlined" onChange={e => updateInput(e.target.value)} placeholder="enter todo item" value={input} />
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" onClick={submit}>Add</Button>
            </Grid>
        </Grid>
    )
}

export default TodosInput
