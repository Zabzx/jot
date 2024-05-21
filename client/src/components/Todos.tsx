import { useEffect, useState } from "react"
import { Box, Container, Heading, Divider, Grid, useBreakpointValue } from "@chakra-ui/react"
import TodoCard from "./TodoCard"
import { Todo } from "../types/types"
import axios from "axios"

function Todos() {
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get("http://localhost:5000/api/todos", { headers})
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    })

    const todoWidth = useBreakpointValue({ base: "250px", lg: "200px" })
    return (
        <Box>
        <Container maxW="90%">
            <Heading mt="1rem" color="white">Todos</Heading>
        </Container>
        <Divider mt="2rem" />

        <Container maxW="90%">
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} my="1rem" gap="1rem">
                {todos?.map((todo, i) => (
                    <TodoCard todo={todo} key={i} width={todoWidth} />
                ))}
            </Grid>
        </Container>
        </Box>
    )
}

export default Todos