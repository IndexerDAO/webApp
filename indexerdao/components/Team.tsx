import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  useColorModeValue,
  useColorMode,
  Img,
  Image,
} from '@chakra-ui/react';

interface TeamProps {
  title: string;
  text: string;
  img: ReactElement;
}

const Feature = ({ title, text, img }: TeamProps) => {
  return (
    <Stack align={'center'} w={300}>
      <Flex
        w={40}
        h={40}
        color={'white'}
        rounded={'full'}
        overflow="hidden"
        bg={'gray.100'}
        mb={1}
      >
        {img}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} noOfLines={3}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Team() {
  return (
    <Box p={4} py={10} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Text pb={5} align={'center'} fontFamily="Inter" fontSize={'30'}>
        Meet the Team!
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/channon.png'}
            />
          }
          title={'Channon'}
          text={'Indexer at IndexerDAO'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/slim.png'}
            />
          }
          title={'Slim'}
          text={'Indexer at IndexerDAO'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/BrainFried.jpg'}
            />
          }
          title={'BrainFried'}
          text={
            'Computer Engineer. Involved in Blockchain Tech 2020. I Love Building and Sharing Ideas!'
          }
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              src={'assets/teamprofile/paka.png'}
            />
          }
          title={'Pakalicious'}
          text={'Engineer and educator building tools and community in crypto'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/payne.jpg'}
            />
          }
          title={'Payne'}
          text={'Indexer at StakeSquid'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/vince.jpg'}
            />
          }
          title={'Vince | Nodeify'}
          text={'Indexer at Nodeify'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/kent.jpg'}
            />
          }
          title={'Mac'}
          text={'Full Stack Boomer - left .NET to bleed on the edge'}
        />
        <Feature
          img={
            <Image
              alt={'Logo'}
              fit={'cover'}
              align={'center'}
              src={'assets/teamprofile/don_pfp.jpg'}
            />
          }
          title={'Don'}
          text={'Indexer at IndexerDAO'}
        />
      </SimpleGrid>
    </Box>
  );
}
