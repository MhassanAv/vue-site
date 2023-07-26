import { Center, Heading, Image, chakra, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Card({ title, icon, corner }) {
  const ChakraTilt = chakra(Tilt);

  const options = {
    scale: 1.05,
    speed: 200,
    max: 5,
    glare: true,
  };

  const leftRadiusTop = ['1rem','1rem','1rem',corner === "lt" ? "3rem" : "0"]
  const leftRadiusBot = ['1rem','1rem','1rem',corner === "lb" ? "3rem" : "0"]
  const RightRadiusTop = ['1rem','1rem','1rem',corner === "rt" ? "3rem" : "0"]
  const RightRadiusBot = ['1rem','1rem','1rem',corner === "rb" ? "3rem" : "0"]

  return (
    <ChakraTilt
      options={options}
      roundedBottomLeft={leftRadiusBot}
      roundedBottomRight={RightRadiusBot}
      roundedTopRight={RightRadiusTop}
      roundedTopLeft={leftRadiusTop}
    >
      <Center
        w="full"
        h={["12vh", "12vh", "20vh", "30vh"]}
        pos="relative"
        zIndex={"2"}
        overflow={"hidden"}
        px="1rem"
        roundedBottomLeft={leftRadiusBot}
        roundedBottomRight={RightRadiusBot}
        roundedTopRight={RightRadiusTop}
        roundedTopLeft={leftRadiusTop}
        _after={{
          content: `url(${icon})`,
          pos: "absolute",
          transform: "scale(7)",
          overflow: "hidden",
          top: "7.5rem",
          right: "2rem",
          opacity: "0.2",
          blendMode: "screen",
        }}
        sx={{
          border: "1px solid rgba(255,255,255, 0.6)",
          backgroundColor: "rgba(255,255,255, 0.1)",
          backdropFilter: "blur(2px)",

          boxShadow:
            "0px calc(15.938rem / 6) calc(15.938rem / 3) rgba(black, 0.1)",
          transition: "transform 500ms ease-out",
          overflow: "hidden",

          "&::before": {
            content: "''",
            background: "rgba(255,255,255, 0.4)",
            width: "60%",
            height: "100%",
            top: "0%",
            left: "-125%",
            roundedBottomLeft: { leftRadiusBot },
            roundedBottomRight: { RightRadiusBot },
            roundedTopRight: { RightRadiusTop },
            roundedTopLeft: { leftRadiusTop },

            transform: "skew(45deg)",

            position: "absolute",

            transition: "left 500ms ease-out",
          },

          "&:hover": {
            transform: "translateY(0%)",

            "&::before": {
              left: "150%",
            },
          },
        }}
      >
        <Center
          gap="1rem"
          alignItems={"center"}
          justifyContent={["start", "start", "center"]}
          flexDir={["row", "row", "column"]}
          w="full"
        >
          <Image alt="icon" src={icon} />
          <Heading fontSize={["1rem", "1.2rem", "1.5rem"]} textAlign={"center"}>
            {title}
          </Heading>
        </Center>
      </Center>
    </ChakraTilt>
  );
}
