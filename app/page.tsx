'use client'

import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const fullText = "Hi, I'm Himanshu, I craft hidden ideas and breathe life into them."

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsTyping(true)
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50) // 50ms delay between characters

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Copyright at top */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Himanshu Sharma. All rights reserved.
          </p>
        </div>
      </header>
      
      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="text-center space-y-8 animate-fade-in-up"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight"
                style={{
                  transform: `translateY(${-scrollY * 0.2}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                This is how I think.
              </h1>
              
              {/* Description */}
              <p 
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                style={{
                  transform: `translateY(${-scrollY * 0.15}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <a
                  href="/ideas"
                  className="px-8 py-3 bg-foreground text-background font-light text-sm hover:bg-primary transition-all duration-200 transform hover:scale-105"
                >
                  Explore Ideas
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border border-border text-foreground font-light text-sm hover:bg-accent transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Navigation at bottom */}
      <Navigation />
    </div>
  )
}
