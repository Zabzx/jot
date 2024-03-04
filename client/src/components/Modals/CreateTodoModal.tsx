import { Button, Modal, ModalBody, Text, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Input, Checkbox, Flex, Box } from "@chakra-ui/react"
import { useState } from "react"

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

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Task name" name="task" />

            <Checkbox  mt="1rem" p="0" onChange={() =>  setDeadline(!deadline)} isChecked={deadline}>Deadline</Checkbox>

            { deadline ? <Input type="date" mt="1rem" onChange={(e) => setTodo({...todo, deadline: e.target.value})} /> : "" }

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button onClick={() => console.log(todo)} variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default CreateTodoModal
