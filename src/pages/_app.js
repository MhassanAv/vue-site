import { ChakraProvider } from "@chakra-ui/react";
import styledTheme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={styledTheme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}
