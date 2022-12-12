import { Box, Button } from '@chakra-ui/react';

import { ImageUpload } from '../../src/components/Admin/imageUpload';
import { PageAdmin } from '../../src/components/layouts/PageAdmin';
import { InputText } from '../../src/components/UI';

import { useForm } from '../../src/hooks/useForm';
import { tryOne } from '../../src/firebase/firebase-storage.db';

const upload = () => {
  const [{ Name, Description }, handleInputChange, reset] = useForm({
    Name: '',
    Description: '',
  });

  return (
    <PageAdmin title={'subir nuevo producto'}>
      <Box
        as="form"
        width={'70%'}
        padding={6}
        border={'1px'}
        borderRadius={'md'}
        marginBottom={'3'}
      >
        <InputText
          value={Name}
          handleChange={handleInputChange}
          name="Name"
          required={true}
          errorText="field not be empty"
          validError={Name.lenght < 0}
          placeholder="product name"
        />

        <InputText
          value={Description}
          handleChange={handleInputChange}
          name="Description"
          required={true}
          errorText="field not be empty"
          validError={Description.lenght < 0}
          placeholder="product description"
        />
      </Box>

      <ImageUpload />
      <Button onClick={tryOne}>PRUEBA UNO</Button>
    </PageAdmin>
  );
};

export default upload;
