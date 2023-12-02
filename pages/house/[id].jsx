import { Container, Heading, SimpleGrid, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Layout from '../../components/layouts/Article'
import { CatGridItem } from '../../components/GridItem'

import { getCatsByHouseId } from '../../lib/api'
import { getModelFileNameByUUID } from '../../utils/fileResources'

const DynamicAccordion = dynamic(
  () => import('../../components/AccordionForm'),
  {
    ssr: false
  }
)

const HouseDetailPage = ({ data }) => (
  <Layout title="CATS">
    <Container maxW={{ base: '100%', md: '75%' }} mt={'5'} mb={10}>
      <Flex direction="column" align="center" mb={6}>
        <Heading as="h3" fontSize={40} textAlign={'center'} mb={4}>
          CATS
        </Heading>
        <Flex justify="flex-end" w="100%">
          {Object.keys(data).length < 4 && <DynamicAccordion />}
        </Flex>
      </Flex>
      <SimpleGrid columns={[1, 1, 3]} gap={2}>
        {data.map(cat => (
          <CatGridItem
            key={cat.id}
            name={cat.name}
            birthdate={cat.birthdate}
            nature={cat.nature}
            modelFile={cat.model}
          />
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export async function getServerSideProps({ params }) {
  const data = await getCatsByHouseId(params.id)
  // Fetch file names based on cat ids and add them to each cat object
  const updatedData = await Promise.all(
    data.map(async cat => ({
      ...cat,
      model: ['elio', 'iona', 'maxwell'].includes(cat.name.toLowerCase())
        ? `${cat.name.toLowerCase()}.glb`
        : await getModelFileNameByUUID(cat.id)
    }))
  )
  return {
    props: {
      data: updatedData
    }
  }
}

export default HouseDetailPage
