import {
  Heading,
  SimpleGrid,
  Text,
  Image,
  Center,
  VStack,
  Box,
} from "@chakra-ui/react";
import Btn from "../Btn";

export default function About() {
  return (
    <Center
      h="100dvh"
      maxH="100dvh"
      w="full"
      py="1rem"
      flexDir={["column", "column", "column", "row"]}
      gap={"1rem"}
      justifyContent={["center", "center", "space-between"]}
      px={["1.5rem", "3rem", "5rem"]}
    >
      <VStack
        flex="1"
        gap="2rem"
        justifyContent={"center"}
        alignItems={"center"}
        w="full"
      >
        <Heading
          fontSize={["3.5vh", "2rem", "2.5rem"]}
          textShadow={
            "3px 3px #A53594"
          }
          sx={{textWrap:'balance'}}
        >
          We are your one-stop shop for a complete online presence for your
          company or startup.
        </Heading>
        <Text fontSize={["1rem", "1.2rem"]}>
          We provide a wide array of services including{" "}
          <strong>
            full-stack web development, graphic design, branding, SEO,
            copywriting, mobile development, and digital marketing.
          </strong>
        </Text>
        <Box alignSelf={["start"]} display={["none", "none", "none", "flex"]}>
          <Btn>Contact Us</Btn>
        </Box>
      </VStack>
      <Center flex="1" p="0" w={["full", "35vh", "40vh", "full"]}>
        <SimpleGrid columns={2} gap={"1rem"}>
          <Box pos="relative">
            <Image src="about/1.png" alt="about" />
          </Box>
          <Box pos="relative">
            <Image src="about/3.png" alt="about" pos="absolute" bottom="0" />
          </Box>
          <Box pos="relative">
            <Image src="about/4.png" alt="about" pos="absolute" right="0" />
          </Box>
          <Box pos="relative">
            <Image src="about/2.png" alt="about" />
          </Box>
        </SimpleGrid>
      </Center>
    </Center>
  );
}
