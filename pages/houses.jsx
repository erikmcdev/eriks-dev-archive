import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { HouseGridItem } from '../components/grid-item'

const Houses = ({ data }) => (
  <Layout title="Houses">
    <Container maxW="75%">
      <Heading as="h3" fontSize={40} mb={10} textAlign={'center'}>
        Houses
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {data.map(house => (
          <Section key={house.id}>
            <HouseGridItem
              id={house.id}
              name={house.name}
              population={house.count}
            />
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
