import Head from "next/head";
import Hero from "@/components/Home/Hero";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import GridText from "@/components/Home/GridText";
import Contact from "@/components/Contact/Contact";
import { VStack, chakra, Center, Heading, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper";
import Countdown from "react-countdown";
import "swiper/css";
import "swiper/css/scrollbar";
import Services from "@/components/Services/Services";

export default function Home() {
  const ChakraSwiper = chakra(Swiper);
  const dev = true;


  const Dates = ({ type }) => (
    <Box
      as={Center}
      p={["1.5rem", "1.5rem", "2rem"]}
      sx={{
        background: "rgba(255, 255, 255, 0.22)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5.4px)",
        WebkitBackdropFilter: "blur(5.4px)",
      }}
    >
      {type}
    </Box>
  );

  const Completionist = () => (
    <Heading as="h1" fontSize={"clamp(2.2rem,4.167vw,5rem)"}>
      Almost there
    </Heading>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Heading
          as="h2"
          fontSize={"clamp(1.5rem,4.167vw,5rem)"}
          display={"flex"}
          gap="1rem"
        >
          <Dates type={days} />
          <Dates type={hours} />
          <Dates type={minutes} />
          <Dates type={seconds} />
        </Heading>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Vue</title>
        <meta name="description" content="vue digital solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ChakraSwiper
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
          <GridText />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Services />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </ChakraSwiper> */}
      {dev ? (
        <Center pos="relative" w="full" h="100svh" maxH="100svh" userSelect={'none'} >
          <chakra.video
            opacity={"0.5"}
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
            objectFit={"cover"}
            playsInline
            className="video-container"
            preload="auto"
            position={"fixed"}
            src="/vueunderbg.mp4"
          >
            <source src="/vueunderbg.mp4" type="video/mp4" />
          </chakra.video>
          <VStack
            position={"absolute"}
            blendMode={"overlay"}
            spacing={"2rem"}
            px="1rem"
          >
            <Heading
              as="h1"
              fontSize={"clamp(2.5rem,5.833vw,7rem)"}
              textAlign={"center"}
              fontWeight={'600'}
            >
              Site Under Construction
            </Heading>
            <Heading
              as="h2"
              fontSize={"clamp(1rem,1.25vw,1.2rem)"}
              textAlign={"center"}
              fontWeight={'300'}
            >
              We're working on bringing the site live, check back soon!
            </Heading>
            {/* <Countdown renderer={renderer} date={Date.now() + 500000} /> */}
          </VStack>
          <chakra.video
            opacity={"0.5"}
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
            objectFit={"cover"}
            playsInline
            pos="absolute"
            blendMode={"darken"}
            className="video-container"
            preload="auto"
            position={"fixed"}
            src="/vueunderbg.mp4"
          >
            <source src="/vueunderbg.mp4" type="video/mp4" />
          </chakra.video>
          <VStack
            position={"absolute"}
            blendMode={"hard-light"}
            spacing={"2rem"}
            px="1rem"
          >
            <Heading
              as="h1"
              fontSize={"clamp(2.5rem,5.833vw,7rem)"}
              textAlign={"center"}
              fontWeight={'600'}
            >
              Site Under Construction
            </Heading>
            <Heading
              as="h2"
              fontSize={"clamp(1rem,1.25vw,1.2rem)"}
              textAlign={"center"}
              fontWeight={'300'}
            >
              We're working on bringing the site live, check back soon!
            </Heading>
            {/* <Countdown renderer={renderer} date={Date.now() + 500000} /> */}
          </VStack>
          <chakra.video
            opacity={"0.5"}
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
            objectFit={"cover"}
            playsInline
            pos="absolute"
            blendMode={"hard-light"}
            className="video-container"
            preload="auto"
            position={"fixed"}
            src="/vueunderbg.mp4"
          >
            <source src="/vueunderbg.mp4" type="video/mp4" />
          </chakra.video>
        </Center>
      ) : (
        <>
          <Hero />
          <GridText />
          <About />
          <Services />
          <Contact />
        </>
      )}
    </>
  );
}
