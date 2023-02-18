import { ReactElement } from "react";
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
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface TeamProps {
    title: string;
    text: string;
    img: ReactElement;
}

const Feature = ({ title, text, img }: TeamProps) => {
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

export default function Team() {
    return (
        <Box p={4} py={10} bg={useColorModeValue("gray.50", "gray.900")}>
            <Text pb={5} align={"center"} fontFamily="Inter" fontSize={"30"}>
                Meet the Team!
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                <Feature
                    img={<Image
                        alt={"Logo"}
                        fit={"cover"}
                        align={"center"}
                        src={"assets/teamprofile/channon.png"}/>}
                    title={"Channon"}
                    text={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                />
                <Feature
                    img={<Image
                        alt={"Logo"}
                        fit={"cover"}
                        align={"center"}
                        src={"assets/teamprofile/slim.png"}/>}
                    title={"Slim"}
                    text={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                />
                <Feature
                    img={<Image 
                        alt={"Logo"}
                        fit={"cover"}
                        align={"center"}
                        src={"assets/teamprofile/BrainFried.jpg"}/>}
                    title={"BrainFried"}
                    text={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                />
                <Feature
                    img={<Image
                        alt={"Logo"}
                        fit={"cover"}
                        align={"center"}
                        src={"assets/ID_logo2.png"}/>}
                    title={"Pakalicious"}
                    text={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                />
            </SimpleGrid>
        </Box>
    );
}
