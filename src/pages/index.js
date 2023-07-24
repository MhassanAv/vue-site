import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/scrollbar';

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
        modules={[Mousewheel,Scrollbar]}
        touchReleaseOnEdges={true}
        scrollbar
        slidesPerView={1}
        direction="vertical"
        freeMode={true}
        mousewheel={true}
        allowTouchMove={true}
        threshold={1}
        speed={800}
        maxH='100vh'
        px={['1.5rem','3rem','5rem']}
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
