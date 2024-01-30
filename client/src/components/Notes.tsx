import { useEffect, useState } from "react"
import { Note } from "../types/types";
import { Box, Container, Heading, Divider, Grid } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import axios from "axios";

function Notes() {
    const [notes, setNotes] = useState<Note[]>()

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get("http://localhost:5000/api/notes", { headers })
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
            <Grid templateColumns="repeat(2, 1fr)" mb="1rem">
                {notes?.map((note, i) => (
                    <NoteCard note={note} key={i} width="500px" />
                ))}
            </Grid>
        </Container>
        </Box>
    )
}

export default Notes