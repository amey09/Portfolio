import { Box, Flex, Heading, Link, Progress, Text } from '@chakra-ui/react';
import React from 'react';
import aboutData from '../data/aboutData.json';

function AboutContainer() {
  return (
    <Flex flexDir={'column'} alignItems={'center'} gap={'3rem'}>
      <Link href="/UI_CV.pdf" download>
        <Heading size={'md'}>Download Resume</Heading>
      </Link>
      <Flex padding={'1.5rem'} backgroundColor={'gray.900'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Flex flexDir="row" gap={'2rem'}>
            {Object.keys(aboutData).map((section, index) => (
              <Flex key={index} flexDir="column" gap="2rem">
                {Object.entries(aboutData[section]).map(([key, value]) => (
                  <Box key={key}>
                    <Heading
                      paddingBottom={'0.5rem'}
                      size={['xs', 'sm', 'md', 'lg']}
                      opacity={"70%"}
                    >
                      {key}
                    </Heading>
                    {typeof value === 'number' ? (
                      <>
                        <Flex
                          justifyContent={'space-between'}
                          paddingBottom={'0.5rem'}
                        >
                          <Text opacity="100%" style={{ fontSize: "0.7rem"}}>Introvert</Text>
                          <Text opacity="100%" style={{ fontSize: "0.7rem"}}>Extrovert</Text>
                        </Flex>
                        <Progress
                          colorScheme="green"
                          hasStripe
                          value={value}
                          className="glow"
                          height={'1rem'}
                          borderRadius={'3rem'}
                        />
                      </>
                    ) : (
                      <Text opacity="50%" size="h5">
                        {value}
                      </Text>
                    )}
                  </Box>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutContainer;
