import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react";
import Sidebar from '../../component/Sidebar';
import { Grid, GridItem } from '@chakra-ui/react'
import Header from '../../component/Navbar/Header';
import Body from '../../component/Navbar/Body';

const Dashboard = () => {
  return (
    <Grid
    h='100vh'
    templateRows='repeat(4, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={6}
  >
    <GridItem rowSpan={4} colSpan={1} bg='#03064A' >
        <Sidebar/>
    </GridItem>
     <GridItem colSpan={4} rowSpan={1} bg='white' >
        <Header/>
     </GridItem>
   
     <GridItem colSpan={4} rowSpan={1} bg='white' >
        <Body/>
     </GridItem>
   
  </Grid>
  )
}

export default Dashboard