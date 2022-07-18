import React , { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Grid, 
  GridItem,
} from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./component/Sidebar";
import Header from "./component/Navbar/Header";
import { Completed } from "./pages/Test/Completed/completed";
import { Newtest } from "./pages/Test/New/Newtest";
import { Certificates } from "./pages/certificate/Certificates";

function App() {
return(
  <Router>
    <Grid h='100vh' templateRows='repeat(4, 1fr)' templateColumns='repeat(5, 1fr)' gap={6}>
      <GridItem w="300px" rowSpan={4} colSpan={1} bg='#03064A' >
        <Sidebar/>
      </GridItem>
      <GridItem  colSpan={4} rowSpan={1} bg='white' >
        <Header/>
      </GridItem>
      <GridItem colSpan={4} rowSpan={1} bg='white' >
        <Routes>
          <Route path="*" element={<Home/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route> 
          <Route exact path="/test/completed" element={<Completed/>}></Route> 
          <Route exact path="/test/newtest" element={<Newtest/>}></Route> 
          <Route exact path="/certificate" element={<Certificates/>}></Route> 
        </Routes>
      </GridItem>
    
    </Grid>
    {/* </Routes> */}
  </Router>
    
)
}

export default App;