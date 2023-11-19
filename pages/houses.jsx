import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'
import Section from '../components/Section'

import { HouseGridItem } from '../components/GridItem'

const Houses = ({ data }) => (
  <Layout title="Catown">
    <Container maxW="75%" mt={'5'}>
      <Heading as="h3" fontSize={40} mb={5} textAlign={'center'}>
        HOMES
      </Heading>
      <Divider borderWidth="1px" />
      <SimpleGrid columns={[1, 1, 3]} gap={2}>
        {data.map(house => (
          <Section key={house.id}>
            <HouseGridItem id={house.id} population={house.count} />
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export async function getServerSideProps() {
  // Fetch data from an API or any data source
  const response = await fetch('http://localhost:5005/houses')
  const data = await response.json()

  // Pass the data as props to the page component
  return {
    props: {
      data
    }
  }
}

export default Houses
