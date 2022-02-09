export interface Todo {
    _id: string
    text: string
}

export type Todos = Todo[]

export const getTodos = async () => {
    try {
        const res = await fetch("/todos/all")
        const data = await res.json()
        return data as { todos: Todo[] }
    } catch (e) {
        console.error(e)
    }
}

export const addTodo = async (text: string) => {
    try {
        const method = "POST"
        const body = JSON.stringify({ text })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const res = await fetch("/todos/add", { method, body, headers })
        const data = await res.json()
        return data
    } catch (e) {
        console.error(e)
    }
}

export const deleteTodo = async (_id: string) => {
    try {
        const method = "DELETE"
        const body = JSON.stringify({ _id })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const res = await fetch("/todos/delete", { method, body, headers })
        const data = await res.json()
        return data
    } catch (e) {
        console.error(e)
    }
}