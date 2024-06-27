import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Nav from "./Nav";
import Home from "./Home";

export const App = () => (
  <ChakraProvider theme={theme} bg="#282828">
    <Box textAlign="center" fontSize="xl">
      <Nav></Nav>
      <Home></Home>
    </Box>
  </ChakraProvider>
)
