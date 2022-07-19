// setting up for chakra ui is as folows, import the extendTheme function  

import {extendTheme} from "@chakra-ui/react"

// extend the theme to include custom colors, fonts e.t.c

const customeTheme = extendTheme({
    colors : {
        primary: "#03064A",
        bgGrad1: "linear-gradient(180deg, #6D09AB 0%, rgba(2, 80, 114, 0) 100%);",
        light: "#FFFFFF",
        primaryAlt: "rgba(3, 6, 74, 0.4);",
        danger: "#E70909",
    },
    fonts: {},
    fontSizes: {},
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  });
  


export const theme = extendTheme({ customeTheme })

