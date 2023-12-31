import { Flex, HStack, Image, Link } from '@chakra-ui/react';
import React from 'react';

function Navbar({
  scrollToAbout,
  scrollToTools,
  scrollToWork,
  scrollToContact,
}) {
  return (
    <Flex
      justifyContent={{ base: 'center', md: 'space-between' }}
      gap={{ base: '1.5rem', lg: 0 }}
      position={'sticky'}
      width={'100%'}
      padding={{ base: '1.5rem 0', sm: '1.5rem 3rem' }}
      flexWrap={{ base: 'wrap', sm: 'wrap' }}
    >
      <HStack maxWidth={'12rem'} flexShrink={0}>
        <Image src="/logo.png" />
        <Link userSelect={"none"} textStyle={'NavLinks'} _hover={{ textDecoration: 'none' }}>
          UI/UX Designer & Product Designer
        </Link>
      </HStack>
      <HStack
        justifyContent={'space-evenly'}
        flex={{ base: '1', md: '0' }}
        gap={{ sm: '2rem' }}
      >
        <Link textStyle={'NavLinks'} userSelect={"none"}>Home</Link>
        <Link textStyle={'NavLinks'} onClick={scrollToAbout} userSelect={"none"}>
          About
        </Link>
        <Link textStyle={'NavLinks'} onClick={scrollToWork} userSelect={"none"}>
          Work
        </Link>
        <Link textStyle={'NavLinks'} onClick={scrollToTools} userSelect={"none"}>
          Tools
        </Link>
        <Link textStyle={'NavLinks'} onClick={scrollToContact} userSelect={"none"}>Contact</Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;
