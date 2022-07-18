import React from "react";
import { Link } from "react-router-dom";
import { Box, Icon, Text, Flex, Image,Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
    
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
    <Box h="100vh"  w="300px"  pos="fixed">
      <Flex  justify="space-between"  flexDirection="column" >
        <Box h="170px" w="100%"  >
          <Image    m="30px auto" w="65%" h="45%" src={logo} alt="logo"/>
        </Box>
        <Box m="10px auto" w="100%">
        <Flex  fontSize="lg" fontWeight="500" color="white" justify="center"   _hover={{bg:"white", color:"#03064A" }}>
            <Link to="/dashboard" 
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
  <AccordionItem><h2>
      <AccordionButton>
        <Box fontWeight="500" fontSize="lg" color="white" justify="center"    style={{
               width:"160px",
              }}>
                <Icon mr="10px" as={HiOutlinePencil}   />
          Test
        </Box>
        <AccordionIcon fontWeight="500" fontSize="lg" color="white" justify="center"   />
      </AccordionButton>
    </h2>
    <AccordionPanel m="0 auto" fontWeight="500" fontSize="lg" color="white" justify="center"    style={{
               width:"160px",
              }} >
     <Link to="/test/completed" 
            style={{
               width:"160px",
              }} >
              <Flex   alignItems="center">
               
                <Text>Completed Test</Text>
              </Flex>
            </Link>
    </AccordionPanel>
    <AccordionPanel m="0 auto" fontWeight="500" fontSize="lg" color="white" justify="center"    style={{
               width:"160px",
              }} >
                <Link to="/test/newtest" 
            style={{
               width:"160px",
              }} >
              <Flex py={2}  alignItems="center">
               
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