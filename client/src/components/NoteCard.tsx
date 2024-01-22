import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowUpRightFromSquare, FilePenLine, Trash } from "lucide-react";

type NoteCardProps = {
    width?: string
}

function NoteCard(props: NoteCardProps) {
    return (
        <Box mt="1rem" bg="#292929" w={props.width} p="1rem" borderRadius="20px">
            <Heading fontSize="30px" mb="1rem" color="white">Note Title</Heading>
            <Text color="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quod sint magni mollitia facere eum vitae quis delectus excepturi ipsa.</Text>

            <Flex mt="1rem" gap="1rem">
                <Button bg="#6675FF" color="white"><ArrowUpRightFromSquare /></Button>
                <Button bg="#6675FF" color="white"><FilePenLine /></Button>
                <Button bg="#FF6666" color="white"><Trash /></Button>
            </Flex>
        </Box>
    )
}

export default NoteCard