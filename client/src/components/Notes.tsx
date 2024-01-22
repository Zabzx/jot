import { Box, Container, Heading, Divider, Grid } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

function Notes() {
    return (
        <>
        <Box w="100%">
        <Container maxW="90%">
            <Heading mt="1rem" color="white">Notes</Heading>
        </Container>
        <Divider mt="2rem" />

        <Container maxW="90%">
            <Grid templateColumns="repeat(2, 1fr)" mt="1rem" gap="1rem">
                <NoteCard  />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </Grid>
        </Container>
        </Box>
        </>
    )
}

export default Notes