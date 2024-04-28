import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Input, Box, Textarea, Heading, Container, Divider, Button, Flex, useToast } from "@chakra-ui/react"
import axios from "axios"

function EditNote() {
    const { id } = useParams()

    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    useEffect(() => {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        axios.get(`http://localhost:5000/api/notes/${id}`, { headers })
            .then(res => {
                setFormData({
                    title:  res.data.title,
                    content: res.data.content
                })
            })
            .catch(err => console.log(err))
    }, [])

    const toast = useToast()

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        
        if (formData.title === "" || formData.content === "") {
            // Put toast here
            return
        }

        const headers = { "auth-token": localStorage.getItem("user-token") }
        await axios.patch(`http://localhost:5000/api/notes/${id}`, formData, { headers })
            .then(() => {
                toast({
                    title: "Success",
                    description: "Note edited successfuly",
                    status: "success",
                    isClosable: true
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <Box>
            <Container maxW="90%">
            <Heading _dark={{ color: "white" }} color="black" my="1rem">Edit Note</Heading>
            </Container>
            <Divider orientation="horizontal" />

            <Container maxW="90%" mt="3rem">
            <form onSubmit={submit}>
            <Flex flexDir="column">
            <Input _dark={{ color: "white" }} color="black" placeholder="Note Title" name="title" h="60px" w="70%" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            <Textarea _dark={{ color: "white" }} color="black" mt="2rem" placeholder="Note content" name="content" h="200px" w="70%" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
            </Flex>
            <Button mt="1rem" bg="#6675FF" color="white" type="submit">Done</Button>
            </form>
            </Container>
        </Box>
    )
}

export default EditNote