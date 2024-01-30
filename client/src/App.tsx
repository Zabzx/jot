import { Flex, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Todos from "./components/Todos";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

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
      <Route path="/createnote" element={<CreateNote />} />
      </Routes>
      </Box>
    </Flex>
    </>
  )
}

export default App
