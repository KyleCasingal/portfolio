import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from "@chakra-ui/react";
import Nav from "./Nav";
import Home from "./Home";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#282828",
      },
    },
  },
});
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Nav></Nav>
      <Home></Home>
    </Box>
  </ChakraProvider>
);
