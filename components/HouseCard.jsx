import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack
} from '@chakra-ui/react'
import Image from 'next/image'

const IMAGE =
  'https://i.pinimg.com/originals/82/1c/78/821c7878a6359caea82f4f680cb58e46.jpg'

export default function HouseCard({ population }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250px'}
        bg={useColorModeValue('white', 'gray.800')}
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
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {population} cats
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}
