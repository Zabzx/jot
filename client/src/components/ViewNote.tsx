import { useEffect, useState } from "react"
import { Box, Heading, Divider, Text, Container, Button, Flex } from "@chakra-ui/react"
import { useParams } from "react-router"
import { Trash } from "lucide-react"
import axios from "axios"
import { Note } from "../types/types"

function ViewNote() {
    const { id } = useParams()

    const [note, setNote] = useState<Note>()

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get(`http://localhost:5000/api/notes/${id}`, { headers })
            .then(res => setNote(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Box>
            <Container maxW="90%">
            <Flex justifyContent="space-between" alignItems="center">
            <Heading onClick={() => console.log(id)} my="1rem" color="white">{note?.title}</Heading>
            <Trash color="#FF6666" size={40} />
            </Flex>
            </Container>

            <Divider orientation="horizontal" />

            <Container maxW="90%">
            <Text mt="2rem" color="white">{note?.content}</Text>
            <Button mt="1rem" bg="#6675FF" color="white">Edit</Button>
            </Container>
        </Box>
    )
}

export default ViewNote