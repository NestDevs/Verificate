import React, { useContext, useEffect } from "react";

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
import { Completed } from "./pages/Test/Completed/Completed";
import { Newtest } from "./pages/Test/New/Newtest";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Dash } from "./component/Dash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
