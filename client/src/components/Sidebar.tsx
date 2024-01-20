import { Box, Flex, Text, Container, Button, Divider } from "@chakra-ui/react";
import { Pen, LayoutDashboard, ListChecks, NotepadText } from "lucide-react";
import { Avatar } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'

function Sidebar() {
    return (
        <>
        <Box bg="#191919" color="white" w="20%" h="100vh">
            <Flex justifyContent="center" mt="1rem" gap="1rem">
            <Pen size={40} color="white" />
            <Text fontSize="32px">Jot</Text>
            </Flex>

            <Flex flexDir="column" alignItems="center" mt="2rem">
            <Avatar size='2xl' border="2px solid white" src='asdasdasd' />
            <Text mt="1rem">John Anderson</Text>
            </Flex>

            <Container w="60%">
            <Flex justifyContent="space-around" gap="10px" cursor="pointer" mt="2rem" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <LayoutDashboard color="#6675FF" />
            <Text w="80px">Dashboard</Text>
            </Flex>

            <Flex justifyContent="space-around" gap="10px" cursor="pointer" mt="2rem" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <ListChecks color="#6675FF" />
            <Text w="80px">Todos</Text>
            </Flex>

            <Flex justifyContent="space-around" gap="10px" cursor="pointer" mt="2rem" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <NotepadText color="#6675FF" />
            <Text w="80px">Notes</Text>
            </Flex>

            <Text textAlign="center" mt="3rem" mb="10px">Theme</Text>
            <Flex justifyContent="center" gap="20px">
                <Text>Light</Text>
                <Switch size='lg' />
                <Text>Dark</Text>
            </Flex>

            <Box textAlign="center">
            <Button bg="#FF6666" color="white" mt="3rem">Log out</Button>
            </Box>
            </Container>
        </Box>
        {/* <Divider orientation="vertical" variant="solid" w="10px" h="100%" size="50" colorScheme="whiteAlpha" /> */}
        </>
    )
}

export default Sidebar