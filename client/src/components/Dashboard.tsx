import {
  Text,
  Heading,
  Container,
  Box,
  Divider,
  Flex,
  Grid,
  useDisclosure
} from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Note, Todo } from "../types/types";
import { Plus } from "lucide-react";
import ViewTodoModal from "./Modals/ViewTodoModal";
import { Link } from "react-router-dom";

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [notes, setNotes] = useState<Note[]>();
  const [todos, setTodos] = useState<Todo[]>();
  const [todo, setTodo] = useState<Todo>()

  async function triggerRefresh() {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    await axios.get("http://localhost:5000/api/notes", { headers } )
      .then(res => setNotes(res.data))
      .catch(err => console.log(err))

    await axios.get("http://localhost:5000/api/todos", { headers })
      .then(res => setTodos(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const headers = { "auth-token": localStorage.getItem("user-token") };
    // Get user notes
    axios
      .get("http://localhost:5000/api/notes", { headers })
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));

    // Get user todos
    axios
      .get("http://localhost:5000/api/todos", { headers })
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box bg="#191919" w="100%">
      <Container maxW="90%">
        <Heading mt="1rem" pb="3rem" color="white">
          Dashboard
        </Heading>
      </Container>

      <Divider orientation="horizontal" />

      <Container maxW="90%">
        <Flex justifyContent="space-between" mt="1rem">
          <Text color="white">Notes.</Text>
          <Link to="/notes">
          <Text color="#6675FF">View All</Text>
          </Link>
        </Flex>

        {notes?.length !== 0 ? (
          <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
            {notes?.map((note, index) => {
              if (index >= 6) {
                // Only render up to 6 cards
                return;
              }
              return <NoteCard triggerRefresh={triggerRefresh}  key={note._id} note={note} width="350px" />;
            })}
          </Grid>
        ) : (
          <Box
            mt="1rem"
            bg="#292929"
            h="150px"
            w="300px"
            p="1rem"
            borderRadius="20px"
            cursor="pointer"
          >
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Plus size="50" color="white" />
            </Flex>
          </Box>
        )}

        <Flex justifyContent="space-between" my="2rem">
          <Text color="white">Todos.</Text>
          <Link to="/todos">
          <Text color="#6675FF">View All</Text>
          </Link>
        </Flex>

        {todos?.length !== 0 ? (
          <Flex gap="2rem">
            {todos?.map((todo, index) => {
              if (index >= 5) {
                return;
              }

              return <TodoCard triggerRefresh={triggerRefresh} setTodo={setTodo} onOpen={onOpen} key={todo._id} todo={todo} width="200px" />;
            })}
          </Flex>
        ) : (
          <Box
            mt="1rem"
            bg="#292929"
            h="150px"
            w="150px"
            p="1rem"
            borderRadius="20px"
            cursor="pointer"
          >
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Plus size="50" color="white" />
            </Flex>
          </Box>
        )}
      </Container>
      { isOpen ? <ViewTodoModal todo={todo} isOpen={isOpen} onClose={onClose} /> : ""}
    </Box>
  );
}

export default Dashboard;
