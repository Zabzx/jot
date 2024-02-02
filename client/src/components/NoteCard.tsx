import { useState } from "react";
import { Box, Heading, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";
import DeleteNoteModal from "./Modals/DeleteNoteModal";
import { Note } from "../types/types";
import { Link } from "react-router-dom";

type NoteCardProps = {
    width?: string,
    note: Note
}

function NoteCard(props: NoteCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [noteId, setNoteId] = useState<string>("")

    const viewUrl = `/viewnote/${props.note._id}`
    const editUrl = `/editnote/${props.note._id}`

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
                <Link to={viewUrl}>
                <ArrowUpRightFromSquare color="#6675FF" />
                </Link>
                <Link to={editUrl}>
                <FilePenLine color="#6675FF" />
                </Link>
                <Trash cursor="pointer" onClick={() => {
                    setNoteId(props.note._id)
                    onOpen()
                }} color="#FF6666" />
            </Flex>
            <DeleteNoteModal noteId={noteId} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Box>
    )
}

export default NoteCard

// #6675FF
// #6675FF
// #FF6666