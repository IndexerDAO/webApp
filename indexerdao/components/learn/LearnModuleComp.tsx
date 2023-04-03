import { Img } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { ReactElement } from "react";
import LearnModuleItem from "./LearnModuleItem";

export default function LearnModuleComp() {
  interface ModuleProps {
    title: string;
    text: string;
    img: ReactElement;
    link: string;
  }

  const dummyData: Array<ModuleProps> = [
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Img src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
    },
  ];

  const LearnModule = ({ title, text, img }: ModuleProps) => {
    return (
      <Stack align={"center"}>
        <Flex
          w={40}
          h={40}
          color={"white"}
          rounded={"full"}
          overflow="hidden"
          bg={"gray.100"}
          mb={1}
        >
          {img}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    );
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacingX="20px"
      spacingY="25px"
    >
      {dummyData.map((data, key) => {
        return <LearnModuleItem key={key} />;
      })}
    </SimpleGrid>
  );
}
