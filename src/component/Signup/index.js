import React from "react";

import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";

import NavbarWithoutLogo from "../Navbar/NavbarWithoutLogo";
import logo from "../../asset/image/logo.png";
import showcase from "../../asset/image/showcase.png";
import SignupForm from "./SignupForm";
const index = () => {
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
          <SignupForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
