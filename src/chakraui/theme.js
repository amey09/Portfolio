import { extendTheme } from '@chakra-ui/react';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import '@fontsource/poppins';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'black',
        color: 'white',
      },
      '@keyframes slideLeft': {
        '0%': {
          transform: 'translateX(-40%)',
          opacity: 0,
        },
        '50%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
        '100%': {
          transform: 'translateX(40%)',
          opacity: 0,
        },
      },
      '@keyframes slideRight': {
        '0%': {
          transform: 'translateX(40%)',
          opacity: 0,
        },
        '50%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
        '100%': {
          transform: 'translateX(-40%)',
          opacity: 0,
        },
      },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    brand: {
      h1: 'white',
      h2: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
      h3: 'rgba(255, 255, 255, 0.5)',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        bg: 'transparent',
      },
      sizes: {
        h1: {
          fontSize: '124px',
          color: 'brand.h1',
        },
        h2: {
          fontSize: 'clamp(34.75px, 8vw, 240px)',
          background: 'brand.h2',
        },
        h3: {
          fontSize: '36px',
          color: 'brand.h3',
          fontWeight: '400',
        },
        h4: {
          fontSize: '24px',
          color: 'brand.h3',
        },
        h5: {
          fontSize: '16px',
          color: 'brand.h2',
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: '16px',
        opacity: 0.8,
      },
      sizes: {
        t2: {
          opacity: 1,
        },
      },
    },
    Link: {
      baseStyle: {
        fontSize: '16px',
      },
    },
    Email: {
      baseStyle: {
        fontSize: '16px',
      },
    },
    Phone: {
      baseStyle: {
        fontSize: '20px',
      },
    },
    EmailPhoneIcon: {
      baseStyle: {
        width: '30px',
        height: '30px',
      },
    },
    NavLinks: {
      baseStyle: {
        fontSize: '17px',
        fontWeight: '500',
      },
    },
    LogoName: {
      baseStyle: {
        fontSize: '12px',
      },
    },
    IconButton: {
      baseStyle: {
        borderRadius: '3xl',
      },
    },
    Input: {
      baseStyle: {
        fontSize: '14px',
        borderBottom: '1px solid #4f4f4f',
      },
    },
    Textarea: {
      baseStyle: {
        fontSize: '14px',
        border: '1px solid #4f4f4f',
      },
    },
    Container: {
      baseStyle: {
        width: '935px',
        height: '990px',
      },
    },
    Card: {
      baseStyle: {
        fontSize: '16px',
        fontFamily: 'Samsung Sans, sans-serif',
        width: '63.33px',
      },
    },
    WorkContainer: {
      baseStyle: {
        width: '1006px',
        height: '679px',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        borderRadius: '16px',
      },
    },
  },
  FooterText: {
    baseStyle: {
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
    },
  },
});

export default theme;
