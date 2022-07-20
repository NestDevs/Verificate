import React, { useContext, useEffect } from "react";
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
import Signup from "./component/Signup";
import { Completed } from "./pages/Test/Completed/Index";
import { Newtest } from "./pages/Test/New";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route  path="/completed" element={<Completed/>}></Route> 
        <Route  path="/newtest" element={<Newtest/>}></Route> 
        {/* <Route  path="/dashboard/certificate" element={<Certificates/>}></Route> 
        <Route  path="/dashboard/payment" element={<Payment/>}></Route>  */}
      </Routes>
    </Router>
  );
}

export default App;
