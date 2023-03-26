import {
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { getAllPublished } from "../utils/md";

export default function About() {
  return (
    <>
      <Flex
        justify={"center"}
        bg={useColorModeValue("gray.100", "gray.700")}
        p={"10"}
      >
        <VStack>
          <Heading>Our Mission</Heading>
          <Text maxW={"800px"} fontSize={"md"}>
            Support aspiring and active indexers with education and
            project-based learning opportunities Support innovation in the
            indexing space by testing R&D efforts from core developers.
          </Text>
          <Heading>Our Vision</Heading>
          <Text maxW={"800px"} fontSize={"md"}>
            Become a DevOps talent incubator for The Graph and broader web3
            ecosystem
          </Text>
        </VStack>
      </Flex>

      {/* <div>
        {posts.foreach((post) => {
          <article key={post.slug}>
            <p>[ {post.frontmatter.tags.join(", ")} ]</p>
            <div>
              {posts.map((post) => (
                <article key={post.slug}>
                  <p>[ {post.frontmatter.tags.join(", ")} ]</p>
                  <Link href={`posts/${post.slug}`}>
                    <a>{post.frontmatter.title}</a>
                  </Link>{" "}
                  <p>{post.frontmatter.description}</p>
                </article>
              ))}
            </div>
            <Link href={`posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>{" "}
            <p>{post.frontmatter.description}</p>
          </article>;
        })}
      </div> */}
    </>
  );
}

// export const getStaticProps = async () => {
//   const posts = getAllPublished("content");
//   return {
//     props: { posts },
//   };
// };
