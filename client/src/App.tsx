import { Flex, Divider, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <>
    <Flex bg="#191919" h="100vh">
      <Sidebar />
      <Divider orientation="vertical" zIndex={2} />
      <Box flex="1" w="100%">
      <Dashboard />
      </Box>
    </Flex>
    </>
  )
}

export default App
