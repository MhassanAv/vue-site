import {
  Heading,
  SimpleGrid,
  Text,
  Image,
  Center,
  VStack,
  Box,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Center
      h="100vh"
      maxH="100vh"
      w="full"
      py="2rem"
      flexDir={["column", "column", "row"]}
      gap="1rem"
      justifyContent={["center", "center", "space-between"]}
    >
      <VStack flex="1" gap="2rem" justifyContent={"center"}>
        <Heading fontSize={["1.2rem", "1.5rem", "2.5rem"]}>
          We are your one-stop shop for a complete online presence for your
          company or startup.
        </Heading>
        <Text fontSize={["0.8rem", "1rem"]}>
          We provide a wide array of services including{" "}
          <strong>
            full-stack web development, graphic design, branding, SEO,
            copywriting, mobile development, and digital marketing.
          </strong>{" "}
          With VUE, you can find the perfect service package to fit the needs of
          your company or startup with optimal cost, all while balancing cost
          with quality.
        </Text>
      </VStack>
      <Center flex="1">
        <SimpleGrid columns={2} gap={"1.5rem"}>
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
