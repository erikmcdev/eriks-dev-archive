import { Box, Center, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Paragraph from './Paragraph'

const HouseCoexStatus = ({ coex }) => {
  return (
    <Stack direction={'row'}>
      <Paragraph>status</Paragraph>
      <Paragraph
        style={{
          color: coex < 0.33 ? 'red' : coex < 0.67 ? 'yellow' : 'green'
        }}
      >
        {coex < 0.33 ? 'unbearable' : coex < 0.67 ? 'stable' : 'perfect'}
      </Paragraph>
    </Stack>
  )
}
const HouseCard = ({ house }) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250px'}
        bg={'gray.800'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        height={'400px'}
        width={'282px'}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'300px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundColor: '#d5e1f5',
            filter: 'blur(10px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            src={`/images/houses/${house.picture}`}
            alt="#"
            fill={true}
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 1200px"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading
            fontSize={'2xl'}
            fontFamily={'OCR-B Regular'}
            fontWeight={500}
          >
            {house.count} cat{house.count != 1 ? 's' : ''}
          </Heading>
          {house.count > 1 && <HouseCoexStatus coex={house.coex} />}
        </Stack>
      </Box>
    </Center>
  )
}

export default HouseCard
