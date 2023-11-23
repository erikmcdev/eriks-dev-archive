import NextLink from 'next/link'
import Image from 'next/image'
import {
  Flex,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  VStack,
  HStack,
  Icon
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

import HouseCard from './HouseCard'
import LowPolyCatLoader from './ModelLoader'
import dynamic from 'next/dynamic'
import { MdCake } from 'react-icons/md'

import { CatText } from './CatText'
import NatureBadge from './NatureBadge'

const LazyLowPolyCat = dynamic(() => import('./LowPolyCat'), {
  ssr: false,
  loading: () => <LowPolyCatLoader />
})

export const GridItem = ({ children, thumbnail }) => (
  <Flex alignItems="center" justifyContent="center">
    <Box w={{ base: '100%', md: '70%' }} textAlign="center">
      <Image
        src={thumbnail}
        alt={children}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Text mt={3} fontSize={14}>
        {children}
      </Text>
    </Box>
  </Flex>
)

export const HouseGridItem = ({ house }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/house/${house.id}`}
      scroll={false}
      cursor="pointer"
    >
      <HouseCard house={house} />
    </LinkBox>
  </Box>
)

export const CatGridItem = ({ name, birthdate, nature }) => {
  const dateObj = new Date(birthdate)
  const day = dateObj.getDate()
  const month = dateObj
    .toLocaleString('en-US', { month: 'short' })
    .toLowerCase()
  const year = dateObj.getFullYear()
  const formattedDate = `${day} / ${month} / ${year}`
  return (
    <Box w="100%" textAlign="center">
      <VStack>
        <LazyLowPolyCat />
        <CatText fontSize={30}>{name}</CatText>
        <NatureBadge nature={nature} />
        <HStack>
          <Icon as={MdCake} boxSize={6} mb={1.5} />
          <CatText>{formattedDate}</CatText>
        </HStack>
      </VStack>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
