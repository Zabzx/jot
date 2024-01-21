import { Box, Flex, Text, Container, Button, Divider } from "@chakra-ui/react";
import { Pen, LayoutDashboard, ListChecks, NotepadText } from "lucide-react";
import { Avatar } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'

function Sidebar() {
    return (
        <>
        <Box position="relative" bg="#191919" color="white" w="20%" h="100vh">
            <Flex justifyContent="center" alignItems="center" mt="1rem" gap="1rem">
            <Pen size={40} color="#6675FF" />
            <Text fontSize="32px">Jot</Text>
            </Flex>

            <Flex flexDir="column" alignItems="center" mt="2rem">
            <Avatar size='2xl' border="2px solid white" src='' />
            <Text mt="1rem">John Anderson</Text>
            </Flex>

            <Container w="60%" position="relative" zIndex={2}>
            <Flex flexDir="column" gap="-50px">
            <Flex justifyContent="space-around" gap="10px" cursor="pointer" mt="2rem" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <LayoutDashboard color="#6675FF" />
            <Text w="80px">Dashboard</Text>
            </Flex>

            <Flex justifyContent="space-around" gap="10px" cursor="pointer" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <ListChecks color="#6675FF" />
            <Text w="80px">Todos</Text>
            </Flex>

            <Flex justifyContent="space-around" gap="10px" cursor="pointer" py="1rem" transition="0.4s" _hover={{ bg: "#292929", color: "white",  borderRadius: "20px" }}>
            <NotepadText color="#6675FF" />
            <Text w="80px">Notes</Text>
            </Flex>
            </Flex>

            <Text textAlign="center" mt="3rem" mb="10px">Theme</Text>
            <Flex justifyContent="center" gap="20px">
                <Text>Light</Text>
                <Switch size='lg' />
                <Text>Dark</Text>
            </Flex>
            </Container>

            <Flex position="absolute" w="100%" top="0" right="0" justifyContent="center" alignItems="flex-end" h="100%" zIndex={1}>
            <Button bg="#FF6666" color="white">Log out</Button>
            </Flex>
        </Box>
        {/* <Divider orientation="vertical" variant="solid" w="10px" h="100%" size="50" colorScheme="whiteAlpha" /> */}
        </>
    )
}

export default Sidebar