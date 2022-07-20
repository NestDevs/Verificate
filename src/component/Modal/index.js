import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Center,
  Link,
  Image,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import account from "../../asset/image/create-profile.png";

function index({ text, header, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader justify="center">{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              w={["90%", "100%"]}
              h={"full"}
              flexDir={"column"}
              justify={"center"}
              align={"center"}
            >
              <Text>{text}</Text>
              <Image src={account} alt={"account successfully created"} />
              <Link
                display={"flex"}
                align="center"
                justify="center"
                fontWeight={"bold"}
                rounded="full"
                width="120px"
                bg={"#03064A"}
                color={"white"}
                size="lg"
                px={5}
                _hover={{
                  underline: "none",
                }}
              >
                <RouteLink to="/dashboard">Proceed</RouteLink>
              </Link>
            </Flex>
            {/* <Center spacing={10} pt={2}>
              <Button
                px={5}
                type="submit"
                size="lg"
                rounded="full"
                width="120px"
                bg={"#03064A"}
                color={"white"}
                _hover={{
                  bg: "#ffffff",
                  color: "#03064A",
                }}
              >
                Proceed
              </Button>
              </Center> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default index;
