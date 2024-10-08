import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useBreakpointValue } from "@chakra-ui/react"
import { Todo } from "../../types/types"
import axios from "axios"

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onOpen: () => void,
    todo: Todo,
    todoId: string | undefined,
    triggerRefresh: () => void,
  }

function DeleteTodoModal(props: Props) {
  async function deleteTodo() {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    await axios.delete(`https://jot-w01a.onrender.com/api/todos/${props.todoId}`, { headers })
      .then((res) => {
      console.log(res)
      props.onClose()
      props.triggerRefresh()
      })
      .catch(err => console.log(err))
  }

  const modalSize = useBreakpointValue({ base: "xs", lg: "sm" })

  return (
    <>
      <Modal size={modalSize} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay bg="note" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px"/>
        <ModalContent color="white" bg="#191919">
          <ModalHeader>Delete Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this todo? This action cannot be undone.
          </ModalBody>

          <ModalFooter>
            <Button bg="#FF6666" mr={3} onClick={deleteTodo}>
              Delete
            </Button>
            <Button color="white" variant='ghost' onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteTodoModal
