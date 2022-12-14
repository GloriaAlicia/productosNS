import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Navbar } from '../UI';
import { Footer } from '../UI/Footer';

export const PageLayout = ({ children, title, pageDescription, imageUrl }) => {
  const color = 'rgba(225, 129, 69, 0.2)';
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={`${pageDescription}`} />
        <meta name="og:title" content={`${title}`} />
        <meta name="og:description" content={`${pageDescription}`} />
        {imageUrl ? <meta name="og:image" content={`${imageUrl}`} /> : ''}
      </Head>
      <Navbar />

      <Box
        as="main"
        minHeight={'80vh'}
        padding={'2'}
        marginTop={'60px'}
        bgColor={'#FFF'}
        opacity={'initial'}
        bgImg={`linear-gradient(${color} 2px, transparent 2px), linear-gradient(90deg, ${color} 2px, transparent 2px), linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, #fff 1px); background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px; background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;`}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
};
