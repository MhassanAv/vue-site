import { Center } from "@chakra-ui/react";
import React from "react";

export default function Card() {
  return (
    <Center
      w="15.938rem"
      h="15.938rem"
      sx={{
        border: "1px solid rgba(255,255,255, 0.6)",
        backgroundColor: "rgba(255,255,255, 0.1)",
        backdropFilter: "blur(2px)",
        borderRadius: "0.5rem",
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

          transform: "skew(45deg)",

          position: "absolute",

          transition: "left 500ms ease-out",
        },

        "&:hover": {
          transform: "translateY(-10%)",

          "&::before": {
            left: "150%",
          },
        },
      }}
    >
      Card
    </Center>
  );
}
