"use client"

import ProfileImage from '@/components/ProfileImage'
import Image from 'next/image'
import { useState } from 'react'

export default function ImageTestPage() {
  const [showDebug, setShowDebug] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test Page</h1>
        
        <button 
          onClick={() => setShowDebug(!showDebug)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showDebug ? 'Hide' : 'Show'} Debug Info
        </button>

        {showDebug && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Direct image tests */}
              <div>
                <h3 className="font-semibold mb-3">Direct HTML img tags:</h3>
                <div className="space-y-3">
                  {['/gaurav-profile.jpg', '/profile-image.jpg', '/IMG_20230502_171318.jpeg', '/test.jpg'].map(src => (
                    <div key={src} className="flex items-center space-x-3">
                      <img 
                        src={src} 
                        alt="Test" 
                        className="w-16 h-16 object-cover rounded border"
                        onLoad={() => console.log(`✅ Loaded: ${src}`)}
                        onError={() => console.log(`❌ Failed: ${src}`)}
                      />
                      <span className="text-sm">{src}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next.js Image tests */}
              <div>
                <h3 className="font-semibold mb-3">Next.js Image components:</h3>
                <div className="space-y-3">
                  {['/gaurav-profile.jpg', '/profile-image.jpg', '/IMG_20230502_171318.jpeg', '/test.jpg'].map(src => (
                    <div key={`next-${src}`} className="flex items-center space-x-3">
                      <div className="w-16 h-16 relative border rounded overflow-hidden">
                        <Image
                          src={src}
                          alt="Test"
                          fill
                          className="object-cover"
                          unoptimized
                          onLoad={() => console.log(`✅ Next.js loaded: ${src}`)}
                          onError={() => console.log(`❌ Next.js failed: ${src}`)}
                        />
                      </div>
                      <span className="text-sm">{src}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ProfileImage component test */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">ProfileImage Component Test</h2>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            
            {/* Small size */}
            <div className="text-center">
              <h3 className="font-medium mb-3">Small (Navigation size)</h3>
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                <ProfileImage
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Medium size */}
            <div className="text-center">
              <h3 className="font-medium mb-3">Medium size</h3>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                <ProfileImage
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Large size (Hero size) */}
            <div className="text-center">
              <h3 className="font-medium mb-3">Large (Hero size)</h3>
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-gray-300 relative">
                <ProfileImage
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
