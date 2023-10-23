import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function Hero() {
  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      gap={'1rem'}
      height={'60vh'}
      justifyContent={'center'}
      flex={1}
      whiteSpace={"nowrap"}
    >
      <Heading
        animation="slideLeft 8s cubic-bezier(0.48, 0.48, 0.48, 0.48) infinite alternate"
        bgClip={'text'}
        size={'h2'}
        userSelect={"none"}
      >
        UI UX DESIGNER
      </Heading>
      <Heading
        animation="slideRight 8s cubic-bezier(0.48, 0.48, 0.48, 0.48) infinite alternate"
        bgClip={'text'}
        size={'h2'}
        userSelect={"none"}
      >
        PINAK GHOGALE
      </Heading>
    </Flex>
  );
}

export default Hero;
