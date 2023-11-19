import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CatText = styled(Text)`
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-text-stroke: 1.4px black;
  text-stroke: 0.7px black;
  font-size: 20px;
  color: 'blue';

  /* Fallback color for browsers that do not support text-stroke */
  -webkit-text-fill-color: white;
`
