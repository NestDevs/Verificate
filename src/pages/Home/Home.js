import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import img1 from '../../asset/image/showcase.png'
import img2 from '../../asset/image/showcase1.png'
import img3 from '../../asset/image/showcase2.png'
import img4 from '../../asset/image/verify.png'
import img5 from '../../asset/image/light.png'
import img6 from '../../asset/image/ion.png'
import img7 from '../../asset/image/face.png'
import img8 from '../../asset/image/tv.png'
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
      <Navbar/>
      
      <Box w="100vw"  h="100vh">
        <Image  left="80px" top="90px" w="45%" h="85%" zIndex={3} pos="absolute" src={img1}/>
        <Image zIndex={2} w="56%" h="100%" pos="absolute" src={img2}/>
        <Image  w="60%" h="100%" pos="absolute" src={img3}/>
      </Box>
      <Box>
      <Image pos="relative" top="28" right="89px" src={img4}/>
      <Box h="4px" w="330px" borderRadius="1px solid #03064A" bg="#03064A" left="20" pos="relative" top="40" ></Box>
      <Box pos="absolute" top="4">
      <Image pos="relative" h="100px" top="330px" left="300px" src={img7}/>
      <Image pos="relative" h="50px" top="180px"  left="190px" src={img5}/>
      <Image pos="relative" h="100px" top="330px"  right="15px" src={img6}/>
      <Image pos="relative" h="50px" top="160px"  left="115px" src={img5}/>
      
      <Image pos="relative" h="50px" top="190px"  left="165px" src={img5}/>
      
      <Image pos="relative" h="100px" top="200px"  left="110px" src={img6}/>
      <Image pos="relative" h="100px" top="150px"  right="105px" src={img5}/>
      <Image pos="relative" h="50px" top="25px"  left="30px" src={img5}/>
      <Image pos="absolute" h="90px" top="600px"  left="230px" src={img8}/>
         <Image pos="absolute" h="80px" top="626px"  left="80px" src={img8}/>
      </Box>
     
      <Text w="457px" lineHeight="45px" fontSize="30px" h="135px" fontWeight="600" color="rgba(3, 6, 74, 0.4);" pos="absolute" top="419px">with verificate you can test your skills and earn certificate in form of an NFT</Text>
      <Button
          _hover={{
            bg: "#03064A",
            border: "1px solid primary",
            opacity: "0.8",
          }}
          pos="absolute"
          bottom="20px"
          right="160px"
          bg="#03064A"
          color="#ffffff"
          fontSize="15px"
          fontWeight="700"
          borderRadius="47px"
          width="150px"
          
        >
          Get Started
        </Button>
      </Box>


      </Flex> 
   
  )
}

export default Home;