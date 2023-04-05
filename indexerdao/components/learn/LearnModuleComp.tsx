import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Children, ReactElement } from "react";
import { LearnModuleItem, ModuleProps } from "./LearnModuleItem";
import { UrlNode } from "@brainfried/github-books";
import bookConfig from "../../bookConfig.json";
export default function LearnModuleComp() {
  const dummyData: Array<ModuleProps> = [
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
    {
      title: "Learn Module",
      text: "Get ready to learn this module",
      img: <Image src="/assets/teamprofile/slimchance.jpg" />,
      link: "#",
      covertag: "bo",
    },
  ];

  function getRootNodes(urlTrees: UrlNode[]): UrlNode[] {
    let roots: Array<UrlNode> = [];

    for (let tree of urlTrees) {
      if (tree.type == "root") {
        roots.push(tree);
      }
    }

    return roots;
  }

  const rootInfo = getRootNodes(bookConfig);

  const moduleCoverImg = (
    <Image
      src={
        "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      }
      roundedTop={"sm"}
      objectFit="cover"
      h="full"
      // w="full"
      alt={"Blog Image"}
    />
  );

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      spacingX="10px"
      spacingY="20px"
    >
      {rootInfo.map((data, key) => {
        let tmpRoute = "";
        if (data?.children && data?.children.length > 0) {
          tmpRoute = data.children[0].route as string;
        }

        return (
          <LearnModuleItem
            title={data.title}
            text={"Beginner"}
            img={moduleCoverImg}
            link={"/" + tmpRoute}
            covertag={"101"}
            key={key}
          />
        );
      })}
    </SimpleGrid>
  );
}
