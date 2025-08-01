"use client"

import Image from 'next/image'
import { useState } from 'react'

const ImageTest = () => {
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({})

  const images = [
    '/gaurav-profile.jpg',
    '/profile-image.jpg', 
    '/IMG_20230502_171318.jpeg'
  ]

  const updateStatus = (src: string, status: string) => {
    setImageStatus(prev => ({ ...prev, [src]: status }))
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg z-50 max-w-md">
      <h3 className="text-sm font-bold mb-3">Image Loading Test</h3>
      
      {/* Test with regular img tags */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold mb-2">Regular img tags:</h4>
        {images.map(src => (
          <div key={`img-${src}`} className="mb-2">
            <div className="flex items-center space-x-2">
              <img 
                src={src}
                alt="Test"
                className="w-8 h-8 object-cover rounded"
                onLoad={() => updateStatus(`img-${src}`, 'loaded')}
                onError={() => updateStatus(`img-${src}`, 'error')}
              />
              <div className="text-xs">
                <div>{src}</div>
                <div className={`${
                  imageStatus[`img-${src}`] === 'loaded' ? 'text-green-400' :
                  imageStatus[`img-${src}`] === 'error' ? 'text-red-400' :
                  'text-yellow-400'
                }`}>
                  {imageStatus[`img-${src}`] || 'loading...'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Test with Next.js Image */}
      <div>
        <h4 className="text-xs font-semibold mb-2">Next.js Image:</h4>
        {images.map(src => (
          <div key={`next-${src}`} className="mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src={src}
                  alt="Test"
                  fill
                  className="object-cover rounded"
                  unoptimized
                  onLoad={() => updateStatus(`next-${src}`, 'loaded')}
                  onError={() => updateStatus(`next-${src}`, 'error')}
                />
              </div>
              <div className="text-xs">
                <div>{src}</div>
                <div className={`${
                  imageStatus[`next-${src}`] === 'loaded' ? 'text-green-400' :
                  imageStatus[`next-${src}`] === 'error' ? 'text-red-400' :
                  'text-yellow-400'
                }`}>
                  {imageStatus[`next-${src}`] || 'loading...'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageTest
