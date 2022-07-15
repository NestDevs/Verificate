import React , { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
// import Header from "./component/Header";
import Home from "./pages/Home/Home";

function App() {
return(
    <Router>
    <Box >
     <Box>
      <Home/>
      </Box>
     
      <Routes>
        
      </Routes>
  
    </Box>
  </Router>
    
)
}

export default App;