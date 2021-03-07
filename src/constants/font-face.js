import { extendTheme } from '@chakra-ui/react';

export default `
    @font-face {
      font-family: 'Google Sans';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(fonts/GoogleSansRegular.woff) format('woff');
      url(fonts/GoogleSansRegular.woff) format('woff');
      url(fonts/GoogleSansRegular.eot) format('eot');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    },
    @font-face {
      font-family: 'Google Sans';
      font-style: medium;
      font-weight: 600;
      font-display: swap;
      src: url(fonts/ProductSans-Medium.woff) format('woff');
      url(fonts/GoogleSansRegular.woff) format('woff');
      url(fonts/GoogleSansRegular.eot) format('eot');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    },
    @font-face {
      font-family: 'Google Sans';
      font-style: bold;
      font-weight: 900;
      font-display: swap;
      src: url(fonts/ProductSans-Bold.woff) format('woff');
      url(fonts/ProductSans-Bold.woff) format('woff');
      url(fonts/ProductSans-Bold.eot) format('eot');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `;

export const theme = extendTheme({
  fonts: {
    heading: "'Google Sans', sans serif",
    body: "'Google Sans', sans serif",
  },
});
