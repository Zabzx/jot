import { Button, Modal, ModalBody,  ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Input, Checkbox, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

type Props = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  triggerRefresh: () => void,
}

function CreateTodoModal(props: Props) {
  const [deadline, setDeadline] = useState(true)
  const [todo, setTodo] = useState({
    task: null,
    deadline: null,
  })

  const toast = useToast()

  useEffect(() => {
    if (!deadline) {
      setTodo({...todo, deadline: null})
    }
  }, [deadline])

  async function createTodo() {
    // console.log(todo)
    if (!todo.task || todo.task === "") {
      console.log("Please enter a todo task.")
      return
    }
    const headers = { "auth-token": localStorage.getItem("user-token" ) }
    await axios.post("http://localhost:5000/api/todos", todo, { headers })
      .then((res) => {
        toast({
          title: "Success",
          description: "Successfully created new Todo.",
          isClosable: true,
          status: "success"
        })
        props.onClose()
        props.triggerRefresh()
        // const dateString = res.data
        // const dayAdd1 = new Date(dateString)
        // // dayAdd1.setDate(dayAdd1.getDate() + 1)
        // // console.log(dayAdd1)

        // const realString = dayAdd1.toISOString().slice(0, 10)
        // console.log(realString)
      })
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
