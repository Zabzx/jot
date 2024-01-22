import { Flex, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Todos from "./components/Todos";
import Notes from "./components/Notes";

function App() {

  return (
    <>
    <Flex bg="#191919" h="100%">
      <Sidebar />
      <Box flex="1" w="100%">
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/notes" element={<Notes />} />
      </Routes>
      </Box>
    </Flex>
    </>
  )
}

export default App
