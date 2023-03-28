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

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function about() {
  return (
    <>
      <Header />

      <Container maxW={"7xl"} py={100}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={7}>
            <Text
              textTransform={"uppercase"}
              color={"blue.500"}
              fontWeight={800}
              fontSize={"lg"}
              bg={useColorModeValue("green.100", "green.700")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              About Us
            </Text>
            <Heading>
              We are a vibrant and dedicated community of Indexers and
              technology enthusiasts.
            </Heading>

            <Text color={"gray.900"} fontSize={"lg"}>
              IndexerDAO is a decentralized autonomous organization (DAO)
              dedicated to supporting the Indexer community within the Graph
              ecosystem.
            </Text>

            <Text color={"gray.900"} fontSize={"lg"}>
              Our mission is to empower new and aspiring Indexers with ongoing
              education and project-based learning opportunities, as well as to
              drive innovation in the indexing space through the testing of R&D
              efforts from core developers.
            </Text>

            <Text color={"gray.900"} fontSize={"lg"}>
              Our vision is to be a leading DevOps talent incubator for The
              Graph and the broader web3 ecosystem, and to be recognized as the
              foremost organization for Indexers. With a focus on community
              building and collaboration, we aim to provide a supportive and
              empowering environment for indexers to develop their skills and
              bring new ideas to the table.
            </Text>

            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={AiFillNotification}
                    color={"green.500"}
                    w={6}
                    h={6}
                  />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Community Building"}
              />
              <Feature
                icon={<Icon as={AiFillBulb} color={"yellow.500"} w={7} h={7} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Innovation"}
              />
              <Feature
                icon={
                  <Icon as={AiFillRocket} color={"purple.500"} w={7} h={7} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Empowerment"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"assets/aboutUs.png"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Footer />
    </>
  );
}
