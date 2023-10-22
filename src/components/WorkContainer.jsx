import React from 'react';
import { Box, Flex} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData.json';

function WorkContainer() {
  return (
    <Flex position={'relative'} flexDir={'column'} gap={'8rem'}>
      {projectData.projects.map((project, title) => (
        <Box key={title}>
          <ProjectCard
            title={project.title}
            titleTagLine={project.titleTagLine}
            logoUrl={project.logoUrl}
            tool={project.tool}
            toolLogoUrl={project.toolLogoUrl}
            aim={project.aim}
            primaryImageUrl={project.primaryImageUrl}
            primaryImageDescription={project.primaryImageDescription}
            secondaryImageUrl={project.secondaryImageUrl}
            secondaryImageDescription={project.secondaryImageDescription}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default WorkContainer;
