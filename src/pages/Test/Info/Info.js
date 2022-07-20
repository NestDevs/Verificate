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
        Payment
        <Text fontSize="16px" color="#00000099" fontWeight="500">Pay Gas fee of $2 Before taking the test</Text>
      </Text>
      <Stack  spacing={12}>
   <Text>Verificate Wallet Address</Text>
    <InputGroup>
  <Input mx="auto" w="75%" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  placeholder='fgWMht13467NJGF4568' />
  <InputRightElement mr={{base:"85px", md:"150px"}} children="copy" />
   </InputGroup>
  <InputGroup>
    
    <Input mx="auto"  w="75%" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" placeholder='Reciepient Address' />
    <InputRightElement mr={{base:"85px", md:"150px"}} children="Paste" />
  </InputGroup>
  <InputGroup>
 <Input  mx="auto" w="75%" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" placeholder='Amount' />
 <InputRightElement mr={{base:"140px", md:"200px"}}  children="MAX " />
 <InputRightElement mr={{base:"90px", md:"140px"}}  children="USD " />
  </InputGroup>
</Stack>
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
