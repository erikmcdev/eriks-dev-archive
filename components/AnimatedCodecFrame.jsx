import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'
import theme from '../lib/theme'

import green from '../public/images/erikb.jpg'
import purple from '../public/images/erikb_v.jpg'

const turnOn = keyframes`
    0% {
        transform: scale(1, 0);
        -webkit-filter: brightness(30);
        filter: brightness(30);
        opacity: 1;
    }
    20% {
        transform: scale(1, 0.2);
        -webkit-filter: brightness(60);
        filter: brightness(60);
        opacity: 1;
    }
    40% {
        transform: scale(1, 0);
        -webkit-filter: brightness(30);
        filter: brightness(30);
        opacity: 1;
    }
    60% {
        transform: scale(1, 0.1);
        -webkit-filter: brightness(60);
        filter: brightness(60);
        opacity: 1;
    }
    80% {
        transform: scale(1, 0);
        -webkit-filter: brightness(30);
        filter: brightness(30);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        -webkit-filter: contrast(1) brightness(1.1) saturate(1.1);
        filter: contrast(1) brightness(1.1) saturate(1.1);
        opacity: 1;
    }
`
const scan = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 150px, 0);
  }
`

const fadeInOut = keyframes`
  0% {
    box-shadow: 0 0 10px 1px #fff inset, 0 0 10px 1px #fff, 0 0 30px 10px ${theme.colors.codecGlow};
  }
  50% {
    box-shadow: 0 0 10px 1px #fff inset, 0 0 10px 1px #fff, 0 0 30px 10px #613bcb;
  }
  100% {
    box-shadow: 0 0 10px 1px #fff inset, 0 0 10px 1px #fff, 0 0 30px 10px ${theme.colors.codecGlow};
  }
`
const getRandomDelay = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const CodecScreen = () => {
  const images = [green, purple, green]

  const [delay, setDelay] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length])

  useEffect(() => {
    const randomDelay = getRandomDelay(500, 1000)
    setDelay(randomDelay)
  }, [])
  return (
    <Box
      backgroundColor="codecSecondary"
      //boxShadow={`0 0 10px 10px #fff inset, 0 0 10px 4px #fff, 0 0 30px 10px ${theme.colors.codecGlow}`}
      position="absolute"
      width="100%"
      height="100%"
      backgroundSize="100% auto"
      left="-0.5px"
      top="10px"
      animation={`${turnOn} 250ms linear forwards 1s,  ${fadeInOut} 5s linear infinite`}
      transform="scale(1, 0)"
      overflow="hidden"
      display={'inline-block'}
    >
      {/* ::before pseudo-element */}
      <Box
        backgroundColor="codecHighlight"
        boxShadow={`0 0 10px ${theme.colors.codecGlow}`}
        content=""
        height="50px"
        left="0"
        opacity="0.1"
        position="absolute"
        top="0"
        width="100%"
        animation={`${scan} 7500ms linear ${delay}ms forwards infinite`}
      />

      {/* ::after pseudo-element */}
      <Box
        backgroundColor="codecHighlight"
        boxShadow={`0 0 10px ${theme.colors.codecGlow}`}
        content=""
        height="3px"
        left="0"
        opacity="0.2"
        position="absolute"
        top="0"
        width="100%"
        animation={`${scan} 4000ms linear ${delay}ms forwards infinite`}
      />
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={index}
          fill={true}
          className={index === currentImageIndex ? 'visible' : 'hidden'}
          style={{
            objectFit: 'contain',
            zIndex: -1,
            filter: 'blur(0.5px)',
            transition: 'opacity 5s linear'
          }}
        />
      ))}
    </Box>
  )
}

export default CodecScreen
