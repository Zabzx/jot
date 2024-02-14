import { Flex, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Todos from "./components/Todos";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import UploadImage from "./components/UploadImage";

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
      <Route path="/viewnote/:id" element={<ViewNote />} />
      <Route path="/editnote/:id" element={<EditNote />} />
      <Route path="/upload" element={<UploadImage />} />
      </Routes>
      </Box>
    </Flex>
    </>
  )
}

export default App
