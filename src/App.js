import React , { useContext, useEffect } from "react";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
