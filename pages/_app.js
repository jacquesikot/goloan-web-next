import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import fonts, { theme } from '../src/constants/font-face';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

// Maybe we can keep fonts somewhere else
