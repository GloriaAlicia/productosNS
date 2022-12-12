import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Navbar } from '../UI';
import { Footer } from '../UI/Footer';

export const PageLayout = ({ children, title, pageDescription, imageUrl }) => {
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

      <Box as="main" minHeight={'80vh'} padding={'2'} marginTop={'60px'}>
        {children}
      </Box>

      <Footer />
    </>
  );
};
