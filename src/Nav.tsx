"use client";

import { color } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
}

const Links = ["Tech Stack", "Projects", "Experience", "Certificates", "Contact"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      fontFamily="Overpass Mono"
      fontSize="sm"
      color="#fbf1c7"
      as="a"
      px={1}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "#fb4934",
      }}
      _focus={{
        textDecoration: "none",
        color: "#fabd2f",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
          <Box px={25} py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
          <HStack spacing={4} alignItems={"end"}>
            <HStack
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
