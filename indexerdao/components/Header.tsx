import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon } from "@chakra-ui/icons";

const Links: NavLink_i[] = [
  { disp: "Home", linkto: "/" },
  { disp: "Guides", linkto: "#" },
  { disp: "About", linkto: "/about" },
];

interface NavLink_i {
  disp: string;
  linkto: string;
}

const NavLink = ({ disp, linkto }: NavLink_i) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color={"gray.50"}
    _hover={{
      textDecoration: "none",
      color: "black",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={linkto}
  >
    {disp}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={"#1A365D"} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <Image
                alt={"Logo"}
                fit={"cover"}
                align={"center"}
                w={"240px"}
                h={"100%"}
                p={1}
                src={"assets/ID_logo2.png"}
              />
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.disp}
                  disp={link.disp}
                  linkto={link.linkto}
                />
              ))}
            </HStack>
            <IconButton
              variant={"ghost"}
              aria-label="Toggle Dark Mode"
              icon={<MoonIcon />}
              onClick={toggleColorMode}
            />
            {/* <Button
                            variant={"solid"}
                            colorScheme={"teal"}
                            size={"sm"}
                            mr={4}
                            leftIcon={<AddIcon />}
                        >
                            Action
                        </Button> */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.disp}
                  disp={link.disp}
                  linkto={link.linkto}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
