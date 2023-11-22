import { Container, Heading, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'

import InfiniteScrollGrid from '../components/InfiniteScrollGrid'
import { getHouses } from '../lib/api'

const Houses = ({ data }) => (
  <Layout title="Catown">
    <Container maxW="75%" mt={'5'}>
      <Heading as="h3" fontSize={40} mb={5} textAlign={'center'}>
        HOMES
      </Heading>
      <Divider borderWidth="1px" />
      <InfiniteScrollGrid completeData={data}></InfiniteScrollGrid>
    </Container>
  </Layout>
)

export async function getServerSideProps() {
  const data = await getHouses()
  return {
    props: {
      data
    }
  }
}

export default Houses
