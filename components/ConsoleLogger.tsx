"use client"

import { useEffect, useState } from 'react'

const ConsoleLogger = () => {
  const [logs, setLogs] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Capture console.log and console.error for image debugging
    const originalLog = console.log
    const originalError = console.error

    console.log = (...args) => {
      originalLog(...args)
      const message = args.join(' ')
      if (message.includes('image') || message.includes('Image') || message.includes('load') || message.includes('error')) {
        setLogs(prev => [...prev.slice(-9), `LOG: ${message}`])
      }
    }

    console.error = (...args) => {
      originalError(...args)
      const message = args.join(' ')
      if (message.includes('image') || message.includes('Image') || message.includes('load') || message.includes('error')) {
        setLogs(prev => [...prev.slice(-9), `ERROR: ${message}`])
      }
    }

    return () => {
      console.log = originalLog
      console.error = originalError
    }
  }, [])

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded text-sm z-50"
      >
        Show Console
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg z-50 max-w-md max-h-60 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">Image Console</h3>
        <button
          onClick={() => {
            setLogs([])
            setIsVisible(false)
          }}
          className="text-white hover:text-gray-300 text-sm"
        >
          ✕
        </button>
      </div>
      <div className="space-y-1">
        {logs.length === 0 ? (
          <div className="text-gray-400 text-xs">No image logs yet...</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className={`text-xs ${log.startsWith('ERROR') ? 'text-red-400' : 'text-green-400'}`}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ConsoleLogger
