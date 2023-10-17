import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Box, Icon, chakra } from "@chakra-ui/react";
import Card from "./Card";
import { FaCode } from "react-icons/fa";
import { MdOutlineScreenShare } from "react-icons/md";
import { TbSeo, TbWriting, TbDeviceMobile } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ServSwiper() {
  const ChakraSwiper = chakra(Swiper);
  return (
    <ChakraSwiper
      modules={[Pagination, Autoplay]}
      touchReleaseOnEdges={true}
      delay={1000}
      centeredSlides={true}
      pagination={{ clickable: true }}
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
          bg: "sec",
        },
        ".swiper-pagination": {
          bottom: "0rem",
        },
      }}
    >
      <SwiperSlide>
        <Box w="full" rounded={"0.5rem"} p="2rem">
          <Card
            title={"Full Stack Web Development"}
            icon={
              <>
                <Icon
                  as={FaCode}
                  boxSize={["3rem", "3rem", "4rem"]}
                  color="sec"
                />
              </>
            }
            corner={"lt"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p="2rem">
          <Card
            title={"Graphic Design"}
            icon={
              <>
                <Icon
                  as={BsVectorPen}
                  boxSize={["3rem", "3rem", "4rem"]}
                  color="sec"
                />
              </>
            }
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p="2rem">
          <Card
            title={"Digital Marketing & SEO"}
            icon={
              <Icon as={TbSeo} boxSize={["3rem", "3rem", "4rem"]} color="sec" />
            }
            corner={"rt"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p="2rem">
          <Card
            title={"Branding"}
            icon={
              <Icon
                as={MdOutlineScreenShare}
                boxSize={["3rem", "3rem", "4rem"]}
                color="sec"
              />
            }
            corner={"lb"}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p="2rem">
          <Card
            title={"Copywriting"}
            icon={
              <Icon
                as={TbWriting}
                boxSize={["3rem", "3rem", "4rem"]}
                color="sec"
              />
            }
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="full" rounded={"1rem"} p="2rem">
          <Card
            title={"Mobile Development"}
            icon={
              <Icon
                as={TbDeviceMobile}
                boxSize={["2rem", "3rem", "4.5rem"]}
                color="sec"
              />
            }
            corner={"rb"}
          />
        </Box>
      </SwiperSlide>
    </ChakraSwiper>
  );
}
