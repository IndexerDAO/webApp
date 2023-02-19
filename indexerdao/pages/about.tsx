import { Container, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function about() {
    return (
        <>
            <Header />

            <Container w={"100%"}>
                <Text>Our Mission</Text>
                <Text>
                    Support aspiring and active indexers with education and
                    project-based learning opportunities Support innovation in
                    the indexing space by testing R&D efforts from core
                    developers.
                </Text>
                <Text>Our Vision</Text>
                <Text>
                    Become a DevOps talent incubator for The Graph and broader
                    web3 ecosystem
                </Text>
            </Container>
            <Footer />
        </>
    );
}
