import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  Container,
  Divider,
  Flex,
  VStack,
  Text,
  HStack,
  Box,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Learning_Advertisement from '../components/Learning_Advertisement';

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

      <Container maxW={'5xl'} alignContent="center" pb={2} mb={6}>
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
          </div>
        </Flex>
      </Container>

      <Divider color={'gray.300'} />

      <VStack bg={'gray.100'} justifyContent={'center'} p={5}>
        <Text
          color={useColorModeValue('gray.700', 'blackAlpha.700')}
          fontWeight={600}
          fontSize={'lg'}
          p={4}
          mb={2}
        >
          Supported By:
        </Text>
        <HStack>
          <Stack align={'center'} w={300}>
            <Flex
              w={40}
              h={40}
              color={'white'}
              rounded={'full'}
              overflow="hidden"
              bg={'gray.100'}
              p={2}
              pb={0}
            >
              <Image src="assets/TheGraphSymbol.png" />
            </Flex>
            <Text fontWeight={300}>Graph Advocates</Text>
          </Stack>
        </HStack>
      </VStack>

      <Footer />
    </>
  );
}
