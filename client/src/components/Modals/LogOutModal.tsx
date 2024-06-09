import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function LogOutModal(props: Props) {
  let navigate = useNavigate();

  function logOut() {
    localStorage.setItem("user-token", "");
    navigate("/login");
  }

  const modalSize = useBreakpointValue({ base: "xs", lg: "sm" })

  return (
    <Modal size={modalSize} isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent color="white" bg="#191919">
        <ModalHeader>Log Out</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to log out?</ModalBody>

        <ModalFooter>
          <Button bg="#FF6666" color="white" mr={3} onClick={logOut}>
            Log out
          </Button>
          <Button variant="ghost" color="white">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogOutModal;
