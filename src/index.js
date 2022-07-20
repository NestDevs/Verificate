import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'

import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { theme } from './theme';
import { AppProvider } from "./contexts/AppContext";

function getLibrary(provider, connector,) {
  return new Web3Provider(provider)
}

const element  = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(
 <ChakraProvider themes={theme}>
      <AppProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
    <App/>
    </Web3ReactProvider>
    </AppProvider>
 </ChakraProvider>)    