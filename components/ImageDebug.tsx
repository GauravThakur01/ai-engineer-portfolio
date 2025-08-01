"use client"

import Image from 'next/image'
import { useState } from 'react'

const ImageDebug = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({})

  const images = [
    '/gaurav-profile.jpg',
    '/profile-image.jpg',
    '/IMG_20230502_171318.jpeg'
  ]

  const handleError = (src: string) => {
    console.log(`Failed to load image: ${src}`)
    setImageErrors(prev => ({ ...prev, [src]: true }))
  }

  const handleLoad = (src: string) => {
    console.log(`Successfully loaded image: ${src}`)
    setImageLoaded(prev => ({ ...prev, [src]: true }))
  }

  return (
    <div className="fixed top-20 right-4 bg-black/80 p-4 rounded-lg text-white z-50 max-w-sm">
      <h3 className="text-sm font-bold mb-2">Image Debug Info</h3>
      {images.map(src => (
        <div key={src} className="mb-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src={src}
                alt="Debug"
                fill
                className="object-cover rounded"
                onError={() => handleError(src)}
                onLoad={() => handleLoad(src)}
              />
            </div>
            <div>
              <div>{src}</div>
              <div className="text-xs">
                {imageErrors[src] && <span className="text-red-400">❌ Error</span>}
                {imageLoaded[src] && <span className="text-green-400">✅ Loaded</span>}
                {!imageErrors[src] && !imageLoaded[src] && <span className="text-yellow-400">⏳ Loading</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageDebug
