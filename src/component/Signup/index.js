import React, { useState } from "react";

import {
  Box,
  Container,
  Flex,
  VStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import NavbarWithoutLogo from "../Navbar/NavbarWithoutLogo";
import logo from "../../asset/image/logo.png";
import showcase from "../../asset/image/showcase.png";
import SignupForm from "./SignupForm";
import ModalBox from "../Modal";
const index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const modalMethod = () => {
    setIsModalOpen(true);
    return onOpen();
  };
  return (
    <Box w="100vw" h="100vh" bg="#03064A">
      <Flex flexDir={["column", "row"]} align="center" justify="center">
        <Box w={["100%", "45%"]}>
          <Image src={logo} alt="logo" display="block" height="75px" />
          <Image src={showcase} alt="areas of specialty" display="block" />
        </Box>
        {/* <Box></Box> */}
        <Box w={["100%", "55%"]} bg="#ffffff" h="100vh">
          <NavbarWithoutLogo />
          <SignupForm modalMethod={modalMethod} setUserEmail={setUserEmail} />
        </Box>
      </Flex>
      {isModalOpen && (
        <ModalBox
          text={"You have successfully created an account"}
          header={userEmail}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
};

export default index;
