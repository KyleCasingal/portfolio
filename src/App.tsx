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
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" _dark={{
      bg: "#000000"
    }}>
      <Nav></Nav>
      <Home></Home>
    </Box>
  </ChakraProvider>
)
