import { Flex, HStack, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';

function ProjectCard({
  logoUrl,
  title,
  titleTagLine,
  tool,
  toolLogoUrl,
  aim,
  primaryImageUrl,
  primaryImageDescription,
  secondaryImageUrl,
  secondaryImageDescription,
}) {
  return (
    <Flex flexDir={'column'} gap={'1.5rem'} borderBlock={"0.5rem solid grey"} paddingBlock={"0.2rem"}>
      {/* Header */}
      <Flex justifyContent={'space-between'}>
        <HStack gap={'0.5rem'} whiteSpace={'nowrap'}>
          <Image src={logoUrl} height={'50px'} />
          <Flex flexDir={'column'}>
            <Text
              letterSpacing={'0.5rem'}
              fontWeight={'bold'}
              fontSize={['xs', 'sm', 'md', 'lg']}
              size={"t2"}
            >
              {title}
            </Text>
            {titleTagLine && <Text fontSize={'xs'}>{titleTagLine}</Text>}
          </Flex>
        </HStack>
        <HStack gap={"0.5rem"} whiteSpace={'nowrap'}>
          <Text fontWeight={'medium'} fontSize={['xs', 'sm', 'md', 'lg']} size={"t2"}>
            {tool && 'Done in:'}
            <br />
            {tool}
          </Text>
          <Image src={toolLogoUrl} height={'50px'} />
        </HStack>
      </Flex>

      {/* Aim */}
      {aim && <Text fontSize={'md'} size={"t2"}>{aim}</Text>}

      {/* Body */}
      <Flex gap={'3rem'} flexDir={'column'} position={'relative'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={{ base: 'column', md: 'row' }}
          gap={'1rem'}
        >
          <Box flex={1}>
            <Image src={primaryImageUrl} objectFit={'contain'} width={"100%"}/>
          </Box>
          <Box flex={1}>
            <Text fontSize={['sm', 'md', 'lg']} flexShrink={'none'} size={"t2"}>
              {primaryImageDescription}
            </Text>
          </Box>
        </Flex>
        {secondaryImageUrl && secondaryImageDescription ? (
          <>
            <Flex
              gap={'1rem'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={{ base: 'column-reverse', md: 'row' }}
            >
              <Box flex={1}>
                <Text
                  fontSize={['sm', 'md', 'lg']}
                  flexShrink={'none'}
                  textAlign={'justify'}
                  size={"t2"}
                >
                  {secondaryImageDescription}
                </Text>
              </Box>
              <Box flex={1}>
                <Image src={secondaryImageUrl} objectFit={'contain'} width={"100%"} />
              </Box>
            </Flex>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default ProjectCard;
