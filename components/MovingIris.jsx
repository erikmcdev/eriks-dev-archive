import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import iris from '../public/images/Iris_v.png'

const MovingIris = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => {
      const container = document.getElementById('iris-container')
      if (container) {
        const containerRect = container.getBoundingClientRect()
        console.log(containerRect.left)
        // Calculate maximum allowable coordinates
        const maxX = containerRect.width - 0.5 * containerRect.width
        const maxY = containerRect.height - 0.5 * containerRect.height
        // Update position based on the cursor coordinates, keeping it within bounds
        setPosition({
          x: Math.min(
            maxX,
            Math.max(100, e.clientX - containerRect.width - 80)
          ),
          y: Math.min(maxY, Math.max(50, e.clientY - containerRect.top - 200))
        })
      }
    }

    // Add event listener to track mouse movement
    document.addEventListener('mousemove', handleMouseMove)

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Image
      src={iris}
      alt="Iris"
      style={{
        width: '40%',
        height: '40%',
        position: 'relative',
        left: `${position.x}px`,
        top: `${position.y}px`,
        filter: 'blur(6px)'
      }}
    />
  )
}

export default MovingIris
