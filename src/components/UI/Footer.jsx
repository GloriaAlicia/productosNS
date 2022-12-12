import { Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bgColor={'yellow.100'}
      justifyContent={'center'}
      alignItems={'center'}
      padding={'4'}
    >
      <p>Todos los derechos reservados 2020 | Productos N&S S.A.C. Lima-Perú</p>
    </Flex>
  );
};
