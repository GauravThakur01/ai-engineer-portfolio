"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ProfileImageProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  sizes?: string
  alt?: string
}

const ProfileImage = ({ 
  className = "",
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  alt = "Gaurav Thakur"
}: ProfileImageProps) => {
  const [currentSrc, setCurrentSrc] = useState('/gaurav-profile.jpg')
  const [useRegularImg, setUseRegularImg] = useState(false) // Try Next.js Image first
  const [imageLoaded, setImageLoaded] = useState(false)

  const fallbackImages = [
    '/gaurav-profile.jpg',
    '/profile-image.jpg', 
    '/IMG_20230502_171318.jpeg',
    '/test.jpg'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleError = () => {
    console.log(`Failed to load image: ${fallbackImages[currentIndex]}`)
    
    if (currentIndex < fallbackImages.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setCurrentSrc(fallbackImages[nextIndex])
      console.log(`Trying fallback image: ${fallbackImages[nextIndex]}`)
    } else {
      console.log('All images failed, using regular img tag')
      setUseRegularImg(true)
      setCurrentSrc('/gaurav-profile.jpg') // Reset to first image
      setCurrentIndex(0)
    }
  }

  const handleLoad = () => {
    console.log(`Successfully loaded: ${currentSrc}`)
    setImageLoaded(true)
  }

  // If using regular img tag as fallback
  if (useRegularImg) {
    const imgClassName = fill 
      ? `${className} w-full h-full object-cover`
      : className

    return (
      <img
        src={currentSrc}
        alt={alt}
        className={imgClassName}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onLoad={handleLoad}
        onError={() => {
          if (currentIndex < fallbackImages.length - 1) {
            const nextIndex = currentIndex + 1
            setCurrentIndex(nextIndex)
            setCurrentSrc(fallbackImages[nextIndex])
          }
        }}
      />
    )
  }

  // Use Next.js Image component
  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        unoptimized
        onError={handleError}
        onLoad={handleLoad}
        sizes={sizes}
      />
    )
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={className}
      priority={priority}
      unoptimized
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}

export default ProfileImage
