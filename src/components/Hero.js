import { Center, Button, VStack,Box } from "@chakra-ui/react";
import AniLogo2 from "./AniLogo2";
import { keyframes } from "@chakra-ui/react";

export default function Hero() {
  const animationKeyframes = keyframes`
  	0% {
		background-position: 0% 50%;

	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

  `;
  const animation = `${animationKeyframes} 1s ease-in-out infinite`;

  return (
    <VStack
      h="100vh"
      maxH="100vh"
      w="full"
      zIndex={"1"}
      align={"center"}
      justify={"center"}
    >
      <VStack
        w="full"
        h="full"
        px="1rem"
        pos={"relative"}
        zIndex={"1"}
        align={"center"}
        gap='2rem'
        justify={"center"}
      >
        <Center w='full' p={['0','0','3rem']}>
          <AniLogo2 />
        </Center>
        <Button
          bgGradient={`linear(45deg,hsl(270, 67%, 47%), hsl(330, 100%, 50%))`}
          rounded={"full"}
          variant={"unstyled"}
          transition={'all 0.5s ease'}
          h='3.5rem'
          w={['12.438rem','12.438rem','14.438rem']}
          fontSize={['1rem','1.2rem']}
          fontWeight={'500'}
          _hover={{
            transform: 'scale(1.05)'
          }}
        >
          Explore Our Services
        </Button>
      </VStack>
    </VStack>
  );
}
