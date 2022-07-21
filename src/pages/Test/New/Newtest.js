import React, {useState} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
 Text,
 Icon,
 Center,
} from "@chakra-ui/react";


const testName = [
 {
  name: "Python",
 },
 {
  name: "React.js",
 },
 {
  name: "Javascript",
 },
 {
  name: "Solidity",
 },
]
export const Newtest = ({ name }) => {
  const { state } = useLocation()
  const navigate = useNavigate();

  const [test, selectTest] = useState("")
  console.log({state})
  return (
    <Box  w="100%" >
      <Flex mb="50px" mt="30px" mx="auto" borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" w={{base:"90%", md:"80%", lg:"70%"}} textAlign="center" flexDirection="column">
        <Text mt="8" color="#03064A" fontWeight="600" lineHeight="48px" fontSize="32px">
          Take a new test
        </Text>
        <Text  m="10px auto" w={{base:"90%", md:"420px", lg:"80%"}}  fontWeight="500" lineHeight="30px" fontSize="24px" color="rgba(0, 0, 0, 0.6)" >
          This test has been Examined by experts and each level 
          of expertise has been given appropriate questions 
          to suit your level.
        </Text>
        <Center>
        <Flex flexWrap="wrap" justify="space-around"    w="90%">
        
        {testName.map(({name}) => {
          return(
           
            <Button py="26px"  borderRadius="54px" flexBasis="250px"  bg="white" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" color="#03064A" fontSize="24px"    m="30px auto" 
            _hover={{
            
            border: "2px solid #03064A",
            
          }}

          onClick={()=>{
            selectTest(name)
            console.log(test)
          }}
          >
          {name}
        </Button>
       
         
          )
        })}
            
            </Flex>  
            </Center>
       
       
        <Button px="30px" bg="#03064A" color="#ffffff" fontSize="22px" fontWeight="700" borderRadius="47px" width="130px" m="30px auto" colorScheme="#03064A"
          _hover={{
          bg: "#03064A",
          border: "1px solid primary",
          opacity: "0.9",
        }}
        onClick={()=>{
          navigate('/dashboard/payment',
          options= { replace: true, state:{test} })
        }}
        >
       {/* <Link to="/dashboard/payment" 
            >
            // Take Test
             
            </Link> */}

      </Button>
        </Flex>
    </Box>
  )
}
