import { useState } from "react"
import { Box, Flex, Button, Input, Text, Heading, Container } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Pen } from "lucide-react"
import axios from "axios"

function SignUp() {
    type formDataType = {
        username: string,
        email: string,
        password: string
        passwordConfirm?: string
    }

    const [formData, setFormData] = useState<formDataType>({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const navigate = useNavigate()

    function registerUser(e: React.FormEvent) {
        e.preventDefault()

        if (formData.password !== formData.passwordConfirm) {
            console.log("Passwords don't match.")
            return
        }

        const data = {...formData}
        delete data.passwordConfirm
        
        axios.post("https://jot-w01a.onrender.com/api/user/register", data)
            .then(res => console.log(res))
            .then(() => getCreatedUserToken())
            .catch(err => console.log(err))
    }

    function getCreatedUserToken() {
        const data = {
            uoe: formData.username,
            password: formData.password
        }

        axios.post("http://localhost:5000/api/user/login", data)
            .then(res => localStorage.setItem("user-token", res.data))
            .then(() => console.log(localStorage.getItem("user-token")))
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <Box bg="#191919" h="100vh">
        <Flex pt="2rem" color="white" justifyContent="center" alignItems="center">
            <Pen size="40px" />
            <Heading fontSize="40px">Jot Sign Up</Heading>
        </Flex>

        <Container maxW="50%" mt="7rem">
        <form onSubmit={(e) => registerUser(e)}>
        <Flex flexDir="column" gap="2rem">
        <Input placeholder="Username" color="white" name="username" h="60px" onChange={(e) => setFormData({...formData, username: e.target.value})} />
        <Input placeholder="Email" color="white" name="email" h="60px" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <Input placeholder="Password" type="password" color="white" name="password" h="60px" onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <Input placeholder="Confirm Password" type="password" color="white" name="passwordconfirm" h="60px" onChange={(e) => setFormData({...formData, passwordConfirm: e.target.value})} />
        </Flex>
        <Button mt="2rem" w="100%" bg="#6675FF" color="white" h="60px" type="submit">Create Account</Button>
        <Text mt="1rem" color="white">Need an account? <Link to="/signup"> <span style={{ color: "#6675FF" }}>Sign Up</span></Link></Text>
        </form>
        </Container>
    </Box>
    )
}

export default SignUp