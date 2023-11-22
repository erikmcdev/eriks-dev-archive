import Head from 'next/head'
import NavBar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Eye from '../Eye'

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erik's DEV archive" />
        <meta name="author" content="Erik Monserrate" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Erik's DEV archive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gaeldev" />
        <meta name="twitter:creator" content="@gaeldev" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Erik's DEV archive" />
        <meta name="og:title" content="Erik's DEV archive" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Erik&apos;s DEV archive</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="100%" pt={14}>
        <Eye />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
