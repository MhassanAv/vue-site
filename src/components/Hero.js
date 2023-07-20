import { Center, Button, VStack,Box } from "@chakra-ui/react";
import AniLogo from "./AniLogo";
import { keyframes } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

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
  const animation = `${animationKeyframes} 5s ease-in-out infinite`;

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
        justify={"center"}
      >
        <Center maxH="50%" w='full'>
          <AniLogo />
          {/* <Box
        w="400px"
        h='200px'
        border='4px solid red'
        pos={"absolute"}
        bgGradient={`linear(45deg, hsl(270, 67%, 47%), hsl(330, 100%, 50%))`}
        animation={animation}
        zIndex={"-1"}
        rounded={"full"}
        filter={"blur(50px)"}
      /> */}
        </Center>
        {/* <Button
          bgGradient={`linear(45deg,hsl(270, 67%, 47%), hsl(330, 100%, 50%))`}
          px="2rem"
          h="4rem"
          rounded={"full"}
          variant={"unstyled"}
          transition={'all 0.5s ease'}
          fontSize={'1.5rem'}
          _hover={{
            bg:'rgba(255, 255, 255, 0)',
            boxShadow:'0 0 30px 30px hsl(330, 100%, 50%) '
          }}
        >
          Get Started
        </Button> */}
      </VStack>
    </VStack>
  );
}
