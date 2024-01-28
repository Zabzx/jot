import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";
import { Note } from "../types/types";

type NoteCardProps = {
    width?: string,
    note: Note
}

function NoteCard(props: NoteCardProps) {
    return (
        <Box mt="1rem" bg="#292929" w={props.width} p="1rem" borderRadius="20px">
            <Heading
                mb="1rem"
                color="white"
                textOverflow="ellipsis" // Add text overflow style
                isTruncated // Enable text truncation
                fontSize="25px"
            >
                {props.note.title}
            </Heading>
            <Text isTruncated textOverflow="ellipsis" fontSize="12px" color="white">{props.note.content}</Text>

            <Flex mt="2rem" gap="1rem">
                <ArrowUpRightFromSquare color="#6675FF" />
                <FilePenLine color="#6675FF" />
                <Trash color="#FF6666" />
            </Flex>
        </Box>
    )
}

export default NoteCard

// #6675FF
// #6675FF
// #FF6666