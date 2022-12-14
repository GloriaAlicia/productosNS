import { Flex, Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  // const links = ['inicio'];

  return (
    <Flex
      p={4}
      top={0}
      left={0}
      as={'header'}
      align={'center'}
      justify={'space-between'}
      width={'100%'}
      height={'60px'}
      position={'fixed'}
      zIndex={'modal'}
      borderBottom={'1px'}
      bgColor={'Background'}
      borderBottomColor={'gray.300'}
    >
      <NextLink href="/">
        <Text fontSize="xl">PRODUCTOS N&S</Text>
      </NextLink>

      <Flex align={'center'} gap={'3'}>
        <Text fontSize="xl" display={{ base: 'flex', md: 'none' }}>
          $
        </Text>

        <Box
          display={{ base: 'flex', md: 'none' }}
          onClick={() => setOpen((state) => !state)}
        >
          <Image
            width={30}
            height={30}
            src="/menu.svg"
            alt={'button open menu'}
          />
        </Box>
      </Flex>

      <Flex
        as={'nav'}
        gap={2}
        top={'60px'}
        left={0}
        width={'auto'}
        height={{ base: '100vh', md: '100%' }}
        padding={{ base: '8', md: '0' }}
        position={{ base: 'absolute', md: 'static' }}
        align={'center'}
        flexDirection={{ base: 'column', md: 'row' }}
        transition={{ base: 'revert-layer', md: 'none' }}
        transitionDuration="300ms"
        transform={'auto'}
        translateX={{ base: `${isOpen ? '0' : '-177'}`, md: '0' }}
        bgColor={{ base: 'blanchedalmond', md: 'transparent' }}
      >
        <Flex
          as={'ul'}
          gap={3}
          align={{ base: 'flex-start', md: 'center' }}
          height={{ base: '100vh', md: '100%' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <NextLink href="/productos" passHref>
            <Text fontSize="xl">Productos</Text>
          </NextLink>

          <NextLink href="/contactenos" passHref>
            <Text fontSize="xl">Contáctenos</Text>
          </NextLink>

          <NextLink href="/search" passHref>
            <Text fontSize="xl">S0</Text>
          </NextLink>

          <Text fontSize="xl" display={{ base: 'none', md: 'flex' }}>
            $
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
