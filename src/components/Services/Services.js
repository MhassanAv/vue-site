import { Box, Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Card from "./Card";

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
      <SimpleGrid columns={[1,1, 2, 3]} gap={["1rem","1rem","2rem"]} w="full" placeItems={"center"}>
        <Box w="full">
          <Card title={"Full Stack Web Development"} icon={"/icons/2.svg"} corner={'lt'} />
        </Box>
        <Box w="full">
          <Card title={"Graphic Design"} icon={"/icons/3.svg"} />
        </Box>
        <Box w="full">
          <Card title={"Digital Marketing & SEO"} icon={"/icons/1.svg"} corner={'rt'} />
        </Box>
        <Box w="full">
          <Card title={"Branding"} icon={"/icons/1.svg"} corner={'lb'} />
        </Box>
        <Box w="full">
          <Card title={"Copywriting"} icon={"/icons/2.svg"} />
        </Box>
        <Box w="full">
          <Card title={"Mobile Development"} icon={"/icons/4.svg"} corner={'rb'} />
        </Box>
      </SimpleGrid>
    </VStack>
  );
}
