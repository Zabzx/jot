import { useEffect, useState } from "react";
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
  Text,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { Todo } from "../../types/types";
import axios from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo;
  triggerRefresh: () => void;
};

function ViewTodoModal(props: Props) {
  const [deadline, setDeadline] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [editedTodo, setEditedTodo] = useState({
    task: props.todo.task,
    completed: props.todo.completed,
    date: props.todo.date,
    deadline: props.todo.deadline,
    dateCompleted: props.todo.dateCompleted,
  });

  const [minDate, setMinDate] = useState("")

  useEffect(() => {
    // Formatting date issues
    const fd = new Date(props.todo?.date).toLocaleDateString();
    setFormattedDate(fd);

    // Getting current date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const currentDate = `${yyyy}-${mm}-${dd}`;
    // Set the minimum date
    setMinDate(currentDate);
  }, []);

  async function saveTodo() {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    axios.patch(`http://localhost:5000/api/todos/${props.todo._id}`, editedTodo, { headers })
      .then(() => {
        props.onClose()
        props.triggerRefresh()
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent color="white" bg="#191919">
          <ModalHeader>
            <Editable defaultValue={props.todo.task} w="50%" onChange={(v) => setEditedTodo({...editedTodo, task: v})}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text onClick={() => console.log(props.todo)} mb="1rem">Date issued: {formattedDate}</Text>
            <Checkbox
              onChange={(e) => {
                setEditedTodo({ ...editedTodo, completed: e.target.checked });
                if (e.target.checked) {
                  const currentDate = new Date().toISOString().slice(0, 10);
                  setEditedTodo({ ...editedTodo, dateCompleted: currentDate });
                }
              }}
            >
              Completed: {props.todo?.completed}
            </Checkbox>
            <br />
            <Checkbox
              isChecked={editedTodo.deadline ? true : false}
              onChange={() => setDeadline(!deadline)}
            >
              Deadline
            </Checkbox>

            {editedTodo.deadline ? (
              <Input
                mt="1rem"
                type="date"
                min={minDate}
                onChange={(e) =>
                  setEditedTodo({ ...editedTodo, deadline: e.target.value })
                }
              />
            ) : (
              ""
            )}
          </ModalBody>

          <ModalFooter>
            <Button bg="#FF6666" color="white" mr={3} onClick={saveTodo}>
              Save
            </Button>
            <Button variant="ghost" color="white">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewTodoModal;
