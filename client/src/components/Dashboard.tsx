import { Text, Heading, Container, Box, Divider, Flex } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Note, Todo } from "../types/types";

function Dashboard() {
    const [notes, setNotes] = useState<Note[]>()
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        // Get user notes
        axios.get("http://localhost:5000/api/notes", { headers })
            .then(res => setNotes(res.data))
            .catch(err => console.log(err))

            // Get user todos
            axios.get("http://localhost:5000/api/todos", { headers })
                .then(res => setTodos(res.data))
                .catch(err => console.log(err))
    }, [])

    return (
        <Box bg="#191919" w="100%">
        <Container maxW="90%">
        <Heading mt="1rem" pb="3rem" color="white">Dashboard</Heading>
        </Container>

        <Divider orientation="horizontal" />

        <Container maxW="90%">
            <Flex justifyContent="space-between" mt="1rem">
            <Text color="white">Notes.</Text>
            <Text color="#6675FF">View All</Text>
            </Flex>
            <Flex gap="2rem">
            {notes?.map(note => (
                <NoteCard key={note._id} note={note} />
            ))}
            </Flex>

            <Flex justifyContent="space-between" my="1rem">
            <Text color="white">Todos.</Text>
            <Text color="#6675FF">View All</Text>
            </Flex>

            <Flex gap="2rem">
            {todos?.map(todo => (
                <TodoCard key={todo._id} todo={todo} width="200px" />
            ))}
            </Flex>
        </Container>
        </Box>
    )
}

export default Dashboard