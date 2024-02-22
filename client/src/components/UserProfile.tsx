import { Box, Input, InputGroup, InputLeftElement, Heading, Avatar, Container, Divider, Flex, Icon, Button } from "@chakra-ui/react"
import { Files } from "lucide-react"
import axios from "axios"
import { useEffect, useState } from "react"

function UserProfile() {
  const [pfp, setPfp] = useState("")
  const [selectedImage, setSelectedImage] = useState()

  useEffect(() => {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    axios.get("http://localhost:5000/get-image", { headers })
     .then(res => setPfp(res.data.data[0]))
     .catch(err => console.log(err))
  }, [])

  function handleInputChange(e) {
    console.log(e.target.files[0])
  }

  async function uploadImage() {
    const formData = new FormData()
    formData.append("image", selectedImage)

    const headers = { "auth-token": localStorage.getItem("user-token"), "Content-Type": "multipart/form-data" }

    await axios.post("http://localhost:5000/upload-image", formData, { headers })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  async function find() {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    await axios.get("http://localhost:5000/find", { headers })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <Box color="white">
      <Container maxW="90%">
      <Heading my="1rem">User Profile</Heading>
      </Container>
      <Divider orientation="horizontal" />
      <Container maxW="90%">
      <Flex alignItems="center" gap="1rem" mt="1rem">
      { pfp !== "" && pfp ? <Avatar size="2xl" border="2px solid white" src={pfp.image} /> : <Avatar size="2xl" border="2px solid white" src="" /> }
          <InputGroup w="40px">
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={Files} color="gray.400" fontSize="20px" />}
      />
      <Input
        cursor="pointer"
        type="file"
        border="none"
        boxShadow="md"
        py={4}
        px={6}
        opacity={0}
        placeholder="Choose a file..."
        _hover={{ borderColor: "gray.300" }}
        _focus={{ borderColor: "gray.400", boxShadow: "outline" }}
        onChange={handleInputChange}
      />
    </InputGroup>
    <Button onClick={find}>Submit Image</Button>
      </Flex>
      </Container>
    </Box>
  )
}

export default UserProfile
