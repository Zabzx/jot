import { Box, Text } from "@chakra-ui/react";

type TodoCardProps = {
    width?: string
}

function TodoCard(props: TodoCardProps) {
    return (
        <Box w={props.width} bg="#292929" p="1rem" borderRadius="20px">
            <Text fontSize="20px" mb="1rem" color="white">Todo Title</Text>
            <Text color="white">Status: <span style={{ color: "#6675FF"}} >Pending...</span></Text>
            <Text color="white">Deadline: <span style={{ color: "#FF6666"}}>Saturday 6th Jan</span></Text>
        </Box>
    )
}

export default TodoCard