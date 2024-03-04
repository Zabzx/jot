import { Button, Modal, ModalBody, Text, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Input, Checkbox, Flex, Box } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

type Props = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
}

function CreateTodoModal(props: Props) {
  const [deadline, setDeadline] = useState(true)
  const [todo, setTodo] = useState({
    task: null,
    deadline: null,
  })

  useEffect(() => {
    if (!deadline) {
      setTodo({...todo, deadline: null})
    }
  }, [deadline])

  async function createTodo() {
    if (!todo.task || todo.task === "") {
      console.log("Please enter a todo task.")
      return
    }
    const headers = { "auth-token": localStorage.getItem("user-token" ) }
    await axios.post("http://localhost:5000/api/todos", todo, { headers })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Task name" name="task" onChange={(e) => setTodo({...todo, task: e.target.value})} />

            <Checkbox  mt="1rem" p="0" onChange={() =>  setDeadline(!deadline)} isChecked={deadline}>Deadline</Checkbox>

            { deadline ? <Input type="date" mt="1rem" onChange={(e) => setTodo({...todo, deadline: e.target.value})} /> : "" }

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createTodo}>
              Submit
            </Button>
            <Button onClick={props.onClose} variant='ghost'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default CreateTodoModal
