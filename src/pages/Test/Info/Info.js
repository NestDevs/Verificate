import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
    InputGroup,
    InputRightElement,
   Text,
   Icon,
   Center,
   CopyIcon,
   Input ,
   Stack
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
export const Info = () => {
  return (
    <Box w="100%" >
    <Flex mx="auto" mb="40px" borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" w={{base:"90%", md:"80%", lg:"70%"}} textAlign="center" flexDirection="column">
      <Text mt="8" color="#03064A" fontWeight="600" lineHeight="48px" fontSize="32px">
        Test Infomation
        
      </Text>
      

      <Center >
      <Button p="30px 40px" bg="#03064A"  color="#ffffff" fontSize="24px" fontWeight="600" borderRadius="47px"  m="30px auto" colorScheme="#03064A"
        _hover={{
        bg: "#03064A",
        border: "1px solid primary",
        opacity: "0.9",
      }}
      >
    Start Test
   </Button>
      </Center>
      
      </Flex>
  </Box>
  )
}
