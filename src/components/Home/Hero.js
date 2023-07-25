import { Center, Heading, Text, VStack, keyframes } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import Btn from "../Btn";
import AniLogo2 from "./AniLogo2";
import Nav from "../Nav";

export default function Hero() {
  const swiper = useSwiper();


  const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
  `

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
      bg='bg'


        _after={{
          content:"''",
          pos:'absolute',
          top:'-65%',
          w:'200vw', 
          h:'100%',
          animation:`${gradient} 10s ease-in-out infinite`,
          transform:'rotate(-38deg)',
          bg:`linear-gradient(300deg, 
            red,#473896,cyan, #a83593,#cb274a)`,
          bgSize:'400% 400%'
        }}
      
      
    >
      <Nav />
      <VStack
        w="full"
        h="full"
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
