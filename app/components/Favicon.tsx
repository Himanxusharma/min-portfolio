'use client'

import { useEffect } from 'react'

export default function Favicon() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
    
    // Set canvas size for favicon
    canvas.width = 64
    canvas.height = 64
    
    // Create circular clipping path
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2)
    ctx.clip()
    
    // Create image
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/himanshu-photo.png'
    
    img.onload = () => {
      // Draw image in circle
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      // Draw border
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 1, 0, Math.PI * 2)
      ctx.stroke()
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link')
      link.type = 'image/png'
      link.rel = 'icon'
      link.href = canvas.toDataURL()
      document.getElementsByTagName('head')[0].appendChild(link)
    }
  }, [])

  return null
}
