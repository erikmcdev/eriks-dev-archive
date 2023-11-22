import { useState, useEffect } from 'react'
import Image from 'next/image'

import iris from '../public/images/Iris.png'
import iris_red from '../public/images/Iris_r.png'
import iris_violet from '../public/images/Iris_v.png'

const ColorChangingIris = () => {
  const images = [iris, iris_red, iris_violet]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length])

  return (
    <div className="image-slider-container">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={index === currentImageIndex ? 'visible' : 'hidden'}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            filter: 'blur(6px)',
            transition: 'opacity 5s ease-out'
          }}
        />
      ))}
    </div>
  )
}

export default ColorChangingIris
