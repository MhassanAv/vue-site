import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import Card from "./Card";
import {
  SiJavascript,
  SiAdobeillustrator,
  SiReact,
  SiAdobephotoshop,
} from "react-icons/si";
import { MdOutlineScreenShare } from "react-icons/md";
import { TbSeo, TbWriting } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

export default function Services() {
  return (
    <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      px={["1.5rem", "3rem", "5rem"]}
      py="1rem"
      justifyContent={"space-evenly"}
    >
      <Heading>Services</Heading>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        gap={["1rem", "1rem", "2rem"]}
        w="full"
        placeItems={"center"}
      >
        <Box w="full">
          <Card
            title={"Full Stack Web Development"}
            icon={
              <>
                <Icon
                  as={SiReact}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="cyan"
                />
                <Icon
                  as={FaNodeJs}
                  boxSize={["2rem", "3rem", "4rem"]}
                  display={["none", "none", "block"]}
                  color="green.500"
                />
              </>
            }
            corner={"lt"}
          />
        </Box>
        <Box w="full">
          <Card
            title={"Graphic Design"}
            icon={
              <>
                <Icon
                  as={SiAdobeillustrator}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="orange"
                />{" "}
                <Icon
                  as={SiAdobephotoshop}
                  boxSize={["2rem", "3rem", "4rem"]}
                  display={["none", "none", "block"]}
                  color="blue.500"
                />
              </>
            }
          />
        </Box>
        <Box w="full">
          <Card
            title={"Digital Marketing & SEO"}
            icon={
              <Icon
                as={TbSeo}
                boxSize={["2rem", "3rem", "4rem"]}
                color="cyan"
              />
            }
            corner={"rt"}
          />
        </Box>
        <Box w="full">
          <Card
            title={"Branding"}
            icon={
              <Icon
                as={MdOutlineScreenShare}
                boxSize={["2rem", "3rem", "4rem"]}
                color="sec"
              />
            }
            corner={"lb"}
          />
        </Box>
        <Box w="full">
          <Card
            title={"Copywriting"}
            icon={
              <Icon
                as={TbWriting}
                boxSize={["2rem", "3rem", "4rem"]}
                color="sec"
              />
            }
          />
        </Box>
        <Box w="full">
          <Card
            title={"Mobile Development"}
            icon={
              <Image
                src='/icons/react-native.svg'
                boxSize={["2rem", "3rem", "4rem"]}
              />
            }
            corner={"rb"}
          />
        </Box>
      </SimpleGrid>
    </VStack>
  );
}
