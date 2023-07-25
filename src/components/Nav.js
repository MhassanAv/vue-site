import { Flex, Image, Button } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import Btn from "./Btn";



export default function Nav() {
  const swiper = useSwiper();
  return (
    <Flex
      pos="absolute"
      w="full"
      align={"center"}
      justify={['center','center','center',"space-between"]}
      zIndex={"2"}
      px={["1.5rem", "3rem", "5rem"]}
      top='0'
      py='3rem'
    >
      <Image src="logo.svg" alt="logo" w="7rem" />
      <Flex align={"center"} justifyContent={"center"} gap='3rem' display={['none','none','none','flex']}>
        <Button variant={'unstyled'} fontWeight={'500'} fontSize={'1.2rem'} onClick={()=>swiper.slideTo(1)}>About Us</Button>
        <Button variant={'unstyled'} fontWeight={'500'} fontSize={'1.2rem'} onClick={()=>swiper.slideTo(2)}>Services</Button>
        <Button variant={'unstyled'} fontWeight={'500'} fontSize={'1.2rem'} onClick={()=>swiper.slideTo(3)} >Portfolio</Button>
      </Flex>
      <Btn
          onClick={()=>swiper.slideTo(4)}
       >
          Contact Us
        </Btn>
    </Flex>
  );
}
