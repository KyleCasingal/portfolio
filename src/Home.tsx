"use client";

import { color } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container maxW={"100%"} py={"10em"}>
        <Heading>
          <Text
            color="#fbf1c7"
            fontFamily="Overpass Mono"
            fontSize="3em"
            fontWeight="700"
            _hover={{
              color: "#d3869b",
            }}
          >
            {"{root.Kyle}"}
          </Text>
        </Heading>
        <Text color="#fbf1c7" fontFamily="Overpass Mono">
          I'm Kyle Casingal. A full stack developer.
        </Text>
      </Container>
    </>
  );
}
