import { Box, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const ModelAuthors = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()}{' '}
      <NextLink
        target="_blank"
        href="https://sketchfab.com/3d-models/cat-ps1-low-poly-rigged-78d863ba43b34a6c9fdd6c61dbf5776f"
      >
        Cat - PS1 Low Poly (Rigged) by @Wersaus33{' '}
      </NextLink>
      texturized with different cat pictures
    </Box>
  )
}
const Footer = () => {
  const router = useRouter()
  return (
    <VStack>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Erik Monserrate. All Rights Reserved.
        This website was built based on the{' '}
        <NextLink target="_blank" href="https://www.craftz.dog/">
          Takuya Matsuyama&apos;s website
        </NextLink>
      </Box>
      {router.pathname.includes('house/') && <ModelAuthors />}
    </VStack>
  )
}

export default Footer
