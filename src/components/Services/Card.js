import { Center, Heading, chakra,Box,HStack } from "@chakra-ui/react";
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
    gyroscope: true,
    gyroscopeMinAngleX:     -45,    
    gyroscopeMinAngleY:     -45,    
    gyroscopeMaxAngleY:     45, 
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
        h={ ['50vh','50vh','50vh',"30vh"]}
        pos="relative"
        zIndex={"2"}
        overflow={"hidden"}
        px="1rem"
        roundedBottomLeft={leftRadiusBot}
        roundedBottomRight={RightRadiusBot}
        roundedTopRight={RightRadiusTop}
        roundedTopLeft={leftRadiusTop}
        sx={{
          border: "1px solid rgba(255,255,255, 0.6)",
          backgroundColor: "rgba(255,255,255, 0.1)",
          backdropFilter: "blur(5px)",
          transition: "transform 500ms ease-out",

          "&::before": {
            content: "''",
            background: "rgba(255,255,255, 0.4)",
            width: "60%",
            height: "100%",
            top: "0%",
            left: "-150%",
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
        <Box
        sx={{
          pos: "absolute",
          transform: "scale(5)",
          overflow: "hidden",
          top: ["50%",'6rem'],
          right: [null,null,null,'3rem'],
          opacity: "0.15",
          mixBlendMode: "color-dodge",
        }}
        >
          {icon}
        </Box>
        <Center
          gap="1rem"
          alignItems={"center"}
          justifyContent={["start", "start", "center"]}
          flexDir={"column"}
          w="full"
        >
          <HStack>
          {icon}
          </HStack>
          <Heading fontSize={["1rem", "1.2rem", "1.5rem"]} textAlign={"center"}>
            {title}
          </Heading>
        </Center>
      </Center>
    </ChakraTilt>
  );
}
