import { extendTheme } from "@chakra-ui/react";
import { Poppins } from 'next/font/google'
const font = Poppins({ subsets: ["latin"], weight: ["500"] });

const stylesTheme = {
  fonts:{
    heading:`${font.style.fontFamily}`,
    text:`${font.style.fontFamily}`,
    button:`${font.style.fontFamily}`,
  },
  colors: {
    prim: "#653694",
    sec:"#A53594",
    headings: "#FFFFFF",
    text: "#E0E5F3",
    footer: "#011C2A",
    bg:"#181818"
  },
  styles: {
    global: (props) => ({
      "html, body": {
        postion: "relative",
        fontSize: "16px",
        bg:"bg",
        fontFamily:`${font.style.fontFamily}`,
        // bgImage:'main-bg.svg',
      bgSize:'contain',
      bgRepeat:'no-repeat',
      bgPos:'right',
        color:'text',
        padding: "0",
        margin: "0",
      },
      ".parent": {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      },
      "p":{
        color:'text',
        fontWeight:'300'
      },
      "h1,h2,h3,h4,h5,h6":{
        color:'headings',
        fontWeight:'500',
      }
    }),
  },
};

const theme = extendTheme(stylesTheme);

export default theme;
