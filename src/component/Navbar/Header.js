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
    <Flex m="30px auto"  pb="8"  borderBottom="5px solid rgba(0, 0, 0, 0.1)">
      <Flex pos="relative" >
       <Image h="150px" w="150px" src={prof} alt="professor"/>
       <Button
          _hover={{
            bg: "red",
            border: "1px solid primary",
            opacity: "0.8",
          }}
          bg=" #E70909"
          color="#ffffff"
          fontSize="18px"
          fontWeight="700"
          borderRadius="47px"
          width="130px"
         bottom="90px"
         left="120px"
           pos="absolute"
        >
          intermediate
        </Button>
      </Flex>
      <Flex alignItems="flex-end">
        <Flex  flexDirection="column" ml="40px">
          <Text color="#03064A;" fontWeight="600" fontSize="34px">
            AFOLABI JIDE
          </Text>
          <Text fontSize="20px" fontWeight="500" lineHeight="20px"   color="rgba(0, 0, 0, 0.5);"  >
            afolabijide@gmail.com
          </Text>
        </Flex>
        <Flex  flexDirection="column" ml="40px">
          <Text color="#03064A;" fontWeight="600" fontSize="34px">
            Skill 
            <span style={{
              color:"#E70909",
              marginLeft:"15px",
              
            }}>+</span>
          </Text>
          <Text fontSize="20px" lineHeight="20px" fontWeight="500"   color="rgba(0, 0, 0, 0.5);" >
            python
          </Text>
        </Flex>
      </Flex>
        {/* <Box ml="70px">
          <Flex flexDirection="column">
            <Flex>
            <Text color="#03064A;" fontWeight="700" mr="4px" fontSize="36px">Skill</Text>
            <Text color="#E70909" fontWeight="semibold"  w="28px" h="28px"  fontSize="36px"> +</Text>
          
            </Flex>
         
          <Text fontSize="20px" lineHeight="20px"   h="30px" color="rgba(0, 0, 0, 0.5);" fontWeight="600">
         python
          </Text>

          </Flex>
          
        </Box> */}
        
    </Flex>
    
  )
}

export default Header