import { 
    Box, 
    Icon, 
    Text, 
    Flex, 
    Button,
  } from "@chakra-ui/react";
import React , { useContext } from 'react'
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import {  Web3Address } from '../component/Web3Address'
import {Web3Button} from '../component/Web3Button'
import { AiOutlineCheckCircle } from "react-icons/ai";
import AppContext from "../contexts/AppContext";


export const Dash = () => {
  const { user } = useContext(AppContext);
  console.log({user})

  return (
    <Box >
    <Flex m="0 auto" w="80%"  borderRadius="3px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" textAlign="center" flexDirection="column">
    
      <Text mt="8" color="#03064A" fontWeight="600" lineHeight="48px" fontSize="32px">
        Test your python skill
      </Text>
      <Text  m="10px auto" w={{base:"90%", md:"420px", lg:"80%"}}  fontWeight="500" lineHeight="30px" fontSize="24px" color="rgba(0, 0, 0, 0.6)" >
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
      <Link to="/dashboard/payment" 
        >
        Take Test
        
        </Link>
      </Button>
    </Flex>
 <Flex   h="fit-content" m="0 auto"  w="80%" mt="50px"  flexDirection={{base:"column", md:"row"}} align="center">
    <Flex  mb="50px" h="200px" w={{base:"80%", md:"33%"}} mx="auto" p="10px 10px" borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" flexDirection="column" justifyContent="center">
        <Text m="0 auto" color="#03064A" fontSize="24px" fontWeight="650">Recent Activities</Text>
        <Flex color="#03064A" fontWeight="700" fontSize="20px" m="0 auto" align="center">
          <Icon as={AiOutlineCheckCircle}/>&nbsp;
          Text Completed
        </Flex>
        <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Test type:python</Text>
        <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Date:30/06/2022</Text>
        <Text pr="4px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Time:2:52pm</Text>
     </Flex>
       <Flex mb="50px" h="200px" w={{base:"80%", md:"33%"}} mx="auto"  borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"   flexDirection="column" color="#03064A" fontWeight="700" fontSize="20px"  align="center">
          <Box m="auto">
          <Flex   align="center">
            <Icon as={AiOutlineCheckCircle}/>&nbsp;
            Profile Setup
          </Flex>
          <Text fontSize="20px" pl="30px" fontWeight="610" color="rgba(3, 6, 74, 0.6)">100% complete</Text>
          </Box>
        </Flex>
        <Flex p="10px" mb={{base:"100px", md:"50px"}} h="200px" w={{base:"80%", md:"33%"}} mx="auto" fontSize="20px"  bg="#03064A"   borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  flexDirection="column" color="#03064A" fontWeight="700">
        <Flex w="80%" m="0 auto" align="center" color="white">
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
              <Box>
              <Web3Button/>
              <Web3Address/>
              </Box>
            </Button>
        </Flex> 
        </Flex>
    </Flex>
    </Box>

  )
}
