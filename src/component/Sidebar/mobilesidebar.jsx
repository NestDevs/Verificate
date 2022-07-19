import React from 'react'
import { Link } from "react-router-dom";
import { 
  Box, 
  Icon, 
  Text, 
  Flex, 
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlinePencil } from "react-icons/hi";
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {TbFileCertificate, TbFileX} from "react-icons/tb"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FaPowerOff} from "react-icons/fa"
import logo from "../../asset/image/logo.png";

export const mobilesidebar = () => {
  return (
   <Box bgColor="red" zIndex="100" display={{base:"block", md:"none",}}>
    <Flex bg="red" h="100vh">
        <Link to="/dashboard">
          <Box>
            <Icon color="white" as={MdOutlineDashboardCustomize}/>
          </Box>
        </Link>
    </Flex>
   </Box>
  )
}
