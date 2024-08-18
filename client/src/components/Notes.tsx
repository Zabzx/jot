import { useEffect, useState } from "react"
import { Note } from "../types/types";
import { Box, Container, Heading, Divider, Grid, useBreakpointValue } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import axios from "axios";

function Notes() {
    const [notes, setNotes] = useState<Note[]>()
    const noteWidth = useBreakpointValue({ base: "250px", lg: "500px"})

    async function triggerRefresh() {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get("https://jot-w01a.onrender.com/api/notes", { headers })
            .then(res => setNotes(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get("https://jot-w01a.onrender.com/api/notes", { headers })
            .then(res => setNotes(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box>
        <Container maxW="90%">
            <Heading mt="1rem" color="white">Notes</Heading>
        </Container>
        <Divider mt="2rem" />

        <Container maxW="90%">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} mb="1rem">
                {notes?.map((note, i) => (
                    <NoteCard triggerRefresh={triggerRefresh} note={note} key={i} width={noteWidth} />
                ))}
            </Grid>
        </Container>
        </Box>
    )
}

export default Notes