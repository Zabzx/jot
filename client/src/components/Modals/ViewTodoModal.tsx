import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
  Input,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { Todo } from "../../types/types";

type Props = {
    isOpen: boolean,
    onClose: () => void
    todo?: Todo
}

function ViewTodoModal(props: Props) {
    const [deadline, setDeadline] = useState(true)
    const [deadlineDate, setDeadlineDate] = useState("")
  return (
    <>

      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.todo?.task}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">Date issued: {props.todo?.date}</Text>
            <Checkbox>Completed: {props.todo?.completed}</Checkbox>
            <br />
            <Checkbox isChecked={deadline} onChange={() => setDeadline(!deadline)}>Deadline</Checkbox>

            { deadline ?  <Input mt="1rem" type="date" onChange={(e) => setDeadlineDate(e.target.value)} /> : "" }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => console.log(deadlineDate)}>
              Save
            </Button>
            <Button variant="ghost" color="white">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewTodoModal;
