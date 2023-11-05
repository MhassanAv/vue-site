import Head from "next/head";
import Hero from "@/components/Home/Hero";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import { chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/scrollbar';
import Services from "@/components/Services/Services";
import { Poppins } from 'next/font/google'
const bodies= Poppins({ subsets: ['latin'],weight:['400'] })


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
      <main>
      <ChakraSwiper
        className={bodies.className}
        modules={[Mousewheel,Scrollbar]}
        touchReleaseOnEdges={true}
        scrollbar
        slidesPerView={1}
        freeMode={true}
        mousewheel={true}
        direction="vertical"
        allowTouchMove={true}
        threshold={1}
        speed={800}
        maxH='100dvh'
        willChange={true}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Services />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Portfolio />
        </SwiperSlide> */}
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </ChakraSwiper>
     </main>
    </>
  );
}
