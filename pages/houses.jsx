import { Container, Heading, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'

import InfiniteScrollGrid from '../components/InfiniteScrollGrid'
import { getHouses } from '../lib/api'
import { getImageFileNameByUUID } from '../utils/fileResources'

const Houses = ({ data }) => (
  <Layout title="Catown">
    <Container maxW="75%" mt={'5'}>
      <Heading as="h3" fontSize={40} mb={5} textAlign={'center'}>
        HOUSES
      </Heading>
      <Divider borderWidth="1px" />
      <InfiniteScrollGrid completeData={data} />
    </Container>
  </Layout>
)

export async function getServerSideProps() {
  try {
    const data = await getHouses()
    // Fetch file names based on cat ids and add them to each cat object
    const updatedData = await Promise.all(
      data.map(async house => ({
        ...house,
        picture: await getImageFileNameByUUID(house.id)
      }))
    )
    return {
      props: {
        data: updatedData
      }
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }
}

export default Houses
