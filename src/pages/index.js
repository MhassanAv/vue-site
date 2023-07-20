import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

export default function Home() {
  const ChakraSwiper = chakra(Swiper);

  return (
    <>
      <Head>
        <title>Vue</title>
        <meta name="description" content="vue digital solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraSwiper
        modules={[Mousewheel]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        mousewheel={true}
        freeMode={true}
        direction="vertical"
        maxH='500vh'
        speed={800}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </ChakraSwiper>
    </>
  );
}
