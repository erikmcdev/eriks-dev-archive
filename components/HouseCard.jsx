import { Box, Center, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'

const IMAGE =
  'https://static.designboom.com/wp-content/uploads/2020/07/kooo-architects-machiya-house-renovation-kyoto-designboom-1.jpg'

export default function HouseCard({ population }) {
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
        height={'380px'}
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
            //backgroundColor: '#d5e1f5',
            backgroundImage: `url( ${IMAGE})`,
            filter: 'blur(15px)',
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
            src={IMAGE}
            alt="#"
            fill={true}
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 1200px"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <p></p>
          <Heading
            fontSize={'2xl'}
            fontFamily={'OCR-B Regular'}
            fontWeight={500}
          >
            {population} cat{population > 1 ? 's' : ''}
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}
