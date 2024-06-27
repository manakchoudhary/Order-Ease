// src/styles/theme.js
import { extendTheme } from '@chakra-ui/react';

// Customizing the theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e4f5ff',
      100: '#b8d9ff',
      200: '#8abfff',
      300: '#5ba3ff',
      400: '#2d87ff',
      500: '#006bec',
      600: '#0054b5',
      700: '#003c7e',
      800: '#002446',
      900: '#000c1f',
    },
    teal: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      sizes: {
        md: {
          h: 10,
          fontSize: 'md',
          px: 6,
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
  },
});

export default theme;
