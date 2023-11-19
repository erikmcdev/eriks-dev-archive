import {
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon
} from '@chakra-ui/react'
import { RxCross2 } from 'react-icons/rx'
import { MdAdd } from 'react-icons/md'

import CatForm from './CatForm'

const AccordionForm = () => {
  return (
    <Accordion width="2xl" allowToggle>
      <AccordionItem border={'none'}>
        {({ isExpanded }) => (
          <>
            <h2>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                w="100%"
              >
                <AccordionButton
                  as={Button}
                  width={{ base: '60%', md: '30%' }}
                  colorScheme={!isExpanded ? 'purple' : 'red'}
                  fontFamily={'OCR-B Regular'}
                  pt={2}
                  rightIcon={
                    <Icon
                      as={!isExpanded ? MdAdd : RxCross2}
                      boxSize={6}
                      mt={-0.5}
                    />
                  }
                >
                  {!isExpanded ? 'add cat' : 'cancel'}
                </AccordionButton>
              </Box>
            </h2>

            <AccordionPanel pb={4}>
              <CatForm />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionForm
