import { Center, Button, VStack,HStack, Image, Flex } from "@chakra-ui/react";
import AniLogo2 from "./AniLogo2";
import { keyframes } from "@chakra-ui/react";
import Nav from "./Nav";
import { useSwiper } from "swiper/react";

export default function Hero() {

  const swiper = useSwiper()

  return (

    <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      zIndex={"1"}
      align={"center"}
      pos={"relative"}
      justify={"center"}
      px={['1.5rem','3rem','5rem']}
      bg='bg'
    >
       <Nav/>
      <VStack
        w="full"
        h="full"
        px="1rem"
        pos={"relative"}
        zIndex={"1"}
        gap='2rem'
        justify={'center'}
      >

        <Center w='full' p={['0','0','3rem']}>
          <AniLogo2 />
        </Center>
        <Button
          bg='prim'
          rounded={"full"}
          variant={"unstyled"}
          transition={'all 0.3s ease'}
          h='3.5rem'
          w={['12.438rem','12.438rem','14.438rem']}
          fontSize={['1rem','1.2rem']}
          fontWeight={'500'}
          onClick={()=>swiper.slideTo(2)}
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
