import { Card, Flex, Image, Progress, Text } from '@chakra-ui/react';
import React from 'react';

function ToolCard({ name, imageUrl, progress }) {
  return (
    <Card
      flexDir={'column'}
      borderRadius={'2rem'}
      border={'2px solid white'}
      padding={'1.5rem 0.9rem'}
      gap={'1rem'}
      justifyContent={'space-around'}
      textAlign={'center'}
      width={'9rem'}
      flexShrink={0}
      backgroundColor={'transparent'}
    >
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        flexShrink={'none'}
        gap={'0.9rem'}
      >
        <Image src={imageUrl} />
        <Text color={'white'} fontSize={{base: 'sm', md: 'md'}} size={"t2"}>{name}</Text>
      </Flex>

      <Progress
        value={progress}
        colorScheme={
          progress >= 0 && progress <= 25
            ? 'red'
            : progress >= 26 && progress <= 50
            ? 'orange'
            : progress >= 51 && progress <= 75
            ? 'green'
            : progress >= 76 && progress <= 100
            ? 'green'
            : 'gray'
        }
        hasStripe
        height={'1.2rem'}
        borderRadius={'2rem'}
        className="glow"
      />
    </Card>
  );
}

export default ToolCard;
