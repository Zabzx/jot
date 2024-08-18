import { useState } from "react"
import { Input, Box, Textarea, Heading, Container, Divider, Button, Flex, useToast } from "@chakra-ui/react"
import axios from "axios"

function CreateNote() {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    const toast = useToast()

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        
        if (formData.title === "" || formData.content === "") {
            // Put toast here
            return
        }
        const headers = { "auth-token": localStorage.getItem("user-token") }
        await axios.post("https://jot-w01a.onrender.com/api/notes", formData, { headers })
            .then(() => {
                toast({
                    title: "Success",
                    status: "success",
                    isClosable: true,
                    description: "Note created successfully."
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <Box>
            <Container maxW="90%">
            <Heading my="1rem" color="white">Create Note</Heading>
            </Container>
            <Divider orientation="horizontal" />

            <Container maxW="90%" mt="3rem">
            <form onSubmit={submit}>
            <Flex flexDir="column">
            <Input placeholder="Note Title" name="title" h="60px" color="white" w="70%" onChange={(e) => setFormData({...formData, title: e.target.value})} />
            <Textarea mt="2rem" placeholder="Note content" name="content" h="200px" color="white" w="70%" onChange={(e) => setFormData({...formData, content: e.target.value})} />
            </Flex>
            <Button mt="1rem" bg="#6675FF" color="white" type="submit">Done</Button>
            </form>
            </Container>
        </Box>
    )
}

export default CreateNote