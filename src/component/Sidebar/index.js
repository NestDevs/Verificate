import React from "react";
import { Link } from "react-router-dom";
import { Box, Icon, Text, Flex, Image, 
    
   } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlinePencil } from "react-icons/hi";
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {TbFileCertificate} from "react-icons/tb"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FaPowerOff} from "react-icons/fa"
import logo from "../../asset/image/logo.png";

const Sidebar = () => {
  return (

    <Box>
        <Flex flexDirection="column">
          <Box >
           <Image pos="relative" right="4"  pr="10px" m="30px auto" w="63%" h="50%" src={logo} alt="logo"/>
          </Box>
          <Box m="0 auto" w="100%">
            <Flex  flexDirection="column"   fontSize="2xl" my="30px" spacing={3} color="white">
                <Box py="15px 1px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex>
                <Icon as={MdOutlineDashboardCustomize} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Dashboard</Text>
                </Flex>
                </Link>
                </Box>

            </Flex>
            
            <Flex fontSize="2xl"  color="white" py="15px 10px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex pos="relative" bottom="2">
                <Icon as={HiOutlinePencil} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Test</Text>
                <Icon as={IoIosArrowDown} pos="relative" top="4px" left="8" w={8} h={8} />
                </Flex>
                </Link>
                </Flex> 
                <Flex fontSize="2xl" color="white" mt="4" py="15px 10px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex>
                <Icon as={TbFileCertificate} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Certificates</Text>
                </Flex>
                </Link>
                </Flex> 
                <Flex fontSize="2xl" color="white" mt="4" py="15px 10px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex>
                <Icon as={AiOutlineQuestionCircle} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Help/Support</Text>
                </Flex>
                </Link>
                </Flex> 
                <Flex fontSize="2xl" color="white" mt="4" py="15px 10px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex>
                <Icon as={FiSettings} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Settings</Text>
                </Flex>
                </Link>
                </Flex> 
                <Flex fontSize="2xl" color="white" mt="52" py="15px 10px" _hover={{bg:"white", color:"#03064A"}}>
                <Link to="/dashboard">
              <Flex>
                <Icon as={FaPowerOff} pos="relative" top="4px" left="16" w={8} h={8} />
                <Text ml="14">&nbsp; Logout</Text>
                </Flex>
                </Link>
                </Flex> 
          </Box>
          
        </Flex>

    </Box>


    
  );
};

export default Sidebar;