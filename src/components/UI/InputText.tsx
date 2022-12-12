import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const InputText = ({
  value,
  handleChange,
  required,
  validError,
  errorText,
  type = 'text',
  name,
  placeholder = '',
}) => {
  return (
    <FormControl
      isRequired={required}
      isInvalid={validError}
      marginBottom={'3'}
    >
      <FormLabel> {name} </FormLabel>
      <Input
        variant="filled"
        placeholder={placeholder}
        type={type}
        name={name}
        // id={name}
        value={value}
        onChange={handleChange}
      />
      {validError ? (
        <FormErrorMessage> {errorText} </FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
