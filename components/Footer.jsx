import { Box } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Erik Monserrate. All Rights Reserved.
      This website is built based on the{' '}
      <NextLink target="_blank" href="https://www.craftz.dog/">
        Takuya Matsuyama&apos;s website
      </NextLink>
    </Box>
  )
}

export default Footer
