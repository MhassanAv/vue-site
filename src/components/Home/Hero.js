import { Center, VStack } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import Btn from "../Btn";
import AniLogo2 from "./AniLogo2";
import Nav from "../Nav";

export default function Hero() {
  const swiper = useSwiper();

  return (
    <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      zIndex={"1"}
      align={"center"}
      pos={"relative"}
      justify={"center"}
      px={["1.5rem", "3rem", "5rem"]}
      bg="bg"
    >
      <Nav />
      <VStack
        w="full"
        h="full"
        px="1rem"
        pos={"relative"}
        zIndex={"1"}
        gap="2rem"
        justify={"center"}
      >
        <Center w="full" p={["0", "0", "3rem"]}>
          <AniLogo2 />
        </Center>
        <Btn onClick={()=>swiper.slideTo(2)}>Get Started</Btn>
      </VStack>
    </VStack>
  );
}
