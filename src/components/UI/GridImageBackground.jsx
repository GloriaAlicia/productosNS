import Image from 'next/image';
import { Flex, GridItem, Text } from '@chakra-ui/react';

export const GridImageBackground = ({
  urlImage,
  urlIcon,
  color,
  colorHover = 'rgb(149 149 149)',
  colSpan,
  name,
}) => {
  return (
    <GridItem
      colSpan={colSpan}
      background={`url(${urlImage}) center / cover no-repeat ${color}`}
      bgBlendMode={'multiply'}
      _hover={{
        backgroundColor: `${colorHover}`,
      }}
    >
      <Flex
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        gap={'2'}
      >
        <Image src={urlIcon} width={70} height={70} alt={`icono de ${name}`} />
        <Text fontSize="3xl" color={'white'} fontWeight={'bold'}>
          {name}
        </Text>
      </Flex>
    </GridItem>
  );
};
