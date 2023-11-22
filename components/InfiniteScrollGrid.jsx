import React, { useEffect, useState, useCallback } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import { HouseGridItem } from './GridItem'

const InfiniteScrollGrid = ({ completeData }) => {
  const perPage = 10
  const [visibleData, setVisibleData] = useState([])
  const [index, setIndex] = useState(perPage)
  const [isLoading, setIsLoading] = useState(false)
  const loadingThreshold = 200

  const handleScroll = useCallback(() => {
    if (isLoading) return
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - loadingThreshold &&
      visibleData.length < completeData.length
    ) {
      setIsLoading(true)

      const endIndex = index + perPage
      const newData = completeData.slice(index, endIndex)

      setVisibleData(prevData => [...prevData, ...newData])
      setIndex(endIndex)

      setIsLoading(false)
    }
  }, [completeData, visibleData, index, perPage, isLoading])

  useEffect(() => {
    const initialData = completeData.slice(0, perPage)
    setVisibleData(initialData)
  }, [completeData, perPage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <SimpleGrid columns={[1, 1, 3]} gap={2}>
      {visibleData.map(item => (
        <MemoGridItem key={item.id} item={item} />
      ))}
    </SimpleGrid>
  )
}

const MemoGridItem = React.memo(({ item }) => {
  return <HouseGridItem id={item.id} population={item.count} />
})

export default InfiniteScrollGrid
