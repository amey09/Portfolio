import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function ContactCard({scrollToHome}) {
  return (
    <Flex flexDir={'column'} gap={'4rem'} alignItems={'center'}>
      <Heading>Get in Touch</Heading>

      <Flex flexDir={'column'} gap={'2rem'}>
        <Flex gap={'2rem'}>
          <Input
            _placeholder={{ color: 'white' }}
            placeholder="First Name"
            variant={'flushed'}
          />
          <Input
            _placeholder={{ color: 'white' }}
            placeholder="Last Name"
            variant={'flushed'}
          />
        </Flex>
        <Flex gap={'2rem'}>
          <Input
            _placeholder={{ color: 'white' }}
            placeholder="Email"
            variant={'flushed'}
          />
          <Input
            _placeholder={{ color: 'white' }}
            placeholder="Phone Number"
            variant={'flushed'}
          />
        </Flex>
        <Textarea
          _placeholder={{ color: 'white' }}
          placeholder="Message"
          height="20vh"
          resize="vertical"
          overflowY="auto"
        />
      </Flex>
      <Button colorScheme="yellow">Submit Now</Button>
      <Flex flex={1} width={'100%'} flexDir={'column'} gap={'0.7rem'}>
        <Flex alignItems={'center'} gap={'0.5rem'}>
          <MdEmail />
          <Link>pinakghogale@gmail.com</Link>
        </Flex>
        <Flex alignItems={'center'} gap={'0.5rem'}>
          <FaPhoneVolume />
          <Link>+91 8879506855</Link>
        </Flex>
      </Flex>

      <Text size={'t2'}>© PinakGhogale 2023</Text>
      <Link variant={"link"} size ={'t2'} onClick={scrollToHome}>Back to Top</Link>
    </Flex>
  );
}

export default ContactCard;
