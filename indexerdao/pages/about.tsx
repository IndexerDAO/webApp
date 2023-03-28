import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiFillRocket, AiFillBulb, AiFillNotification } from "react-icons/ai";

import { ReactElement } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";

export default function about() {
  return <About />;
}
