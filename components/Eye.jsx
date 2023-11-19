import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import whiteEye from '../public/images/WhiteEye.png'
import MovingIris from './MovingIris'
import ImageSlider from './ImageSlider'

const Eye = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  })

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
  return (
    <Box
      position="fixed"
      width="100%"
      height="100vh"
      zindex="-1"
      opacity="0.5"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Image
        id="eyeball"
        src={whiteEye}
        alt="White Eye"
        fill={false}
        style={{ objectFit: 'cover', filter: 'blur(8px)' }}
        zIndex={-1}
        priority={true}
      />

      <Box
        id="iris-container"
        position="absolute"
        w={imageDimensions.width}
        h={imageDimensions.height}
        display={'flex'}
        zIndex={0}
      >
        <MovingIris />
      </Box>
    </Box>
  )
}

export default Eye
