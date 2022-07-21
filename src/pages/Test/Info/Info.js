import React from 'react'
import { Link } from "react-router-dom"
import {
    Box,
    Button,
    Flex,
   Text,
   Center,
   CopyIcon,
  } from "@chakra-ui/react";

export const Kickstart = () => {
  return (
    <Box  w="100%">
        <Flex my="30px" mx="auto" w={{base:"90%", md:"80%", lg:"80%"}}  direction="column" align="center" textalign="center"  borderRadius="8px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)" textAlign="center" flexDirection="column">
            <Text fontSize="24px" mt="20px" fontWeight="600" color="#03064A">Test Information</Text>
            <Flex mt="30px" mb="20px" mx="auto" w="80%" justify="space-between">
                <Flex align="center">
                    <Text fontSize="24px"  color="#03064A" fontWeight="700">Test Type: </Text>
                    <span style={{
                        color: "#03064A",
                        fontSize: "20px",
                        fontWeight: "500",
                        }}
                    > Python skill Test</span>
                </Flex>
                <Flex align="center">
                    <Text fontSize="24px"  color="#03064A" fontWeight="700">Test Duration: </Text>
                    <span style={{
                        color: "#03064A",
                        fontSize: "20px",
                        fontWeight: "500",
                        }}
                    > 1hr:60min</span>
                </Flex>
            </Flex>

            <Flex align="center" mb="20px">
                <Text fontSize="24px" color="#03064A" fontWeight="700">Test question: </Text>
                <span style={{
                    color: "#03064A",
                    fontSize: "20px",
                    fontWeight: "500",
                    }}
                > 1hr:60min</span>
            </Flex>

            <Flex align="center" mb="20px">
                <Text fontSize="24px" color="#03064A" fontWeight="700">Test date: </Text>
                <span style={{
                    color: "#03064A",
                    fontSize: "20px",
                    fontWeight: "500",
                    }}
                > 30/06/2022</span>
            </Flex>

            <Text mb="50px" color="#03064A" opacity="0.6" fontsize="20px" fontWeight="700">Note: The minimum pass score for this test is 80%</Text>

                <Button p="30px 40px" bg="#03064A"  color="#ffffff" fontSize="24px" fontWeight="600" borderRadius="47px"  m="30px auto" colorScheme="#03064A"
                    _hover={{
                    bg: "#03064A",
                    border: "1px solid primary",
                    opacity: "0.9",
                }}
                >
                <Link to="/dashboard/one">
                    Start Text
                </Link>
                 </Button>

                 
        </Flex>
    </Box>
  )
}