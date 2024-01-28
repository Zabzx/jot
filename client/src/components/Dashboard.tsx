import { Text, Heading, Container, Box, Divider, Flex } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {

    useEffect(() => {
        // console.log(localStorage.getItem("user-token"))
        const headers = { "auth-token": localStorage.getItem("user-token") }
        // Get user notes
        axios.get("http://localhost:5000/api/notes", { headers })
            .then(res => console.log(res))
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
            <NoteCard />
            <NoteCard />
            </Flex>

            <Flex justifyContent="space-between" my="1rem">
            <Text color="white">Todos.</Text>
            <Text color="#6675FF">View All</Text>
            </Flex>

            <Flex gap="2rem">
            <TodoCard />
            <TodoCard />
            </Flex>
        </Container>
        </Box>
    )
}

export default Dashboard