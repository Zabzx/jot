import { Box, Text, Heading, Avatar, Container, Divider, Flex } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

function UserProfile() {
  const [pfp, setPfp] = useState("")

  useEffect(() => {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    axios.get("http://localhost:5000/get-image", { headers })
     .then(res => setPfp(res.data.data[0]))
     .catch(err => console.log(err))
  }, [])
  return (
    <Box color="white">
      <Container maxW="90%">
      <Heading my="1rem">User Profile</Heading>
      </Container>
      <Divider orientation="horizontal" />
      <Container maxW="90%">
      <Flex>
      { pfp !== "" && pfp ? <Avatar size="2xl" border="2px solid white" src={pfp.image} /> : <Avatar size="2xl" border="2px solid white" src="" /> }
      <Text>Edit</Text>
      </Flex>
      </Container>
    </Box>
  )
}

export default UserProfile
