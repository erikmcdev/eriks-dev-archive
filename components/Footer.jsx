import { Box, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const ModelAuthors = () => {
  return (
    <VStack>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()}{' '}
        <NextLink
          target="_blank"
          href="https://sketchfab.com/3d-models/cat-ps1-low-poly-rigged-78d863ba43b34a6c9fdd6c61dbf5776f"
        >
          Cat - PS1 Low Poly (Rigged) by @wersaus33{' '}
        </NextLink>
        texturized with different cat pictures
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()}{' '}
        <NextLink
          target="_blank"
          href="https://sketchfab.com/3d-models/maxwell-the-cat-dingus-2ca7f3c1957847d6a145fc35de9046b0"
        >
          Maxwell the cat (Dingus) by @alwayshasbean{' '}
        </NextLink>
      </Box>
    </VStack>
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
