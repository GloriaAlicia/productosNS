import { Grid } from '@chakra-ui/react';
import { PageLayout } from '../src/components/layouts/PageLayout';
import { GridImageBackground } from '../src/components/UI/GridImageBackground';

export default function Home() {
  return (
    <PageLayout
      title={'Home Page'}
      pageDescription={'PRODUCTOS N&S es un sitio web para comprar comida'}
    >
      <Grid
        minHeight={{ base: '7xl', md: '4xl', lg: 'xl' }}
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        paddingY={'4'}
        paddingX={{ base: '4', md: '9', lg: '14' }}
        gap={4}
      >
        <GridImageBackground
          urlImage={'/images/alfajores.jpg'}
          urlIcon={'/icons/alfajores.png'}
          color={'rgb(212, 103, 74)'}
          colorHover={'rgb(149 149 149)'}
          colSpan={{ base: '0', md: '2' }}
          name={'ALFAJORES'}
        />

        <GridImageBackground
          urlImage={'/images/keke.jpg'}
          urlIcon={'/icons/kekes.svg'}
          color={'rgb(236, 135, 4)'}
          colSpan={'0'}
          name={'KEKES'}
        />

        <GridImageBackground
          urlImage={'/images/pastel.jpeg'}
          urlIcon={'/icons/pasteles.svg'}
          color={'rgb(200, 61, 60)'}
          colSpan={'0'}
          name={'PASTELES'}
        />

        <GridImageBackground
          urlImage={'/images/empanada.jpg'}
          urlIcon={'/icons/empanadas.svg'}
          color={'rgb(246, 181, 8)'}
          colSpan={'0'}
          name={'EMPANADAS'}
        />

        <GridImageBackground
          urlImage={'/images/alfajores.jpg'}
          urlIcon={'/icons/bocaditos.svg'}
          color={'rgb(225, 130, 69)'}
          colSpan={'0'}
          name={'BOCADITOS'}
        />
      </Grid>
    </PageLayout>
  );
}
