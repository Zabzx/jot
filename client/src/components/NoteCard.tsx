import { useState } from "react";
import { Box, Heading, Text, Flex, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";
import DeleteNoteModal from "./Modals/DeleteNoteModal";
import { Note } from "../types/types";
import { Link } from "react-router-dom";

type NoteCardProps = {
    width?: string,
    note: Note,
    triggerRefresh: () => void
}

function NoteCard(props: NoteCardProps) {
    const iconSize = useBreakpointValue({ base: 15, md: 28, lg: 28 });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [noteId, setNoteId] = useState<string>("")

    const viewUrl = `/viewnote/${props.note._id}`
    const editUrl = `/editnote/${props.note._id}`

    return (
        <Box _dark={{ backgroundColor: "#292929" }} mt="1rem" bg="white" border="1px solid #292929" w={props.width} p="1rem" borderRadius="20px">
            <Heading
                mb="1rem"
                color="black"
                textOverflow="ellipsis" // Add text overflow style
                isTruncated // Enable text truncation
                fontSize={["16px", "25px"]}
                _dark={{ color: "white" }}
            >
                {props.note.title}
            </Heading>
            <Text isTruncated textOverflow="ellipsis" fontSize="12px" _dark={{ color: "white" }} color="black">{props.note.content}</Text>

            <Flex mt="2rem" gap="1rem">
                <Link to={viewUrl}>
                <ArrowUpRightFromSquare size={iconSize} color="#6675FF" />
                </Link>
                <Link to={editUrl}>
                <FilePenLine size={iconSize} color="#6675FF" />
                </Link>
                <Trash size={iconSize} cursor="pointer" onClick={() => {
                    setNoteId(props.note._id)
                    onOpen()
                }} color="#FF6666" />
            </Flex>
            <DeleteNoteModal triggerRefresh={props.triggerRefresh} noteId={noteId} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Box>
    )
}

export default NoteCard

// #6675FF
// #6675FF
// #FF6666