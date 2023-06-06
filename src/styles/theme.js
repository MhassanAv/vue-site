import { extendTheme } from "@chakra-ui/react";
import { Squada_One} from 'next/font/google'

const font = Squada_One({ subsets: ['latin'],weight:['400'] })

const stylesTheme = {
  fonts:{
    heading:`${font.style.fontFamily}`
  },
  colors: {
    egypt: "#1134A6",
    azure: "#0080FE",
    olympic: "#008ECC",
    prim: "#009d56",
    prim2: "#FFD850",
    prim3: "#F4F0F8",
    textPrim: "#232536",
    text: "#6D6E76",
    footer: "#21212D",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        postion: "relative",
        fontSize: "16px",
        overflowX: "hidden",
        bg:"black",
        padding: "0",
        margin: "0",
      },
      // ".cls-1":{
      //   fill:'white'
      // }
    }),
  },
};

const theme = extendTheme(stylesTheme);

export default theme;
