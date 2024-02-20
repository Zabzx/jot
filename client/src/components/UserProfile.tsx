import { Box, Text, Heading, Avatar } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function UserProfile() {
  const [pfp, setPfp] = useState("")

  // useEffect(() => {
  //   const headers = { "auth-token": localStorage.getItem("user-token") }
  // }, [])
  return (
    <Box color="white">
      <Heading>User Profile</Heading>

    </Box>
  )
}

export default UserProfile
