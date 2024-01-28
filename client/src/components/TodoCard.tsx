import { Box, Text, Heading, Tooltip } from "@chakra-ui/react";
import { Todo } from "../types/types";

type TodoCardProps = {
    width?: string,
    todo: Todo
}

function TodoCard(props: TodoCardProps) {
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
                Deadline: { props.todo.deadline ? <span style={{ color: "#FF6666" }}>Saturday 6th Jan</span> : <span style={{ color: "#6675FF" }}>No deadline</span>}
            </Text>
        </Box>
    )
}

export default TodoCard