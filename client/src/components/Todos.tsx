import { Box, Container, Heading, Divider, Flex } from "@chakra-ui/react"
import TodoCard from "./TodoCard"

function Todos() {
    return (
        <>
        <Box w="100%">
        <Container maxW="90%">
            <Heading mt="1rem" color="white">Todos</Heading>
        </Container>
        <Divider mt="2rem" />

        <Container maxW="90%">
            <Flex mt="1rem" flexDir="column" gap="1rem">
                <TodoCard width="50%" />
                <TodoCard width="50%" />
                <TodoCard width="50%" />
                <TodoCard width="50%" />
                <TodoCard width="50%" />
                <TodoCard width="50%" />
            </Flex>
        </Container>
        </Box>
        </>
    )
}

export default Todos