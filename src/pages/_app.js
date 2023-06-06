import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/styles/Layout";
import styledTheme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={styledTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
