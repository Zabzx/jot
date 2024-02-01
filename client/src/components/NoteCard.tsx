import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";
import { Note } from "../types/types";
import { Link } from "react-router-dom";

type NoteCardProps = {
    width?: string,
    note: Note
}

function NoteCard(props: NoteCardProps) {
    const viewUrl = `/viewnote/${props.note._id}`
    const editUrl = `/editnote/${props.note._id}`

    return (
        <Link to={viewUrl}>
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
                <Link to={editUrl}>
                <FilePenLine color="#6675FF" />
                </Link>
                <Trash color="#FF6666" />
            </Flex>
        </Box>
        </Link>
    )
}

export default NoteCard

// #6675FF
// #6675FF
// #FF6666