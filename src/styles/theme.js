import { extendTheme } from "@chakra-ui/react";
import { Squada_One} from 'next/font/google'

const font = Squada_One({ subsets: ['latin'],weight:['400'] })

const stylesTheme = {
  fonts:{
    heading:`${font.style.fontFamily}`
  },
  colors: {
    prim: "#653694",
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
        overflow: "hidden",
        bg:"bg",
        color:'text',
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
