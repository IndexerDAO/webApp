import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Container, Divider, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Learning_Advertisement from "../components/Learning_Advertisement";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Indexer DAO</title>
        <meta name="description" content="An Indexer's Source for Learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Learning_Advertisement />

      <Container maxW={"5xl"} alignContent="center" pb={2} mb={6}>
        <Flex justify="center">
          <div className={styles.grid}>
            <a
              href="https://indexdao.gitbook.io/indexerdao/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Indexing</p>
            </a>
            <a
              href="https://indexing101.indexerdao.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>-&gt;</span>
              </h2>
              <p>
                Learn about Indexing in our interactive course
                with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Get Started <span>-&gt;</span>
              </h2>
              <p>Discover new subraphs that need to be indexed.</p>
            </a>

            <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>-&gt;</span>
              </h2>
              <p>Learn to deploy hardware optimized for indexing</p>
            </a>
          </div>
        </Flex>
      </Container>
      <Team />
      <Divider color={"gray.300"} />
      <Footer />
    </>
  );
}
