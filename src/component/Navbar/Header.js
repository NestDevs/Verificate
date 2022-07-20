import React from 'react'
import {
  Box,
  Button,
  Flex,
  Image,
 Text,
 Icon,
} from "@chakra-ui/react";
import prof from "../../asset/image/proffessor.png"
import {AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <Flex  mx="auto" mb="30px"  mt="60px" pb="8"  borderBottom="5px solid rgba(0, 0, 0, 0.1)">
      <Flex pos="relative" >
       <Image h={{base:"120px",md:"120px", lg:"140px"}} w={{base:"120px",md:"120px", lg:"140px"}} src={prof} alt="professor"/>
       <Button
          _hover={{
            bg: "red",
            border: "1px solid primary",
            opacity: "0.8",
          }}
          
          bg=" #E70909"
          color="#ffffff"
          fontSize={{base:"15px", md:"15px", lg:"18px"}}
          fontWeight={{base:"600", md:"700"}}
          borderRadius="47px"
          px={2}
          py={0.5}
         bottom={{base:"65px",md:"65px", lg:"70px"}}
         left={{base:"90px", md:"90px", lg:"110px"}}
           pos="absolute"
        >
          intermediate
        </Button>
      </Flex>
      <Flex alignItems="flex-end">
        <Flex  flexDirection="column" ml={{base:"20px", md:"40px"}}>
          <Text color="#03064A;" fontWeight="600" fontSize={{base:"28px", md:"34px"}}>
            AFOLABI JIDE
          </Text>
          <Text fontSize={{base:"18px", md:"20px"}} fontWeight="500" lineHeight="20px"   color="rgba(0, 0, 0, 0.5);"  >
            afolabijide@gmail.com
          </Text>
        </Flex>
        <Flex  flexDirection="column"  ml={{base:"20px", md:"40px"}}>
          <Text color="#03064A;" fontWeight="600" fontSize={{base:"28px", md:"34px"}}>
            Skill 
            <span style={{
              color:"#E70909",
              marginLeft:"15px",
              
            }}>+</span>
          </Text>
          <Text fontSize={{base:"18px", md:"20px"}} lineHeight="20px" fontWeight="500"   color="rgba(0, 0, 0, 0.5);" >
            python
          </Text>
        </Flex>
      </Flex>
    </Flex>
    
  )
}

export default Header