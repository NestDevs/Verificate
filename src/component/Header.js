import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../asset/image/logo.png";



const Header = () => {
 

  return (
    <Box
      px={{ base: "20px", md: "100px" }}
      height="80px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="primaryLight"
      position="fixed"
      top="0"
      right="85"
      left="0"
      zIndex="10"
    >
      {/*Logo Box*/}
      <Image
        src={logo}
        alt="logo"
        height="75px"
        width="170px"
        top="8px"
        pt="12px"
        pr="20px"
        pos="relative"
        right="60px"
        display={{ base: "none", md: "block" }}
      />

      
    

      {/*Nav links*/}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Link to="/" style={{ marginRight: "50px", color: "#03064A" }}>
          Home
        </Link>
        <Link to="#" style={{ marginRight: "50px", color: "#03064A" }}>
          Account
        </Link>
        <Link to="#" style={{ marginRight: "50px", color: "#03064A" }}>
          Help/support
        </Link>
        <Link to='/signin' >
        <Button
          _hover={{
            bg: "#03064A",
            border: "1px solid primary",
            opacity: "0.8",
          }}
          bg="#03064A"
          color="#ffffff"
          fontSize="15px"
          fontWeight="700"
          borderRadius="4px"
          width="130px"
        >
          Sign up
        </Button>
        </Link>
      </Flex>

      
    </Box>
  );
};

export default Header;