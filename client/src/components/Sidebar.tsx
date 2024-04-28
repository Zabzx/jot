import { Box, Flex, Text, Container, Button, Divider, useDisclosure, useColorMode } from "@chakra-ui/react";
import { Pen, LayoutDashboard, ListChecks, NotepadText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'
import LogOutModal from "./Modals/LogOutModal";
import { useEffect, useState } from "react";
import axios from "axios";

function Sidebar() {
    const navigate = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    axios.get("http://localhost:5000/api/user/user", { headers })
      .then(res => setUsername(res.data.username))
      .catch(err => console.log(err))

    // Getting profile picture
    axios.get("http://localhost:5000/get-image", { headers })
      .then(res => setPfp(res.data.data[0]))
      .catch(err => console.log(err))
  }, [])
    
    const [pfp, setPfp] = useState("")
    const [userName, setUsername] = useState<string>("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Box position="sticky" top="0px" _dark={{ backgroundColor: "#191919" }} bg="white" color="white" w="20%" h="100vh">
            <Flex justifyContent="center" alignItems="center" mt="1rem" gap="1rem">
            <Pen size={40} color="#6675FF" />
            <Text _dark={{ color: "white" }} color="black" fontSize="32px">Jot</Text>
            </Flex>

            <Flex position="relative" zIndex={6} onClick={() => navigate("/profile")} cursor="pointer" flexDir="column" alignItems="center" mt="2rem">
            { pfp != "" && pfp ? <Avatar size='2xl' _dark={{ border: "2px solid black" }} border="2px solid black" src={`../../public/pfp/${pfp.image}`} /> : <Avatar size="2xl" border="2px solid white" src="" /> }
            <Text _dark={{ color: "white" }} color="black" mt="1rem" mb="2rem">{userName}</Text>
            </Flex>

            <Container w="60%" position="relative" zIndex={2}>
            <Flex flexDir="column" >
            <Link to="/">
            <Flex justifyContent="space-around" gap="10px" cursor="pointer" py="1rem" transition="0.4s" _dark={{ _hover: { bg: "#292929", color: "white",  borderRadius: "20px" } }} _hover={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }} >
            <LayoutDashboard color="#6675FF" />
            <Text _dark={{ color: "white" }} color="black" w="80px">Dashboard</Text>
            </Flex>
            </Link>

            <Link to="/todos">
            <Flex justifyContent="space-around" gap="10px" cursor="pointer" py="1rem" transition="0.4s" _dark={{ _hover: { bg: "#292929", color: "white",  borderRadius: "20px" } }} _hover={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }} >
            <ListChecks color="#6675FF" />
            <Text _dark={{ color: "white" }} color="black" w="80px">Todos</Text>
            </Flex>
            </Link>

            <Link to="/notes">
            <Flex justifyContent="space-around" gap="10px" cursor="pointer" py="1rem" transition="0.4s" _dark={{ _hover: { bg: "#292929", color: "white",  borderRadius: "20px" } }} _hover={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }} >
            <NotepadText color="#6675FF" />
            <Text _dark={{ color: "white" }} color="black" w="80px">Notes</Text>
            </Flex>
            </Link>
            </Flex>

            <Text _dark={{ color: "white" }} color="black" textAlign="center" mt="3rem" mb="10px">Theme</Text>
            <Flex justifyContent="center" gap="20px">
                <Text _dark={{ color: "white" }} color="black">Dark</Text>
                <Switch onChange={toggleColorMode} size='lg' />
                <Text _dark={{ color: "white" }} color="black">Light</Text>
            </Flex>
            </Container>

            <Flex position="absolute" w="100%" top="0" right="0" justifyContent="center" alignItems="flex-end" h="100%" zIndex={1}>
            <Button onClick={onOpen} bg="#FF6666" color="white">Log out</Button>
            </Flex>
            <Divider position="absolute" right="0" top="0" zIndex={2} orientation="vertical" h="100%" />
        </Box>

        <LogOutModal onClose={onClose} isOpen={isOpen} />
        </>
    )
}

export default Sidebar
