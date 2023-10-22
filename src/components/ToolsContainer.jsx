import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import toolsData from '../data/toolsData.json';

function ToolsContainer() {
  return (
    <Flex flexDir={'column'} gap={'3rem'}>
      {Object.keys(toolsData).map((category, index) => (
        <Flex
          key={index}
          flexDir={'inherit'}
          gap={'3rem'}
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <Heading size={'h3'}>{category}</Heading>
          <Flex
            gap={{ base: '3rem', md: '5rem' }}
            flexWrap={{ base:"wrap", xl: "nowrap"}}
            flexGrow={1}
            justifyContent={{ base: 'center', lg: 'space-between' }}
          >
            {toolsData[category].map((tool, index) => (
              <Flex
                key={index}
                flexWrap={'wrap'}
                justifyContent={'center'}
                flex={1}
              >
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  imageUrl={tool.imageUrl}
                  progress={tool.progress}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default ToolsContainer;
