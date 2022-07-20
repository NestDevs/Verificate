import React from "react";
import { Link } from "react-router-dom";
import { 
  Box, 
  Icon, 
  Text, 
  Flex, 
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlinePencil } from "react-icons/hi";
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {TbFileCertificate, TbFileX} from "react-icons/tb"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FaPowerOff} from "react-icons/fa"
import logo from "../../asset/image/logo.png";

const Sidebar = () => {
  return (
    <Box h="100vh"  w="15%" bg="#03064A"  pos="fixed">
      <Flex  justify="space-between" display={{base:"none", md:"block",}}  flexDirection="column" >
        <Box h="170px" w="100%"  >
          <Image    m="30px auto" w={{base:"0", md:"55%", lg:"65%"}} h={{base:"0", md:"35%", lg:"45%"}} src={logo} alt="logo"/>
        </Box>
        <Box m="10px auto" w="100%">
        <Flex  fontSize="lg" fontWeight="500" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/dashboard/dash" 
            style={{
               width:"160px",
              }} >
              <Flex py={2}  alignItems="center">
                <Icon as={MdOutlineDashboardCustomize}   />
                <Text>&nbsp; Dashboard</Text>
              </Flex>
            </Link>
        </Flex>
        <Accordion allowMultiple>
  <AccordionItem >
    <h2 >
      <AccordionButton color="white" >
        <Flex ml="35px" fontWeight="500" align="center" fontSize="lg" w="110px">
            <Icon mr="10px" as={HiOutlinePencil}   />
          Test
        </Flex>
        <AccordionIcon fontWeight="500" fontSize="lg"  color="white" justify="center"   />
      </AccordionButton>
    </h2>
    <AccordionPanel p="5px 0 0 0"  fontWeight="500" fontSize="lg" bg="white" color="#03064A" justify="center" >
                <Link  to="/dashboard/completed" 
            style={{
               width:"160px",
              
              }}>
              <Flex  justify="center">
                <Text> Completed Test</Text>
              </Flex>
            </Link>
    </AccordionPanel>
    <AccordionPanel pb="5px" fontWeight="500" fontSize="lg" bg="white" color="#03064A" justify="center" >
                <Link to="/dashboard/newtest" 
            style={{
               width:"160px",
              }} >
              <Flex  justify="center">
                <Text> Take new test</Text>
              </Flex>
            </Link>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
        <Flex fontWeight="500" fontSize="lg" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/certificate" 
            style={{
               width:"160px",
              }} >
              <Flex py={2}  alignItems="center">
                <Icon as={TbFileCertificate}   />
                <Text>&nbsp; Certificates</Text>
              </Flex>
            </Link>
        </Flex>
        <Flex fontWeight="500" fontSize="lg" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/dashboard" 
            style={{
               width:"160px",
              }} >
              <Flex py={2}  alignItems="center">
                <Icon as={AiOutlineQuestionCircle}   />
                <Text>&nbsp; Help/Support</Text>
              </Flex>
            </Link>
        </Flex>
        <Flex fontWeight="500" fontSize="lg" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/dashboard" 
            style={{
               width:"160px",
              }} >
              <Flex py={2}  alignItems="center">
                <Icon as={FiSettings}   />
                <Text>&nbsp; Settings</Text>
              </Flex>
            </Link>
        </Flex> 
        </Box>
        <Flex mt="240px" fontWeight="500" fontSize="lg" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/dashboard" 
            style={{
               width:"160px",
              }} >
              <Flex   alignItems="center">
                <Icon as={FaPowerOff}   />
                <Text>&nbsp; Logout</Text>
              </Flex>
            </Link>
        </Flex>
      </Flex>

</Box>



    
  );
};

export default Sidebar;