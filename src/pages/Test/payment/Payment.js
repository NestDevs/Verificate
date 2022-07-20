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
// import { useWeb3 } from '../../../'
import { useWeb3 } from '../../../hooks/Web3Client.hook'

export const Payment = () => {
  const { address } = useWeb3()

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
  {/* <Input mx="auto" w="75%" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" 
  placeholder={address} /> */}
  <InputRightElement mr={{base:"85px", md:"150px"}} children="copy  address" />
  {/* <Center> */}

  <Text ml={"14%"} boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" center >{address}</Text>
  {/* </Center> */}

   </InputGroup>
  <InputGroup>
    
    <Input mx="auto"  w="75%" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" 
    placeholder='Reciepient Address' />
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
    Pay Now
   </Button>
      </Center>
      
      </Flex>
  </Box>
  )
}
