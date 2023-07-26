import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Box, Icon, Image, chakra } from "@chakra-ui/react";
import Card from "./Card";
import { SiAdobeillustrator, SiReact, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineScreenShare } from "react-icons/md";
import { TbSeo, TbWriting } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

export default function ServSwiper() {
  const ChakraSwiper = chakra(Swiper);
  return (
    <ChakraSwiper
      modules={[Pagination,Autoplay]}
      touchReleaseOnEdges={true}
      delay={1000}
      centeredSlides={true}
      pagination={{clickable: true}}
      autoplay
      slidesPerView={1}
      freeMode={true}
      mousewheel={true}
      allowTouchMove={true}
      bg="none"
      threshold={1}
      speed={800}
      willChange={true}
      w="full"
      sx={{
        ".swiper-button-next , .swiper-button-prev": {
          color: "white",
        },
        ".swiper-pagination-bullet-active": {
          bg:'sec'
        },
        ".swiper-pagination":{
            bottom:'0rem'
        }
      }}
    >
      <SwiperSlide>
        <Box w="full" rounded={"0.5rem"} p='2rem'>
          <Card
            title={"Full Stack Web Development"}
            icon={
              <>
                <Icon
                  as={SiReact}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="cyan"
                />
                <Icon
                  as={FaNodeJs}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="green.500"
                />
              </>
            }
            corner={"lt"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p='2rem'>
          <Card
            title={"Graphic Design"}
            icon={
              <>
                <Icon
                  as={SiAdobeillustrator}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="orange"
                />{" "}
                <Icon
                  as={SiAdobephotoshop}
                  boxSize={["2rem", "3rem", "4rem"]}
                  color="blue.500"
                />
              </>
            }
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p='2rem'>
          <Card
            title={"Digital Marketing & SEO"}
            icon={
              <Icon
                as={TbSeo}
                boxSize={["2rem", "3rem", "4rem"]}
                color="cyan"
              />
            }
            corner={"rt"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p='2rem'>
          <Card
            title={"Branding"}
            icon={
              <Icon
                as={MdOutlineScreenShare}
                boxSize={["2rem", "3rem", "4rem"]}
                color="sec"
              />
            }
            corner={"lb"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p='2rem'>
          <Card
            title={"Copywriting"}
            icon={
              <Icon
                as={TbWriting}
                boxSize={["2rem", "3rem", "4rem"]}
                color="sec"
              />
            }
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p='2rem'> 
          <Card
            title={"Mobile Development"}
            icon={
              <Image
                src="/icons/react-native.svg"
                boxSize={["2rem", "3rem", "4rem"]}
              />
            }
            corner={"rb"}
          />
        </Box>
      </SwiperSlide>
    </ChakraSwiper>
  );
}
