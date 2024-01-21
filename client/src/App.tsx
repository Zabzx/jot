import { Flex, Divider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
    <Flex bg="#191919" h="100vh">
      <Sidebar />
      <Divider orientation="vertical" position="relative" zIndex={2} />
      {/* <Divider orientation="vertical" variant="solid" w="10px" h="100%" size="5px" colorScheme="whiteAlpha" /> */}
    </Flex>
    </>
  )
}

export default App
