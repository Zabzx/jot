import { useEffect, useState } from "react";
import { Box, Text, Heading, Tooltip } from "@chakra-ui/react";
import { Todo } from "../types/types";
import { Dispatch, SetStateAction } from "react";

type TodoCardProps = {
    width?: string,
    todo: Todo,
    onOpen: () => void
    setTodo: Dispatch<SetStateAction<Todo | undefined>>
}

function TodoCard(props: TodoCardProps) {
    const [deadline, setDeadline] = useState("")

    useEffect(() => {
        const originalDate = props.todo.deadline
        const formattedDate = new Date(originalDate).toLocaleDateString()
        setDeadline(formattedDate)
    }, [])
    return (
        <Box onClick={() => {
            props.onOpen()
            props.setTodo(props.todo)
        }} w={props.width} bg="#292929" p="1rem" borderRadius="20px" cursor="pointer">
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
        </Box>
    )
}

export default TodoCard