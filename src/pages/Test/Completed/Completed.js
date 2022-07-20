import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
   Text,
   Icon,
  } from "@chakra-ui/react";
  import {AiOutlineCheckCircle} from "react-icons/ai";


export const Completed = () => {
  return (
    <Box  m="0 auto" w={{base:"90%", md:"90%", lg:"85%"}}>
        <Text fontSize="2xl" fontWeight="700" textAlign="center">Completed Test</Text>
          <Flex  justifyContent="space-between" alignItems={{base:"center", md:"none"}} direction={{base:"column", md:"row"}} mt="120px" mx=" auto">
            <Flex mb="30px"  w={{base:"70%", md:"220px", lg:"280px"}} borderRadius="14px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" py="20px" flexDirection="column" justifyContent="center">
                <Flex color="#03064A" fontWeight="650" fontSize={{base:"20px", md:"20px", lg:"24px"}} m="0 auto" align="center">
                <Icon as={AiOutlineCheckCircle}/>&nbsp;
                Text Completed
                </Flex>
                <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Test type: Python</Text>
                <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Date:30/06/2022</Text>
                <Text pr="4px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Time:2:52pm</Text>
                <Button
                    _hover={{
                        bg: "#03064A",
                        border: "1px solid primary",
                        opacity:"0.8",
                    }}
        
                    bg="#03064A"
                    color="white"
                    fontSize="15px"
                    fontWeight="700"
                    borderRadius="47px"
                    width="130px"
                    m="10px auto"
                    mt="29px"
                >
                    View
                </Button>
            </Flex>
            <Flex  w={{base:"70%", md:"220px", lg:"280px"}} borderRadius="14px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" py="20px" flexDirection="column" justifyContent="center">
                <Flex color="#03064A" fontWeight="650" fontSize={{base:"20px", md:"20px", lg:"24px"}} m="0 auto" align="center">
                <Icon as={AiOutlineCheckCircle}/>&nbsp;
                Text Completed
                </Flex>
                <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Test type: React.js</Text>
                <Text pl="22px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Date:30/06/2022</Text>
                <Text pr="4px" m="0 auto" fontWeight="600" color="rgba(3, 6, 74, 0.6)">Time:2:52pm</Text>
                <Button
                    _hover={{
                        bg: "#03064A",
                        border: "1px solid primary",
                        opacity:"0.8",
                    }}
        
                    bg="#03064A"
                    color="white"
                    fontSize="15px"
                    fontWeight="700"
                    borderRadius="47px"
                    width="130px"
                    m="10px auto"
                    mt="29px"
                >
                    View
                </Button>
            </Flex>
        </Flex>
    </Box>
  )
}
