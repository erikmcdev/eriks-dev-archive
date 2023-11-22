import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import whiteEye from '../public/images/WhiteEye.png'
import MovingIris from './MovingIris'
import ColorChangingIris from './ColorChangingIris'

const Eye = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  })

  const [isDesktop, setIsDesktop] = useState(false)

  const handleResize = () => {
    const eyeballimg = document
      .getElementById('eyeball')
      .getBoundingClientRect()
    const dimensions = {
      width: eyeballimg.width,
      height: eyeballimg.height
    }

    setImageDimensions(dimensions)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 1224px)')

    const handleMediaQueryChange = () => {
      setIsDesktop(desktopMediaQuery.matches)
    }

    handleMediaQueryChange()

    desktopMediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      desktopMediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Box
      position="fixed"
      width="100%"
      height="100vh"
      opacity="0.5"
      alignItems="center"
      justifyContent="center"
      display="flex"
      style={{ zIndex: -1 }}
    >
      <Image
        id="eyeball"
        src={whiteEye}
        alt="White Eye"
        fill={false}
        style={{ objectFit: 'cover', filter: 'blur(8px)', zIndex: -1 }}
        position="absolute"
        priority={true}
      />

      <Box
        id="iris-container"
        position="absolute"
        w={imageDimensions.width}
        h={imageDimensions.height}
        display={'flex'}
        style={{ zIndex: 0 }}
      >
        {isDesktop ? <MovingIris /> : <ColorChangingIris />}
      </Box>
    </Box>
  )
}

export default Eye
