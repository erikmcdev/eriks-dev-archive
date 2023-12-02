import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

import notFound from '../public/images/not_found.jpg'

const NotFound = () => {
  return (
    <Container mt={20}>
      <Heading as="h1">Not found</Heading>
      <Text mb={5} fontFamily={'OCR-B Regular'}>
        The page you&apos;re looking for does not exist in this universe, but
        maybe in another it does.
      </Text>
      <Image src={notFound} alt={'404'} />
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" backgroundColor={'purpleIris'}>
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
