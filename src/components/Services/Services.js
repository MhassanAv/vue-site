import { Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import ServGrid from "./ServGrid";
import ServSwiper from "./ServSwiper";

export default function Services() {
  const [isSmallScreen] = useMediaQuery("(max-width: 1000px)");

  return (
    <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      px={["1.5rem", "3rem", "5rem"]}
      py="1rem"
      justifyContent={"space-evenly"}
      // bgImage="main-bg.svg"
      bgSize="cover"
    >
      <Heading textShadow={"3px 3px #A53594"}>Services</Heading>
      {!isSmallScreen ? <ServGrid /> : <ServSwiper />}
    </VStack>
  );
}
