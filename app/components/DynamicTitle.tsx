'use client'

import { useEffect, useState } from 'react'

export default function DynamicTitle() {
  const [currentMessage, setCurrentMessage] = useState('Himanshu Sharma')
  
  useEffect(() => {
    const messages = [
      'Himanshu Sharma',
      'Thinking...',
      'Creating...',
      'Building...',
      'Capturing...'
    ]
    
    let messageIndex = 0
    let charIndex = 0
    let isDeleting = false
    
    const typeTitle = () => {
      const current = messages[messageIndex]
      
      if (!isDeleting && charIndex < current.length) {
        // Typing
        document.title = `💡 ${current.substring(0, charIndex + 1)}`
        charIndex++
        setTimeout(typeTitle, 100)
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        document.title = `💡 ${current.substring(0, charIndex - 1)}`
        charIndex--
        setTimeout(typeTitle, 50)
      } else if (!isDeleting && charIndex === current.length) {
        // Wait before deleting
        setTimeout(() => {
          isDeleting = true
          typeTitle()
        }, 2000)
      } else if (isDeleting && charIndex === 0) {
        // Move to next message
        isDeleting = false
        messageIndex = (messageIndex + 1) % messages.length
        charIndex = 0
        setTimeout(typeTitle, 500)
      }
    }
    
    typeTitle()
  }, [])

  return null // This component doesn't render anything
}
