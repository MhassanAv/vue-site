import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import Script from  'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <ColorModeScript initialColorMode={'dark'} />
        <Main />
        <NextScript />
        <Script src='canvas-video-player.js' defer/>
      </body>
    </Html>
  )
}
