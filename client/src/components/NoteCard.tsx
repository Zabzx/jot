import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";
import { Note } from "../types/types";

type NoteCardProps = {
    width?: string,
    note: Note
}

function NoteCard(props: NoteCardProps) {
    return (
        <Box mt="1rem" bg="#292929" w={props.width} p="1rem" borderRadius="20px">
            <Heading fontSize="30px" mb="1rem" color="white">{props.note.title}</Heading>
            <Text color="white">{props.note.content}</Text>

            <Flex mt="1rem" gap="1rem">
                <Button bg="#6675FF" color="white"><ArrowUpRightFromSquare /></Button>
                <Button bg="#6675FF" color="white"><FilePenLine /></Button>
                <Button bg="#FF6666" color="white"><Trash /></Button>
            </Flex>
        </Box>
    )
}

export default NoteCard