"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import gauravProfile from '@/app/assets/gaurav-profile.jpg'
import profileImage from '@/app/assets/profile-image.jpg'
import fallbackImage from '@/app/assets/IMG_20230502_171318.jpeg'

interface ProfileImageProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  sizes?: string
  alt?: string
}

const ProfileImageImported = ({ 
  className = "",
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  alt = "Gaurav Thakur"
}: ProfileImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(gauravProfile)
  const [imageError, setImageError] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const importedImages = [gauravProfile, profileImage, fallbackImage]
  const publicImages = [
    '/images/gaurav-profile.jpg', 
    '/images/profile-image.jpg', 
    '/images/IMG_20230502_171318.jpeg',
    '/gaurav-profile.jpg', 
    '/profile-image.jpg', 
    '/IMG_20230502_171318.jpeg'
  ]

  const handleError = () => {
    console.log(`Failed to load imported image: ${currentIndex}`)
    
    if (currentIndex < importedImages.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setCurrentSrc(importedImages[nextIndex])
      console.log(`Trying next imported image: ${nextIndex}`)
    } else {
      console.log('All imported images failed, falling back to public images')
      setImageError(true)
    }
  }

  const handleLoad = () => {
    console.log(`Successfully loaded imported image: ${currentIndex}`)
  }

  // Fallback to public images with regular img tag
  if (imageError) {
    return (
      <img
        src={publicImages[0]}
        alt={alt}
        className={fill ? `${className} w-full h-full object-cover` : className}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        onLoad={() => console.log('Fallback public image loaded')}
        onError={(e) => {
          const target = e.currentTarget
          const currentSrc = target.src
          const currentPublicIndex = publicImages.indexOf(currentSrc.split('/').pop()!)
          
          if (currentPublicIndex < publicImages.length - 1) {
            target.src = publicImages[currentPublicIndex + 1]
          } else {
            console.log('All fallback images failed')
          }
        }}
      />
    )
  }

  // Use imported images with Next.js Image component
  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
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
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}

export default ProfileImageImported
