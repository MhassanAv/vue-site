import { extendTheme } from "@chakra-ui/react";
import { Inter } from 'next/font/google'

const headings = Inter({ subsets: ['latin'],weight:['700','800','900'] })

const stylesTheme = {
  fonts:{
    heading:`${headings.style.fontFamily}`,
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
        bgImage:'main-bg.svg',
      bgSize:'contain',
      bgRepeat:'no-repeat',
      bgPos:'right',
        color:'text',
        padding: "0",
        margin: "0",
      },
      "p":{
        color:'text',
        fontWeight:'300'
      },
      "H1,H2,H3,H4,H5,H6":{
        color:'headings',
        fontWeight:'500',
      }
    }),
  },
};

const theme = extendTheme(stylesTheme);

export default theme;
