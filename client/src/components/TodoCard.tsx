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
                mb="1rem"
                color="yellow"
                textOverflow="ellipsis" // Add text overflow style
                isTruncated // Enable text truncation
            >
                {props.todo.task}
            </Heading>
            </Tooltip>
            <Text fontSize="15px" color="white">
                Deadline: <span style={{ color: "#FF6666" }}>Saturday 6th Jan</span>
            </Text>
        </Box>
    )
}

export default TodoCard