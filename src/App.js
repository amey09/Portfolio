import React, { useRef } from 'react';
import { ChakraProvider, Flex, IconButton } from '@chakra-ui/react';
import theme from './chakraui/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaFigma,
  FaDribbble,
} from 'react-icons/fa';
import './styles/transition.css';
import ToolsContainer from './components/ToolsContainer';
import AboutContainer from './components/AboutContainer';
import WorkContainer from './components/WorkContainer';
import InfiniteScroller from './components/InfiniteScroller';
import ContactCard from './components/ContactCard';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <ChakraProvider theme={theme}>
      <header ref={homeRef}>
      <Navbar
        scrollToAbout={() =>
          aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        scrollToTools={() =>
          toolsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        scrollToWork={() =>
          workRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        scrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      />
      </header>

      {/* Hero */}
      <Flex

        minHeight={'70vh'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ overflow: 'hidden' }}
        flexDir={'column'}
        paddingBlock={'5rem'}
      >
        <Hero />
        <Flex gap={'1rem'}>
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            colorScheme="none"
            icon={<FaInstagram />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            icon={<FaTwitter />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            colorScheme="none"
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            icon={<FaLinkedinIn />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            colorScheme="none"
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            icon={<FaBehance />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            colorScheme="none"
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            icon={<FaDribbble />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            colorScheme="none"
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
          <IconButton
            color={'white'}
            backgroundColor={'transparent'}
            icon={<FaFigma />}
            border={'1px solid white'}
            borderRadius={'3xl'}
            colorScheme="none"
            _hover={{
              shadow: 'md',
              transform: 'translateY(-5px)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
        </Flex>
      </Flex>

      {/* About */}
      <Flex
        ref={aboutRef}
        justifyContent={'center'}
        padding={{
          base: '5rem 0.9rem',
          md: '5rem 3rem',
          xl: '5rem 10rem',
        }}
      >
        <AboutContainer />
      </Flex>

      {/* Tools */}
      <Flex
        ref={toolsRef}
        justifyContent={'center'}
        padding={{
          base: '5rem 0.9rem',
          md: '5rem 3rem',
          xl: '5rem 10rem',
        }}
      >
        <ToolsContainer />
      </Flex>

      {/* Scroller */}
      <InfiniteScroller />

      {/* WorkContainer */}
      <Flex
        ref={workRef}
        justifyContent={'center'}
        padding={{
          base: '5rem 0.9rem',
          md: '5rem 3rem',
          lg: '5rem 18vw',
        }}
      >
        <WorkContainer />
      </Flex>
      <Flex
        ref={contactRef}
        justifyContent={'center'}
        padding={{
          base: '5rem 0.9rem',
          md: '5rem 3rem',
          lg: '5rem 18vw',
        }}
      >
        <ContactCard scrollToHome={() =>
          homeRef.current.scrollIntoView({ behavior: 'smooth' })
        } />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
