import {
  Link,
  Container,
  Heading,
  Box,
  Divider,
  SimpleGrid,
  List,
  ListItem,
  Button,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { PiCatBold } from 'react-icons/pi'
import Paragraph from '../components/Paragraph'
import { BioSection, BioYear } from '../components/Bio'
import Layout from '../components/layouts/Article'
import Section from '../components/Section'
import { GridItem } from '../components/GridItem'
import CodecFrame from '../components/CodecFrame'
import thumbHouses from '../public/images/catown_houses.jpg'
import thumbCats from '../public/images/elio_screen.jpg'

const Home = () => (
  <Layout>
    <Container maxW={{ base: '100%', md: '90%' }} mt={6}>
      <Box borderRadius="lg" mb={6}>
        <Heading as="h1" variant="home-title" fontSize={['35', '50']}>
          ERIK&apos;s
        </Heading>
        <Heading
          as="h1"
          variant="home-title"
          fontSize={['50', '80']}
          whiteSpace="nowrap"
        >
          DEV ARCHIVE
        </Heading>
        <Divider borderWidth="1px" />
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box>
          <Heading as="h2">Erik Monserrate</Heading>
          <p>Intrigued Backend Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
          display="block"
          position={'relative'}
          w="150px"
          h="180px"
        >
          <CodecFrame />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 0 }}>
          About me
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={'rgba(33, 46, 45, 0.8)'}
          css={{ backdropFilter: 'blur(100px)' }}
        >
          <Paragraph>
            As a passionate server-side programmer, I specialize in crafting
            clean and efficient architectures. My expertise extends to
            event-driven systems, where I thrive on designing solutions that
            seamlessly handle complex workflows. With a keen eye for detail, I
            excel in API development, ensuring robust communication between
            services. My problem-solving approach is fueled by curiosity.
            Instead of just solving problems, I immerse myself in understanding
            their intricacies, ensuring each solution is not just a remedy, but
            a demonstration of thorough exploration.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline (canonical events)
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Barcelona, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Multiplatform App Development (DAM) CFGS at the{' '}
          <Link href="https://www.itb.cat/" target="_blank">
            Institut Tecnològic de Barcelona (ITB)
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at{' '}
          <Link href="https://www.cyberclick.net/" target="_blank">
            Cyberclick
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Free-styling
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Other interests
        </Heading>
        <Paragraph>Snorkeling, Music, Videogames, unsolved mysteries</Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Flask API Showcase: Hexagonal Architecture & DDD
        </Heading>
        <List>
          <ListItem>
            <Paragraph>
              &gt; This project is a technical demo in which I apply the
              knowledge I&apos;ve learnt about Clean Architecture and Domain
              Driven Design and applying it to Python.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              &gt; The domain is defined by cats which are defined by name,
              birthdate, and most important their &quot;personality&quot;.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              &gt; Cats are grouped by houses which have maximum capacity of 4
              felines.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              &gt; Depending on the personalities of the inhabitants each house
              will have a better or worse coliving coeficient, indicating how
              well they get along.
            </Paragraph>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/houses"
            scroll={false}
            rightIcon={<Icon as={PiCatBold} boxSize={6} />}
            backgroundColor={'#622680'}
            size="lg"
          >
            Try Catown API
          </Button>
        </Box>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={5}>
          <GridItem title="Dev as Life" thumbnail={thumbHouses}>
            Houses page screen
          </GridItem>
          <GridItem title="Inkdrop" thumbnail={thumbCats}>
            Cat existentially looking a 3d model of himself
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/Chakra'
