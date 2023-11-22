import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  FormErrorMessage
} from '@chakra-ui/react'

import { useForm } from './FormLogic'

const CatForm = () => {
  const { formErrors, isSubmitting, handleInputChange, handleSubmit } =
    useForm()
  const currentDate = new Date().toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={!!formErrors.name}>
        <FormLabel fontFamily={'OCR-B Regular'}>name</FormLabel>
        <Input
          name="name"
          fontFamily={'OCR-B Regular'}
          focusBorderColor="#3c0461"
          placeholder="Enter name (max 20 characters)"
          maxLength={20}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <FormErrorMessage>{formErrors.name}</FormErrorMessage>
      </FormControl>
      <FormControl mt={4} isInvalid={!!formErrors.birthdate}>
        <FormLabel fontFamily={'OCR-B Regular'}>birthdate</FormLabel>
        <Input
          name="birthdate"
          fontFamily={'OCR-B Regular'}
          focusBorderColor="#3c0461"
          type="date"
          min={'2000-01-01'}
          max={currentDate}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <FormErrorMessage>{formErrors.birthdate}</FormErrorMessage>
      </FormControl>
      <FormControl mt={4} isInvalid={!!formErrors.nature}>
        <FormLabel fontFamily={'OCR-B Regular'}>nature</FormLabel>
        <Select
          name="nature"
          placeholder="select a nature"
          fontFamily={'OCR-B Regular'}
          focusBorderColor="#3c0461"
          onChange={handleInputChange}
          disabled={isSubmitting}
        >
          <option value="LEADER_OF_THE_GANG">leader of the gang</option>
          <option value="NINJA_INVESTIGATOR">ninja investigator</option>
          <option value="PARTY_GOING">party going</option>
          <option value="LONE_TIGER">lone tiger</option>
          <option value="COMFORT_CONNAISSEUR">comfort connaisseur</option>
          <option value="BUSY_GOSSIP">busy gossip</option>
        </Select>
        <FormErrorMessage>{formErrors.nature}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        colorScheme="purple"
        mt={4}
        fontFamily={'OCR-B Regular'}
      >
        {isSubmitting ? 'submitting...' : 'submit'}
      </Button>
      <Box
        className={isSubmitting ? 'overlay' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          display: isSubmitting ? 'block' : 'none'
        }}
      />
    </form>
  )
}

export default CatForm
