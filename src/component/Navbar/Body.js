import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
   Text,
   Icon,
   Grid, 
   GridItem, 
  } from "@chakra-ui/react";
  import {AiOutlineCheckCircle } from "react-icons/ai";
  

const Body = () => {
  return (
    <Flex justifyContent="center">
    <Grid
    h='auto'
    w="80%"
    // templateRows='repeat(7, 1fr)'
    templateColumns='repeat(6, 1fr)'
    gap={4}
  >
     <GridItem  colSpan={6}  borderRadius="3px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"> 
        <Flex textAlign="center" flexDirection="column">
        
          <Text mt="8" color="#03064A" fontWeight="600" lineHeight="48px" fontSize="32px">
            Test your python skill
          </Text>
          <Text  m="10px auto" w="590px"  fontWeight="500" lineHeight="30px" fontSize="24px" color="rgba(0, 0, 0, 0.6)" >
            This test has been Examined by experts and each level 
            of expertise has been given appropriate questions 
            to suit your level.
          </Text>
          <Button
          _hover={{
            bg: "#03064A",
            border: "1px solid primary",
            opacity: "0.9",
          }}
          px="30px"
          bg="#03064A"
          color="#ffffff"
          fontSize="22px"
          fontWeight="700"
          borderRadius="47px"
          width="130px"
        m="30px auto"
    colorScheme="#03064A"
        >
          Take Test
        </Button>
          </Flex>
     </GridItem>
    <GridItem colSpan={2} h="auto" borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)">
      <Flex py="5px" flexDirection="column" justifyContent="center">
        <Text m="0 auto" color="#03064A" fontSize="24px" fontWeight="650">Recent Activities</Text>
        <Flex color="#03064A" fontWeight="700" fontSize="20px" m="0 auto" align="center">
          <Icon as={AiOutlineCheckCircle}/>&nbsp;
          Text Completed
        </Flex>
        <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Test type:python</Text>
        <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Date:30/06/2022</Text>
        <Text pr="4px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Time:2:52pm</Text>
      </Flex>
    </GridItem>
    <GridItem  colSpan={2} h="auto"  borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  >
    <Flex h="100%"  m="auto" flexDirection="column"color="#03064A" fontWeight="700" fontSize="20px"  align="center">
      <Box m="auto" >
      <Flex  align="center">
        <Icon as={AiOutlineCheckCircle}/>&nbsp;
        Profile Setup
      </Flex>
      <Text fontSize="20px" pl="30px" fontWeight="610" color="rgba(3, 6, 74, 0.6)">100% complete</Text>
      </Box>
    </Flex>
    </GridItem>
    <GridItem px="5px" colSpan={2} h="auto" bg="#03064A"  borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  >
    <Flex justifyContent="center" h="100%" align="center"  flexDirection="column"color="#03064A" fontWeight="700" fontSize="20px" >
      <Box m="auto" >
      <Flex  align="center" color="white">
        <Text textAlign="center"  m="10px auto" fontSize="20px"   fontWeight="650" lineHeight="30px">
         Connect your wallet before taking test
        </Text>
      </Flex>
      <Flex m="auto">
      <Button
          _hover={{
            bg: "white",
            border: "1px solid primary",
            opacity: "0.9",
          }}
        
          bg="white"
          color="#03064A"
          fontSize="15px"
          fontWeight="700"
          borderRadius="47px"
          width="130px"
           m="10px auto"
           colorScheme="white"
        >
          Connect wallet
        </Button>
        </Flex>
      </Box>
    </Flex>
    </GridItem>
   
  </Grid>
  </Flex>
  )
}

export default Body