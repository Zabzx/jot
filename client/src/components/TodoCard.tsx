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
    const [deadline, setDeadline] = useState<Date | string>("")

    const [disclosureMode, setDisclosureMode] = useState("view")
    useEffect(() => {
        // const originalDate = props.todo.deadline
        // const formattedDate = new Date(originalDate).toLocaleDateString()
        // setDeadline(formattedDate)
        const oldDeadline = new Date(props.todo.deadline)
        const newDeadline = oldDeadline.toISOString().slice(0, 10)
        setDeadline(newDeadline)
    }, [])
    
    return (
        <Box _dark={{ bg: "#292929"}} w={props.width} bg="white" border="1px solid #292929" p="1rem" borderRadius="20px" h="150px">
            <Tooltip label={props.todo.task}>
            <Heading
                fontSize="25px"
                mb="1rem"
                color="black"
                textOverflow="ellipsis" // Add text overflow style
                isTruncated // Enable text truncation
                _dark={{ color: "white"}}
            >
                {props.todo.task}
            </Heading>
            </Tooltip>
            <Text _dark={{ color: "white" }} fontSize="12px" color="black">
            Deadline: { props.todo.deadline ? <span style={{ color: "#FF6666" }}>{deadline.toString()}</span> : <span style={{ color: "#6675FF" }}>No deadline</span>}
            </Text>
            { disclosureMode === "delete" ? <DeleteTodoModal triggerRefresh={props.triggerRefresh} todo={props.todo} todoId={props.todo._id} onOpen={onOpen} isOpen={isOpen} onClose={onClose} /> : "" }
            { disclosureMode === "view" ? <ViewTodoModal isOpen={isOpen} onClose={onClose} todo={props.todo} triggerRefresh={props.triggerRefresh} />: "" }
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
