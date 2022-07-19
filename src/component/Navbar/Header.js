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
    <Flex m="30px auto" ml="50px" pb="8"  borderBottom="5px solid rgba(0, 0, 0, 0.1)">
      <Flex pos="relative"  alignItems="flex-end">
       <Image h="200px" w="200px" src={prof} alt="professor"/>
       
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
         bottom="120px"
         left="160px"
           pos="absolute"
        >
          intermediate
        </Button>
        
        
  
      
      
        <Box>
          <Flex flexDirection="column" ml="40px">
          <Text color="#03064A;" fontWeight="700" fontSize="36px">
         AFOLABI JIDE
          </Text>
          <Text fontSize="20px" lineHeight="30px"   h="30px" color="rgba(0, 0, 0, 0.5);" fontWeight="600" >
          afolabijide@gmail.com
          </Text>
          </Flex>
          
         
        
        </Box>

        <Box ml="70px">
          <Flex flexDirection="column">
            <Flex>
            <Text color="#03064A;" fontWeight="700" mr="4px" fontSize="36px">Skill</Text>
            <Text color="#E70909" fontWeight="semibold"  w="28px" h="28px"  fontSize="36px"> +</Text>
          
            </Flex>
         
          <Text fontSize="20px" lineHeight="20px"   h="30px" color="rgba(0, 0, 0, 0.5);" fontWeight="600">
         python
          </Text>

          </Flex>
          
        </Box>
        
    </Flex>
    </Flex>
  )
}

export default Header