import { useEffect, useState } from "react"
import { Box, Heading, Divider, Text, Container, Button, Flex, useDisclosure } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router"
import { Trash } from "lucide-react"
import axios from "axios"
import { Note } from "../types/types"
import DeleteNoteModal from "./Modals/DeleteNoteModal"

function ViewNote() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [note, setNote] = useState<Note>()

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get(`https://jot-w01a.onrender.com/api/notes/${id}`, { headers })
            .then(res => setNote(res.data))
            .catch(err => console.log(err))
    }, [])

    function navigateHome() {
        navigate("/")
    }
    
    return (
        <Box>
            <Container maxW="90%">
            <Flex justifyContent="space-between" alignItems="center">
            <Heading _dark={{ color: "white" }} color="black" onClick={() => console.log(id)} my="1rem">{note?.title}</Heading>
            <Trash onClick={onOpen} color="#FF6666" size={40} />
            </Flex>
            </Container>

            <Divider orientation="horizontal" />

            <Container maxW="90%">
            <Text _dark={{ color: "white" }} color="black" mt="2rem" whiteSpace="pre-wrap">{note?.content}</Text>
            <Button mt="1rem" bg="#6675FF" color="white">Edit</Button>
            </Container>
            <DeleteNoteModal triggerRefresh={navigateHome} noteId={id} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Box>
    )
}

export default ViewNote
