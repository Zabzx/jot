import { useEffect, useState } from "react";
import { Box, Text, Heading, Tooltip, useDisclosure, Flex } from "@chakra-ui/react";
import { Todo } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import ViewTodoModal from "./Modals/ViewTodoModal";
import DeleteTodoModal from "./Modals/DeleteTodoModal";
import { Trash, ArrowUpRightFromSquare } from "lucide-react";

type TodoCardProps = {
    width?: string,
    todo: Todo,
    onOpen: () => void
    setTodo: Dispatch<SetStateAction<Todo | undefined>>,
    setDisclosureMode: Dispatch<SetStateAction<string>>,
    triggerRefresh: () => void,
}

function TodoCard(props: TodoCardProps) {
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [deadline, setDeadline] = useState("")

    const [disclosureMode, setDisclosureMode] = useState("view")
    useEffect(() => {
        const originalDate = props.todo.deadline
        const formattedDate = new Date(originalDate).toLocaleDateString()
        setDeadline(formattedDate)
    }, [])
    return (
        <Box w={props.width} bg="#292929" p="1rem" borderRadius="20px">
            <Tooltip label={props.todo.task}>
            <Heading
                fontSize="25px"
                mb="1rem"
                color="white"
                textOverflow="ellipsis" // Add text overflow style
                isTruncated // Enable text truncation
            >
                {props.todo.task}
            </Heading>
            </Tooltip>
            <Text fontSize="12px" color="white">
            Deadline: { props.todo.deadline ? <span style={{ color: "#FF6666" }}>{deadline}</span> : <span style={{ color: "#6675FF" }}>No deadline</span>}
            </Text>
            { disclosureMode === "delete" ? <DeleteTodoModal triggerRefresh={props.triggerRefresh} todo={props.todo} onOpen={onOpen} isOpen={isOpen} onClose={onClose} /> : "" }
            { disclosureMode === "view" ? <ViewTodoModal isOpen={isOpen} onClose={onClose} todo={props.todo} />: "" }
            <Flex mt="1rem" gap="1rem">
            <ArrowUpRightFromSquare cursor="pointer" onClick={() => {
            setDisclosureMode("view")
            onOpen()
            props.setTodo(props.todo)
            }} color="#6675FF" />
            <Trash color="#FF6666" onClick={() => {
                setDisclosureMode("delete")
                onOpen()
            }} cursor="pointer" />
            </Flex>
        </Box>
    )
}

export default TodoCard
