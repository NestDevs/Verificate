import React from 'react'
import Header from '../../component/Header'
import img1 from '../../asset/image/showcase.png'
import img2 from '../../asset/image/showcase1.png'
import img3 from '../../asset/image/showcase2.png'
import img4 from '../../asset/image/verify.png'
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  return (
<Flex flexDirection="row">
      <Header/>
      
      <Box w="100vw" h="110vh">
        <Image  left="160px" top="50px" w="40%" h="85%" zIndex={3} pos="absolute" src={img1}/>
        <Image zIndex={2} w="50%" h="100%" pos="absolute" src={img2}/>
        <Image  w="55%" h="100%" pos="absolute" src={img3}/>
      </Box>
      <Box>
      <Image   pos="relative" top="32" right="64" src={img4}/>
      <Box borderRadius="3px solid #03064A" ></Box>
      </Box>
      </Flex> 
   
  )
}

export default Home;