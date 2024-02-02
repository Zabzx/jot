import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast
} from "@chakra-ui/react";
import axios from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  noteId: string;
  triggerRefresh: () => void
};

function DeleteNoteModal(props: Props) {
  const toast = useToast()

    async function deleteNote() {
        const headers = { "auth-token": localStorage.getItem("user-token") }
        await axios.delete(`http://localhost:5000/api/notes/${props.noteId}`, { headers })
            .then(() => {
              props.onClose()
              props.triggerRefresh()
              toast({
                title: "Success",
                description: "Successfully deleted note",
                status: "success",
                isClosable: true
              })
            })
            .catch(err => console.log(err))
    }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent color="white" bg="#191919">
        <ModalHeader>Confirm Deletion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete? Deleted items cannot be recovered.
        </ModalBody>

        <ModalFooter>
          <Button onClick={deleteNote} colorScheme="blue" bg="#FF6666" color="white" mr={3}>
            Delete
          </Button>
          <Button color="white" onClick={props.onClose} variant="ghost">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteNoteModal;
