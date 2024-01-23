import { Input, Text, Heading, Box, Flex, Button, Container } from "@chakra-ui/react";
import { Pen } from "lucide-react";
import axios from "axios";
import React, { useState } from "react";

function Login() {
    type formDatatType = {
        username: String,
        password: String,
    }

    const [formData, setFormData] = useState<formDatatType>({
        username: "",
        password: "",
    });

    function testRequest(e: React.FormEvent) {
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:5000/api/user/login", formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Box bg="#191919" h="100vh">
            <Flex pt="2rem" color="white" justifyContent="center" alignItems="center">
                <Pen size="40px" />
                <Heading fontSize="40px">Jot Login</Heading>
            </Flex>

            <Container maxW="50%" mt="7rem">
            <form onSubmit={(e) => testRequest(e)}>
            <Flex flexDir="column" gap="2rem">
            <Input placeholder="Username or Email" color="white" name="usernameoremail" h="60px" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            <Input placeholder="Password" color="white" name="password" h="60px" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </Flex>
            <Button mt="2rem" w="100%" bg="#6675FF" color="white" h="60px" type="submit">Login</Button>
            <Text mt="1rem" color="white">Need an account? <span style={{ color: "#6675FF" }}>Sign Up</span></Text>
            </form>
            </Container>
        </Box>
    )
}

export default Login