import { Center, Flex, Box, Heading, chakra, VStack } from "@chakra-ui/react";
import AniLogo from "./AniLogo";
import { useState, useEffect } from "react";

export default function Hero() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getCounter = setInterval(() => {
      setCounter((prev) => (prev <= 360 ? prev + 1 : 0));
    }, 25);

    return () => {
      clearInterval(getCounter);
    };
  }, [counter]);

  return (
    <VStack
      h="100vh"
      maxH="100vh"
      w="full"
      pos={"relative"}
      zIndex={"1"}
      align={"center"}
      justify={"center"}
      bgGradient={`linear(${counter}deg, hsl(270, 67%, 47%), hsl(330, 100%, 50%))`}
      bgSize={'400% 400%'}
    >
        <VStack
        w='full'
        h='full'
        bgGradient={`linear(to-b, black, 80%, transparent)`}
        px="1rem"
        pos={"relative"}
      zIndex={"1"}
      align={"center"}
      justify={"center"}

    >
      <Center maxH="50%">
        <AniLogo />
        {/* <Box
        w="400px"
        h='200px'
        pos={"absolute"}
        bgGradient={`linear(${counter}deg, hsl(270, 67%, 47%), hsl(330, 100%, 50%))`}
        zIndex={"-1"}
        rounded={"full"}
        filter={"blur(70px)"}
      /> */}
      </Center>
      </VStack>
    </VStack>
  );
}
