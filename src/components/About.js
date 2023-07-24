import {
  Heading,
  SimpleGrid,
  Text,
  Image,
  Center,
  VStack,
  Box,
  Button,
  useMediaQuery
} from "@chakra-ui/react";

export default function About() {
  return (
    <Center
      h="100vh"
      maxH="100vh"
      w="full"
      py="2rem"
      flexDir={["column", "column","column", "row"]}
      gap={'2rem'}
      justifyContent={["center", "center","center", "space-between"]}
      px={['1.5rem','3rem','5rem']}
    >
      <VStack flex='1' gap="2rem" justifyContent={"center"} alignItems={'center'}>
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
        <Button
          display={['none','none','block']}
          bg='prim'
          rounded={"full"}
          variant={"unstyled"}
          alignSelf={['center','center','center','start']}
          transition={'all 0.3s ease'}
          h='3.5rem'
          w={['10.75rem','10.75rem','14.438rem']}
          fontSize={['1rem','1.2rem']}
          fontWeight={'500'}
          _hover={{
            transform: 'scale(1.05)'
          }}
        >
          Contact Us
        </Button>
      </VStack>
      <Center flex='1' p='0'  >
        <SimpleGrid columns={2} gap={"1rem"} >
          <Box pos="relative">
            <Image src="about/1.png" alt="about"  />
          </Box>
          <Box pos="relative">
            <Image src="about/3.png" alt="about" pos="absolute" bottom="0" />
          </Box>
          <Box pos="relative">
            <Image src="about/4.png" alt="about" pos="absolute" right="0"  />
          </Box>
          <Box pos="relative">
            <Image src="about/2.png" alt="about"  />
          </Box>
        </SimpleGrid>
      </Center>
      
    </Center>
  );
}
